import { ReactNode } from "react";

interface SolutionCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export function SolutionCard({ title, description, icon }: SolutionCardProps) {
  return (
    <div className="relative flex flex-col justify-between h-[435px] px-6 py-8 rounded-2xl shadow-xl overflow-hidden bg-gradient-to-br from-[#3B1554]/60 to-[#1B102B]/70 backdrop-blur-sm bg-white/30 border border-white/10 hover:scale-[1.01] transition">
      {/* Ícone decorativo ao fundo */}
      <div className="absolute top-4 right-4 w-[180px] h-[180px] opacity-100">
        {icon}
      </div>

      {/* Conteúdo */}
      <div className="relative z-10">
        <h3 className="text-white mb-4 text-3xl">{title}</h3>
      </div>

      {/* Botão */}
      <div className="relative z-10 mt-6 flex justify-between items-end">
        <p className="text-sm text-white/90 leading-relaxed">{description}</p>
        {/* <button className="w-[58px] h-[58px] bg-white text-black rounded-full flex items-center justify-center text-lg font-bold hover:scale-110 transition">
          →
        </button> */}
      </div>
    </div>
  );
}
