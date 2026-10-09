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
    <html lang={safeLang} className={`${inter.variable} ${ubuntu.variable}`}>
      <body className="antialiased duration-2000 ease-out">
        <UnsupportedBrowser dict={dict} />
        <Header dict={dict} lang={safeLang} />
        <main>{children}</main>
        <Footer dict={dict} />
        {process.env.NODE_ENV === "production" && (
          <Script
            id="microsoft-clarity"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
              `,
            }}
          />
        )}
      </body>
    </html>
  );
}
