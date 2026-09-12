import { use, useState } from "react";
import type { TechnologiesType } from "../Types/TechnologiesType";
import TechnologyCard from "./TechnologyCard";

interface TechnologiesProps {
  technologiesPromise: Promise<TechnologiesType[]>;
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
  const technologies = use(technologiesPromise);

  const [selectedTechnologies, setSelectedTechnologies] = useState<
    TechnologiesType[]
  >([]);

  const handleAddToStack = (technology: TechnologiesType): void => {
    const isAlreadyAdded = selectedTechnologies.some(
      (selectedTechnology) => selectedTechnology.id === technology.id,
    );

    if (isAlreadyAdded) {
      console.warn("Technology already added");
      return;
    }

    const newSelectedTechnologies = [...selectedTechnologies, technology];

    setSelectedTechnologies(newSelectedTechnologies);
  };

  return (
    <section id="technologies">
      <div className="container mx-auto px-3">
        {/* Technologies section heading */}
        <div className="space-y-2 text-center lg:text-left">
          <h2
            className="text-2xl lg:text-4xl
              font-bold text-slate-900"
          >
            Explore the <span className="text-[#EC4899]">Technologies</span>
          </h2>

          <p className="text-sm lg:text-base text-slate-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Technologies cards and stack */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          {/* Technology cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:col-span-3">
            {/* TechnologyCard components will go here */}
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                handleAddToStack={handleAddToStack}
              />
            ))}
          </div>

          {/* Your Stack */}
          <aside className="border border-slate-200 rounded-xl p-5 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>
            <p className="mt-1 text-sm text-slate-400">
              {selectedTechnologies.length
                ? `${selectedTechnologies.length} Technology Selected`
                : "No technologies selected yet."}
            </p>
            {selectedTechnologies.length === 0 && (
              <p className="mt-3 py-5 rounded-xl border-slate-300 text-center text-sm text-slate-400 border border-dashed">
                Your stack is empty.
              </p>
            )}

            <div className="mt-3 space-y-3">
              {selectedTechnologies.map((selectedTechnology) => (
                <p key={selectedTechnology.id}> {selectedTechnology.name} </p>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
