import { Header } from "@/components/layout/header";
import { getDictionary } from "./dictionaries";
import { Footer } from "@/components/layout/footer";

export async function generateStaticParams() {
  return [{ lang: "pt-br" }, { lang: "en" }];
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: "pt-br" | "en" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body>
        <Header dict={dict} lang={lang} />
        <main>{children}</main>
        <Footer dict={dict} />
      </body>
    </html>
  );
}
