"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getDictionary } from "@/app/[lang]/dictionaries";
// import Link from "next/link";

// interface SendMailProps {
//   data: {
//     response: string;
//   };
// }

export function ContactSection() {
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

  // const [form, setForm] = useState({
  //   email: "",
  //   message: "",
  // });

  // const [status, setStatus] = useState({
  //   sended: false,
  //   error: false,
  // });

  useEffect(() => {
    getDictionary(lang).then((d) => setDict(d.contact));
  }, [lang]);

  // async function handleSubmit(e: FormEvent<HTMLFormElement>) {
  //   e.preventDefault();

  //   const res = await fetch(
  //     `${process.env.NEXT_PUBLIC_HOST_LOCAL}/api/sendEmailContact`,
  //     {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(form),
  //       cache: "no-store",
  //     }
  //   );

  //   const resJson: SendMailProps = await res.json();

  //   if (resJson?.data?.response?.includes("2.0.0 OK")) {
  //     setStatus({ sended: true, error: false });
  //     setForm({ email: "", message: "" });
  //   } else {
  //     setStatus({ sended: false, error: true });
  //   }
  // }

  if (!dict) return null;

  return (
    <section
      className="bg-black text-white py-20 bg-[url('/images/contact-background.png')] bg-no-repeat bg-cover px-8 md:px-24 space-y-5"
      id="contact"
    >
      <div className="text-center space-y-5">
        <h4 className="uppercase text-[22px] tracking-[6px] text-[#B6B6B6]">
          {dict.title}
        </h4>
        <h2 className="text-4xl md:text-5xl font-bold">{dict.subtitle}</h2>
      </div>
      {/* 
      {status.sended ? (
        <p className="text-green-400 font-medium">
          Mensagem enviada com sucesso. Verifique seu e-mail!
        </p>
      ) : (
        <form className="flex flex-col gap-6 text-left" onSubmit={handleSubmit}>
          <div className="flex flex-col col-span-1">
            <label className="mb-1 text-sm">{dict.form.email}</label>
            <input
              type="email"
              className="bg-transparent border-b border-white/40 py-2 outline-none w-full"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          <div className="flex flex-col col-span-1 md:col-span-3">
            <label className="mb-1 text-sm">{dict.form.message}</label>
            <textarea
              className="bg-transparent border-b border-white/40 py-2 outline-none min-h-[100px]"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
          </div>

          <div className="col-span-1 md:col-span-3 text-center mt-6">
            <button
              type="submit"
              className="bg-white text-black font-medium px-6 py-3 rounded-xl hover:brightness-90 transition flex items-center justify-center gap-2 mx-auto"
            >
              {dict.form.button}
              <span>→</span>
            </button>
            {status.error && (
              <p className="text-red-500 mt-2">
                Erro ao enviar a mensagem. Tente novamente.
              </p>
            )}
          </div>
        </form>
      )} */}
      <p className="text-3xl font-bold mb-10 text-center">contato@actai.ai</p>
      {/* <Link
        href="mailto:contato@act.ai"
        className="bg-white text-black font-medium px-6 py-3 rounded-xl hover:brightness-90 transition flex items-center justify-center gap-2 mx-auto w-1/5"
      ></Link> */}
    </section>
  );
}
