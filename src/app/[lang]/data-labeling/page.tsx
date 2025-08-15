import { HeroDataLebing } from "@/components/sections/HeroDataLebeling";
import { getDictionary } from "../dictionaries";
import { WorksSection } from "@/components/sections/WorksSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default async function DataLebeling({
  params,
}: {
  params: Promise<{ lang: "pt-br" | "en" }>;
}) {
  const { lang } = await params;
  const {
    dataLabeling: { hero, myWorks },
  } = await getDictionary(lang);
  return (
    <>
      <HeroDataLebing
        titlePart01={hero.titlePart01}
        titlePart02={hero.titlePart02}
        titleHighlight={hero.titleHighlight}
        subtitle={hero.subtitle}
        textButton={hero.textButton}
      />
      <WorksSection dict={myWorks} />
      <ContactSection />
    </>
  );
}
