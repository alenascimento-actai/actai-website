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
      <div className="max-w-6xl mx-auto text-center lg:text-start mb-16">
        <p className="uppercase text-sm tracking-widest text-white/60">
          {subtitle}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">{title}</h2>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
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
