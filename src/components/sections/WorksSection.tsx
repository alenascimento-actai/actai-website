"use client";
import "./styles.css";
import { CarouselWorks } from "../layout/CarouselWorks";

interface CaseStudyChartProps {
  dict: {
    title: string;
    subtitle: string;
    textSliders: {
      title: string;
      subtitle: string;
      text: string;
    }[];
  };
}

export const WorksSection = ({ dict }: CaseStudyChartProps) => {
  return (
    <section className="bg-black text-white py-12 flex flex-col gap-10 lg:flex-row lg:items-center bg-[url('/images/sections-slide-background.png')] bg-bottom lg:bg-left bg-no-repeat h-full lg:h-[634px] px-8 md:pl-24 md:pr-10 lg:w-full lg:gap-10">
      <div className="flex flex-col-reverse gap-20 md:gap-0 md:flex-row justify-center lg:justify-between items-center lg:w-[40%]">
        <div className="md:max-w-96 lg:max-w-[479px] text-center lg:text-start">
          <p className="text-lg lg:text-2xl text-gray-400 uppercase mb-2 tracking-[6px]">
            {dict.subtitle}
          </p>
          <h2 className="text-2xl lg:text-5xl font-bold">{dict.title}</h2>
        </div>
      </div>
      <div className="w-full lg:w-[45%]">
        <CarouselWorks cardWorkCarousel={dict.textSliders} />
      </div>
    </section>
  );
};
