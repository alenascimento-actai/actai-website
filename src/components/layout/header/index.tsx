"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import Logo from "../../../../public/logo-actai.svg";
import FlagBr from "../../../../public/flag-br.svg";
import FlagEs from "../../../../public/flag-es.svg";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import "./styles.css";

interface NavProps {
  dict: {
    nav: {
      home: string;
      foundingTeam: string;
      about: string;
      "data-labeling": string;
      button: string;
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

  return (
    <header className="bg-transparent relative top-9 z-10">
      <div
        className={`max-w-[90%] w-full m-auto bg-[#FFFFFF0D] rounded-[133px] py-3 flex items-center  ${
          pathname === `/${lang}` ? "justify-end" : "justify-between"
        } flex-wrap px-8 md:px-7 font-sans gap-5 md:gap-0 header-styles`}
      >
        <Link
          href={`/${lang}`}
          className={`text-white font-bold text-lg ${
            pathname === `/${lang}` ? "hidden" : "block"
          }`}
        >
          <Image src={Logo} alt="ACT.AI Logo" width={100} height={24} />
        </Link>

        <div
          className={`lg:hidden ${
            pathname === `/${lang}` ? "w-full justify-between" : "w-auto"
          } flex gap-2.5`}
        >
          <div className="lg:hidden">
            <Link
              href="#contact"
              scroll={true}
              className={`text-white px-4 py-1 border rounded-[10px] text-sm lg:text-lg font-medium text-center shadow-[0px_1px_2px_0px_#0000000D] ${
                pathname === `/${lang}` ? "block" : "hidden md:block"
              }`}
            >
              {dict.nav.button}
            </Link>
          </div>
          <Sheet>
            <SheetTrigger className="text-white">
              <Menu />
            </SheetTrigger>

            <SheetContent className="w-full bg-[#FFFFFF0D] bg-blur-ios">
              <SheetDescription className="mt-20 px-4 text-center">
                <div className="flex flex-col gap-20">
                  <nav className="flex flex-col gap-10 text-lg text-white">
                    <Link
                      href={`/${lang}`}
                      className={`${
                        pathname === `/${lang}` ? "font-bold" : ""
                      }`}
                    >
                      <SheetClose
                        className={`${
                          pathname === `/${lang}` ? "underline" : ""
                        }`}
                      >
                        {dict.nav.home}
                      </SheetClose>
                    </Link>
                    <Link
                      href={`/${lang}/founders`}
                      className={`${
                        pathname === `/${lang}/founders` ? "font-bold" : ""
                      }`}
                    >
                      <SheetClose
                        className={`${
                          pathname === `/${lang}/founders` ? "underline" : ""
                        }`}
                      >
                        {dict.nav.foundingTeam}
                      </SheetClose>
                    </Link>
                    <Link
                      href={`/${lang}/data-labeling`}
                      className={`${
                        pathname === `/${lang}/data-labeling`
                          ? "font-bold underline"
                          : ""
                      }`}
                    >
                      <SheetClose
                        className={`${
                          pathname === `/${lang}/data-labeling`
                            ? "underline"
                            : ""
                        }`}
                      >
                        {dict.nav["data-labeling"]}
                      </SheetClose>
                    </Link>
                    <Link
                      href={`/${lang}/mission`}
                      className={`${
                        pathname === `/${lang}/mission` ? "font-bold" : ""
                      }`}
                    >
                      <SheetClose
                        className={`${
                          pathname === `/${lang}/mission` ? "underline" : ""
                        }`}
                      >
                        {dict.nav.about}
                      </SheetClose>
                    </Link>
                  </nav>

                  <div className="flex items-center justify-center gap-6">
                    <Link
                      href={pathname.replace(`/${currentLang}`, "/en")}
                      aria-label="Mudar para inglês"
                    >
                      <SheetClose>
                        <Image
                          src={FlagEs}
                          alt="Español"
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      </SheetClose>
                    </Link>

                    <Link
                      href={pathname.replace(`/${currentLang}`, "/pt-br")}
                      aria-label="Mudar para português"
                    >
                      <SheetClose>
                        <Image
                          src={FlagBr}
                          alt="Português"
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      </SheetClose>
                    </Link>
                  </div>
                </div>
              </SheetDescription>
            </SheetContent>
          </Sheet>
        </div>

        <div className="items-center gap-5 md:gap-12 flex-wrap hidden lg:flex">
          <nav className="flex gap-6 text-base font-medium text-white items-center">
            <Link
              href={`/${lang}`}
              className={`${
                pathname === `/${lang}` ? "font-bold" : ""
              } hover:font-bold`}
            >
              {dict.nav.home}
            </Link>
            <Link
              href={`/${lang}/founders`}
              className={`${
                pathname === `/${lang}/founders` ? "font-bold" : ""
              } hover:font-bold`}
            >
              {dict.nav.foundingTeam}
            </Link>
            <Link
              href={`/${lang}/data-labeling`}
              className={`${
                pathname === `/${lang}/data-labeling` ? "font-bold" : ""
              } hover:font-bold`}
            >
              {dict.nav["data-labeling"]}
            </Link>
            <Link
              href={`/${lang}/mission`}
              className={`${
                pathname === `/${lang}/mission` ? "font-bold" : ""
              } hover:font-bold`}
            >
              {dict.nav.about}
            </Link>
          </nav>

          <div className="flex items-center gap-12">
            <Link
              href="#contact"
              scroll={true}
              className="bg-transparent text-white px-11 py-3 rounded-[36px] border-white border text-base font-medium hover:brightness-105 transition hover:bg-white hover:text-black shadow-[0px_1px_2px_0px_#0000000D]"
            >
              {dict.nav.button}
            </Link>

            <div className="flex items-center gap-5">
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
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
