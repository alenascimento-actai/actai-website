import { MissionSection } from "@/components/sections/MissionSection";
import { getDictionary } from "../dictionaries";
import { FoundersSection } from "@/components/sections/FoundersSection";
import { AdvisoryBoardSection } from "@/components/sections/AdvisoryBoardSection";

export default async function FoundersPage({
  params,
}: {
  params: Promise<{ lang: "pt-br" | "en" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div>
      <MissionSection dict={dict.mission} />
      <FoundersSection dict={dict.founders}>
        <AdvisoryBoardSection dict={dict.advisoryBoard} />
      </FoundersSection>
    </div>
  );
}
