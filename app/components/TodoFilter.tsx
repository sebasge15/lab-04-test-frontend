export type FilterType = "all" | "active" | "completed";

interface TodoFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export default function TodoFilter({
  currentFilter,
  onFilterChange,
}: TodoFilterProps) {
  return (
    <div className="flex justify-center gap-4 my-4">
      <button
        onClick={() => onFilterChange("all")}
        className={`px-3 py-1 rounded ${
          currentFilter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
        data-testid="filter-all"
      >
        Todas
      </button>
      <button
        onClick={() => onFilterChange("active")}
        className={`px-3 py-1 rounded ${
          currentFilter === "active" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
        data-testid="filter-active"
      >
        Activas
      </button>
      <button
        onClick={() => onFilterChange("completed")}
        className={`px-3 py-1 rounded ${
          currentFilter === "completed"
            ? "bg-blue-500 text-white"
            : "bg-gray-200"
        }`}
        data-testid="filter-completed"
      >
        Completadas
      </button>
    </div>
  );
}
