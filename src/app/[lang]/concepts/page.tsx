import { Hero } from "@/components/sections/Hero";

import { Solutions } from "@/components/sections/Solutions";
import { FocusedSectorsSection } from "@/components/sections/FocusdSectors";
import { CaseStudyChart } from "@/components/sections/CaseStudySection";
import { ContactSection } from "@/components/sections/ContactSection";
import { getDictionary } from "../dictionaries";

export default async function concepts({
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
        buttonLabel={dict.hero.button}
        demoLabel={dict.hero.demo}
      />
      <Solutions
        subtitle={dict.solutions.subtitle}
        title={dict.solutions.title}
        items={dict.solutions.items}
      />
      <FocusedSectorsSection dict={dict.focusedSectors} />

      <CaseStudyChart dict={dict.caseStudy} lang={lang} />

      <ContactSection />
    </main>
  );
}
