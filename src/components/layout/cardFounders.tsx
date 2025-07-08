import Image from "next/image";

interface FounderCardProps {
  name: string;
  title: string;
  bio: string;
  imageSrc: string;
}

export const FounderCard = ({
  name,
  title,
  bio,
  imageSrc,
}: FounderCardProps) => {
  return (
    <div className="p-6 rounded-2xl flex flex-col md:flex-row gap-5 lg:gap-16 items-center w-full backdrop-blur-sm bg-white/20">
      <div className="w-[272px] min-w-[272px] h-[334px] aspect-square overflow-hidden rounded-xl bg-gray-700">
        <Image
          src={imageSrc}
          alt={name}
          width={272}
          height={334}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col justify-between items-baseline space-y-5 text-white text-sm lg:h-[334px]">
        <div className="flex items-center justify-between flex-wrap gap-5 md:gap-0 w-full">
          <h3 className="text-2xl lg:text-[32px] font-bold mb-2 text-white">
            {name}
          </h3>
          <span className="text-lg max-w-60 w-full py-3 rounded-2xl border border-white text-white text-center font-semibold">
            {title}
          </span>
        </div>
        <p className="text-white/80 leading-relaxed text-sm lg:text-xl">
          {bio}
        </p>
      </div>
    </div>
  );
};
