"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import RevealOnView from "@/components/reveal/RevealOnView";

export interface CtaSectionProps {
  dict: {
    title: string;
    button: string;
  };
}

export function CtaSection({ dict }: CtaSectionProps) {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto px-10 md:px-6">
        {/* CARD */}
        <div className="rounded-[21px] bg-[#F4F5F8] h-[468px] lg:h-[508px] flex flex-col md:flex-row items-center justify-end pb-14 md:pb-0">
          {/* IMAGEM: sai do card pela parte de cima/esquerda */}
          <div className="pointer-events-none select-none">
            <RevealOnView revealClasses="animate-fade-right animate-duration-[2000ms] animate-delay-[400ms]">
              <Image
                src="/images/plataform/bg-last-section.png"
                alt="Prévia do Gestor ACT.AI em tablets"
                width={760}
                height={560}
                priority={false}
                draggable={false}
                className="w-[560px] md:w-[680px] lg:w-[740px] h-auto drop-shadow-2xl transform-gpu"
                sizes="(max-width: 1024px) 60vw, 740px"
              />
            </RevealOnView>
          </div>

          <div className="lg:pr-0 lg:max-w-1/2 lg:w-full">
            <RevealOnView revealClasses="animate-fade-right animate-duration-[2000ms] animate-delay-200">
              <div className="flex justify-center items-center flex-col md:block">
                <h2 className="w-[300px] md:w-full text-center md:text-start text-2xl md:text-3xl lg:text-[48px] font-extrabold leading-tight text-[#131922]">
                  {dict.title}
                </h2>

                <div className="mt-8">
                  <Link
                    href={"#"}
                    className="flex bg-[#0C2941] text-white rounded-full font-medium text-base lg:text-xl hover:brightness-105 hover:bg-[#E7C2FF] transition justify-center items-center gap-2 h-12 w-[270px] lg:w-[257px] lg:hover:gap-9 duration-600 ease-out hover:text-black max-w-[270px] lg:max-w-[300px]"
                  >
                    {dict.button}

                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </RevealOnView>
          </div>
        </div>
      </div>
    </section>
  );
}
