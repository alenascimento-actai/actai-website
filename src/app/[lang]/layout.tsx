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
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const safeLang = lang === "pt-br" ? "pt-br" : "en";

  const dict = await getDictionary(safeLang);

  return (
    <html lang={safeLang}>
      <body className="antialiased">
        <Header dict={dict} lang={safeLang} />
        <main className={`${inter.variable} ${ubuntu.variable}`}>
          {children}
        </main>
        <Footer dict={dict} />
      </body>
    </html>
  );
}
