import { ArrowUpDown, ClipboardList, Search } from "lucide-react";

export interface AgilitySectionProps {
  dict: {
    title: string;
    text: string;
    content: { textHighlight: string; text: string }[];
  };
}

const icons = [Search, ClipboardList, ArrowUpDown];

export function AgilitySection({ dict }: AgilitySectionProps) {
  return (
    <section className="w-full bg-[url('/images/plataform/bg-section-agility.png')] bg-no-repeat bg-cover lg:bg-contain bg-left py-16 md:py-24">
      <div className="container mx-auto px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
          {/* Texto (esquerda) */}
          <div className="max-w-[400px]">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3B3B3B]">
              {dict.title}
            </h2>
            <p className="mt-4 text-[#828282] max-w-[361px]">{dict.text}</p>
          </div>

          {/* Itens (direita) */}
          <div className="flex flex-col gap-4">
            {dict.content.map((item, i) => {
              const Icon = icons[i] ?? Search;
              return (
                <div
                  key={`${item.textHighlight}-${i}`}
                  className="flex items-center gap-4 rounded-2xl border border-[#EDEDED] bg-[#FFFFFF40] px-5 py-4 shadow-[0_8px_30px_rgba(33,133,208,0.08)]"
                >
                  <span className="inline-flex h-[50px] w-[50px] items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                    <Icon size={24} aria-hidden="true" color="#103C68" />
                  </span>

                  <p className="text-[#828282] text-[15px]">
                    <span className="font-bold">{item.textHighlight}</span>
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
