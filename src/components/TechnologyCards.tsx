import { use } from "react";
import type { TechnologiesType } from "../Types/TechnologiesType";
import TechnologyCard from "./TechnologyCard";

interface TechnologyCardsProps {
  technologiesPromise: Promise<TechnologiesType[]>;
  selectedTechnologies: TechnologiesType[];
  handleAddToStack: (technology: TechnologiesType) => void;
}

const TechnologyCards = ({
  technologiesPromise,
  selectedTechnologies,
  handleAddToStack,
}: TechnologyCardsProps) => {
  const technologies = use(technologiesPromise);

  return (
    <>
      {technologies.map((technology) => (
        <TechnologyCard
          key={technology.id}
          technology={technology}
          handleAddToStack={handleAddToStack}
          isSelected={selectedTechnologies.some(
            (selectedTechnology) => selectedTechnology.id === technology.id,
          )}
        />
      ))}
    </>
  );
};

export default TechnologyCards;
