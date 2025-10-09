"use client";

import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  /**
   * Classes que serão aplicadas quando o elemento entrar em viewport.
   * Ex.: "animate-fade-right animate-duration-[2000ms] animate-delay-200"
   * ou   "animate-fade-in-fwd"
   */
  revealClasses?: string;
  /** Atraso do gatilho (ms) – apenas para o ScrollReveal controlar quando disparar */
  delay?: number;
  /** Reanimar ao sair/voltar para a viewport */
  reset?: boolean;
  /** Classes adicionais no wrapper */
  className?: string;
};

export default function RevealOnView({
  children,
  // padrão: seu efeito de texto
  revealClasses = "animate-fade-right animate-duration-[2000ms] animate-delay-200",
  delay = 200,
  reset = false,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Acessibilidade: sem animação se o usuário pedir reduzir movimento
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
    ) {
      el.classList.remove("opacity-0");
      el.style.transform = "none";
      return;
    }

    // Estado inicial defensivo
    el.style.willChange = "opacity, transform";
    el.classList.add("opacity-0");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let sr: any;
    let fallback: number | undefined;

    (async () => {
      try {
        const ScrollReveal = (await import("scrollreveal")).default;
        sr = ScrollReveal();

        const classes = revealClasses
          .split(/\s+/)
          .map((c) => c.trim())
          .filter(Boolean);

        // Usamos ScrollReveal só como OBSERVER (sem animar por ele)
        sr.reveal(el, {
          duration: 0,
          distance: "0px",
          scale: 1,
          opacity: 1,
          delay,
          cleanup: true,
          mobile: true,
          reset, // se true, remove as classes ao sair (ver beforeReset)
          viewFactor: 0.2, // 20% visível já dispara
          beforeReveal: (node: HTMLElement) => {
            node.classList.remove("opacity-0");
            node.classList.add(...classes);
          },
          beforeReset: (node: HTMLElement) => {
            if (!reset) return;
            node.classList.remove(...classes);
            node.classList.add("opacity-0");
          },
        });

        // Fallback: se algo impedir o reveal, mostra o conteúdo
        fallback = window.setTimeout(() => {
          if (!el) return;
          if (el.classList.contains("opacity-0")) {
            el.classList.remove("opacity-0");
            el.style.transform = "none";
          }
        }, 1500);
      } catch {
        // Se falhar o import do SR, garante conteúdo visível
        el.classList.remove("opacity-0");
        el.style.transform = "none";
      }
    })();

    return () => {
      if (sr?.destroy) sr.destroy();
      if (fallback) window.clearTimeout(fallback);
    };
  }, [delay, reset, revealClasses]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
