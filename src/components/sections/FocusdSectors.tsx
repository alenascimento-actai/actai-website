"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/ultils";
import Image from "next/image";

interface SectorItem {
  title: string;
  description?: string[] | null;
}

interface FocusedSectorsSectionProps {
  dict: {
    sectionTitle: string;
    sectionSubtitle: string;
    platformHelpHealthCare: string;
    platformHelpFinancialServices: string;
    platformHelpLegalServices: string;
    items: {
      title: string;
      description?: string[] | null;
    }[];
  };
}

export function FocusedSectorsSection({ dict }: FocusedSectorsSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // "Legal Services" aberto por padrão

  const sectors: SectorItem[] = dict.items.map((item) => ({
    title: item.title,
    description: item.description,
  }));

  return (
    <section className="w-full bg-black py-16 md:py-24 text-white relative bg-[url('/images/sectors.png')] bg-no-repeat bg-cover px-8 md:px-24">
      <div className="w-full flex items-start flex-col gap-10 lg:gap-0 lg:flex-row md:justify-between">
        <Image
          src="/images/sectors-user.png"
          width={507}
          height={407}
          alt="user"
        />
        <div className="w-full lg:w-[50%]">
          <h3 className="text-[22px] text-white/60 mb-2 uppercase tracking-[6px]">
            {dict.sectionTitle}
          </h3>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
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
                      <div>
                        {idx === 0 && (
                          <Image
                            src="/svg/soluctions/medical.svg"
                            alt="Health Care"
                            width={59}
                            height={60}
                          />
                        )}
                        {idx === 1 && (
                          <Image
                            src="/svg/soluctions/finance.svg"
                            alt="Financial Services"
                            width={59}
                            height={60}
                          />
                        )}
                        {idx === 2 && (
                          <Image
                            src="/svg/soluctions/legalServices.svg"
                            alt="Legal Services"
                            width={59}
                            height={60}
                          />
                        )}
                      </div>
                      <h4 className="font-semibold text-2xl">{sector.title}</h4>
                    </div>
                    {isOpen ? <ChevronUp /> : <ChevronDown />}
                  </button>

                  {isOpen && sector.description?.length && (
                    <div className="mt-4">
                      <p className="text-sm font-semibold mb-2">
                        {idx === 0 && dict.platformHelpHealthCare}
                        {idx === 1 && dict.platformHelpFinancialServices}
                        {idx === 2 && dict.platformHelpLegalServices}
                      </p>
                      <ul className="list-decimal list-inside text-sm space-y-4">
                        {sector.description.map((text, i) => (
                          <li key={i} className="text-base">
                            {text}
                          </li>
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
    </section>
  );
}
