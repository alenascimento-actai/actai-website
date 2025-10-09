import RevealOnView from "@/components/reveal/RevealOnView";
import { Sparkles } from "lucide-react";

export interface TransformWorkSectionProps {
  dict: {
    title: string;
    text01: string;
    text02: string;
  };
}

export function TransformWorkSection({ dict }: TransformWorkSectionProps) {
  return (
    <section
      id="tranformWorkSection"
      className="relative py-50 lg:pt-[410px] overflow-x-hidden overflow-hidden"
      aria-labelledby="transformwork-title"
    >
      {/* BG decorativo – agora ancorado verticalmente no centro */}
      <RevealOnView revealClasses="animate-fade-left animate-duration-[1500ms] animate-delay-200">
        <div>
          <div
            aria-hidden="true"
            className="
          pointer-events-none
          absolute right-0 top-1/2
          z-[1]
          h-[62vh] md:h-[72vh] lg:h-[78vh] xl:h-[82vh] 2xl:h-[85vh]
          w-[clamp(1200px,88vw,2400px)]
          bg-[url('/images/plataform/section-transform.png')]
          bg-no-repeat bg-contain bg-right-bottom
          transform-gpu will-change-transform
          /* X: mantém o 'vazamento' à direita */
          translate-x-[22vw] sm:translate-x-[20vw] md:translate-x-[16vw] lg:translate-x-[12vw] xl:translate-x-[10vw] 2xl:translate-x-[8vw]
          /* Y: alinha com o bloco de texto em telas grandes */
          -translate-y-[18%] sm:-translate-y-[20%] md:-translate-y-[22%] lg:-translate-y-[24%] xl:-translate-y-[26%] 2xl:-translate-y-[15%]
        "
          />
        </div>
      </RevealOnView>

      {/* Fade no rodapé */}
      <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white z-[6]" />

      {/* Conteúdo */}
      <div className="container mx-auto relative z-[10] px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">
          <div className="max-w-xl ">
            <RevealOnView revealClasses="animate-fade-right animate-duration-[2000ms] animate-delay-200">
              <div>
                <span className="border border-[#D7F3FF] rounded-3xl bg-gradient-to-b from-[#D7F3FF] via-[#B9E9FD] to-[#A9E5FF] size-16 flex items-center justify-center mb-2.5">
                  <Sparkles color="#012169" size={27} />
                </span>
                <h1
                  id="transformwork-title"
                  className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight"
                >
                  {dict.title}
                </h1>
              </div>

              <p className="mt-6 text-gray-600 text-[20px]">{dict.text01}</p>
              <p className="mt-4 text-gray-600 text-[20px]">{dict.text02}</p>
            </RevealOnView>
          </div>
        </div>
      </div>
    </section>
  );
}
