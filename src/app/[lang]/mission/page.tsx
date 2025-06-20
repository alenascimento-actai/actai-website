import { MissionSection } from "@/components/sections/MissionSection";
import { getDictionary } from "../dictionaries";

export default async function FoundersPage({
  params,
}: {
  params: Promise<{ lang: "pt-br" | "en" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <MissionSection dict={dict.mission} />;
}
