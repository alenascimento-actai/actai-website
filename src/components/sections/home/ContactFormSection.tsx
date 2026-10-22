"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, ChevronDown, CircleAlert } from "lucide-react";
import RevealOnView from "@/components/reveal/RevealOnView";
import { SectionLabel, sectionTitleClass } from "./SectionHeading";

export interface ContactFormSectionProps {
  dict: {
    label: string;
    title: string;
    text: string;
    form: {
      title: string;
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      optional: string;
      phonePlaceholder: string;
      source: string;
      sourceOptions: string[];
      button: string;
      sending: string;
      success: string;
      error: string;
    };
  };
}

type Status = "idle" | "sending" | "success" | "error";

const labelClass = "mb-1.5 block text-[13px] font-medium text-[#344054]";
const fieldClass =
  "h-12 w-full rounded-lg border border-[#D0D5DD] bg-white px-4 text-sm text-[#101828] placeholder:text-[#98A2B3] outline-none transition focus:border-[#2185D0] focus:ring-4 focus:ring-[#2185D0]/10";

export function ContactFormSection({ dict }: ContactFormSectionProps) {
  const { form } = dict;
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const data = new FormData(formElement);

    setStatus("sending");
    try {
      const response = await fetch("/api/sendEmailContact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          source: data.get("source"),
        }),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      formElement.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="bg-white bg-[url(https://website-actai.s3.sa-east-1.amazonaws.com/imagens/new-version/img-bg-contato.webp)] bg-cover bg-center bg-no-repeat px-6 py-20 lg:py-28"
    >
      <div className="mx-auto grid max-w-[930px] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_418px] lg:gap-12">
        <RevealOnView revealClasses="animate-fade-right animate-duration-[2000ms] animate-delay-200">
          <SectionLabel className="text-[#98A2B3]">{dict.label}</SectionLabel>
          <h2 className={`${sectionTitleClass} lg:max-w-[458px]`}>{dict.title}</h2>
          <p className="mt-5 max-w-[420px] text-base leading-relaxed text-[#667085]">
            {dict.text}
          </p>
        </RevealOnView>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-[#EAECF0] bg-[#F9FAFB]/90 p-6 shadow-[0_12px_40px_rgba(16,24,40,0.05)] lg:p-7"
        >
          <h3 className="font-sans! mb-6 text-base font-semibold text-[#101828]">
            {form.title}
          </h3>

          <div className="space-y-4">
            <div>
              <label htmlFor="contact-name" className={labelClass}>
                {form.name} <span className="text-[#F04438]">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                maxLength={120}
                autoComplete="name"
                placeholder={form.namePlaceholder}
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor="contact-email" className={labelClass}>
                {form.email} <span className="text-[#F04438]">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                maxLength={160}
                autoComplete="email"
                placeholder={form.emailPlaceholder}
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor="contact-phone" className={labelClass}>
                {form.phone}{" "}
                <span className="font-normal text-[#98A2B3]">{form.optional}</span>
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                maxLength={30}
                autoComplete="tel"
                placeholder={form.phonePlaceholder}
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor="contact-source" className={labelClass}>
                {form.source} <span className="text-[#F04438]">*</span>
              </label>
              <div className="relative">
                <select
                  id="contact-source"
                  name="source"
                  required
                  defaultValue={form.sourceOptions[0]}
                  className={`${fieldClass} appearance-none pr-10 cursor-pointer`}
                >
                  {form.sourceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={18}
                  aria-hidden="true"
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#344054]"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-6 h-12 w-full cursor-pointer rounded-full bg-[#0C2941] text-sm font-medium text-white transition-all duration-600 ease-out hover:bg-[#E7C2FF] hover:text-[#0C2941] disabled:cursor-wait disabled:opacity-70"
          >
            {status === "sending" ? form.sending : form.button}
          </button>

          <div aria-live="polite" className="empty:hidden mt-4 text-sm">
            {status === "success" && (
              <p className="flex items-start gap-2 text-[#027A48]">
                <CheckCircle2 size={18} className="mt-px shrink-0" />
                {form.success}
              </p>
            )}
            {status === "error" && (
              <p className="flex items-start gap-2 text-[#B42318]">
                <CircleAlert size={18} className="mt-px shrink-0" />
                {form.error}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
