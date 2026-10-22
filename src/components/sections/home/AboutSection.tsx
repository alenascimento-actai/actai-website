import Image from "next/image";
import { Eye, Gem, Target } from "lucide-react";
import RevealOnView from "@/components/reveal/RevealOnView";
import { AdvisorsCarousel } from "./AdvisorsCarousel";
import { sectionTitleClass } from "./SectionHeading";

type Person = { name: string; bio: string };
type Advisor = Person & { role: string; image: string };

const renderAdvisorCard = (advisor: Advisor) => (
  <div
    key={advisor.name}
    className="h-full rounded-2xl border border-[#BCE9FC] bg-[#E5F6FF]/60 p-4 lg:p-5"
  >
    <div className="relative aspect-[1153/857] overflow-hidden rounded-xl bg-[#0C2941]">
      <Image
        src={advisor.image}
        alt={advisor.name}
        fill
        sizes="(min-width: 1024px) 270px, (min-width: 768px) 45vw, 80vw"
        className="object-cover object-top"
      />
    </div>
    <h4 className="font-sans! mt-5 text-2xl lg:text-[28px] font-medium text-[#101828]">
      {advisor.name}
    </h4>
    <p className="mt-1 text-sm text-[#2185D0]">{advisor.role}</p>
    <p className="mt-4 text-sm leading-relaxed text-[#667085]">{advisor.bio}</p>
  </div>
);

export interface AboutSectionProps {
  dict: {
    title: string;
    paragraphs: string[];
    values: { title: string; text: string }[];
    founderLabel: string;
    advisorsLabel: string;
    advisorRoles: { vera: string; yen: string; gustavo: string };
  };
  founder: Person & { title: string };
  advisors: { vera: Person; yen: Person; gustavo: Person };
}

const valueIcons = [Target, Eye, Gem];
const cardDelays = [
  "animate-delay-[400ms]",
  "animate-delay-[700ms]",
  "animate-delay-[900ms]",
];

const IMAGES_URL = "https://website-actai.s3.sa-east-1.amazonaws.com/imagens/founders";

const groupLabelClass =
  "font-sans! mb-5 text-sm md:text-base font-bold uppercase tracking-[0.08em] text-[#0C2941]";

export function AboutSection({ dict, founder, advisors }: AboutSectionProps) {
  const advisorList = [
    {
      ...advisors.vera,
      role: dict.advisorRoles.vera,
      image: `${IMAGES_URL}/img-new-01-vera-valente.png`,
    },
    {
      ...advisors.yen,
      role: dict.advisorRoles.yen,
      image: `${IMAGES_URL}/img-new-yen-wang.png`,
    },
    {
      ...advisors.gustavo,
      role: dict.advisorRoles.gustavo,
      image: `${IMAGES_URL}/img-new-01-gustavo-jobim.png`,
    },
  ];

  return (
    <section
      id="about"
      className="bg-[#F5F3FF] bg-[url(https://website-actai.s3.sa-east-1.amazonaws.com/imagens/new-version/img-bg-about-new.webp)] bg-cover bg-top bg-no-repeat px-6 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[930px]">
        <RevealOnView revealClasses="animate-fade-right animate-duration-[2000ms] animate-delay-200">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:gap-12">
            <h2 className={sectionTitleClass}>{dict.title}</h2>
            <div className="space-y-4 text-base leading-relaxed text-[#667085]">
              {dict.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </RevealOnView>

        {/* Missão, visão e valores */}
        <div className="mt-12 lg:mt-14 grid gap-px overflow-hidden rounded-2xl md:grid-cols-3">
          {dict.values.map((value, i) => {
            const Icon = valueIcons[i] ?? Target;
            return (
              <RevealOnView
                key={value.title}
                revealClasses={`animate-fade-right animate-duration-200 ${cardDelays[i] ?? cardDelays[0]}`}
                className="h-full"
              >
                <div className="h-full bg-[#E9D3FB]/75 p-6 lg:p-7">
                  <Icon size={18} color="#344054" aria-hidden="true" />
                  <h3 className="font-sans! mt-3 text-lg font-semibold text-[#344054]">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#667085]">
                    {value.text}
                  </p>
                </div>
              </RevealOnView>
            );
          })}
        </div>

        {/* Fundador */}
        <div className="mt-14 lg:mt-16">
          <h3 className={groupLabelClass}>{dict.founderLabel}</h3>
          <RevealOnView revealClasses="animate-fade-right animate-duration-[2000ms] animate-delay-200">
            <div className="flex flex-col gap-6 rounded-2xl border border-[#BCE9FC] bg-[#E5F6FF]/60 p-5 md:flex-row md:p-6 lg:gap-8">
              <div className="relative mx-auto aspect-[248/312] w-full max-w-[248px] shrink-0 overflow-hidden rounded-xl bg-[#0C2941] md:mx-0">
                <Image
                  src={`${IMAGES_URL}/marco.png`}
                  alt={founder.name}
                  fill
                  sizes="248px"
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-sans! text-2xl lg:text-[32px] font-medium text-[#101828]">
                  {founder.name}
                </h4>
                <p className="mt-1 text-sm text-[#2185D0]">{founder.title}</p>
                <p className="mt-5 text-sm lg:text-[15px] leading-relaxed text-[#667085]">
                  {founder.bio}
                </p>
              </div>
            </div>
          </RevealOnView>
        </div>

        {/* Conselho consultivo */}
        <div className="mt-14 lg:mt-16">
          <h3 className={groupLabelClass}>{dict.advisorsLabel}</h3>

          {/* Mobile: slider, para os cards não ficarem empilhados numa rolagem longa */}
          <RevealOnView
            revealClasses="animate-fade-right animate-duration-[2000ms] animate-delay-200"
            className="md:hidden"
          >
            <AdvisorsCarousel labels={advisorList.map((advisor) => advisor.name)}>
              {advisorList.map(renderAdvisorCard)}
            </AdvisorsCarousel>
          </RevealOnView>

          {/* Tablet e desktop: grid */}
          <div className="hidden md:grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {advisorList.map((advisor, i) => (
              <RevealOnView
                key={advisor.name}
                revealClasses={`animate-fade-right animate-duration-200 ${cardDelays[i] ?? cardDelays[0]}`}
                className="h-full"
              >
                {renderAdvisorCard(advisor)}
              </RevealOnView>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
