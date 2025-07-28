"use client";
import React from "react";
import "./styles.css";

interface CaseStudyChartProps {
  dict: {
    label: string;
    title: string;
  };
  lang: string;
}

export const CaseStudyChart = ({ dict, lang }: CaseStudyChartProps) => {
  return (
    <section className="bg-black text-white py-12 flex flex-col lg:flex-row lg:items-end bg-[url('/images/sections-graph-background.png')] bg-bottom lg:bg-right bg-no-repeat h-96 lg:h-[634px] px-8 md:px-24">
      <div className="w-full flex flex-col-reverse gap-20 md:gap-0 md:flex-row justify-between items-center">
        <div
          className={`${
            lang.includes("en")
              ? "bg-[url('/images/sections-graph-en.png')]"
              : "bg-[url('/images/sections-graph-pt-br.png')]"
          } bg-contain bg-no-repeat h-48 lg:h-[229px] max-w-[578px] w-full mobile`}
        />

        <div className="md:max-w-96 text-center lg:text-end">
          <p className="text-lg lg:text-2xl text-gray-400 uppercase mb-2 tracking-[6px]">
            {dict.label}
          </p>
          <h2 className="text-2xl lg:text-5xl font-bold">{dict.title}</h2>
        </div>
      </div>
    </section>
  );
};
