"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
interface HeroProps {
  title: string;
  buttonLabel: string;
  demoLabel: string;
}

export function Hero({ title, buttonLabel, demoLabel }: HeroProps) {
  return (
    <section className="relative">
      <div className="bg-black text-white py-36 flex flex-col items-center md:items-start text-center md:text-start overflow-hidden bg-no-repeat bg-cover px-8 md:px-24 bg-gif mt-[-82px]">
        <div className="max-w-3xl mx-auto mt-24 z-10 relative">
          <h1 className="text-2xl lg:text-5xl font-extrabold leading-tight mb-14 mt-6 text-home text-transparent font-title text-center">
            {title}
          </h1>

          <div className="flex justify-center items-center gap-8 mx-auto flex-col lg:flex-row">
            <Link
              href="#contact"
              scroll={true}
              className="bg-white text-black px-10 py-3 rounded-full font-medium text-base hover:brightness-105 hover:bg-[#E7C2FF] transition h-12 w-full lg:w-auto lg:min-w-[260px] text-center"
            >
              {demoLabel}
            </Link>

            <Link
              href="#works"
              scroll={true}
              className="flex bg-transparent text-white border border-white px-10 py-2.5 rounded-full font-medium text-base lg:pl-10 lg:pr-0 hover:brightness-105 hover:bg-[#E7C2FF] transition lg:justify-start items-center gap-2 h-12 w-full lg:w-auto lg:min-w-[260px] justify-center lg:hover:gap-9 lg:hover:pr-0 duration-600 ease-out lg:ml-0"
            >
              <span>{buttonLabel}</span>
              <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
