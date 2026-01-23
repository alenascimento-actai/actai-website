"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getDictionary } from "@/app/[lang]/dictionaries";
import { CheckCircle2, Copy } from "lucide-react";
import { Button } from "../ui/button";

const SUPPORT_EMAIL = "contato@actai.ai";

interface ContactSectionProps {
  isPlataform?: boolean;
}

export function ContactSection({ isPlataform = false }: ContactSectionProps) {
  const params = useParams();
  const lang = Array.isArray(params?.lang)
    ? params.lang[0]
    : params?.lang || "en";

  const [dict, setDict] = useState<{
    subtitle: string;
    title: string;
    form: {
      email: string;
      message: string;
      button: string;
    };
  } | null>(null);

  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(SUPPORT_EMAIL);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2500);
  };

  useEffect(() => {
    getDictionary(lang).then((d) => setDict(d.contact));
  }, [lang]);

  if (!dict) return null;

  return (
    <section
      id="contact"
      className={[
        "py-20 px-8 md:px-24 space-y-11 bg-no-repeat bg-cover",
        isPlataform
          ? "bg-white bg-[url('https://website-actai.s3.sa-east-1.amazonaws.com/imagens/plataform/bg-section-agility.png')]"
          : "bg-black text-white bg-[url('https://website-actai.s3.sa-east-1.amazonaws.com/imagens/contact-background.png')]",
      ].join(" ")}
    >
      <div className="text-center space-y-5">
        <h4 className="uppercase text-lg lg:text-[22px] tracking-[6px] text-[#B6B6B6]">
          {dict.title}
        </h4>

        <h2
          className="text-2xl lg:text-5xl font-bold"
          style={{ color: isPlataform ? "#3B3B3B" : undefined }}
        >
          {dict.subtitle}
        </h2>
      </div>

      <div className="flex flex-col gap-2 items-center justify-center">
        <p
          className={[
            "text-xl lg:text-2xl font-bold cursor-default rounded-[20px]",
            "max-w-[358px] w-full mx-auto px-6 py-5",
            "flex justify-between items-center  border",
            isPlataform ? "border-[#E3E3E3] text-[#0C2941]" : "border-white",
          ].join(" ")}
        >
          <span>{SUPPORT_EMAIL}</span>

          <Button
            variant={"link"}
            onClick={handleCopyEmail}
            className="bg-[#F4F5F8] lg:bg-transparent hover:bg-[#f4f5f8e1] cursor-pointer"
          >
            <Copy size={16} color={` ${isPlataform ? "#0C2941" : "#fff"}`} />
          </Button>
        </p>

        <div className="h-5">
          {emailCopied && (
            <span className="text-xs text-[#00A63E] font-medium w-full gap-1 flex justify-center">
              <div className="flex gap-2">
                <CheckCircle2 size={16} />
                <strong>E-mail copiado!</strong>
              </div>
              Agora é só enviar sua mensagem para nosso time.
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
