import { useState } from "react";

import technologies from "../../data/technologies.json";

import type { Technology } from "../../types/technology";

import TechnologyCard from "./TechnologyCard";
import Sidebar from "./Sidebar";

const MainTech = () => {

  const [stack, setStack] = useState<Technology[]>([]);

  // Add technology
  const handleAdd = (technology: Technology) => {

    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      alert("This technology is already in your stack!");
      return;
    }

    setStack([...stack, technology]);
  };


  // Remove one technology
  const handleRemove = (id: string) => {
    setStack(
      stack.filter((technology) => technology.id !== id)
    );
  };


  // Remove all technologies
  const handleRemoveAll = () => {
    setStack([]);
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
            Discover popular technologies and build your perfect
            development stack for your next project.
          </p>

        </div>


        {/* Content */}
        <div className="mt-12 grid gap-8 lg:grid-cols-4">

          {/* Technology Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-3">
            
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                onAdd={handleAdd}
                isAdded={stack.some(
                  (item) => item.id === technology.id
                )}
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

      </div>

    </section>
  );
};

export default MainTech;