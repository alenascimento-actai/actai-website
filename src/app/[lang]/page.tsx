import { getDictionary } from "./dictionaries";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { SolutionSection } from "@/components/sections/home/SolutionSection";
import { HowItWorksSection } from "@/components/sections/home/HowItWorksSection";
import { AboutSection } from "@/components/sections/home/AboutSection";
import { ContactFormSection } from "@/components/sections/home/ContactFormSection";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <HeroSection dict={dict.home.hero} />
      <SolutionSection dict={dict.home.solution} />
      <HowItWorksSection dict={dict.home.howItWorks} />
      <AboutSection
        dict={dict.home.about}
        founder={dict.founders.marco}
        advisors={dict.advisoryBoard}
      />
      <ContactFormSection dict={dict.home.contact} />
    </>
  );
}
