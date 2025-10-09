import { Hero } from "@/components/sections/plataform/Hero";
import { getDictionary } from "../dictionaries";
import { TransformWorkSection } from "@/components/sections/plataform/TransformWork";
import { AdvantagesSection } from "@/components/sections/plataform/Advantages";
import { AgilitySection } from "@/components/sections/plataform/Agility";
import { CtaSection } from "../../../components/sections/plataform/CtaSection";
import { ConnectionSection } from "@/components/sections/plataform/Connection";

export default async function PageInputManager({
  params,
}: {
  params: Promise<{ lang: "pt-br" | "en" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <section>
      <Hero dict={dict["input-manager"].hero} />
      <TransformWorkSection dict={dict["input-manager"].transformWork} />
      <ConnectionSection dict={dict["input-manager"].connection} />
      <AdvantagesSection dict={dict["input-manager"].advantages} />
      <AgilitySection dict={dict["input-manager"].agility} />
      <CtaSection dict={dict["input-manager"].cta} />
    </section>
  );
}
