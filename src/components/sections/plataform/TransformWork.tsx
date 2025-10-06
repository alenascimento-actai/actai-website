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
      className="mx-auto px-20 bg-[url('/images/plataform/section-transform.png')] bg-no-repeat bg-right py-50 lg:pt-[410px]"
      style={{ backgroundPositionY: "340px" }}
      aria-labelledby="transformwork-title"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0 lg:justify-between lg:items-center">
        {/* Texto */}
        <div className="max-w-xl">
          <div>
            <span className="border border-[#D7F3FF] rounded-3xl bg-gradient-to-b from-[#D7F3FF] via-[#B9E9FD] to-[#A9E5FF] size-16 flex items-center justify-center mb-2.5">
              <Sparkles color="#012169" size={27} />
            </span>
            <h1
              id="transformwork-title"
              className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
            >
              {dict.title}
            </h1>
          </div>

          <p className="mt-6 text-gray-600">{dict.text01}</p>
          <p className="mt-4 text-gray-600">{dict.text02}</p>
        </div>
      </div>
    </section>
  );
}
