"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ChevronDown } from "lucide-react";

import FlagBr from "../../../../public/flag-br.svg";
import FlagEn from "../../../../public/flag-es.svg";

type Lang = "pt-br" | "en";

const LANGUAGES: { code: Lang; flag: typeof FlagBr }[] = [
  { code: "pt-br", flag: FlagBr },
  { code: "en", flag: FlagEn },
];

interface LanguageSwitcherProps {
  pathname: string;
  currentLang: Lang;
  label: string;
  languages: Record<Lang, string>;
  isDark?: boolean;
}

export function LanguageSwitcher({
  pathname,
  currentLang,
  label,
  languages,
  isDark = false,
}: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const current = LANGUAGES.find((l) => l.code === currentLang) ?? LANGUAGES[0];

  return (
    <div ref={wrapperRef} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={label}
        className={`flex shrink-0 items-center gap-1 cursor-pointer ${
          isDark ? "text-white" : "text-[#0C2941]"
        }`}
      >
        <Image
          src={current.flag}
          alt={languages[current.code]}
          width={20}
          height={20}
          className="rounded-full"
        />
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={label}
          className="absolute right-0 top-[calc(100%+12px)] min-w-[160px] rounded-xl border border-[#EAECF0] bg-white p-1.5 shadow-[0_12px_32px_rgba(16,24,40,0.12)] animate-fade-down animate-duration-200"
        >
          {LANGUAGES.map((language) => (
            <li key={language.code} role="option" aria-selected={language.code === currentLang}>
              <Link
                href={pathname.replace(`/${currentLang}`, `/${language.code}`)}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-[#0C2941] hover:bg-[#F4F6FA]"
              >
                <Image
                  src={language.flag}
                  alt=""
                  width={18}
                  height={18}
                  className="rounded-full"
                />
                <span className="flex-1">{languages[language.code]}</span>
                {language.code === currentLang && <Check size={14} />}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
