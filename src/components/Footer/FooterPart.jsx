import React from "react";

const FooterPart = () => {
  return (
    <footer className="bg-gray-50 py-8">
      {/* Top Section with Navigation & Let's Chat */}
      <div className="px-10 py-4 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        {/* Navigation Links */}
        <nav className="flex  space-x-6 mb-4 md:mb-0">
          <a href="#" className="hover:text-black">
            About
          </a>
          <a href="#" className="hover:text-black">
            Features
          </a>
          <a href="#" className="hover:text-black">
            Works
          </a>
          <a href="#" className="hover:text-black">
            Support
          </a>
          <a href="#" className="hover:text-black">
            Help
          </a>
        </nav>

        {/* "Let's Chat" Section */}
        <div className="flex flex-col space-y-3 md:space-y-4">
          {/* Title & Description */}
          <h5 className="text-blue-500 font-medium text-lg md:text-xl">
            Stay Inspired. Let's Create Together.
          </h5>

          {/* Email Input Section */}
          <div className="relative border-b border-gray-400 w-full md:w-96">
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-transparent py-2 text-gray-300 placeholder-gray-400 focus:outline-none focus:border-lime-400"
            />

            {/* Arrow Button */}
            <button className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-300 hover:text-lime-400 transition duration-300">
              ➝
            </button>
          </div>
        </div>
      </div>

      {/* PIXELVERSE Title */}

      <div className="w-auto text-center  gap-0  flex flex-col justify-center ">
        <p className="text-center -mb-10 items-center justify-center text-gray-600 text-sm">
          "Where AI Meets Creativity"
        </p>
        <h1 className="text-[19vw]  text-gray-800 font-medium leading-none tracking-tighter">
          PIXELVERSE
        </h1>
      </div>

      {/* Tagline Below Pixelverse */}

      {/* Copyright Section */}
      <div className="text-xs text-gray-500 text-center mt-4">
        © Copyright 2024, All Rights Reserved
      </div>
    </footer>
  );
};

export default FooterPart;
