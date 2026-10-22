import Image from "next/image";
import { AlignLeft, Search, Sparkles } from "lucide-react";
import RevealOnView from "@/components/reveal/RevealOnView";
import { SectionLabel, sectionTitleClass } from "./SectionHeading";

export interface SolutionSectionProps {
  dict: {
    label: string;
    title: string;
    text: string;
    imageAlt: string;
    cards: { title: string; text: string }[];
  };
}

const icons = [Search, AlignLeft, Sparkles];
const cardDelays = [
  "animate-delay-[400ms]",
  "animate-delay-[700ms]",
  "animate-delay-[900ms]",
];

export function SolutionSection({ dict }: SolutionSectionProps) {
  return (
    <section id="solutions" className="bg-white px-6 pt-8 pb-20 lg:pt-4 lg:pb-28">
      <div className="mx-auto grid max-w-[1120px] items-center gap-12 lg:grid-cols-[minmax(0,630px)_minmax(0,404px)] lg:justify-between">
        <div>
          <RevealOnView revealClasses="animate-fade-right animate-duration-[2000ms] animate-delay-200">
            <SectionLabel>{dict.label}</SectionLabel>
            <h2 className={sectionTitleClass}>{dict.title}</h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-[#667085]">
              {dict.text}
            </p>
          </RevealOnView>

          <div className="mt-8 flex flex-col gap-4">
            {dict.cards.map((card, i) => {
              const Icon = icons[i] ?? Search;
              return (
                <RevealOnView
                  key={card.title}
                  revealClasses={`animate-fade-right animate-duration-200 ${cardDelays[i] ?? cardDelays[0]}`}
                >
                  <div className="flex gap-4 rounded-2xl border border-[#E4E7EC] bg-white p-5 lg:px-6">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#EAF6FD]">
                      <Icon size={18} color="#2185D0" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-sans! text-base font-semibold text-[#101828]">
                        {card.title}
                      </h3>
                      <p className="mt-1 text-sm lg:text-[15px] leading-relaxed text-[#667085]">
                        {card.text}
                      </p>
                    </div>
                  </div>
                </RevealOnView>
              );
            })}
          </div>
        </div>

        <RevealOnView
          revealClasses="animate-fade-left animate-duration-[1500ms] animate-delay-200"
          className="mx-auto w-full max-w-[404px]"
        >
          <Image
            src="https://website-actai.s3.sa-east-1.amazonaws.com/imagens/new-version/img-portal-section-02.webp"
            alt={dict.imageAlt}
            width={492}
            height={741}
            sizes="(min-width: 1024px) 404px, 90vw"
            className="h-auto w-full"
          />
        </RevealOnView>
      </div>
    </section>
  );
}
