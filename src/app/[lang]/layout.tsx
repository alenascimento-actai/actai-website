import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { getDictionary } from "./dictionaries";
import { Footer } from "@/components/layout/footer";
import { UnsupportedBrowser } from "@/components/layout/unsupportedBrowser";
import { Inter, Ubuntu } from "next/font/google";
import Script from "next/script";
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

export const metadata: Metadata = {
  title: "act.ai",
  description:
    "Accelerating AI adoption in emerging markets through high-quality data, local language models, and scalable real-world solutions",
};

export async function generateStaticParams() {
  return [{ lang: "pt-br" }, { lang: "en" }];
}

// Layout raiz: é o único que renderiza <html> e <body>, com o idioma da rota
export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (lang !== "pt-br" && lang !== "en") {
    throw new Error(`Unsupported locale: ${lang}`);
  }
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} className={`${inter.variable} ${ubuntu.variable}`}>
      <body className="antialiased duration-2000 ease-out">
        <UnsupportedBrowser dict={dict} />
        <Header dict={dict} lang={lang} />
        <main>{children}</main>
        <Footer dict={dict} lang={lang} />
        {process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID && (
          <Script
            id="clarity-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");`,
            }}
          />
        )}
      </body>
    </html>
  );
}
