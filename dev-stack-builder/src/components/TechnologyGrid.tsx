import technologies from "../data/technologies.json";
import TechnologyCard from "./TechnologyCard";

type TechnologyGridProps = {
  selectedStack: number[];
  setSelectedStack: React.Dispatch<React.SetStateAction<number[]>>;
};

function TechnologyGrid({
  selectedStack,
  setSelectedStack,
}: TechnologyGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {technologies.map((technology) => (
        <TechnologyCard
          key={technology.id}
          technology={technology}
          selectedStack={selectedStack}
          setSelectedStack={setSelectedStack}
        />
      ))}
    </div>
  );
}

export default TechnologyGrid;
