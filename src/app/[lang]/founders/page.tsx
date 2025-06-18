// app/[lang]/founders/page.tsx

import FoundersSection from "@/components/sections/FoundersSection";
import { getDictionary } from "../dictionaries";

interface PageProps {
  params: {
    lang: "en" | "pt-br";
  };
}

export default async function FoundersPage({ params }: PageProps) {
  const dict = await getDictionary(params.lang);

  return <FoundersSection dict={dict.founders} />;
}
