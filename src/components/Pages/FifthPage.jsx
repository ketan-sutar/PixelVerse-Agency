import React from "react";

export const FifthPage = () => {
  return (
    <section className="w-full min-h-screen bg-white flex flex-col items-center px-10 py-10">
      {/* Top Section */}
      <div className="w-full max-w-6xl flex">
        {/* Left Text Content */}
        <div className="w-1/2 pr-10">
          <h1 className="text-4xl font-bold text-black mb-4">
            We provide cutting-edge digital
          </h1>
          <p className="text-gray-700 mb-6">
            Empower artists to showcase their work globally.
          </p>
          <div className="border-l-2 border-black pl-4">
            <p className="text-gray-700">
              From stunning websites to interactive digital exhibits.
            </p>
            <div className="mt-4">
              <p className="font-medium">2022</p>
              <p className="font-medium">2023</p>
            </div>
          </div>
        </div>

        {/* Right Image Grid */}
        <div className="w-1/2 grid grid-cols-3 gap-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Art"
            className="rounded-xl"
          />
          <img
            src="https://via.placeholder.com/150"
            alt="Art"
            className="rounded-xl"
          />
          <img
            src="https://via.placeholder.com/150"
            alt="Art"
            className="rounded-xl"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full max-w-6xl flex mt-10">
        {/* Left Image Grid */}
        <div className="w-1/2 grid grid-cols-3 gap-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Art"
            className="rounded-xl"
          />
          <img
            src="https://via.placeholder.com/150"
            alt="Art"
            className="rounded-xl"
          />
          <img
            src="https://via.placeholder.com/150"
            alt="Art"
            className="rounded-xl"
          />
        </div>

        {/* Right Text Content */}
        <div className="w-1/2 pl-10">
          <h2 className="text-2xl font-semibold text-black mb-4">
            Our innovative solutions are designed
          </h2>
          <p className="text-gray-700 mb-6">
            We designed to enhance your artistic journey & connect a wider
            audience.
          </p>
          <a href="#" className="text-black font-medium mt-4 inline-block">
            Explore All →
          </a>
        </div>
      </div>
    </section>
  );
};
