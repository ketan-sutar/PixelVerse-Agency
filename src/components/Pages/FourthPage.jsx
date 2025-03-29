import React from "react";

const FourthPage = () => {
  return (
    <section className="w-full min-h-[80vh] flex flex-col px-[5vw] py-10">
      {/* Heading at the Top */}
      <div className="w-full mb-6">
        <h1 className="text-3xl text-center sm:text-4xl font-bold text-black">
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
          <h3 className="text-xl font-semibold text-black">
            Step into the future of art with Dttio. We provide cutting-edge digital services.
          </h3>
          <div className="border-l-2 border-black pl-4 mt-4">
            <p className="text-gray-700">
              Our innovative solutions are designed to enhance your artistic journey and connect you with a wider audience.
            </p>
            <a href="#" className="text-black font-medium mt-4 inline-block">
              Read more →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourthPage;
