// app/[lang]/founders/page.tsx

import { FoundersSection } from "@/components/sections/FoundersSection";
import { getDictionary } from "../dictionaries";

export default async function FoundersPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <FoundersSection dict={dict.founders} />;
}
