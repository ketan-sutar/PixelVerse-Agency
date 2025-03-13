import React, { useState } from "react";

const SecondPage = () => {
  const [hoveredCategory, setHoveredCategory] = useState("ai");

  const imagesets = {
    nature: [
      "/public/images/nature1.jpg",
      "/public/images/nature2.jpg",
      "/public/images/nature3.jpg",
    ],
    ai: [
      "/public/images/ai1.jpg",
      "/public/images/ai2.jpeg",
      "/public/images/ai3.jpeg",
    ],
    handdrawn: [
      // Fixed typo from "handrawn" to "handdrawn"
      "/public/images/drawn1.jpg",
      "/public/images/drawn2.jpg",
      "/public/images/drawn3.jpg",
    ],
  };

  return (
    <>
      <div className="flex items-center px-[5vw] justify-between min-h-[80vh] text-black">
        {/* Left: Image Gallery */}
        <div className="flex space-x-6">
          {imagesets[hoveredCategory].map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${hoveredCategory} ${index + 1}`}
              className="w-[300px] h-[400px] rounded-2xl object-cover transition-transform duration-300 hover:scale-105"
            />
          ))}
        </div>

        {/* Right: Category List */}
        <div className="flex flex-col pr-[1vw] items-start space-y-1 text-lg font-sans">
          <p
            className="text-gray-400 text-lg hover:text-black hover:font-bold hover:before:content-['→'] hover:before:mr-2 transition-all duration-300"
            onMouseEnter={() => setHoveredCategory("nature")}
          >
            Nature Images
          </p>
          <p
            className="text-gray-400 text-lg hover:text-black hover:font-bold hover:before:content-['→'] hover:before:mr-2 transition-all duration-300"
            onMouseEnter={() => setHoveredCategory("ai")}
          >
            AI Images
          </p>
          <p
            className="text-gray-400 text-lg hover:text-black hover:font-bold hover:before:content-['→'] hover:before:mr-2 transition-all duration-300"
            onMouseEnter={() => setHoveredCategory("handdrawn")} // Fixed typo
          >
            Hand Draw
          </p>
        </div>
      </div>
    </>
  );
};

export default SecondPage;
