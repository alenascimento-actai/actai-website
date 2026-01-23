import * as React from "react";
import Image from "next/image";
import RevealOnView from "@/components/reveal/RevealOnView";
import { BetweenHorizontalEnd } from "lucide-react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

type Card = {
  title: string;
  text: string;
  image: string;
};

interface CarouselWorksProps {
  dict: { cards: Card[] };
  icons?: Array<React.ComponentType<{ size?: number; color?: string }>>;
}

export function CarouselWorks({ dict, icons = [] }: CarouselWorksProps) {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    onSelect();
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const renderCard = (card: Card, i: number) => {
    const Icon = icons[i] ?? BetweenHorizontalEnd;
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
              priority
            />
          </div>
        </div>
      </RevealOnView>
    );
  };

  return (
    <>
      {/* MOBILE: carrossel */}
      <div className="lg:hidden">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            slidesToScroll: 1,
            containScroll: "trimSnaps",
          }}
          className="w-full"
        >
          <CarouselContent>
            {dict.cards.map((card, i) => (
              <CarouselItem key={card.title} className="basis-full px-3">
                {renderCard(card, i)}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Dots */}
        <div
          className="mt-4 flex items-center justify-center gap-3"
          aria-label="Paginação de slides"
        >
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              aria-label={`Ir para o slide ${i + 1}`}
              aria-current={i === current}
              onClick={() => api?.scrollTo(i)}
              className={[
                "h-2 rounded-full transition-all",
                i === current ? "w-6 bg-[#E7C2FF]" : "w-2 bg-white/50",
              ].join(" ")}
            />
          ))}
        </div>
      </div>

      {/* DESKTOP: grid 2 colunas */}
      <div className="hidden lg:grid grid-cols-2 gap-6">
        {dict.cards.map((card, i) => (
          <div key={card.title}>{renderCard(card, i)}</div>
        ))}
      </div>
    </>
  );
}
