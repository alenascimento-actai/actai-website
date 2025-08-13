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
    <section className="mt-[-74px]">
      <div className="bg-[url('/images/background-mission.png')] bg-no-repeat bg-center bg-cover text-white px-6 pt-52 pb-24 md:px-20 space-y-20">
        <div className="space-y-5">
          <h2 className="text-2xl lg:text-5xl font-bold text-center">
            {dict.title}
          </h2>
          <p className="text-center text-white/80 max-w-3xl mx-auto text-sm lg:text-base">
            {dict.description}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-16 lg:gap-36 w-full">
          <div className="space-y-5 w-full lg:w-2/5">
            <div className="flex gap-4 items-center">
              <Image
                src="/svg/icon-problem.svg"
                alt="Problem"
                width={64}
                height={64}
              />

              <h3 className="font-semibold text-xl lg:text-2xl">
                {dict.problemTitle}
              </h3>
            </div>
            <p className="text-sm text-white/80">{dict.problemText}</p>
          </div>

          <div className="space-y-5  w-full lg:w-2/5">
            <div className="flex gap-4 items-center">
              <Image
                src="/svg/icon-difference.svg"
                alt="Difference"
                width={64}
                height={64}
              />

              <h3 className="font-semibold text-xl lg:text-2xl">
                {dict.differenceTitle}
              </h3>
            </div>
            <p className="text-sm text-white/80">{dict.differenceText}</p>
          </div>
        </div>
      </div>
      <ContactSection />
    </section>
  );
}
