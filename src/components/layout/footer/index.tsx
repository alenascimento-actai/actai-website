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
    };
  };
}

export const Footer = ({ dict }: FooterProps) => {
  return (
    <footer className="bg-black text-white py-12 px-8 md:px-24">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo */}
        <div className="col-span-1 flex items-start">
          <Image
            src={Logo}
            alt="ACT.AI Logo"
            width={100}
            height={24}
            className="w-auto h-6"
          />
        </div>

        {/* Links */}
        <div className="col-span-1">
          <h4 className="font-semibold mb-2">{dict.footer.home}</h4>
          <Link href={"/"} className="text-sm text-white/70">
            {dict.footer.description}
          </Link>
        </div>
        <div className="col-span-1">
          <h4 className="font-semibold mb-2">{dict.footer.foundingTeam}</h4>
          <Link href={"/founders"} className="text-sm text-white/70">
            {dict.footer.linkForFounding}
          </Link>
        </div>
        <div className="col-span-1">
          <h4 className="font-semibold mb-2">{dict.footer.about}</h4>
          <Link href={"/"} className="text-sm text-white/70">
            {dict.footer.description}
          </Link>
        </div>

        {/* Redes Sociais */}
        <div className="col-span-1">
          <h4 className="font-semibold mb-2">{dict.footer.followUs}</h4>
          <Link
            href="https://www.linkedin.com/company/actai"
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
