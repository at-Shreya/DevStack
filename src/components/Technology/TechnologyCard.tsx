import type { Technology } from "../../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  onAdd: (technology: Technology) => void;
  isAdded: boolean;
}

const TechnologyCard = ({
  technology,
  onAdd,
  isAdded
}: TechnologyCardProps) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

      {/* Top */}
      <div className="flex items-start justify-between">

        <img
          src={technology.icon}
          alt={technology.name}
          className="h-12 w-12"
        />

        <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
          {technology.badge}
        </span>

      </div>

      {/* Name */}
      <h3 className="mt-4 text-xl font-bold text-gray-900">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-2 min-h-[72px] text-sm leading-6 text-gray-600">
        {technology.description}
      </p>

      {/* Category */}
      <div className="mt-4">
        <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-600">
          {technology.category}
        </span>
      </div>

      {/* Difficulty + Rating */}
      <div className="mt-5 flex items-center justify-between">

        <span className="text-sm text-gray-500">
          {technology.difficulty}
        </span>

        <span className="text-sm font-semibold text-gray-700">
          ⭐ {technology.rating}
        </span>

      </div>

      {/* Add Button */}
      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-5 w-full rounded-lg py-2.5 text-sm font-semibold ${
          isAdded
            ? "cursor-not-allowed bg-gray-200 text-gray-500"
            : "bg-pink-500 text-white hover:bg-pink-600"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>

    </div>
  );
};

export default TechnologyCard;