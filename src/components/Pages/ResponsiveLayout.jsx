import React from "react";

const ResponsiveLayout = () => {
  return (
    <>
      <div
        className="
      sm:flex sm:flex-col sm:items-center sm:justify-center sm:min-h-[80vh]
       md:flex md:flex-col md:items-center md:justify-center md:min-h-[80vh]
     lg:flex lg:flex-col lg:items-center lg:justify-center lg:min-h-[90vh]
       xl:flex xl:flex-col xl:items-center xl:justify-center xl:min-h-[90vh]
      
       2xl:flex 2xl:flex-col 2xl:items-center 2xl:justify-center 2xl:min-h-[90vh]
      bg-[#0B0C10]
      "
      >
        <div className="sm:flex sm:flex-col sm:items-center md:flex md:flex-col md:items-center lg:flex lg:flex-col lg:items-center xl:flex xl:flex-col xl:items-center 2xl:flex 2xl:flex-col 2xl:items-center">
          <div className="sm:flex sm:items-center md:flex md:items-center lg:flex lg:items-center xl:flex xl:items-center 2xl:flex 2xl:items-center">
            <h1 className="sm:text-[12vw] sm:font-normal sm:tracking-tight md:text-[12.5vw] md:font-normal md:tracking-tight lg:text-[12vw] lg:font-normal lg:tracking-tight xl:text-[13vw] xl:font-normal xl:tracking-tight xl:pr-[2vw] 2xl:text-[13vw] font-kanit font-normal tracking-tight text-[12vw] flex flex-col text-transparent bg-clip-text bg-gradient-to-r from-[#6A0DAD] to-[#E75480]">
              Pixel Verse
            </h1>
            <div
              className="font-barlow text-white
            sm:text-[2.5vw] sm:font-medium sm:ml-[3vw]
            md:text-[2.3vw] md:font-medium md:ml-[4.5vw]
            lg:text-[1.5vw] lg:font-normal lg:ml-[3.5vw]
            xl:text-[1.5vw] xl:font-medium xl:ml-[2.5vw] xl:leading-[1.8vw]
            2xl:ml-[3.5vw] 2xl:text-[1.5vw] 2xl:font-medium"
            >
              Crafting Immersive <br /> Visual Experiences
            </div>
          </div>
          <div className="sm:flex sm:mr-[10%] sm:items-center sm:mt-[-6vw] md:flex md:ml-[20%] md:items-center md:mt-[-6vw] lg:flex lg:ml-[20%] lg:items-center lg:mt-[-6vw] xl:flex xl:ml-[20%] xl:items-center xl:mt-[-6vw] 2xl:flex 2xl:ml-[20%] 2xl:items-center 2xl:mt-[-6vw] flex ml-[20%] items-center mt-[-6vw]">
            <div
              className="font-barlow 
            sm:text-[2.1vw] sm:font-normal sm:pr-[1vw] sm:w-[25vw] text-white 
            md:text-[2.3vw] md:font-medium md:w-[23vw] md:leading-[2.5vw]  
            lg:text-[1.5vw] lg:font-normal lg:leading-[1.8vw] lg:w-[20vw]  
            xl:text-[1.5vw] xl:ml-[1vw] xl:leading-[1.8vw] xl:w-[19vw] xl:font-medium   
            2xl:text-[1.5vw] 2xl:font-medium 2xl:mr-[5vw]"
            >
              We are specialised in <br /> AI-driven digital art <br /> design.
            </div>

            <div className="sm:text-[12vw] sm:font-normal sm:tracking-tight md:text-[12.5vw] md:font-normal md:tracking-tight lg:text-[12vw] lg:font-normal lg:tracking-tight xl:text-[13vw] xl:font-normal xl:tracking-tight xl:pl-[2vw] 2xl:text-[13vw] 2xl:font-normal 2xl:tracking-tight 2xl:pl-[0.5vw] text-transparent bg-clip-text bg-gradient-to-l from-purple-400 to-pink-400 font-kanit">
              <span className="px-[1.5vw]">/</span>
              Agency
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponsiveLayout;
