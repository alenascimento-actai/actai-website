"use client";
import Image from "next/image";
import Logo from "../../../public/logo-actai.svg";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
interface HeroProps {
  title: string;
  buttonLabel: string;
}

export function Hero({ title, buttonLabel }: HeroProps) {
  return (
    <section className="bg-black text-white py-36 flex flex-col items-center md:items-start text-center md:text-start overflow-hidden bg-no-repeat bg-cover px-8 md:px-24 bg-gif mt-[-82px]">
      <div className="max-w-3xl mx-auto lg:ml-0 mt-24">
        <Image
          src={Logo}
          alt="logo da imagem"
          width={257}
          height={54}
          className="max-[1024px]:mx-auto"
        />
        <h1 className="text-2xl lg:text-5xl font-extrabold leading-tight mb-14 mt-6 text-home text-transparent font-title">
          {title}
        </h1>
        <Link
          href="#works"
          scroll={true}
          className="flex bg-white text-black px-10 py-2.5 rounded-full font-medium text-base lg:pl-10 lg:pr-0 lg:text-xl hover:brightness-105 hover:bg-[#E7C2FF] transition justify-start items-center gap-2 h-12 max-w-[300px] w-full lg:hover:gap-9 lg:hover:pr-0 duration-600 ease-out"
        >
          <span>{buttonLabel}</span>
          <ArrowRight />
        </Link>
      </div>
    </section>
  );
}
