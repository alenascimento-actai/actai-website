"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import Logo from "../../../../public/logo-actai.svg";
import FlagBr from "../../../../public/flag-br.svg";
import FlagEs from "../../../../public/flag-es.svg";

interface NavProps {
  dict: {
    nav: {
      home: string;
      foundingTeam: string;
      about: string;
    };
  };
  lang: "pt-br" | "en";
}

export function Header({ dict, lang }: NavProps) {
  const pathname = usePathname();

  const currentLang = pathname.startsWith("/en")
    ? "en"
    : pathname.startsWith("/pt-br")
    ? "pt-br"
    : lang;

  const otherLang = currentLang === "pt-br" ? "en" : "pt-br";

  return (
    <header className="w-full bg-black py-4 flex items-center justify-between px-8 md:px-24">
      {/* Logo */}
      <Link href={`/${lang}`} className="text-white font-bold text-lg">
        <Image src={Logo} alt="ACT.AI Logo" width={100} height={24} />
      </Link>

      {/* Navegação */}
      <nav className="flex gap-6 text-sm text-white items-center">
        <Link href={`/${lang}`} className="hover:text-gray-300">
          {dict.nav.home}
        </Link>
        <Link href={`/${lang}/founding-team`} className="hover:text-gray-300">
          {dict.nav.foundingTeam}
        </Link>
        <Link href={`/${lang}/about`} className="hover:text-gray-300">
          {dict.nav.about}
        </Link>
      </nav>

      {/* Botão + Idiomas */}
      <div className="flex items-center gap-4">
        <Link
          href={`/${lang}#contact`}
          className="bg-white text-black px-4 py-2 rounded-xl text-sm font-medium hover:brightness-105 transition"
        >
          Let’s Talk
        </Link>

        {/* Bandeiras */}
        {otherLang === "en" ? (
          <Link
            href={pathname.replace(`/${currentLang}`, "/en")}
            aria-label="Mudar para inglês"
          >
            <Image
              src={FlagEs}
              alt="Español"
              width={20}
              height={20}
              className="rounded-full"
            />
          </Link>
        ) : (
          <Link
            href={pathname.replace(`/${currentLang}`, "/pt-br")}
            aria-label="Mudar para português"
          >
            <Image
              src={FlagBr}
              alt="Português"
              width={20}
              height={20}
              className="rounded-full"
            />
          </Link>
        )}
      </div>
    </header>
  );
}
