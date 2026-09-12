import type { Technology } from "../../types/technology";

interface SidebarProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const Sidebar = ({
  stack,
  onRemove,
  onRemoveAll
}: SidebarProps) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

      {/* Heading */}
      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Your Stack
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {stack.length} Technology Selected
          </p>
        </div>

        {stack.length > 0 && (
          <button
            onClick={onRemoveAll}
            className="text-sm font-medium text-red-500 hover:text-red-600"
          >
            Remove All
          </button>
        )}

      </div>

      {/* Empty Message */}
      {stack.length === 0 && (
        <div className="mt-8 rounded-xl bg-gray-50 p-6 text-center">
          <p className="text-sm text-gray-500">
            No technologies added yet.
          </p>

          <p className="mt-1 text-xs text-gray-400">
            Add technologies from the list to build your stack.
          </p>
        </div>
      )}

      {/* Stack Items */}
      <div className="mt-5 flex flex-col gap-3">

        {stack.map((technology) => (
          <div
            key={technology.id}
            className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3"
          >

            <img
              src={technology.icon}
              alt={technology.name}
              className="h-9 w-9"
            />

            <div className="flex-1">
              <h3 className="text-sm font-semibold text-gray-800">
                {technology.name}
              </h3>

              <p className="text-xs text-gray-500">
                {technology.category}
              </p>
            </div>

            <button
              onClick={() => onRemove(technology.id)}
              className="text-lg text-gray-400 hover:text-red-500"
            >
              ✕
            </button>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Sidebar;