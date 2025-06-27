import { ReactNode } from "react";
import { SolutionCard } from "../layout/SoluctionCard";
import { GearIcon } from "../Icons/GearIcon";
import { GraphIcon } from "../Icons/GraphIcon";
import { BulbIcon } from "../Icons/BulbIcon";

interface SolutionItem {
  title: string;
  description: string;
  icon: ReactNode;
}

interface SolutionsProps {
  title: string;
  subtitle: string;
  items: SolutionItem[];
}

export function Solutions({ title, subtitle, items }: SolutionsProps) {
  const iconMap = {
    gear: <GearIcon />,
    graph: <GraphIcon />,
    bulb: <BulbIcon />,
  };
  return (
    <section className="bg-black text-white py-24 px-8 md:px-24">
      <div className="text-center lg:text-start mb-16">
        <h3 className="uppercase text-[22px] text-white/60 tracking-[6px]">
          {subtitle}
        </h3>
        <h2 className="text-3xl md:text-5xl font-bold mt-2">{title}</h2>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
        {items.map((item, idx) => (
          <SolutionCard
            key={idx}
            title={item.title}
            description={item.description}
            icon={iconMap[item.icon as keyof typeof iconMap]}
          />
        ))}
      </div>
    </section>
  );
}
