import React from "react";

export const FifthPage = () => {
  return (
    <section className="w-full px-[5vw] py-10
    md:bg-red-200
    
    ">
      {/* Top Section */}
      <section className="w-full py-10">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          Pixel Perfect
        </h1>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
          {/* Left Section */}
          <div className="lg:w-[40%] text-center lg:text-left">
            <h3 className="text-2xl font-semibold mb-6">
              Bringing ideas to life with <br className="hidden sm:block" /> stunning visuals
            </h3>

            {/* Timeline */}
            <div className="pl-2 sm:pl-4 w-full sm:w-[80%] lg:w-[60%] mx-auto lg:mx-0">
              <div className="mb-6 border-t-2 py-3 border-black">
                <p className="text-lg font-light">
                  Transformed ideas into visually stunning digital experiences.
                </p>
              </div>

              <div className="mt-6 border-t-2 py-3 border-black">
                <p className="text-lg font-light">
                  Expanded into futuristic design and AI-driven experiences for enhanced engagement.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Image Grid */}
          <div className="lg:w-[60%] grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <img
              src="/public/images/4.1img.jpg"
              alt="Artistic Design"
              className="w-full h-[250px] sm:h-[300px] lg:h-[350px] rounded-2xl object-cover"
            />
            <img
              src="/public/images/4.2img.jpg"
              alt="Digital Artwork"
              className="w-full h-[250px] sm:h-[300px] lg:h-[350px] rounded-2xl object-cover"
            />
            <img
              src="/public/images/4.3img.jpg"
              alt="Abstract Art"
              className="w-full h-[250px] sm:h-[300px] lg:h-[350px] rounded-2xl object-cover md:block hidden"
            />
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-8">
        {/* Left Image Grid */}
        <div className="lg:w-[60%] grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          <img
            src="/public/images/5.1img.jpg"
            alt="Artistic Design"
            className="w-full h-[250px] sm:h-[300px] lg:h-[350px] rounded-2xl object-cover"
          />
          <img
            src="/public/images/5.2img.jpg"
            alt="Digital Artwork"
            className="w-full h-[250px] sm:h-[300px] lg:h-[350px] rounded-2xl object-cover"
          />
          <img
            src="/public/images/5.3img.jpg"
            alt="Abstract Art"
            className="w-full h-[250px] sm:h-[300px] lg:h-[350px] rounded-2xl object-cover md:block hidden"
          />
        </div>

        {/* Right Text Section */}
        <div className="lg:w-[40%] text-center lg:text-left flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-6">
            Revolutionizing Digital Experiences
          </h3>

          <div className="w-full sm:w-[80%] lg:w-[60%] mx-auto lg:mx-0">
            <div className="mb-6">
              <p className="text-lg font-light">
                We craft experiences that elevate your artistic journey & engage a wider audience.
              </p>
            </div>

            {/* Styled Button */}
            <div className="mt-6">
              <button className="px-6 py-2 text-lg font-semibold bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300">
                Explore All →
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};