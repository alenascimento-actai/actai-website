import Image from "next/image";
import "../sections/styles.css";
interface SolutionCardProps {
  title: string;
  description: string;
  icon: string;
}

export function SolutionCard({ title, description, icon }: SolutionCardProps) {
  return (
    <div className="relative flex flex-col justify-between h-[435px] px-6 py-8 rounded-2xl shadow-xl overflow-hidden section-card border lg:transition border-gradient lg:hover:bg-blur-ios lg:hover:shadow-[0px_1px_9.8px_0px_#E7C2FFC7] duration-600 ease-out">
      {/* Ícone decorativo ao fundo */}
      <div className="absolute top-4 right-4 w-[180px] h-[180px]">
        <Image src={icon} width={195} height={195} alt="icone" />
      </div>

      <h3 className="text-white mb-4 text-2xl lg:text-[32px]">{title}</h3>

      <div className="mt-6 flex justify-between items-end">
        <p className="text-sm lg:text-base text-white">{description}</p>
      </div>
    </div>
  );
}
