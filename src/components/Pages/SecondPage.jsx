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
    nature: [
      "/images/nature1.jpg",
      "/images/nature2.jpg",
      "/images/nature3.jpg",
    ],
    ai: ["/images/ai1.jpg", "/images/ai2.jpeg", "/images/ai3.jpeg"],
    handdrawn: [
      "/images/drawn1.jpg",
      "/images/drawn2.jpg",
      "/images/drawn3.jpg",
    ],
  };

  const getImagesToDisplay = () => {
    return screenWidth < 768
      ? imagesets[hoveredCategory].slice(0, 2)
      : imagesets[hoveredCategory];
  };

  return (
    <div
      className="flex flex-col lg:flex-row px-[5vw] h-[80vh] py-5 
    
    
      lg:px-[5vw] 
      xl:flex xl:justify-center
    
    text-black gap-4"
    >
      {/* Right: Category List (On top for mobile, left for larger screens) */}
      <div
        className="
      
     xl:flex 
     2xl:h-auto 2xl:w-auto 2xl:ml-5
      
      flex flex-col items-center lg:items-end
      lg:ml-[1vw]
       text-lg font-sans order-1 "
      >
        {["nature", "ai", "handdrawn"].map((category) => (
          <p
            key={category}
            className="text-gray-400 text-lg hover:text-black hover:font-bold hover:before:content-['→'] hover:before:mr-2 transition-all duration-300 cursor-pointer"
            onMouseEnter={() => setHoveredCategory(category)}
          >
            {category === "nature"
              ? "Nature Images"
              : category === "ai"
              ? "AI Images"
              : "Hand Draw"}
          </p>
        ))}
      </div>

      {/* Left: Image Gallery (Below text in mobile, right in larger screens) */}
      <div className="flex gap-3 flex-wrap justify-center lg:justify-start lg:space-x-4 order-2 lg:order-none">
        {getImagesToDisplay().map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${hoveredCategory} ${index + 1}`}
            className="w-[40vw] h-[50vw]
            
            sm:w-[40vw] sm:h-[50vw]
             md:w-[28vw]  md:h-[40vw]
             lg:w-[23vw]   lg:h-[30vw]
             xl:w-[24vw] xl:h-[28vw]
             2xl:w-[24vw] 2xl:h-[28vw]
              rounded-2xl object-cover transition-transform duration-300 hover:scale-105"
          />
        ))}
      </div>
    </div>
  );
};

export default SecondPage;
