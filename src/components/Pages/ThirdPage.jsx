import React from "react";

const ThirdPage = () => {
  return (
    <section className="w-full min-h-[70vh] mt-[-10vh] bg-white flex items-center px-10 ">
      <div className="flex justify-between items-center w-full">
        {/* Left Side - Text */}
        <div className="w-1/3">
          <p className="text-xl font-medium text-gray-900 leading-snug">
            Empowering creators with cutting-edge digital experiences—where art
            meets innovation.
          </p>
          <button className="mt-6 text-black font-medium flex items-center space-x-2">
            <span>Explore All</span>
            <span className="text-lg">↗</span>
          </button>
        </div>

        {/* Right Side - Images */}
        <div className="grid grid-cols-3 gap-6">
          <img
            src="https://via.placeholder.com/300"
            alt="Artistic Design"
            className="w-[300px] h-[400px] rounded-2xl object-cover bg-black"
          />
          <img
            src="https://via.placeholder.com/300"
            alt="Digital Artwork"
            className="w-[300px] h-[400px] rounded-2xl object-cover bg-black"
          />
          <img
            src="https://via.placeholder.com/300"
            alt="Abstract Art"
            className="w-[300px] h-[400px] rounded-2xl object-cover bg-black"
          />
        </div>
      </div>
    </section>
  );
};

export default ThirdPage;
