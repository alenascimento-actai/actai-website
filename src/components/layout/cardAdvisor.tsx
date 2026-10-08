import Image from "next/image";

interface AdvisorCardProps {
  name: string;
  bio: string;
  imageSrc: string;
}

export const AdvisorCard = ({ name, bio, imageSrc }: AdvisorCardProps) => {
  return (
    <div className="p-6 lg:p-7 rounded-2xl flex flex-col gap-6 lg:gap-8 w-full md:w-[calc(50%_-_1rem)] xl:w-full border border-white/20 backdrop-blur-sm bg-gradient-to-br from-white/20 to-white/5">
      <div className="w-full aspect-[1153/857] overflow-hidden rounded-lg bg-gray-700">
        <Image
          src={imageSrc}
          alt={name}
          width={1153}
          height={857}
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
          className="object-cover object-top w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-4 w-full text-white">
        <h3 className="text-2xl lg:text-[32px] lg:leading-tight font-bold text-white">
          {name}
        </h3>
        <p className="text-white/80 leading-relaxed text-sm lg:text-base">
          {bio}
        </p>
      </div>
    </div>
  );
};
