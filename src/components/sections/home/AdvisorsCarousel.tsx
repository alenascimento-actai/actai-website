"use client";

import { Children, useEffect, useState } from "react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface AdvisorsCarouselProps {
  children: React.ReactNode;
  // Um rótulo por card, usado nos botões de navegação (leitores de tela)
  labels: string[];
}

export function AdvisorsCarousel({ children, labels }: AdvisorsCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const slides = Children.toArray(children);
  const [count, setCount] = useState(slides.length);

  useEffect(() => {
    if (!api) return;
    const update = () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    };
    update();
    api.on("select", update);
    api.on("reInit", update);
    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{ align: "start", containScroll: "trimSnaps" }}
    >
      {/* O próximo card aparece na borda para indicar que dá para deslizar */}
      <CarouselContent>
        {slides.map((slide, i) => (
          <CarouselItem key={labels[i] ?? i} className="basis-[88%]">
            {slide}
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="mt-5 flex items-center justify-center gap-2">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={labels[i] ?? i}
            type="button"
            aria-label={labels[i]}
            aria-current={i === current}
            onClick={() => api?.scrollTo(i)}
            className={`h-2 cursor-pointer rounded-full transition-all ${
              i === current ? "w-6 bg-[#0C2941]" : "w-2 bg-[#0C2941]/20"
            }`}
          />
        ))}
      </div>
    </Carousel>
  );
}
