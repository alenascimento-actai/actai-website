"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import Logo from "../../../../public/logo-actai.svg";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import "./styles.css";

const PLATFORM_URL = "https://healthcare.actai.ai/";

interface NavProps {
  dict: {
    nav: {
      solutions: string;
      about: string;
      contact: string;
      "button-plataform": string;
      language: string;
      languages: { "pt-br": string; en: string };
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

  const normalizedPath = pathname.replace(/\/$/, "");

  const isHome = normalizedPath === "" || normalizedPath === `/${currentLang}`;

  // Todos os itens do menu levam às seções da página inicial
  const navLinks = [
    { href: `/${lang}#solutions`, label: dict.nav.solutions },
    { href: `/${lang}#about`, label: dict.nav.about },
    { href: `/${lang}#contact`, label: dict.nav.contact },
  ];

  return (
    <header
      className={`z-50 ${
        isHome ? "absolute inset-x-0 top-4 lg:top-6" : "relative top-9"
      }`}
    >
      <div
        className={`w-[calc(100%-1rem)] min-[360px]:w-[calc(100%-2rem)] max-w-[880px] mx-auto rounded-full py-2.5 px-3 min-[360px]:px-4 sm:pl-5 lg:pl-7 lg:pr-3 flex items-center justify-between gap-3 font-sans header-styles ${
          isHome
            ? "bg-white/75 border border-white shadow-[0_4px_24px_rgba(12,41,65,0.06)] header--gestor-insumos"
            : "bg-[rgba(255,255,255,0.05)]"
        }`}
      >
        <Link href={`/${lang}`} className="shrink-0">
          <Image
            src={Logo}
            alt="ACT.AI Logo"
            width={88}
            height={20}
            className={`h-4 min-[360px]:h-[18px] sm:h-5 w-auto ${isHome ? "brightness-0" : ""}`}
          />
        </Link>

        {/* Desktop */}
        <nav
          className={`hidden lg:flex items-center gap-8 text-sm font-medium ${
            isHome ? "text-[#475467]" : "text-white"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isHome ? "hover:text-[#0C2941]" : ""}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            href={PLATFORM_URL}
            className={`px-5 h-9 flex items-center rounded-full text-sm font-medium hover:bg-[#E7C2FF] hover:text-[#0C2941] duration-600 ease-out ${
              isHome ? "bg-[#0C2941] text-white" : "bg-white text-black"
            }`}
          >
            {dict.nav["button-plataform"]}
          </Link>

          <LanguageSwitcher
            pathname={pathname}
            currentLang={currentLang}
            label={dict.nav.language}
            languages={dict.nav.languages}
            isDark={!isHome}
          />
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex items-center gap-2 min-[360px]:gap-2.5 sm:gap-3">
          <Link
            href={PLATFORM_URL}
            className={`px-3 sm:px-4 h-8 flex items-center rounded-full text-xs md:text-sm font-medium whitespace-nowrap ${
              isHome ? "bg-[#0C2941] text-white" : "bg-white text-black"
            }`}
          >
            {dict.nav["button-plataform"]}
          </Link>

          <Sheet>
            <SheetTrigger
              aria-label="Menu"
              className={`${isHome ? "text-[#0C2941]" : "text-white"}`}
            >
              <Menu />
            </SheetTrigger>

            <SheetContent className={`w-full bg-[#FFFFFF0D] bg-blur-ios`}>
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <SheetDescription asChild>
                <div className="mt-20 px-4 text-center">
                  <nav
                    className={`flex flex-col gap-10 text-lg ${
                      isHome ? "text-black" : "text-white"
                    }`}
                  >
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link href={link.href}>{link.label}</Link>
                      </SheetClose>
                    ))}
                  </nav>
                </div>
              </SheetDescription>
            </SheetContent>
          </Sheet>

          <LanguageSwitcher
            pathname={pathname}
            currentLang={currentLang}
            label={dict.nav.language}
            languages={dict.nav.languages}
            isDark={!isHome}
          />
        </div>
      </div>
    </header>
  );
}
