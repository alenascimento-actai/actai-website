import { AdvisorCard } from "../layout/cardAdvisor";
import "./styles.css";

export interface AdvisoryBoardSectionProps {
  dict: {
    sectionTitle: string;
    vera: {
      name: string;
      bio: string;
    };
    gustavo: {
      name: string;
      bio: string;
    };
  };
}

export function AdvisoryBoardSection({ dict }: AdvisoryBoardSectionProps) {
  return (
    <div className="advisory-board-bg flex flex-col gap-16 mx-auto -mt-24 pt-24 pb-24 lg:pb-40 px-6 md:px-24">
      <h2 className="text-white text-center font-bold text-2xl lg:text-5xl">
        {dict.sectionTitle}
      </h2>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <AdvisorCard
          name={dict.vera.name}
          bio={dict.vera.bio}
          imageSrc="https://website-actai.s3.sa-east-1.amazonaws.com/imagens/founders/img-new-vera-valente.png"
        />
        <AdvisorCard
          name={dict.gustavo.name}
          bio={dict.gustavo.bio}
          imageSrc="https://website-actai.s3.sa-east-1.amazonaws.com/imagens/founders/img-new-gustavo-jobim.png"
        />
      </div>
    </div>
  );
}
