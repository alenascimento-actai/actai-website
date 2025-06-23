"use client";
import React from "react";

interface CaseStudyChartProps {
  dict: {
    label: string;
    title: string;
  };
}

export const CaseStudyChart = ({ dict }: CaseStudyChartProps) => {
  return (
    <section className="bg-black text-white py-12 flex flex-col lg:flex-row lg:items-end bg-[url('/images/sections-graph-background.png')] bg-bottom lg:bg-right bg-no-repeat h-96 lg:h-[634px] px-8 md:px-24">
      <div className="w-full flex flex-col-reverse gap-20 md:gap-0 md:flex-row justify-between items-center px-6 md:px-0">
        <div className="bg-[url('/images/sections-graph.png')] bg-contain bg-no-repeat h-48 lg:h-[229px] max-w-[578px] w-full" />

        <div className="max-w-60 text-center lg:text-end">
          <h6 className="text-sm font-semibold text-gray-400 uppercase mb-2">
            {dict.label}
          </h6>
          <h2 className="text-3xl font-bold">{dict.title}</h2>
        </div>
      </div>
    </section>
  );
};
