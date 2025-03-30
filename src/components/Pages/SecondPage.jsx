import React, { useState, useEffect } from "react";

const SecondPage = () => {
  const [hoveredCategory, setHoveredCategory] = useState("ai");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imagesets = {
    nature: ["/images/nature1.jpg", "/images/nature2.jpg", "/images/nature3.jpg"],
    ai: ["/images/ai1.jpg", "/images/ai2.jpeg", "/images/ai3.jpeg"],
    handdrawn: ["/images/drawn1.jpg", "/images/drawn2.jpg", "/images/drawn3.jpg"],
  };

  const getImagesToDisplay = () => {
    return screenWidth < 768 ? imagesets[hoveredCategory].slice(0, 2) : imagesets[hoveredCategory];
  };

  return (
    <div className="bg-[#0B0C10]
    flex flex-col lg:flex-row px-[8vw] h-auto py-10 lg:items-center text-black gap-8">
      {/* Category List */}
      <div className="flex flex-col items-center lg:items-start lg:w-1/3">
        {["nature", "ai", "handdrawn"].map((category) => (
          <p
            key={category}
            className={`text-white text-xl font-medium transition-all duration-300 cursor-pointer 
              ${hoveredCategory === category ? "text-black font-bold" : ""}`}
            onMouseEnter={() => setHoveredCategory(category)}
          >
            {category === "nature" ? "Nature Images" : category === "ai" ? "AI Images" : "Hand-Drawn Art"}
          </p>
        ))}
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full lg:w-2/3">
  {getImagesToDisplay().map((image, index) => (
    <div 
      key={index} 
      className="relative overflow-hidden rounded-xl shadow-lg aspect-[3/4] group"
    >
      <img
        src={image}
        alt={`${hoveredCategory} ${index + 1}`}
        className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#F1EFEC]/15  to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"></div>
    </div>
  ))}
</div>

    </div>
  );
};

export default SecondPage;
