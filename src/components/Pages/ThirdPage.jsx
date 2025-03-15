import React from "react";

const ThirdPage = () => {
  return (
    <section
      className="
    w-full h-[70vh] bg-red-800  px-[5vw] mt-[-20vh]
    
    sm:bg-blue-900 sm:mt-[4vh]
    md:bg-green-300 md:mt-[5vh]
    lg:bg-yellow-300 lg:mt-[-10vh]
    xl:bg-red-300 xl:mt-[-10vh]
    
    2xl:bg-orange-300 2xl:mt-[5vh]
    
    
    "
    >
      <div className="flex flex-col justify-start items-center w-full
      h-auto
      lg:flex lg:flex-row lg:w-auto
      sm:bg-red-300">
        
        {/* Left Side - Text */}
        <div className="w-auto h-auto
         flex flex-col justify-center items-center mt-[5vh]">
          <p className="text-xl font-medium text-gray-900 leading-snug
          w-[60vw] text-center">
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
        sm:bg-green-300">
          <img
            src="/public/images/2.1img.jpg"
            alt="Artistic Design"
            className="w-[50vw] h-[60vw] rounded-2xl object-cover
            sm:w-[40vw] sm:h-[50vw]
            md:w-[300px] md:h-[400px]"
          />
          <img
            src="/public/images/2.2img.jpg"
            alt="Digital Artwork"
            className="w-[50vw] h-[60vw] rounded-2xl object-cover
            sm:w-[40vw] sm:h-[50vw]
            md:w-[300px] md:h-[400px]"
          />
          <img
            src="/public/images/2.3img.jpg"
            alt="Abstract Art"
            className="w-[300px] h-[400px] rounded-2xl object-cover hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default ThirdPage;
