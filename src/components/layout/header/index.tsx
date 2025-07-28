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

interface NavProps {
  dict: {
    nav: {
      home: string;
      foundingTeam: string;
      about: string;
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
    <header
      className={`w-full bg-black py-4 flex items-center  ${
        pathname === `/${lang}` ? "justify-end" : "justify-between"
      } flex-wrap px-8 md:px-24 font-sans gap-5 md:gap-0`}
    >
      <Link
        href={`/${lang}`}
        className={`text-white font-bold text-lg ${
          pathname === `/${lang}` ? "hidden" : "block"
        }`}
      >
        <Image src={Logo} alt="ACT.AI Logo" width={100} height={24} />
      </Link>

      {/* <div className="lg:hidden">
        <Link
          href="#contact"
          scroll={true}
          className="text-white px-4 py-1 border rounded-xl text-sm lg:text-lg font-medium text-center"
        >
          Let’s Talk
        </Link>
      </div> */}

      <div
        className={`lg:hidden ${
          pathname === `/${lang}` ? "w-full justify-between" : "w-auto"
        } flex gap-2.5`}
      >
        <div className="lg:hidden">
          <Link
            href="#contact"
            scroll={true}
            className="text-white px-4 py-1 border rounded-[10px] text-sm lg:text-lg font-medium text-center"
          >
            {dict.nav.button}
          </Link>
        </div>
        <Sheet>
          <SheetTrigger className="text-white">
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <SheetDescription className="mt-10 px-4">
              <div className="flex flex-col gap-6">
                <nav className="flex flex-col gap-6 text-lg text-white">
                  <Link
                    href={`/${lang}`}
                    className={`${pathname === `/${lang}` ? "font-bold" : ""}`}
                  >
                    <SheetClose>{dict.nav.home}</SheetClose>
                  </Link>
                  <Link
                    href={`/${lang}/founders`}
                    className={`${
                      pathname === `/${lang}/founders` ? "font-bold" : ""
                    }`}
                  >
                    <SheetClose>{dict.nav.foundingTeam}</SheetClose>
                  </Link>
                  <Link
                    href={`/${lang}/mission`}
                    className={`${
                      pathname === `/${lang}/about` ? "font-bold" : ""
                    }`}
                  >
                    <SheetClose>{dict.nav.about}</SheetClose>
                  </Link>
                </nav>

                <div className="flex items-center gap-6">
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
        <nav className="flex gap-6 text-sm text-white items-center">
          <Link
            href={`/${lang}`}
            className={`${pathname === `/${lang}` ? "font-bold" : ""}`}
          >
            {dict.nav.home}
          </Link>
          <Link
            href={`/${lang}/founders`}
            className={`${pathname === `/${lang}/founders` ? "font-bold" : ""}`}
          >
            {dict.nav.foundingTeam}
          </Link>
          <Link
            href={`/${lang}/mission`}
            className={`${pathname === `/${lang}/about` ? "font-bold" : ""}`}
          >
            {dict.nav.about}
          </Link>
        </nav>

        <div className="flex items-center gap-12">
          <Link
            href="#contact"
            scroll={true}
            className="bg-white text-black px-11 py-3.5 rounded-xl text-sm font-medium hover:brightness-105 transition hover:opacity-90"
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
    </header>
  );
}
