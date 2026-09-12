import { use, useState } from "react";
import type { TechnologiesType } from "../Types/TechnologiesType";
import TechnologyCard from "./TechnologyCard";
import { RxCross2 } from "react-icons/rx";

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

  const handleRemoveFromStack = (id: string): void => {
    const remainingTechnologies = selectedTechnologies.filter(
      (selectedTechnology) => selectedTechnology.id !== id,
    );

    setSelectedTechnologies(remainingTechnologies);
  };

  const handleRemoveAll = (): void => {
    setSelectedTechnologies([]);
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
                <div
                  key={selectedTechnology.id}
                  className="flex items-center gap-2 border border-slate-200 rounded-lg p-3"
                >
                  <img
                    src={selectedTechnology.icon}
                    alt={selectedTechnology.name}
                    className="w-7 h-7"
                  />

                  <div>
                    <h4 className="text-sm font-semibold">
                      {selectedTechnology.name}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {selectedTechnology.category}
                    </p>
                  </div>

                  <button
                    type="button"
                    aria-label={`Remove ${selectedTechnology.name}`}
                    onClick={() => handleRemoveFromStack(selectedTechnology.id)}
                    className="ml-auto p-1 text-slate-400 transition-all duration-300 hover:text-slate-600 cursor-pointer"
                  >
                    <RxCross2 />
                  </button>
                </div>
              ))}
            </div>

            {/* Remove All button */}

            {selectedTechnologies.length > 0 && (
              <button
                type="button"
                onClick={handleRemoveAll}
                className="mt-6 w-full rounded-lg border
                  border-red-200 py-2 text-sm font-bold text-red-500 transition-all duration-300
                  hover:bg-red-50 cursor-pointer"
              >
                Remove All
              </button>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
