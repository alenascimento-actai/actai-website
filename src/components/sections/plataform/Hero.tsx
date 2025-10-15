import Image from "next/image";
import { Zap, TrendingUp, Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import RevealOnView from "@/components/reveal/RevealOnView";

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
    <section
      className="
        relative w-full max-w-[98.5%] mx-auto
        overflow-visible
        text-[#3B3B3B] -top-[62.2px]
        bg-[url(/images/plataform/background.png)]
        pb-28 sm:pb-36 lg:pb-44 rounded-[21px]
        px-4 lg:px-20
      "
      style={{
        background:
          "radial-gradient(147.08% 98.61% at 51.88% 103.58%, #D7F3FF 14.03%, #F5E6FF 26.6%, #F4F6FA 50%)",
      }}
    >
      <div className="relative w-full pt-[224px] text-[#3B3B3B] z-40">
        <div className="container mx-auto flex flex-col items-center text-center px-6 z-30">
          <RevealOnView revealClasses="animate-fade-right animate-duration-[2000ms] animate-delay-200">
            {/* Título */}
            <h1 className="text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
              {dict.titlePart01}
              <span>{dict.titleHighlight}</span>
              {dict.titlePart02}
            </h1>

            {/* Subtítulo */}
            <p className="mt-6 text-gray-[#3B3B3B] text-[20px] max-w-2xl">
              {dict.subtitle}
            </p>
            {/* Botões principais (no fluxo, intocados) */}
            <div className="mt-8 flex flex-col items-center sm:flex-row gap-4 z-20 sm:justify-center">
              <Link
                href="#tranformWorkSection"
                scroll
                className="flex bg-[#0C2941] text-white rounded-full font-medium text-base lg:text-xl hover:brightness-105 hover:bg-[#E7C2FF] transition justify-center items-center gap-2 h-12 w-[270px] lg:w-[257px] lg:hover:gap-9 duration-600 ease-out hover:text-black max-w-[270px] lg:max-w-[300px]"
              >
                <span>{dict.linkButton01}</span>
                <ArrowRight />
              </Link>
              <Link
                href="https://healthcare.actai.ai/"
                className="flex text-[#0C2941] border-[#0C2941] border rounded-full font-medium text-base lg:text-xl hover:brightness-105 hover:bg-[#E7C2FF] hover:border-[#E7C2FF] transition justify-center items-center gap-2 h-12 w-[270px] lg:w-[257px] lg:hover:gap-9 duration-600 ease-out"
              >
                {dict.linkButton02}
              </Link>
            </div>
          </RevealOnView>
        </div>
      </div>

      {/* Camada do monitor ABSOLUTA (âncora no fundo do hero) */}
      <div
        className="
          pointer-events-none
          absolute left-1/2 -bottom-[226px] md:-bottom-[419px] lg:bottom-[-490px] -translate-x-1/2
          w-full lg:max-w-4xl
        "
      >
        {/* Monitor */}
        <RevealOnView revealClasses="animate-fade-left animate-duration-[1500ms] animate-delay-200">
          <Image
            src="/images/plataform/monitor.png"
            alt="Monitor mostrando a plataforma"
            width={900}
            height={700}
            priority
            className="mx-auto h-auto w-full"
          />

          {/* Divs (chips) flutuantes — posicionadas relativas ao wrapper */}
          <div className="absolute top-[38%] right-1/4 translate-x-1/3 bg-[#EEEEEE42] backdrop-blur-xl rounded-full px-4 py-2 hidden md:flex items-center gap-2 text-[#0C2941] font-bold border border-[#BCE9FC]">
            <span className="w-9 h-9 rounded-full bg-[#D7F3FF] flex items-center justify-center text-2xl shadow-[0px_0px_10.3px_0px_#00000021]">
              <TrendingUp size={18} color="#114C87" />
            </span>
            <span>+Praticidade</span>
          </div>

          <div className="absolute bottom-[40%] left-1/4 -translate-x-1/3 bg-[#EEEEEE42] backdrop-blur-xl rounded-full px-4 py-2 hidden md:flex items-center gap-2 text-[#0C2941] font-bold border border-[#BCE9FC]">
            <span className="w-9 h-9 rounded-full bg-[#D7F3FF] flex items-center justify-center text-2xl shadow-[0px_0px_10.3px_0px_#00000021]">
              <Zap size={18} color="#114C87" />
            </span>
            <span>+Agilidade</span>
          </div>

          <div className="absolute bottom-[30%] right-1/4 translate-y-1/3 bg-[#EEEEEE42] backdrop-blur-xl rounded-full px-4 py-2 hidden md:flex items-center gap-2 text-[#0C2941] font-bold border border-[#BCE9FC]">
            <span className="w-9 h-9 rounded-full bg-[#D7F3FF] flex items-center justify-center text-2xl shadow-[0px_0px_10.3px_0px_#00000021]">
              <Check size={18} color="#114C87" />
            </span>
            <span>+Eficiência</span>
          </div>
        </RevealOnView>
      </div>
    </section>
  );
}
