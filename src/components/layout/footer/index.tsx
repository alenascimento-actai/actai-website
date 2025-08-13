"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/logo-actai.svg";

interface FooterProps {
  dict: {
    footer: {
      home: string;
      foundingTeam: string;
      about: string;
      followUs: string;
      description: string;
      linkForFounding: string;
      linkForMission: string;
      "data-labenling": string;
    };
  };
}

export const Footer = ({ dict }: FooterProps) => {
  return (
    <footer className="bg-black text-white py-12 px-8 md:px-24">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5">
        {/* Logo */}
        <div className="col-span-1 flex items-start">
          <Link href={"/"}>
            <Image
              src={Logo}
              alt="ACT.AI Logo"
              width={174}
              height={37}
              className="w-auto h-9"
            />
          </Link>
        </div>

        {/* Links */}

        <div className="hidden md:flex justify-center gap-20 col-span-3">
          <Link href="/" className="font-semibold text-sm text-white">
            {dict.footer.home}
          </Link>
          <Link href="/founders" className="font-semibold text-sm text-white">
            {dict.footer.foundingTeam}
          </Link>
          <Link
            href="/data-labenling"
            className="font-semibold text-sm text-white"
          >
            {dict.footer["data-labenling"]}
          </Link>
          <Link href="/mission" className="font-semibold text-sm text-white">
            {dict.footer.about}
          </Link>
        </div>

        {/* Redes Sociais */}
        <div className="col-span-1">
          <h4 className="font-semibold mb-2">{dict.footer.followUs}</h4>
          <Link
            href="https://www.linkedin.com/company/act-on-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Image
              src="/svg/footer/icon-linkedin.svg"
              alt="LinkedIn"
              width={20}
              height={20}
              className="hover:opacity-80 transition"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};
