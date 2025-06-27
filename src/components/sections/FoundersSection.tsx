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
    mauricio: {
      name: string;
      title: string;
      bio: string;
    };
  };
}

export function FoundersSection({ dict }: FoundersSectionProps) {
  return (
    <section className="w-full text-white bg-[url('/images/founders/founders-background.png')] bg-no-repeat bg-contain">
      <div className="flex flex-col gap-16 mx-auto py-24 px-6 md:px-24">
        <FounderCard
          name={dict.marco.name}
          title={dict.marco.title}
          bio={dict.marco.bio}
          imageSrc="/images/founders/marco.png"
        />
        <FounderCard
          name={dict.mauricio.name}
          title={dict.mauricio.title}
          bio={dict.mauricio.bio}
          imageSrc="/images/founders/mauricio.png"
        />
      </div>
      <ContactSection />
    </section>
  );
}
