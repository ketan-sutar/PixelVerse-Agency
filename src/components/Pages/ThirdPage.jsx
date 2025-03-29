import React from "react";

const ThirdPage = () => {
  return (
    <section
      className="w-full h-auto py-[1vw] bg-red-800 px-[5vw] mt-[-30vw]
        sm:bg-blue-900 sm:mt-[4vh]
        md:bg-green-300 md:mt-[5vh]
        lg:bg-yellow-300 lg:mt-[-10vh]
        xl:bg-red-300 xl:mt-[-10vh]
        2xl:bg-orange-300 2xl:mt-[5vh]"
    >
      <div className="flex flex-col justify-start items-center w-full h-auto
        lg:flex-row lg:w-full lg:justify-start lg:items-center lg:gap-10 lg:px-[1vw]
        lg:bg-green-400
      ">
        
        {/* Left Side - Text */}
        <div className="w-full flex flex-col justify-center items-center 
        lg:w-auto lg:items-start lg:text-left lg:bg-red-200
        ">
          <p className="text-xl font-medium text-gray-900 leading-snug text-center 
          lg:text-left lg:w-[90%]">
            Empowering creators with cutting-edge digital experiences where art
            meets innovation.
          </p>
          <button className="mt-4 mb-5 text-black font-medium flex items-center space-x-2">
            <span>Explore All</span>
            <span className="text-lg">↗</span>
          </button>
        </div>

        {/* Right Side - Images */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-2 
        lg:w-auto  ">
          <img
            src="/public/images/2.1img.jpg"
            alt="Artistic Design"
            className="w-full h-auto rounded-2xl object-cover 
            md:w-[30vw] md:h-[35vw]
            lg:w-[50vw] lg:h-[29vw]"
          />
          <img
            src="/public/images/2.2img.jpg"
            alt="Digital Artwork"
            className="w-full h-auto rounded-2xl object-cover 
            md:w-[30vw] md:h-[35vw]
            lg:w-[50vw] lg:h-[29vw]"
          />
          <img
            src="/public/images/2.3img.jpg"
            alt="Abstract Art"
            className="w-[300px] h-[400px] rounded-2xl object-cover hidden md:block 
            md:w-[30vw] md:h-[35vw]
            lg:w-[50vw] lg:h-[29vw]"
          />
        </div>
      </div>
    </section>
  );
};

export default ThirdPage;
