"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getDictionary } from "@/app/[lang]/dictionaries";

export function ContactSection() {
  const params = useParams();
  const lang = Array.isArray(params?.lang)
    ? params.lang[0]
    : params?.lang || "en";

  const [dict, setDict] = useState<{
    subtitle: string;
    title: string;
    form: {
      name: string;
      email: string;
      phone: string;
      message: string;
      button: string;
    };
  } | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    getDictionary(lang).then((d) => setDict(d.contact));
  }, [lang]);

  if (!dict) return null;

  return (
    <section className="bg-black text-white py-20 bg-[url('/images/contact-background.png')] bg-no-repeat bg-cover px-8 md:px-24">
      <div className=" mx-auto text-center">
        <p className="uppercase text-sm tracking-widest text-white/60 mb-3">
          {dict.title}
        </p>
        <h2 className="text-3xl font-bold mb-10">{dict.subtitle}</h2>

        <form className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="flex flex-col col-span-1">
            <label className="mb-1 text-sm">{dict.form.name}</label>
            <input
              type="text"
              className="bg-transparent border-b border-white/40 py-2 outline-none"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

          <div className="flex flex-col col-span-1">
            <label className="mb-1 text-sm">{dict.form.email}</label>
            <input
              type="email"
              className="bg-transparent border-b border-white/40 py-2 outline-none"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div className="flex flex-col col-span-1">
            <label className="mb-1 text-sm">{dict.form.phone}</label>
            <input
              type="text"
              className="bg-transparent border-b border-white/40 py-2 outline-none"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </div>

          <div className="flex flex-col col-span-1 md:col-span-3">
            <label className="mb-1 text-sm">{dict.form.message}</label>
            <textarea
              className="bg-transparent border-b border-white/40 py-2 outline-none min-h-[100px]"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
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
          </div>
        </form>
      </div>
    </section>
  );
}
