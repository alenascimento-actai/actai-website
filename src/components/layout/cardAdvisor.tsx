import Image from "next/image";

interface AdvisorCardProps {
  name: string;
  bio: string;
  imageSrc: string;
}

export const AdvisorCard = ({ name, bio, imageSrc }: AdvisorCardProps) => {
  return (
    <div className="p-6 lg:p-7 rounded-2xl flex flex-col md:flex-row gap-5 md:gap-10 items-center md:items-stretch w-full border border-white/20 backdrop-blur-sm bg-gradient-to-r from-white/20 to-white/5">
      <div className="w-[215px] min-w-[215px] h-[334px] overflow-hidden rounded-lg bg-gray-700">
        <Image
          src={imageSrc}
          alt={name}
          width={215}
          height={334}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col justify-between gap-5 w-full text-white">
        <h3 className="text-2xl lg:text-[32px] lg:leading-tight font-bold text-white">
          {name}
        </h3>
        <p className="text-white/80 leading-relaxed text-sm lg:text-xl">
          {bio}
        </p>
      </div>
    </div>
  );
};
