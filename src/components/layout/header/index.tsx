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
      concepts: string;
      about: string;
      "data-labeling": string;
      button: string;
      "button-plataform": string;
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

  return (
    <header className="bg-transparent relative top-9 z-50">
      <div
        className={`max-w-[90%] w-full m-auto ${
          isHome ? "bg-white" : "bg-[rgba(255,255,255,0.05)]"
        } rounded-[133px] py-3 flex items-center justify-between flex-wrap px-8 md:px-7 font-sans gap-5 md:gap-0 header-styles ${
          isHome ? "header--gestor-insumos" : ""
        }`}
      >
        <Link href={`/${lang}`} className="font-bold text-lg">
          <Image
            src={Logo}
            alt="ACT.AI Logo"
            width={100}
            height={24}
            className={isHome ? "brightness-0" : ""}
          />
        </Link>
        {/* Mobile */}
        <div
          className={`lg:hidden ${
            pathname === `/${lang}` ? "w-full justify-between" : "w-auto"
          } flex gap-2.5`}
        >
          <div className="lg:hidden flex items-center gap-3">
            <Link
              href="#contact"
              scroll={true}
              className={`px-4 py-1 border rounded-[10px] text-xs md:text-sm lg:text-lg font-medium text-center shadow-[0px_1px_2px_0px_#0000000D] ${
                pathname === `/${lang}` ? "block" : "hidden md:block"
              } ${
                isHome ? "text-black border-black" : "text-white border-white"
              }`}
            >
              {dict.nav.button}
            </Link>

            <Link
              href="https://healthcare.actai.ai/"
              className={`px-4 py-1 rounded-[10px] border text-xs md:text-sm lg:text-lg font-medium shadow-[0px_1px_2px_0px_#0000000D] ${
                pathname === `/${lang}` ? "block" : "hidden md:block"
              } ${
                isHome
                  ? "text-black bg-[#D7F3FF] border-transparent"
                  : "text-black bg-white border-white"
              }`}
            >
              {dict.nav["button-plataform"]}
            </Link>
          </div>

          <Sheet>
            <SheetTrigger className={`${isHome ? "text-black" : "text-white"}`}>
              <Menu />
            </SheetTrigger>

            <SheetContent className={`w-full bg-[#FFFFFF0D] bg-blur-ios`}>
              <SheetDescription className="mt-20 px-4 text-center">
                <div className="flex flex-col gap-20">
                  <nav
                    className={`flex flex-col gap-10 text-lg ${
                      isHome ? "text-black" : "text-white"
                    }`}
                  >
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
                      href={`/${lang}/concepts`}
                      className={`${
                        pathname === `/${lang}/concepts` ? "font-bold" : ""
                      }`}
                    >
                      <SheetClose
                        className={`${
                          pathname === `/${lang}/concepts` ? "underline" : ""
                        }`}
                      >
                        {dict.nav.concepts}
                      </SheetClose>
                    </Link>

                    {/* <Link
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
                    </Link> */}

                    <Link
                      href={`/${lang}/gestor-insumos`}
                      className={`${
                        pathname === `/${lang}/gestor-insumos`
                          ? "font-bold underline"
                          : ""
                      }`}
                    >
                      <SheetClose
                        className={`${
                          pathname === `/${lang}/gestor-insumos`
                            ? "underline"
                            : ""
                        }`}
                      >
                        {dict.nav["button-plataform"]}
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
        {/* Desktop */}
        <div className="items-center gap-5 md:gap-12 flex-wrap hidden lg:flex">
          <nav
            className={`flex gap-6 text-base font-medium items-center ${
              isHome ? "text-black" : "text-white"
            }`}
          >
            <Link
              href={`/${lang}`}
              className={`${
                pathname === `/${lang}` ? "font-bold" : ""
              } hover:font-bold`}
            >
              {dict.nav.home}
            </Link>

            <Link
              href={`/${lang}/concepts`}
              className={`${
                pathname === `/${lang}/concepts` ? "font-bold" : ""
              } hover:font-bold`}
            >
              {dict.nav.concepts}
            </Link>

            {/* <Link
              href={`/${lang}/data-labeling`}
              className={`${
                pathname === `/${lang}/data-labeling` ? "font-bold" : ""
              } hover:font-bold`}
            >
              {dict.nav["data-labeling"]}
            </Link> */}
            <Link
              href={`/${lang}/mission`}
              className={`${
                pathname === `/${lang}/mission` ? "font-bold" : ""
              } hover:font-bold hover:underline`}
            >
              {dict.nav.about}
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              scroll={true}
              className={`px-7 py-3 rounded-[36px] border text-base font-medium shadow-[0px_1px_2px_0px_#0000000D] hover:bg-[#E7C2FF] hover:border-[#E7C2FF] hover:brightness-105 duration-600 ease-out ${
                isHome
                  ? "bg-transparent text-black border-black"
                  : "bg-transparent text-white border-white hover:bg-white hover:text-black transition"
              }`}
            >
              {dict.nav.button}
            </Link>

            <Link
              href="https://healthcare.actai.ai/"
              className={`px-7 py-3 rounded-[36px] border text-base font-medium shadow-[0px_1px_2px_0px_#0000000D] hover:bg-[#E7C2FF] hover:border-[#E7C2FF] hover:brightness-105 duration-600 ease-out ${
                isHome
                  ? "text-black bg-[#D7F3FF] border-transparent "
                  : "text-black bg-white border-white hover:brightness-105 transition hover:bg-[#e7c2ff] ease-in hover:border-transparent"
              }`}
            >
              {dict.nav["button-plataform"]}
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
