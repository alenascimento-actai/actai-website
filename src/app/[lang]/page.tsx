import { Hero } from "@/components/sections/Hero";
import { getDictionary } from "./dictionaries";
import { Solutions } from "@/components/sections/Solutions";
import { FocusedSectorsSection } from "@/components/sections/FocusdSectors";
import { CaseStudyChart } from "@/components/sections/CaseStudySection";
import { ContactSection } from "@/components/sections/ContactSection";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: "pt-br" | "en" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main>
      <Hero
        title={dict.hero.title}
        description={dict.hero.description}
        buttonLabel={dict.hero.button}
      />
      <Solutions
        subtitle={dict.solutions.subtitle}
        title={dict.solutions.title}
        items={dict.solutions.items}
      />
      <FocusedSectorsSection dict={dict.focusedSectors} />

      <CaseStudyChart dict={dict.caseStudy} />

      <ContactSection />
    </main>
  );
}
