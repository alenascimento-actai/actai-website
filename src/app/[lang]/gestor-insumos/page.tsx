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
      <Hero dict={dict["gestor-insumos"].hero} />
      <TransformWorkSection dict={dict["gestor-insumos"].transformWork} />
      <ConnectionSection dict={dict["gestor-insumos"].connection} />
      <AdvantagesSection dict={dict["gestor-insumos"].advantages} />
      <AgilitySection dict={dict["gestor-insumos"].agility} />
      <CtaSection dict={dict["gestor-insumos"].cta} />
    </section>
  );
}
