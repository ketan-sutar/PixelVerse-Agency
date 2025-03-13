import React from "react";

const FooterPart = () => {
  return (
    <footer className="w-full h-auto flex flex-col justify-center items-center   text-black ">
      {/* Top Section - Title */}
      <div className="text-center pt-[2vw] px-32">
        <h1 className="text-2xl md:text-4xl font-semibold max-w-3xl mx-auto leading-snug">
          Unleash your imagination and explore a world where AI meets
          creativity. Transform your ideas into reality with us!
        </h1>
      </div>

      {/* Middle Section - explore noew button */}
      <div className="mt-[2vw] border">
        <div className="relative border-b border-gray-400 w-full md:w-96">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-transparent py-2 text-white placeholder-gray-400 focus:outline-none"
          />
          <button className="absolute right-0 top-1/2 -translate-y-1/2 text-white hover:text-lime-400 transition duration-300">
            ➝
          </button>
        </div>
      </div>

      {/* Bottom Section - Brand Name */}
      <div className="flex flex-col items-center mt-[1vw]">
        <p className="text-sm text-gray-900 mb-1">
          "Where AI Meets Creativity"
        </p>
        <h1 className="text-[17vw] font-bold tracking-tighter uppercase">
          PIXELVERSE
        </h1>
      </div>

      {/* Bottom Section - Navigation & Copyright */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm mt-1 px-[2vw]">
        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <a href="#" className="hover:text-white">
            Templates
          </a>
          <a href="#" className="hover:text-white">
            Tools
          </a>
          <a href="#" className="hover:text-white">
            Features
          </a>
          <a href="#" className="hover:text-white">
            About Us
          </a>
        </nav>

        {/* Copyright Text */}
        <div className="text-xs text-gray-500 mt-2 md:mt-0">
          © 2024 PixelVerse. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterPart;
