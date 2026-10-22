"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/logo-actai.svg";

interface FooterProps {
  dict: {
    footer: {
      solutions: string;
      about: string;
      contact: string;
      followUs: string;
    };
  };
  lang: "pt-br" | "en";
}

export const Footer = ({ dict, lang }: FooterProps) => {
  const navLinks = [
    { href: `/${lang}#solutions`, label: dict.footer.solutions },
    { href: `/${lang}#about`, label: dict.footer.about },
    { href: `/${lang}#contact`, label: dict.footer.contact },
  ];

  return (
    <footer className="bg-black text-white py-16 lg:py-24 px-6 md:px-12">
      <div className="max-w-[944px] mx-auto flex flex-col items-center gap-10 text-center lg:flex-row lg:items-start lg:justify-between lg:gap-12 lg:text-left">
        {/* Logo */}
        <Link href={`/${lang}`} className="shrink-0">
          <Image
            src={Logo}
            alt="ACT.AI Logo"
            width={174}
            height={37}
            className="w-auto h-9"
          />
        </Link>

        {/* Links */}
        <nav className="w-full max-w-[566px] flex flex-col items-center gap-5 border-b border-white/15 pb-6 sm:flex-row sm:justify-center sm:gap-8 lg:pt-1.5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#98A2B3] hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Redes Sociais */}
        <div className="flex flex-col items-center gap-3 shrink-0">
          <h4 className="font-sans text-sm font-medium">{dict.footer.followUs}</h4>
          <Link
            href="https://www.linkedin.com/company/act-on-ai"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-block"
          >
            <Image
              src="/svg/footer/icon-linkedin.svg"
              alt="LinkedIn"
              width={18}
              height={18}
              className="hover:opacity-80 transition"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};
