import React from "react";

const ResponsiveLayout = () => {
  return (
    <>
      <div
        className="
      sm:bg-gradient-to-br from-[#111827] to-[#000000] sm:flex sm:flex-col sm:items-center sm:justify-center sm:min-h-[80vh]
      md:bg-gradient-to-br from-[#111827] to-[#000000] md:flex md:flex-col md:items-center md:justify-center md:min-h-[80vh]
      lg:bg-gradient-to-br from-[#111827] to-[#581c87] lg:flex lg:flex-col lg:items-center lg:justify-center lg:min-h-[90vh]
      xl:bg-gradient-to-br from-[#111827] to-[#831843] xl:flex xl:flex-col xl:items-center xl:justify-center xl:min-h-[90vh]
      2xl:bg-gradient-to-br from-[#111827] to-[#c084fc] 2xl:flex 2xl:flex-col 2xl:items-center 2xl:justify-center 2xl:min-h-[90vh]
      bg-gradient-to-br from-[#111827] to-[#000000]
      "
      >
        <div className="sm:flex sm:flex-col sm:items-center md:flex md:flex-col md:items-center lg:flex lg:flex-col lg:items-center xl:flex xl:flex-col xl:items-center 2xl:flex 2xl:flex-col 2xl:items-center">
          <div className="sm:flex sm:items-center md:flex md:items-center lg:flex lg:items-center xl:flex xl:items-center 2xl:flex 2xl:items-center">
            <h1 className="sm:text-[12vw] sm:font-serif sm:font-normal sm:tracking-tight sm:text-[#f9a8d4] md:text-[12.5vw] md:font-serif md:font-normal md:tracking-tight md:text-[#f472b6] lg:text-[12vw] lg:font-serif lg:font-normal lg:tracking-tight lg:text-[#d8b4fe] xl:text-[13vw] xl:font-serif xl:font-normal xl:tracking-tight xl:pr-[2vw] xl:text-[#c084fc] 2xl:text-[13vw] font-serif font-normal tracking-tight text-[#c084fc] text-[12vw] flex flex-col text-[#f472b6]">
              Pixel Verse
            </h1>
            <div className="sm:text-[2.5vw] sm:font-serif sm:font-medium sm:ml-[3vw] sm:text-[#581c87] md:text-[2.3vw] md:font-serif md:font-medium md:ml-[4.5vw] md:text-[#831843] lg:text-[1.5vw] lg:font-serif lg:font-normal lg:ml-[3.5vw] lg:text-[#c084fc] xl:text-[1.5vw] xl:font-serif xl:font-medium xl:ml-[2.5vw] xl:leading-[1.8vw] xl:text-[#f9a8d4] 2xl:ml-[3.5vw] 2xl:text-[1.5vw] 2xl:font-sans 2xl:font-medium 2xl:text-[#f472b6]">
              Crafting Immersive <br /> Visual Experiences
            </div>
          </div>
          <div className="sm:flex sm:mr-[10%] sm:items-center sm:mt-[-6vw] md:flex md:ml-[20%] md:items-center md:mt-[-6vw] lg:flex lg:ml-[20%] lg:items-center lg:mt-[-6vw] xl:flex xl:ml-[20%] xl:items-center xl:mt-[-6vw] 2xl:flex 2xl:ml-[20%] 2xl:items-center 2xl:mt-[-6vw] flex ml-[20%] items-center mt-[-6vw]">
            <div className="sm:text-[2.1vw] sm:font-sans sm:font-normal sm:pr-[1vw] sm:w-[25vw] sm:text-[#9ca3af] md:text-[2.3vw] md:font-sans md:font-medium md:w-[23vw] md:leading-[2.5vw] md:text-[#6b7280] lg:text-[1.5vw] lg:font-sans lg:font-normal lg:leading-[1.8vw] lg:w-[20vw] lg:text-[#9ca3af] xl:text-[1.5vw] xl:ml-[1vw] xl:leading-[1.8vw] xl:w-[19vw] xl:font-sans xl:font-medium xl:text-[#6b7280] 2xl:text-[1.5vw] 2xl:font-sans 2xl:font-medium 2xl:mr-[5vw] 2xl:text-[#9ca3af] text-sm font-sans font-normal mr-3 text-[#9ca3af]">
              We are specialised in <br /> AI-driven digital art <br /> design.
            </div>
            <div className="sm:text-[12vw] sm:font-serif sm:font-normal sm:tracking-tight sm:text-[#f9a8d4] md:text-[12.5vw] md:font-serif md:font-normal md:tracking-tight md:text-[#f472b6] lg:text-[12vw] lg:font-serif lg:font-normal lg:tracking-tight lg:text-[#d8b4fe] xl:text-[13vw] xl:font-serif xl:font-normal xl:tracking-tight xl:pl-[2vw] xl:text-[#c084fc] 2xl:text-[13vw] 2xl:font-serif 2xl:font-normal 2xl:tracking-tight 2xl:pl-[0.5vw] 2xl:text-[#c084fc]">
              /Agency
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponsiveLayout;
