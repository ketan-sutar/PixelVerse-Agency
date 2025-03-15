import React from "react";

const DefaultLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen  bg-green-300 text-black">
      {/* Main Heading */}
      <h1 className="text-[15vw]  font-bold font-serif tracking-tight">
        PixelVerse
      </h1>

      {/* Subheading */}
      <p className="text-[4vw]  mt-4 font-medium font-sans leading-tight">
        Crafting Immersive Visual Experiences
      </p>

      {/* Description */}
      <p className="text-[3.5vw] md:text-[2.5vw] lg:text-[1.5vw] mt-2 font-normal font-sans text-center max-w-[80%] md:max-w-[60%] lg:max-w-[50%] leading-relaxed">
        We specialize in AI-driven digital art design, creating stunning visuals
        that captivate and inspire.
      </p>

      {/* Secondary Heading */}
      <h1 className="text-[15vw]  mt-4 font-bold font-serif tracking-tight">
        Agency
      </h1>
    </div>
  );
};

export default DefaultLayout;