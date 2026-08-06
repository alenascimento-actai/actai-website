import { FounderCard } from "../layout/cardFounders";
import { ContactSection } from "./ContactSection";
import "./styles.css";
export interface FoundersSectionProps {
  dict: {
    sectionTitle: string;
    marco: {
      name: string;
      title: string;
      bio: string;
    };
  };
}

export function FoundersSection({ dict }: FoundersSectionProps) {
  return (
    <section className="w-full text-white bg-[url('https://website-actai.s3.sa-east-1.amazonaws.com/imagens/founders/founders-background.png')] lg:bg-repeat-y bg-center bg-cover mt-[-74px]">
      <div className="flex flex-col gap-16 mx-auto pb-24 pt-40 px-6 md:px-24 w-full">
        <h1 className="text-white text-center font-bold text-2xl lg:text-5xl">
          {dict.sectionTitle}
        </h1>
        <FounderCard
          name={dict.marco.name}
          title={dict.marco.title}
          bio={dict.marco.bio}
          imageSrc="https://website-actai.s3.sa-east-1.amazonaws.com/imagens/founders/marco.png"
        />
      </div>

      <ContactSection />
    </section>
  );
}
