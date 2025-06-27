import { Header } from "@/components/layout/header";
import { getDictionary } from "./dictionaries";
import { Footer } from "@/components/layout/footer";
import { Inter, Ubuntu } from "next/font/google";
import ".././globals.css";

// Fontes do projeto
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  variable: "--font-ubuntu",
  weight: ["400", "500", "700"],
});

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
      <body className="antialiased">
        <Header dict={dict} lang={lang} />
        <main className={`${inter.variable} ${ubuntu.variable}`}>
          {children}
        </main>
        <Footer dict={dict} />
      </body>
    </html>
  );
}
