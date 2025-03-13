import React from "react";

const FourthPage = () => {
  return (
    <section className="w-full min-h-[80vh] bg-white flex flex-col px-[5vw]">
      {/* Heading at the Top (Aligned Left) */}
      <div className="w-full">
        <h1 className="text-4xl font-bold text-black self-start mb-8">
          Digital Expertise
        </h1>
      </div>

      {/* Main Content (Image + Text) */}
      <div className="flex w-full max-w-6xl items-center">
        {/* Left Side - Image */}
        <div className="w-1/2">
          <img
            src="/public/images/3img.jpg"
            alt="Artistic Design"
            className="w-auto h-[70vh] rounded-2xl object-cover bg-black"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="w-1/2 pl-10">
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
