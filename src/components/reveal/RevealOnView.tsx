"use client";

import { useEffect, useRef, ElementType } from "react";

type Props = {
  children: React.ReactNode;
  revealClasses?: string;
  delay?: number;
  once?: boolean;
  threshold?: number;
  className?: string;
  as?: ElementType;
};

function containsMedia(el: HTMLElement) {
  return Boolean(el.querySelector("img, picture, video, svg"));
}

export default function RevealOnView({
  children,
  revealClasses = "animate-fade-right animate-duration-[2000ms] animate-delay-200",
  delay = 200,
  once = true,
  threshold = 0.2,
  className = "",
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    const hasMedia = containsMedia(el);

    // 🔴 REGRA-CHAVE:
    // Só escondemos elementos que NÃO sejam mídia
    if (!hasMedia) {
      el.classList.add("opacity-0");
    }

    el.style.willChange = "opacity, transform";

    if (prefersReduced) {
      el.classList.remove("opacity-0");
      el.style.transform = "none";
      el.style.willChange = "auto";
      return;
    }

    const classes = revealClasses
      .split(/\s+/)
      .map((c) => c.trim())
      .filter(Boolean);

    let isMounted = true;
    let io: IntersectionObserver | null = null;
    let fallbackTimer: number | null = null;

    const revealNow = (node: HTMLElement) => {
      if (!isMounted) return;

      if (!hasMedia) {
        node.classList.remove("opacity-0");
      }

      node.classList.add(...classes);

      const approxMs =
        classes
          .find((c) => c.startsWith("animate-duration-["))
          ?.match(/\[(\d+)ms\]/)?.[1] ?? "1000";

      const total = Number(approxMs) + delay + 50;

      window.setTimeout(() => {
        if (!isMounted) return;
        node.style.willChange = "auto";
      }, total);
    };

    const resetNow = (node: HTMLElement) => {
      node.classList.remove(...classes);

      if (!hasMedia) {
        node.classList.add("opacity-0");
      }

      node.style.willChange = "opacity, transform";
    };

    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              revealNow(entry.target as HTMLElement);
              if (once && io) io.unobserve(entry.target);
            } else if (!once) {
              resetNow(entry.target as HTMLElement);
            }
          });
        },
        { threshold },
      );

      io.observe(el);
    } else {
      // fallback absoluto: nunca esconder mídia
      el.classList.remove("opacity-0");
      el.style.transform = "none";
      el.style.willChange = "auto";
    }

    // safety: se algo falhar, nunca esconder mídia
    fallbackTimer = window.setTimeout(() => {
      if (!isMounted) return;
      if (!hasMedia && el.classList.contains("opacity-0")) {
        el.classList.remove("opacity-0");
        el.style.transform = "none";
        el.style.willChange = "auto";
      }
    }, 1200) as unknown as number;

    return () => {
      isMounted = false;
      if (io) io.disconnect();
      if (fallbackTimer) window.clearTimeout(fallbackTimer);
    };
  }, [delay, once, threshold, revealClasses]);

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={`will-change-transform ${className}`}>
      {children}
    </Tag>
  );
}
