import React from "react";

export const FifthPage = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-100 via-blue-50 to-gray-100 px-6 sm:px-12 lg:px-24 xl:px-32">
      <div className="container mx-auto">
        {/* Top Section */}
        <section className="mb-20 md:mb-28">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-gray-900 mb-10">
            Crafting Pixel Perfect Digital Experiences
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Section */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-semibold text-blue-600 mb-8">
                Bringing Creative Visions to Life with Stunning Visuals
              </h3>

              {/* Timeline */}
              <div className="relative pl-6">
                <div className="absolute top-0 left-0 h-full w-0.5 bg-blue-500"></div>
                <div className="mb-10 py-3">
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-blue-500 mr-4 shadow"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Early Stage Innovation</h4>
                      <p className="text-gray-600 text-sm sm:text-base mt-1">
                        We transformed initial concepts into visually compelling digital experiences, focusing on user-centric design.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 py-3">
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-blue-500 mr-4 shadow"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Expanding Horizons</h4>
                      <p className="text-gray-600 text-sm sm:text-base mt-1">
                        Venturing into futuristic design and AI-driven interactions to create deeper and more engaging user experiences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Image Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="relative rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                <img
                  src="/images/4.1img.jpg"
                  alt="Artistic Design"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                <img
                  src="/images/4.2img.jpg"
                  alt="Digital Artwork"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hidden md:block">
                <img
                  src="/images/4.3img.jpg"
                  alt="Abstract Art"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 order-2 lg:order-1">
            <div className="relative rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <img
                src="/images/5.1img.jpg"
                alt="Creative Collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <img
                src="/images/5.2img.jpg"
                alt="Innovative Solutions"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hidden md:block">
              <img
                src="/images/5.3img.jpg"
                alt="Exceptional Results"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Text Section */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <h3 className="text-2xl lg:text-3xl font-semibold text-blue-600 mb-8">
              Revolutionizing Digital Experiences for Lasting Impact
            </h3>

            <div className="relative pl-6">
              <div className="absolute top-0 left-0 h-full w-0.5 bg-blue-500"></div>
              <div className="py-3">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-blue-500 mr-4 shadow"></div>
                  <div>
                    <p className="text-lg text-gray-700 sm:text-xl leading-relaxed">
                      We craft immersive digital experiences that not only elevate your artistic journey but also deeply resonate with and engage your target audience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Styled Button */}
              <div className="mt-10">
                <button className="inline-flex items-center px-8 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Explore Our Portfolio
                  <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default FifthPage;