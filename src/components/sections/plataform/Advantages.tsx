import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BetweenHorizonalEnd, Globe, Puzzle } from "lucide-react";
import RevealOnView from "@/components/reveal/RevealOnView";

export interface AdvantagesSectionProps {
  dict: {
    title: string;
    cards: { title: string; text: string; image: string }[];
    button: string;
  };
}

const icons = [BetweenHorizonalEnd, Globe, Puzzle];

export function AdvantagesSection({ dict }: AdvantagesSectionProps) {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto px-6">
        <RevealOnView revealClasses="animate-fade-right animate-duration-[2000ms] animate-delay-200">
          <h2 className="text-center text-3xl md:text-5xl font-bold text-[#3B3B3B]">
            {dict.title}
          </h2>
        </RevealOnView>

        {/* Cards */}
        <div className="px-20 flex flex-col basis-full gap-8 py-16 lg:flex-row lg:basis-1/3">
          {dict.cards.map((card, i) => {
            const Icon = icons[i] ?? BetweenHorizonalEnd;
            return (
              <RevealOnView
                revealClasses={`animate-fade-up animate-duration-[1500ms] ${
                  i === 0
                    ? "animate-delay-[400ms]"
                    : i === 1
                    ? "animate-delay-[700ms]"
                    : "animate-delay-[900ms]"
                }`}
                key={card.title}
              >
                <div className="rounded-2xl border border-[#F4F5F8] bg-[#F4F5F8] p-8 shadow-[0_10px_30px_rgba(16,24,40,0.04)] space-y-3">
                  <div>
                    <span className="border border-[#D7F3FF] rounded-[18px] bg-gradient-to-b from-[#D7F3FF] via-[#B9E9FD] to-[#A9E5FF] size-12 flex items-center justify-center mb-2.5">
                      <Icon size={18} aria-hidden="true" color="#103C68" />
                    </span>
                    <h3 className="text-4xl text-[#3B3B3B]">{card.title}</h3>
                  </div>

                  <p className="text-[15px] leading-5 text-[#828282] pb-3">
                    {card.text}
                  </p>

                  <div className="overflow-hidden rounded-xl border border-gray-100 bg-white">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={520}
                      height={280}
                      className="w-full h-auto"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                </div>
              </RevealOnView>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Button
            variant="outline"
            className="rounded-full h-12 px-20 hover:bg-[#E7C2FF] hover:border-[#E7C2FF] hover:brightness-105 duration-600 ease-out "
          >
            {dict.button}
          </Button>
        </div>
      </div>
    </section>
  );
}
