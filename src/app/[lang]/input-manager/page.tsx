import { Hero } from "@/components/sections/plataform/Hero";
import { getDictionary } from "../dictionaries";
import { ContactSection } from "@/components/sections/ContactSection";

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

      <ContactSection />
    </section>
  );
}
