"use client";
import { Image, FileText, Film, Mic } from "lucide-react";
import { useState } from "react";

export interface CardWorksProps {
  title: string;
  subtitle: string;
  text: string;
  index?: number;
}
export function CardWorksCarousel({
  text,
  title,
  subtitle,
  index,
}: CardWorksProps) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className={`py-[30px] pl-[34px] pr-7 text-start bg-[linear-gradient(117.92deg,rgba(215,243,255,0.31)_-1.78%,rgba(0,0,0,0.31)_82.68%)] border-[0.75px] border-white rounded-[16px] hover:shadow-[0px_0px_31.1px_#9700FFC7] container-item-card ${
        isActive ? "shadow-[0px_0px_31.1px_#9700FFC7]" : ""
      }`}
      onClick={() => setIsActive((old) => !old)}
    >
      <div className="flex items-center justify-center border border-[#565656] bg-[#3B3B3B] rounded-[12px] h-12 w-12">
        {index === 0 ? (
          // eslint-disable-next-line jsx-a11y/alt-text
          <Image color="#E7C2FF" size={24} />
        ) : null}
        {index === 1 ? <FileText color="#E7C2FF" size={24} /> : null}
        {index === 2 ? <Film color="#E7C2FF" size={24} /> : null}
        {index === 3 ? <Mic color="#E7C2FF" size={24} /> : null}
      </div>

      <p
        className={`text-2xl font-medium pt-4 pb-1 ${
          isActive ? "text-[#E7C2FF]" : "text-white "
        }`}
      >
        {title}
      </p>

      <p className="text-base font-bold text-[#cccccc] mb-7">{subtitle}</p>

      <p
        className={`text-base duration-600 ease-out h-[70px] ${
          isActive
            ? "lg:text-{#cccccc} text-[#cccccc]"
            : "lg:text-transparent text-[#cccccc]"
        }`}
      >
        {text}
      </p>
    </div>
  );
}
