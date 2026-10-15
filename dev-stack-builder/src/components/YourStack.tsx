import { technologyIcons, type Technology } from "./TechnologyCard";
import toast from "react-hot-toast";
type YourStackProps = {
  selectedStack: number[];
  setSelectedStack: React.Dispatch<React.SetStateAction<number[]>>;
  technologies: Technology[];
};

function YourStack({
  selectedStack,
  setSelectedStack,
  technologies,
}: YourStackProps) {
  const myStack = technologies.filter((technology) =>
    selectedStack.includes(technology.id),
  );

  function handleRemove(technologyId: number) {
    const removedTechnology = myStack.find(
      (technology) => technology.id === technologyId,
    );

    setSelectedStack((previousStack) =>
      previousStack.filter((id) => id !== technologyId),
    );

    if (removedTechnology) {
      toast.success(`${removedTechnology.name} removed from your stack!`);
    }
  }

  function handleRemoveAll() {
    setSelectedStack([]);
    toast.success("All technologies removed!");
  }

  return (
    <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h2 className="text-base font-bold text-slate-900">Your Stack</h2>
        <p className="mt-1 text-xs text-slate-400">
          {myStack.length} Technology{myStack.length !== 1 ? "ies" : "y"}{" "}
          Selected
        </p>
      </div>

      {myStack.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-200 px-3 py-8 text-center">
          <p className="text-2xl">🧩</p>
          <p className="mt-2 text-sm font-medium text-slate-600">
            Your stack is empty
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Add technologies to get started.
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          {myStack.map((technology) => {
            const icon =
              technologyIcons[technology.icon as keyof typeof technologyIcons];

            return (
              <div
                key={technology.id}
                className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-3"
              >
                {icon && (
                  <svg
                    role="img"
                    aria-label={technology.name}
                    viewBox="0 0 24 24"
                    className="h-6 w-6 shrink-0 rounded-md"
                    fill={`#${icon.hex}`}
                  >
                    <path d={icon.path} />
                  </svg>
                )}

                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-xs font-semibold text-slate-800">
                    {technology.name}
                  </h3>
                  <p className="text-[10px] text-slate-400">
                    {technology.category}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleRemove(technology.id)}
                  aria-label={`Remove ${technology.name}`}
                  title={`Remove ${technology.name}`}
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-xl text-slate-400 transition hover:bg-rose-50 hover:text-rose-600"
                >
                  ×
                </button>
              </div>
            );
          })}
        </div>
      )}

      {myStack.length > 0 && (
        <button
          type="button"
          onClick={handleRemoveAll}
          className="mt-6 w-full rounded-lg border border-rose-200 px-3 py-2 text-sm font-medium text-rose-600 transition hover:bg-rose-50"
        >
          Remove All
        </button>
      )}
    </section>
  );
}

export default YourStack;
