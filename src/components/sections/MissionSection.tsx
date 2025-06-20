import Image from "next/image";
import { ContactSection } from "./ContactSection";

interface MissionProps {
  dict: {
    title: string;
    description: string;
    problemTitle: string;
    problemText: string;
    differenceTitle: string;
    differenceText: string;
  };
}

export function MissionSection({ dict }: MissionProps) {
  return (
    <section>
      <div className="bg-gradient-to-t from-[#1C012B] via-black to-[#5b0b8dad] text-white px-6 py-24 md:px-20 ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          {dict.title}
        </h2>
        <p className="text-center text-white/80 max-w-3xl mx-auto mb-16 text-sm md:text-base">
          {dict.description}
        </p>

        <div className="flex flex-col lg:flex-row justify-center gap-16 lg:gap-36 w-full">
          <div className="flex gap-4 items-start max-w-[459px]">
            <Image
              src="/svg/icon-problem.svg"
              alt="Problem"
              width={64}
              height={64}
            />
            <div>
              <h3 className="font-semibold text-lg mb-2">
                {dict.problemTitle}
              </h3>
              <p className="text-sm text-white/80">{dict.problemText}</p>
            </div>
          </div>

          <div className="flex gap-4 items-start max-w-[459px]">
            <Image
              src="/svg/icon-difference.svg"
              alt="Difference"
              width={64}
              height={64}
            />
            <div>
              <h3 className="font-semibold text-lg mb-2">
                {dict.differenceTitle}
              </h3>
              <p className="text-sm text-white/80">{dict.differenceText}</p>
            </div>
          </div>
        </div>
      </div>
      <ContactSection />
    </section>
  );
}
