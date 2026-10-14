import toast from "react-hot-toast";
export type Technology = {
  id: number;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
};

type TechnologyCardProps = {
  technology: Technology;
  selectedStack: number[];
  setSelectedStack: React.Dispatch<React.SetStateAction<number[]>>;
};

function TechnologyCard({
  technology,
  selectedStack,
  setSelectedStack,
}: TechnologyCardProps) {
  const isSelected = selectedStack.includes(technology.id);

  function handleAddToStack() {
    if (isSelected) return;

    setSelectedStack((previousStack) => [...previousStack, technology.id]);

    toast.success(`${technology.name} added to your stack!`);
  }
  return (
    <div className="flex h-full flex-col rounded-xl border border-slate-100 bg-white p-3.5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
      {/* Icon and Badge */}
      <div className="mb-3 flex items-center justify-between">
        <span className="text-2xl">{technology.icon}</span>

        <span className="rounded-full bg-sky-50 px-2.5 py-1 text-[10px] font-medium text-sky-600">
          {technology.badge}
        </span>
      </div>

      {/* Technology Information */}
      <h2 className="mb-1 text-sm font-bold text-slate-800">
        {technology.name}
      </h2>

      <p className="min-h-[48px] text-xs leading-5 text-slate-500">
        {technology.description}
      </p>

      {/* Category, Difficulty and Rating */}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-3 text-[10px] text-slate-500">
        <span className="rounded-sm bg-slate-100 px-1.5 py-1">
          {technology.category}
        </span>

        <span>{technology.difficulty}</span>

        <span className="font-medium text-slate-700">
          <span className="text-amber-400">★</span> {technology.rating}
        </span>
      </div>

      {/* Add to Stack Button */}
      <button
        type="button"
        onClick={handleAddToStack}
        disabled={isSelected}
        className="mt-3 w-full rounded-md bg-slate-950 px-3 py-2 text-xs font-medium text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-pink-300 disabled:cursor-not-allowed disabled:bg-emerald-600"
      >
        {isSelected ? "Added ✓" : "Add to Stack"}
      </button>
    </div>
  );
}

export default TechnologyCard;
