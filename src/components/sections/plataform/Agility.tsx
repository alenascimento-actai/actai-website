import RevealOnView from "@/components/reveal/RevealOnView";
import { ArrowUpDown, ClipboardList, Search } from "lucide-react";

export interface AgilitySectionProps {
  dict: {
    title: string;
    text: string;
    content: { textHighlight: string; text: string }[];
  };
}

const icons = [Search, ClipboardList, ArrowUpDown];

export function AgilitySection({ dict }: AgilitySectionProps) {
  return (
    <section className="w-full bg-[url('/images/plataform/bg-section-agility.png')] bg-no-repeat bg-cover lg:bg-contain bg-left py-16 md:py-24">
      <div className="container mx-auto px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
          <div className="max-w-[550px]">
            <RevealOnView revealClasses="animate-fade-right animate-duration-[2000ms] animate-delay-200">
              <h2 className="text-4xl md:text-5xl font-bold text-[#3B3B3B]">
                {dict.title}
              </h2>
              <p className="mt-4 text-[#828282] max-w-[361px] text-[20px]">
                {dict.text}
              </p>
            </RevealOnView>
          </div>

          <div className="flex flex-col gap-4">
            {dict.content.map((item, i) => {
              const Icon = icons[i] ?? Search;
              return (
                <RevealOnView
                  key={`${item.textHighlight}-${i}`}
                  revealClasses={`animate-fade-left animate-duration-200 ${
                    i === 0
                      ? "animate-delay-[400ms]"
                      : i === 1
                      ? "animate-delay-[700ms]"
                      : "animate-delay-[900ms]"
                  }`}
                >
                  <div className="flex items-center gap-4 rounded-2xl border border-[#EDEDED] bg-[#FFFFFF40] px-5 py-4 shadow-[0_8px_30px_rgba(33,133,208,0.08)]">
                    <span className="inline-flex h-[50px] w-[50px] items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                      <Icon size={24} aria-hidden="true" color="#103C68" />
                    </span>

                    <p className="text-[#828282] text-[15px]">
                      <span className="font-bold">{item.textHighlight}</span>
                      {item.text}
                    </p>
                  </div>
                </RevealOnView>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
