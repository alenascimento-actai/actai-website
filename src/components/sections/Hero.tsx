import Image from "next/image";
import Logo from "../../../public/logo-actai.svg";
import Link from "next/link";
interface HeroProps {
  title: string;
  buttonLabel: string;
}

export function Hero({ title, buttonLabel }: HeroProps) {
  return (
    <section className="bg-black text-white py-32 flex flex-col items-center md:items-start text-center md:text-start overflow-hidden bg-[url('/images/Hero.png')] bg-no-repeat bg-cover px-8 md:px-24">
      <div className="max-w-3xl mx-auto lg:ml-0">
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
          className="inline-block bg-white text-black px-12 py-4 rounded-2xl font-medium text-sm lg:text-xl hover:brightness-105 hover:opacity-90 transition"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
