import RevealOnView from "@/components/reveal/RevealOnView";
import { Link } from "lucide-react";

export interface ConnectionSectionProps {
  dict: {
    title: string;
    text: string;
  };
}

export function ConnectionSection({ dict }: ConnectionSectionProps) {
  return (
    <section
      id="connectionSection"
      className="relative overflow-hidden py-50 bg-[url('/images/plataform/bg-section-connection.png')]
          bg-no-repeat bg-cover bg-center"
      aria-labelledby="connection-title"
    >
      <div className="container relative z-[2] px-6 lg:px-20 ">
        <div
          className="
            mx-auto w-full max-w-5xl
            rounded-full
            border
            bg-[#eeeeee07]
            backdrop-blur-xl
            border-white
            px-6 sm:px-10 md:px-14
            py-10 md:py-14
          "
        >
          {/* Ícone */}
          <div className="mx-auto mb-5 sm:mb-6 grid place-items-center">
            <span className="size-14 sm:size-16 rounded-[24px] bg-gradient-to-b from-[#D7F3FF] via-[#B9E9FD] to-[#A9E5FF] grid place-items-center border border-[#D7F3FF]">
              <Link color="#012169" size={26} />
            </span>
          </div>

          {/* Título + texto com a MESMA animação usada nas outras seções */}
          <RevealOnView revealClasses="animate-fade-right animate-duration-[2000ms] animate-delay-200">
            <h2
              id="connection-title"
              className="text-center text-3xl md:text-5xl font-bold text-[#3B3B3B] leading-tight"
            >
              {dict.title}
            </h2>

            <p className="mt-4 md:mt-6 text-center text-[#565656] text-lg md:text-xl max-w-3xl mx-auto">
              {dict.text}
            </p>
          </RevealOnView>
        </div>
      </div>
    </section>
  );
}
