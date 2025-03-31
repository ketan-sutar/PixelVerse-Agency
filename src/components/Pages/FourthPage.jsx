import React from "react";

const FourthPage = () => {
  return (
    <section className="
    bg-[#0B0C10]
    w-full min-h-[80vh] flex flex-col px-[5vw] py-10 ">
      {/* Heading at the Top */}
      <div className="w-full mb-6">
        <h1 className="font-barlow font-bold
        text-3xl sm:text-4xl lg:text-5xl  text-center text-[#F3F4F6] mb-10">
          Digital Expertise
        </h1>
      </div>

      {/* Main Content (Image + Text) */}
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl mx-auto gap-8">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src="/public/images/3img.jpg"
            alt="Artistic Design"
            className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] h-auto rounded-2xl object-cover"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-xl font-barlow font-medium
           text-white">
            Step into the future of art with Dttio. We provide cutting-edge digital services.
          </h3>
          <div className="border-l-2 border-gray-500 pl-4 mt-4">
            <p className="
            font-barlow font-light
            text-gray-300">
              Our innovative solutions are designed to enhance your artistic journey and connect you with a wider audience.
            </p>
            <a href="#" className="text-blue-400 font-barlow font-semibold mt-4 inline-block hover:text-blue-300 transition-colors">
              Read more →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourthPage;
