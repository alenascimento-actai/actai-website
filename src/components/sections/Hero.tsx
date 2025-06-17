interface HeroProps {
  title: string;
  description: string;
  buttonLabel: string;
}

export function Hero({ title, description, buttonLabel }: HeroProps) {
  return (
    <section className="relative bg-black text-white py-32 flex flex-col items-center text-center overflow-hidden bg-[url('/images/Hero.png')] bg-no-repeat bg-cover px-8 md:px-24">
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          {title}
        </h1>
        <p className="text-base md:text-lg text-white/80 mb-10">
          {description}
        </p>
        <a
          href="#"
          className="inline-block bg-white text-black px-6 py-3 rounded-xl font-medium text-sm hover:brightness-105 transition"
        >
          {buttonLabel}
        </a>
      </div>
    </section>
  );
}
