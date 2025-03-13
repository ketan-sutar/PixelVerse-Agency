import React from "react";

export const FifthPage = () => {
  return (
    <>
      <section className="w-full h-auto px-[5vw]">
        {/* top section */}
        <section className="w-full h-auto py-10 ">
          {/* Title */}
          <h1 className="text-4xl font-bold text-center mb-12">
            Pixel Perfect
          </h1>

          <div className="flex flex-col lg:flex-row items-center justify-between px-1">
            {/* Left Section */}
            <div className="lg:w-[40%] text-left">
              <h3 className="text-2xl font-semibold mb-[5vw]">
                Bringing ideas to life with <br /> stunning visuals
              </h3>

              {/* Timeline */}
              <div className="pl-1 w-[60%]">
                <div className="mb-6 border-t-2 py-3 border-black">
                  <p className="text-lg font-light">
                    Transformed ideas into visually stunning digital
                    experiences.{" "}
                  </p>
                </div>

                <div className="mt-6 border-t-2 py-3 border-black">
                  <p className="text-lg font-light">
                    Expanded into futuristic design and AI-driven experiences
                    for enhanced engagement.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section (Images) */}
            <div className="lg:w-[60%] grid grid-cols-3 gap-6 mt-8 lg:mt-0">
              <img
                src="/public/images/4.1img.jpg"
                alt="Artistic Design"
                className=" w-full h-[350px] rounded-2xl object-cover "
              />
              <img
                src="/public/images/4.2img.jpg"
                alt="Digital Artwork"
                className="w-full h-[350px] rounded-2xl object-cover "
              />
              <img
                src="/public/images/4.3img.jpg"
                alt="Abstract Art"
                className="w-full h-[350px] rounded-2xl object-cover "
              />
            </div>
          </div>
        </section>

        {/* bottom section */}

        <section className="w-full h-auto  flex">
          <div className="w-full h-auto flex">
            {/* left img prt */}
            <div className="lg:w-[60%] grid grid-cols-3 gap-6 mt-8 lg:mt-0">
              <img
                src="/public/images/5.1img.jpg"
                alt="Artistic Design"
                className=" w-full h-[300px] rounded-2xl object-cover "
              />
              <img
                src="/public/images/5.2img.jpg"
                alt="Digital Artwork"
                className="w-full h-[300px] rounded-2xl object-cover "
              />
              <img
                src="/public/images/5.3img.jpg"
                alt="Abstract Art"
                className="w-full h-[300px] rounded-2xl object-cover "
              />
            </div>

            {/* right text prt */}

            <div className="lg:w-[40%] flex flex-col items-center justify-center text-left">
              <h3 className="text-2xl font-semibold mb-[5vw]">
                Revolutionizing Digital Experiences
              </h3>

              {/* Timeline */}
              <div className=" w-[60%]">
                <div className="mb-6 ">
                  <p className="text-lg font-light">
                    We craft experiences that elevate your artistic journey &
                    engage a wider audience.
                  </p>
                </div>

                <div className="mt-6">
                  <button>Explore All</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
