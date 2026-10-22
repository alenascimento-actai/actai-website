import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, TrendingUp, Zap } from "lucide-react";
import RevealOnView from "@/components/reveal/RevealOnView";

export interface HeroSectionProps {
  dict: {
    title: string;
    subtitle: string;
    primaryButton: string;
    secondaryButton: string;
    imageAlt: string;
    badges: string[];
  };
}

// Posições relativas à imagem do computador (mesma proporção do Figma)
const badges = [
  { Icon: TrendingUp, position: "left-[64.6%] top-[37.2%]" },
  { Icon: Zap, position: "left-[14.5%] top-[54.3%]" },
  { Icon: Check, position: "left-[62.2%] top-[61.2%]" },
];

export function HeroSection({ dict }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-white bg-[url(https://website-actai.s3.sa-east-1.amazonaws.com/imagens/new-version/img-bg-section-01.webp)] bg-cover bg-top bg-no-repeat">
      <div className="relative z-10 mx-auto max-w-[920px] px-6 pt-36 md:pt-44 lg:pt-[166px] text-center">
        <RevealOnView revealClasses="animate-fade-right animate-duration-[2000ms] animate-delay-200">
          <h1 className="mx-auto max-w-[700px] text-[40px] leading-[1.1] md:text-[56px] lg:text-[64px] font-bold text-[#0C2941]">
            {dict.title}
          </h1>

          <p className="mx-auto mt-6 max-w-[860px] text-base md:text-lg leading-relaxed text-[#667085]">
            {dict.subtitle}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="#solutions"
              className="flex h-12 w-full max-w-[270px] sm:w-auto items-center justify-center gap-2 rounded-full bg-[#0C2941] px-7 text-base font-medium text-white hover:bg-[#E7C2FF] hover:text-[#0C2941] lg:hover:gap-4 transition-all duration-600 ease-out"
            >
              {dict.primaryButton}
              <ArrowRight size={16} />
            </Link>
            <Link
              href="#contact"
              className="flex h-12 w-full max-w-[270px] sm:w-auto items-center justify-center rounded-full border border-[#0C2941] px-7 text-base font-medium text-[#0C2941] hover:bg-[#E7C2FF] hover:border-[#E7C2FF] transition-all duration-600 ease-out"
            >
              {dict.secondaryButton}
            </Link>
          </div>
        </RevealOnView>
      </div>

      {/* Computador: maior que a tela no mobile para manter o monitor legível */}
      <div className="pointer-events-none relative left-1/2 -translate-x-1/2 w-[170vw] sm:w-[130vw] lg:w-[1250px] -mt-[calc(51vw-40px)] sm:-mt-[calc(39vw-60px)] lg:-mt-[300px]">
        <RevealOnView revealClasses="animate-fade-left animate-duration-[1500ms] animate-delay-200">
          <Image
            src="https://website-actai.s3.sa-east-1.amazonaws.com/imagens/new-version/img-pc-new.webp"
            alt={dict.imageAlt}
            width={1250}
            height={1251}
            priority
            sizes="(min-width: 1024px) 1250px, (min-width: 640px) 130vw, 170vw"
            className="h-auto w-full"
          />

          {badges.map(({ Icon, position }, i) => (
            <div
              key={dict.badges[i]}
              className={`absolute ${position} hidden md:flex items-center gap-2 lg:gap-3 rounded-full border border-[#BCE9FC] bg-[#EEEEEE42] backdrop-blur-xl py-1.5 pl-1.5 pr-4 lg:py-2.5 lg:pl-2.5 lg:pr-6 font-title font-medium text-[#0C2941] text-base lg:text-2xl`}
            >
              <span className="flex size-9 lg:size-14 items-center justify-center rounded-full bg-[#D7F3FF] shadow-[0px_0px_10.3px_0px_#00000021]">
                <Icon className="size-4 lg:size-6" color="#114C87" />
              </span>
              <span>{dict.badges[i]}</span>
            </div>
          ))}
        </RevealOnView>
      </div>
    </section>
  );
}
