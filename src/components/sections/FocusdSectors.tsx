"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/ultils";
import Image from "next/image";

interface SectorItem {
  title: string;
  icon: React.ReactNode;
  description?: string[] | null;
}

interface FocusedSectorsSectionProps {
  dict: {
    sectionTitle: string;
    sectionSubtitle: string;
    button: string;
    platformHelp: string;
    items: {
      title: string;
      icon: string;
      description?: string[] | null;
    }[];
  };
}

export function FocusedSectorsSection({ dict }: FocusedSectorsSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(2); // "Legal Services" aberto por padrão

  const sectors: SectorItem[] = dict.items.map((item, index) => ({
    title: item.title,
    description: item.description,
    icon: (
      <span
        className={cn(
          "text-xl",
          index === 0 && "text-cyan-400",
          index === 1 && "text-orange-400",
          index === 2 && "text-purple-400"
        )}
      >
        [+]
      </span>
    ),
  }));

  return (
    <section className="w-full bg-black py-16 md:py-24 text-white relative bg-[url('/images/sectors.png')] bg-no-repeat bg-cover px-8 md:px-24">
      <div className="w-full flex items-start flex-col gap-10 lg:gap-0 lg:flex-row md:justify-between md:px-[74px]">
        <Image
          src="/images/sectors-user.png"
          width={507}
          height={407}
          alt="user"
        />
        <div className="w-full lg:w-[50%]">
          <p className="text-xs tracking-widest text-white/60 mb-2 uppercase">
            {dict.sectionTitle}
          </p>

          <h2 className="text-3xl font-bold mb-6 leading-tight">
            {dict.sectionSubtitle}
          </h2>

          <div className="space-y-4">
            {sectors.map((sector, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={cn(
                    "border border-white/20 rounded-xl p-4 transition-all backdrop-blur-sm bg-white/15",
                    isOpen &&
                      "bg-gradient-to-r from-purple-900/20 to-black backdrop-blur-sm bg-white/15"
                  )}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="flex justify-between items-center w-full"
                  >
                    <div className="flex items-center gap-2 text-left">
                      <div>{sector.icon}</div>
                      <span className="font-semibold text-base">
                        {sector.title}
                      </span>
                    </div>
                    {isOpen ? <ChevronUp /> : <ChevronDown />}
                  </button>

                  {isOpen && sector.description?.length && (
                    <div className="mt-4">
                      <p className="text-sm font-semibold mb-2">
                        {dict.platformHelp}
                      </p>
                      <ul className="list-decimal list-inside text-sm space-y-1">
                        {sector.description.map((text, i) => (
                          <li key={i}>{text}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-8 text-center lg:mt-20 w-full">
        <button className="border border-white rounded-xl px-6 py-2 hover:bg-white hover:text-black transition">
          {dict.button}
        </button>
      </div>
    </section>
  );
}
