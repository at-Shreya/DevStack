import { useEffect, useState } from "react";

import { toast } from "react-toastify";

import type { Technology } from "../../types/technology";

import TechnologyCard from "./TechnologyCard";
import Sidebar from "./Sidebar";

const MainTech = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  // Load technologies from JSON
  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await fetch("/technologies.json");

        const data = await response.json();

        // Temporary delay for testing
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setTechnologies(data);

        setLoading(false);
      } catch (error) {
        console.log("Error loading technologies:", error);

        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  // Add technology
  const handleAdd = (technology: Technology) => {
    const alreadyAdded = stack.some((item) => item.id === technology.id);

    if (alreadyAdded) {
      toast.warning("This technology is already in your stack!");

      return;
    }

    setStack([...stack, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  // Remove one technology
  const handleRemove = (id: string) => {
    const technology = stack.find((item) => item.id === id);

    setStack(stack.filter((technology) => technology.id !== id));

    if (technology) {
      toast.info(`${technology.name} removed from your stack!`);
    }
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);

    toast.info("All technologies removed from your stack!");
  };

  return (
    <section className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Explore the Technologies
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Discover popular technologies and build your perfect development
            stack for your next project.
          </p>
        </div>

        {/* Loading */}
        {loading ? (
          <p className="mt-12 text-center text-gray-500">
            Loading technologies...
          </p>
        ) : (
          /* Content */
          <div className="mt-12 grid gap-8 lg:grid-cols-4">
            {/* Technology Cards  */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
              {technologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  onAdd={handleAdd}
                  isAdded={stack.some((item) => item.id === technology.id)}
                />
              ))}
            </div>

            {/* Your Stack */}
            <div className="lg:col-span-1">
              <Sidebar
                stack={stack}
                onRemove={handleRemove}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MainTech;
