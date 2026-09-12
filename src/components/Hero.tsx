import bannerStack from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 px-6 py-20 lg:flex-row">
        
        {/* Left Side */}
        <div className="max-w-2xl">
          <h1 className="text-5xl font-extrabold leading-tight text-gray-900">
            Build Your Ideal
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <button className="rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-3 font-semibold text-white shadow-md hover:opacity-90">
              Explore Technologies
            </button>

            <button className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="mt-10 lg:mt-0">
          <img
            src={bannerStack}
            alt="Development Stack"
            className="w-72 lg:w-80"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
