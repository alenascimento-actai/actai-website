import { ReactNode } from "react";
interface SolutionCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export function SolutionCard({ title, description, icon }: SolutionCardProps) {
  return (
    <div className="relative flex flex-col justify-between h-[435px] px-6 py-8 rounded-2xl shadow-xl overflow-hidden bg-gradient-to-br from-[#3B1554]/60 to-[#1B102B]/70 backdrop-blur-sm bg-white/37 border border-white/10 lg:hover:scale-[1.01] lg:transition border-gradient">
      {/* Ícone decorativo ao fundo */}
      <div className="absolute top-4 right-4 w-[180px] h-[180px]">{icon}</div>

      <h3 className="text-white mb-4 text-3xl md:text-[32px]">{title}</h3>

      <div className="mt-6 flex justify-between items-end">
        <p className="text-base text-white">{description}</p>
      </div>
    </div>
  );
}
