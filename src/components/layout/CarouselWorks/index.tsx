import * as React from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CardWorksCarousel, CardWorksProps } from "../CardWorksCarousel";

interface CarouselProps {
  cardWorkCarousel: CardWorksProps[];
}

export function CarouselWorks({ cardWorkCarousel }: CarouselProps) {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    // total de "páginas"
    setCount(api.scrollSnapList().length);
    // slide selecionado
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    onSelect();
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="w-ful h-full">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          slidesToScroll: 1,
          breakpoints: {
            "(min-width: 1024px)": {
              containScroll: "trimSnaps",
              slidesToScroll: 2,
            },
          },
        }}
        className="w-full max-w-5xl mx-auto"
      >
        <CarouselContent>
          {cardWorkCarousel.map((item, index) => (
            <CarouselItem key={index} className="basis-full lg:basis-1/2">
              <div className="p-3">
                <CardWorksCarousel
                  title={item.title}
                  subtitle={item.subtitle}
                  text={item.text}
                  index={index}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious
          className="disabled:hidden -left-6 lg:-left-10"
          size={"lg"}
        />
        <CarouselNext
          className="disabled:hidden -right-6 lg:-right-10"
          size={"lg"}
        />
      </Carousel>

      {/* Dots */}
      <div className="mt-4 flex items-center justify-center gap-3">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            aria-label={`Ir para o slide ${i + 1}`}
            onClick={() => api?.scrollTo(i)}
            className={[
              "h-2 rounded-full transition-all",
              i === current ? "w-6 bg-[#E7C2FF]" : "w-2 bg-white/50",
            ].join(" ")}
          />
        ))}
      </div>
    </div>
  );
}
