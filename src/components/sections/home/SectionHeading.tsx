interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export const sectionTitleClass =
  "text-[#0C2941] font-bold text-[34px] leading-[1.12] md:text-5xl xl:text-[56px]";

export function SectionLabel({
  children,
  className = "text-[#D59BF6]",
}: SectionLabelProps) {
  return (
    <p
      className={`mb-3 text-xs md:text-sm font-medium uppercase tracking-[0.14em] ${className}`}
    >
      {children}
    </p>
  );
}
