import RevealOnView from "@/components/reveal/RevealOnView";
import { Sparkles } from "lucide-react";

export interface TransformWorkSectionProps {
  dict: { title: string; text01: string; text02: string };
}

export function TransformWorkSection({ dict }: TransformWorkSectionProps) {
  return (
    <section
      id="tranformWorkSection"
      className="relative py-20 pt-[160px] lg:py-50 md:pt-[410px] lg:mt-[146px] overflow-x-hidden overflow-hidden"
      aria-labelledby="transformwork-title"
    >
      {/* BG decorativo (DESKTOP) — absoluto e gigante, sem afetar mobile */}
      <RevealOnView revealClasses="animate-fade-left duration-[1500ms] delay-200">
        <div
          aria-hidden="true"
          className="
            hidden lg:block
            pointer-events-none absolute right-0 top-1/2 z-[1]
            lg:h-[72vh] xl:h-[82vh] 2xl:h-[85vh]
            lg:w-[clamp(1200px,88vw,2400px)]
            bg-[url('/images/plataform/section-transform.png')]
            bg-no-repeat bg-contain bg-right-bottom
            transform-gpu will-change-transform
            lg:translate-x-[12vw] xl:translate-x-[10vw] 2xl:translate-x-[8vw]
            lg:-translate-y-[10%]
          "
        />
      </RevealOnView>

      {/* Fade no rodapé */}
      <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white z-[6]" />

      {/* Conteúdo */}
      <div className="container mx-auto relative z-[10] px-4 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">
          <div className="max-w-xl w-full text-center lg:text-left">
            <RevealOnView revealClasses="animate-fade-right duration-[2000ms] delay-200">
              {/* Título + ícone */}
              <div>
                <span className="mx-auto lg:mx-0 border border-[#D7F3FF] rounded-3xl bg-gradient-to-b from-[#D7F3FF] via-[#B9E9FD] to-[#A9E5FF] size-16 flex items-center justify-center mb-2.5">
                  <Sparkles color="#012169" size={27} />
                </span>
                <h1
                  id="transformwork-title"
                  className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight pb-3 lg:pb-0"
                >
                  {dict.title}
                </h1>
              </div>

              {/* ILUSTRAÇÃO (MOBILE) — background entre título e textos */}
              <div className="block h-[148px] mb-20 lg:hidden">
                <RevealOnView revealClasses="animate-fade-up duration-[1200ms] delay-150">
                  {/* 
                    Objetivo: ocupar o “retângulo vermelho”.
                    - w-[92vw] com teto de 680px
                    - aspect para controlar a altura (mais cheio no XS, mais “raso” no sm)
                    - background-position levemente abaixo do centro para destacar o miolo
                  */}
                  <div>
                    <div
                      className="
                        w-full
                        aspect-[4/3] sm:aspect-[16/10]
                        bg-no-repeat
                        bg-size-[451px]
                        md:bg-size-[540px]
                        md:!bg-position[-44px,0]
                        drop-shadow-[0_12px_32px_rgba(1,33,105,0.12)]
                        rounded-[14px]
                        bg-[url('/images/plataform/section-transform.png')]
                      "
                      style={{ backgroundPositionX: "100%" }}
                    />
                  </div>
                </RevealOnView>
              </div>

              {/* Textos */}
              <p className="mt-6 text-gray-600 text-[20px]">{dict.text01}</p>
              <p className="mt-4 text-gray-600 text-[20px]">{dict.text02}</p>
            </RevealOnView>
          </div>
        </div>
      </div>
    </section>
  );
}
