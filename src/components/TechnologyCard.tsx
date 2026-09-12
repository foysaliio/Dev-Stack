import { FaStar } from "react-icons/fa";
import type { TechnologiesType } from "../Types/TechnologiesType";

interface TechnologyCardProps {
  technology: TechnologiesType;
  handleAddToStack: (technology: TechnologiesType) => void;
}

type BadgeColors = {
  [id: string]: string | undefined;
};

const badgeColors: BadgeColors = {
  react: "bg-sky-50 text-sky-600 border-sky-100",
  vue: "bg-emerald-50 text-emerald-600 border-emerald-100",
  svelte: "bg-orange-50 text-orange-600 border-orange-100",
  nextjs: "bg-violet-50 text-violet-600 border-violet-100",
  nodejs: "bg-emerald-50 text-emerald-600 border-emerald-100",
  postgresql: "bg-blue-50 text-blue-600 border-blue-100",
  redis: "bg-red-50 text-red-600 border-red-100",
  javascript: "bg-amber-50 text-amber-600 border-amber-100",
  typescript: "bg-sky-50 text-sky-600 border-sky-100",
  java: "bg-sky-50 text-sky-600 border-sky-100",
  tailwindcss: "bg-cyan-50 text-cyan-600 border-cyan-100",
  docker: "bg-sky-50 text-sky-600 border-sky-100",
};

const TechnologyCard = ({
  technology,
  handleAddToStack,
}: TechnologyCardProps) => {
  const { id, name, category, description, icon, rating, difficulty, badge } =
    technology;

  const badgeColor =
    badgeColors[id] ?? "bg-slate-50 text-slate-600 border-slate-100";

  return (
    <div className="border border-slate-100 rounded-xl p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
      {/* Icon, name and badge */}
      <div className="flex justify-between items-start gap-2">
        <div className="flex items-center gap-3 lg:block">
          <img src={icon} alt="" className="w-8 h-8" />

          <h3 className="lg:mt-4 text-lg font-bold text-slate-900">{name}</h3>
        </div>

        <p
          className={`${badgeColor}
            border rounded-full px-3 py-1 text-xs`}
        >
          {badge}
        </p>
      </div>

      {/* Description */}
      <p className="mt-3 mb-4 text-sm leading-relaxed text-slate-500">
        {description}
      </p>

      {/* Category, difficulty and rating */}
      <div
        className="flex flex-wrap justify-between items-center
          gap-2 border-t border-slate-100 py-2 text-xs"
      >
        <p className="bg-slate-100 text-slate-600 px-2 py-1 rounded">
          {category}
        </p>

        <p className="text-slate-500">{difficulty}</p>

        <p className="flex items-center gap-1 text-slate-700">
          <FaStar className="text-yellow-500" />
          {rating}
        </p>
      </div>

      {/* Add button */}
      <button
        className="bg-slate-950 text-white rounded-lg
          w-full py-2 mt-2 text-sm cursor-pointer transition-all duration-300
          hover:bg-slate-800"
        type="button"
        onClick={() => handleAddToStack(technology)}
      >
        Add to Stack
      </button>
    </div>
  );
};

export default TechnologyCard;
