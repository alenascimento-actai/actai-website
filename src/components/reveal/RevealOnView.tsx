"use client";

import { useEffect, useRef, ElementType } from "react";

type Props = {
  children: React.ReactNode;
  revealClasses?: string;
  delay?: number;
  /** Se true, anima cada vez que entrar na viewport (equivale a reset do SR=false). */
  once?: boolean;
  /** 0..1: porcentagem visível para disparar (SR usa viewFactor ~ 0.2). */
  threshold?: number;
  className?: string;
  /** Trocar a tag do wrapper sem perder estilos/ref */
  as?: ElementType;
};

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
    const el = ref.current as HTMLElement | null;
    if (!el) return;

    // Acessibilidade: respeitar preferência do usuário
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    // Estado inicial seguro
    el.style.willChange = "opacity, transform";
    el.classList.add("opacity-0");

    // Não anima se usuário preferir reduzir movimento
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let sr: any | null = null;
    let io: IntersectionObserver | null = null;
    let fallbackTimer: number | null = null;

    const revealNow = (node: HTMLElement) => {
      if (!isMounted) return;
      node.classList.remove("opacity-0");
      node.classList.add(...classes);
      // remove will-change depois que a animação passou do delay + duração aproximada
      const approxMsFromClasses =
        classes
          .find((c) => c.startsWith("animate-duration-["))
          ?.match(/\[(\d+)ms\]/)?.[1] ?? "1000";
      const total = Number(approxMsFromClasses) + delay + 50;
      window.setTimeout(() => {
        if (!isMounted) return;
        node.style.willChange = "auto";
      }, total);
    };

    const resetNow = (node: HTMLElement) => {
      node.classList.remove(...classes);
      node.classList.add("opacity-0");
      node.style.willChange = "opacity, transform";
    };

    (async () => {
      try {
        // Import dinâmico do ScrollReveal (se instalado)
        const { default: ScrollReveal } = await import("scrollreveal");
        sr = ScrollReveal();
        sr.reveal(el, {
          duration: 0,
          distance: "0px",
          scale: 1,
          opacity: 1,
          delay,
          cleanup: true,
          mobile: true,
          reset: !once, // se once=true, não reseta (anima só 1x)
          viewFactor: Math.min(Math.max(threshold, 0), 1),
          beforeReveal: (node: HTMLElement) => revealNow(node),
          beforeReset: (node: HTMLElement) => {
            if (once) return;
            resetNow(node);
          },
        });
      } catch {
        // Fallback leve com IntersectionObserver (sem dependências)
        if ("IntersectionObserver" in window) {
          io = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  revealNow(entry.target as HTMLElement);
                  if (once && io) {
                    io.unobserve(entry.target);
                  }
                } else if (!once) {
                  resetNow(entry.target as HTMLElement);
                }
              });
            },
            { threshold }
          );
          io.observe(el);
        } else {
          // Fallback final: apenas mostra
          el.classList.remove("opacity-0");
          el.style.transform = "none";
          el.style.willChange = "auto";
        }
      }

      // safety: se nada disparar por algum motivo, mostra após 1.5s
      fallbackTimer = window.setTimeout(() => {
        if (!isMounted) return;
        if (el.classList.contains("opacity-0")) {
          el.classList.remove("opacity-0");
          el.style.transform = "none";
          el.style.willChange = "auto";
        }
      }, 1500) as unknown as number;
    })();

    return () => {
      isMounted = false;
      if (sr?.destroy) sr.destroy();
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
