"use client";

import Image from "next/image";
import { Zap, TrendingUp, Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export interface HeroProps {
  dict: {
    titlePart01: string;
    titleHighlight: string;
    titlePart02: string;
    subtitle: string;
    linkButton01: string;
    linkButton02: string;
  };
}

export function Hero({ dict }: HeroProps) {
  return (
    <section className="absolute w-full overflow-hidden text-[#3B3B3B] -top-9 bg-[linear-gradient(90.92deg,_#D7F3FF_-10.52%,_#B9E9FD_103.83%)] bg-[url(/images/plataform/background.png)]">
      <div className="relative w-full pt-[224px] text-[#3B3B3B]">
        <div className="container mx-auto flex flex-col items-center text-center px-6">
          {/* Título */}
          <h1 className="text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
            {dict.titlePart01}
            <span className="">{dict.titleHighlight}</span>
            {dict.titlePart02}
          </h1>

          {/* Subtítulo */}
          <p className="mt-6 text-gray-600 max-w-2xl">{dict.subtitle}</p>

          {/* Botões principais */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="#meet-plataform"
              scroll
              className="flex bg-[#0C2941] text-white rounded-full font-medium text-base lg:text-xl hover:brightness-105 hover:bg-[#E7C2FF] transition justify-center items-center gap-2 h-12 w-[270px] lg:w-[257px] lg:hover:gap-9 duration-600 ease-out hover:text-black"
            >
              <span>{dict.linkButton01}</span>
              <ArrowRight />
            </Link>
            <Link
              href={"#"}
              className="flex text-[#0C2941] border-[#0C2941] border rounded-full font-medium text-base lg:text-xl hover:brightness-105 hover:bg-[#E7C2FF] hover:border-[#E7C2FF] transition justify-center items-center gap-2 h-12 w-[270px] lg:w-[257px] lg:hover:gap-9 duration-600 ease-out"
            >
              {dict.linkButton02}
            </Link>
          </div>

          {/* Wrapper relativo para monitor + divs flutuantes */}
          <div className="relative w-full max-w-4xl -mt-[166px]">
            {/* Monitor */}
            <Image
              src="/images/plataform/monitor.png"
              alt="Monitor mostrando a plataforma"
              width={900}
              height={700}
              priority
              className="mx-auto h-auto w-full"
            />

            {/* Divs flutuantes */}
            <div className="absolute top-[38%] right-1/4 transform translate-x-1/3 bg-[#EEEEEE42] backdrop-blur-xl rounded-full px-4 py-2 flex items-center gap-2 text-[#0C2941] font-bold border border-[#BCE9FC]">
              <span className="w-9 h-9 rounded-full bg-[#D7F3FF] flex items-center justify-center text-2xl shadow-[0px_0px_10.3px_0px_#00000021]">
                <TrendingUp size={18} color="#114C87" />{" "}
              </span>
              <span>+Praticidade</span>
            </div>

            <div className="absolute bottom-[40%] left-1/4 -translate-x-1/3 bg-[#EEEEEE42] backdrop-blur-xl rounded-full px-4 py-2 flex items-center gap-2 text-[#0C2941] font-bold border border-[#BCE9FC]">
              <span className="w-9 h-9 rounded-full bg-[#D7F3FF] flex items-center justify-center text-2xl shadow-[0px_0px_10.3px_0px_#00000021]">
                <Zap size={18} color="#114C87" />
              </span>
              <span>+Agilidade</span>
            </div>

            <div className="absolute bottom-[30%] right-1/4 translate-y-1/3 bg-[#EEEEEE42] backdrop-blur-xl rounded-full px-4 py-2 flex items-center gap-2 text-[#0C2941] font-bold border border-[#BCE9FC]">
              <span className="w-9 h-9 rounded-full bg-[#D7F3FF] flex items-center justify-center text-2xl shadow-[0px_0px_10.3px_0px_#00000021]">
                <Check size={18} color="#114C87" />
              </span>
              <span>+Eficiência</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
