"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
interface HeroDataLebingProps {
  titlePart01: string;
  titleHighlight: string;
  titlePart02: string;
  subtitle: string;
  textButton: string;
  lang: string;
}

export function HeroDataLebing({
  subtitle,
  textButton,
  titleHighlight,
  titlePart01,
  titlePart02,
  lang,
}: HeroDataLebingProps) {
  return (
    <section className="relative">
      <div className="bg-black text-white py-36 flex flex-col items-center text-center md:text-start overflow-hidden bg-no-repeat bg-cover px-8 md:px-24 bg-data-lebeling mt-[-82px]">
        <div className="max-w-[853px] mx-auto mt-24 z-10 relative">
          <h1 className="text-2xl lg:text-5xl font-extrabold leading-tight mt-6 font-title text-center text-white max-w-[450px] mx-auto lg:max-w-full ">
            <span>{titlePart01} </span>
            <span className="bg-gradient-to-r from-[#9700FF] from-[36.06%] to-[#E7C2FF] to-[83.65%] bg-clip-text text-transparent">
              {titleHighlight}
            </span>
            <span> {titlePart02}</span>
          </h1>

          <p
            className={`text-xl text-center ${
              lang.includes("en") ? "max-w-[637px]" : "max-w-[703px]"
            } mx-auto mt-6 mb-14 font-sans`}
          >
            {subtitle}
          </p>

          <Link
            href="#contact"
            scroll={true}
            className={`flex bg-white text-black py-2.5 rounded-full font-medium text-base lg:pl-10 lg:pr-0 lg:text-xl hover:brightness-105 hover:bg-[#E7C2FF] transition justify-start items-center gap-2 h-12 ${
              lang.includes("en")
                ? "max-w-[217px] lg:max-w-[257px] px-10"
                : "md:max-w-[310px] lg:max-w-[365px] px-8"
            } w-full lg:hover:gap-9 lg:hover:pr-0 duration-600 ease-out mx-auto`}
          >
            <span>{textButton}</span>
            <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
