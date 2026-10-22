"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import RevealOnView from "@/components/reveal/RevealOnView";
import { SectionLabel, sectionTitleClass } from "./SectionHeading";

export interface HowItWorksSectionProps {
  dict: {
    label: string;
    title: string;
    contactLink: string;
    comingSoon: string;
    steps: { title: string; text: string; items: string[]; button: string }[];
  };
}

const PLATFORM_URL = "https://healthcare.actai.ai/";
const UPLOAD_URL = "https://healthcare.actai.ai/upload";
const DESKTOP_QUERY = "(min-width: 1024px)";
// Quanto rolar (em fração da altura da tela) para avançar cada etapa no desktop
const STEP_SCROLL_RATIO = 0.55;
// Rolagem extra na última etapa antes de liberar a seção
const LAST_STEP_HOLD = 0.6;

const VIDEOS_URL = "https://website-actai.s3.sa-east-1.amazonaws.com/video";

// A terceira forma de uso ainda não está disponível
const stepConfig: { href: string | null; video?: string; comingSoon?: boolean }[] = [
  {
    href: PLATFORM_URL,
    video: `${VIDEOS_URL}/Walkthrough+ACT.AI+-+Gestor+de+Insumos+720p.mp4`,
  },
  {
    href: UPLOAD_URL,
    video: `${VIDEOS_URL}/Tutorial_Upload_de_Base_Final+720p.mp4`,
  },
  { href: null, comingSoon: true },
];

export function HowItWorksSection({ dict }: HowItWorksSectionProps) {
  const { steps } = dict;
  const [active, setActive] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [inView, setInView] = useState(false);
  const [pin, setPin] = useState({ top: 0, stepDistance: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const media = window.matchMedia(DESKTOP_QUERY);
    const update = () => setIsDesktop(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.15 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Só o vídeo da etapa ativa toca, e só com a seção na tela.
  // No desktop ele inicia sozinho (sem som); no mobile o play fica com o usuário.
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === active && inView) {
        if (isDesktop) video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [active, inView, isDesktop]);

  // Centraliza o bloco fixado na tela (ou alinha pelo rodapé se não couber)
  useEffect(() => {
    const element = pinRef.current;
    if (!isDesktop || !element) return;

    const measure = () => {
      const viewport = window.innerHeight;
      const height = element.offsetHeight;
      setPin({
        top: height <= viewport ? (viewport - height) / 2 : viewport - height,
        stepDistance: viewport * STEP_SCROLL_RATIO,
      });
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [isDesktop]);

  // No desktop, a etapa ativa acompanha a rolagem enquanto a seção está fixada
  useEffect(() => {
    if (!isDesktop || !pin.stepDistance) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const track = trackRef.current;
      if (!track) return;
      const scrolled = pin.top - track.getBoundingClientRect().top;
      const step = Math.floor(scrolled / pin.stepDistance);
      setActive(Math.min(steps.length - 1, Math.max(0, step)));
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [isDesktop, pin, steps.length]);

  const goToStep = (index: number) => {
    const track = trackRef.current;
    if (!isDesktop || !track) {
      setActive(index);
      return;
    }
    const trackTop = track.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: trackTop - pin.top + index * pin.stepDistance + 1,
      behavior: "smooth",
    });
  };

  const isComingSoon = Boolean(stepConfig[active]?.comingSoon);

  return (
    <section ref={sectionRef} className="bg-white px-6">
      <div ref={trackRef} className="mx-auto max-w-[1120px]">
        <div
          ref={pinRef}
          className="py-20 lg:sticky lg:py-12"
          style={isDesktop ? { top: pin.top } : undefined}
        >
          <RevealOnView revealClasses="animate-fade-right animate-duration-[2000ms] animate-delay-200">
            <SectionLabel>{dict.label}</SectionLabel>
            <h2 className={`${sectionTitleClass} max-w-[760px]`}>{dict.title}</h2>
          </RevealOnView>

          <div className="mt-10 lg:mt-12 grid gap-10 lg:grid-cols-[minmax(0,470px)_minmax(0,600px)] lg:justify-between lg:items-center">
            <ol>
              {steps.map((step, i) => {
                const isActive = i === active;
                const isDone = i < active;
                const { href, video, comingSoon } = stepConfig[i] ?? { href: null };

                return (
                  <li key={step.title} className="relative pl-10 pb-6 last:pb-0">
                    {i < steps.length - 1 && (
                      <span
                        aria-hidden="true"
                        className={`absolute left-[11.5px] top-8 bottom-1.5 w-px transition-colors duration-500 ${
                          isDone ? "bg-[#0C2941]" : "bg-[#D0D5DD]"
                        }`}
                      />
                    )}

                    <span
                      aria-hidden="true"
                      className={`absolute left-0 top-1 flex size-6 items-center justify-center rounded-full text-[10px] font-semibold transition-colors duration-500 ${
                        isActive || isDone
                          ? "bg-[#0C2941] text-white"
                          : "border border-[#D0D5DD] bg-white text-[#98A2B3]"
                      }`}
                    >
                      {isDone ? (
                        <Check size={12} strokeWidth={3} />
                      ) : (
                        String(i + 1).padStart(2, "0")
                      )}
                    </span>

                    <button
                      type="button"
                      onClick={() => goToStep(i)}
                      aria-expanded={isActive}
                      className="flex flex-wrap items-center gap-x-3 gap-y-1 text-left cursor-pointer"
                    >
                      <span
                        className={`text-xl lg:text-2xl transition-colors duration-500 ${
                          isActive
                            ? "font-semibold text-[#0C2941]"
                            : "text-[#667085] hover:text-[#0C2941]"
                        }`}
                      >
                        {step.title}
                      </span>
                      {comingSoon && isActive && (
                        <span className="rounded-full bg-[#D7F3FF] px-2.5 py-0.5 text-xs font-medium text-[#0C2941]">
                          {dict.comingSoon}
                        </span>
                      )}
                    </button>

                    <div
                      inert={!isActive}
                      className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                        isActive
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="mt-2 text-base leading-relaxed text-[#667085]">
                          {step.text}
                        </p>

                        <ul className="mt-5 space-y-2.5">
                          {step.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 text-sm text-[#344054]"
                            >
                              <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-[#D7F3FF]">
                                <Check size={10} strokeWidth={3} color="#2185D0" />
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>

                        {/* Mobile e tablet: o vídeo fica dentro da etapa */}
                        {!isDesktop && video && (
                          <video
                            ref={(element) => {
                              videoRefs.current[i] = element;
                            }}
                            src={video}
                            controls
                            playsInline
                            preload="metadata"
                            aria-label={step.title}
                            className="mt-6 aspect-video w-full rounded-xl bg-[#EEF6FF] object-cover"
                          />
                        )}

                        <div className="mt-7 flex flex-col items-start gap-4 pb-1">
                          {href ? (
                            <Link
                              href={href}
                              className="flex h-12 items-center gap-2 rounded-full bg-[#0C2941] px-6 text-sm font-medium text-white hover:bg-[#E7C2FF] hover:text-[#0C2941] lg:hover:gap-4 transition-all duration-600 ease-out"
                            >
                              {step.button}
                              <ArrowRight size={16} />
                            </Link>
                          ) : (
                            <span
                              aria-disabled="true"
                              className="flex h-12 cursor-not-allowed items-center gap-2 rounded-full bg-[#98A2B3] px-6 text-sm font-medium text-white"
                            >
                              {step.button}
                              <ArrowRight size={16} />
                            </span>
                          )}

                          {href && (
                            <Link
                              href="#contact"
                              className="text-sm text-[#2185D0] underline underline-offset-2 hover:text-[#0C2941]"
                            >
                              {dict.contactLink}
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>

            {/* Área visual (desktop): vídeo da etapa ativa ou "Em breve" */}
            {isDesktop && (
              <div className="relative aspect-video overflow-hidden rounded-[20px] bg-[linear-gradient(120deg,#EAF6FF_0%,#F7FBFF_45%,#F1EEFF_100%)] shadow-[0_24px_60px_rgba(16,24,40,0.08)]">
                {stepConfig.map(
                  ({ video }, i) =>
                    video && (
                      <video
                        key={video}
                        ref={(element) => {
                          videoRefs.current[i] = element;
                        }}
                        src={video}
                        muted
                        loop
                        playsInline
                        preload="none"
                        controls={i === active}
                        aria-label={steps[i]?.title}
                        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                          i === active ? "opacity-100" : "pointer-events-none opacity-0"
                        }`}
                      />
                    ),
                )}
                <div
                  className={`absolute inset-0 flex items-center justify-center bg-[#D7F0FF] transition-opacity duration-700 ${
                    isComingSoon ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                >
                  <span className="font-title text-5xl font-bold italic text-[#0C2941]">
                    {dict.comingSoon}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Espaço de rolagem que mantém a seção fixada enquanto as etapas avançam */}
        {isDesktop && (
          <div
            aria-hidden="true"
            style={{
              height: (steps.length - 1 + LAST_STEP_HOLD) * pin.stepDistance,
            }}
          />
        )}
      </div>
    </section>
  );
}
