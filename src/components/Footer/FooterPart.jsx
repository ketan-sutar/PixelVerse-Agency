import React from "react";
import ExploreButton from "./ExploreButton";
import '@fontsource/jersey-25';

const FooterPart = () => {
  return (
    <footer className="w-full bg-[#0B0C10] py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-900 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-pink-900 opacity-10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Section - Title */}
        <div className="text-center px-4 sm:px-6 lg:px-8 mb-16 md:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 max-w-4xl mx-auto leading-tight md:leading-snug">
            Unleash your imagination in a world where{" "}
            <span className="text-white">AI meets creativity</span>
          </h1>
        </div>

        {/* Middle Section - Explore Now Button */}
        <div className="flex justify-center mb-10 md:mb-10 transform hover:scale-105 transition-transform duration-500">
          <ExploreButton />
        </div>

        {/* Bottom Section - Brand Name */}
        <div className="flex flex-col items-center mb-16 md:mb-20 group">
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-2 md:mb-4 font-mono tracking-widest">
            WHERE AI MEETS CREATIVITY
          </p>
          <h1 className="font-jersey text-7xl sm:text-8xl md:text-[15vw] tracking-tighter uppercase leading-none bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-700">
            PIXELVERSE
          </h1>
        </div>

        {/* Bottom Section - Navigation & Copyright */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between text-gray-400 border-t border-gray-800 pt-8">
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6 md:mb-0">
            {["Shop", "Visit", "About Us", "News & Media", "Our Tools"].map(
              (item) => (
                <a
                  href="#"
                  key={item}
                  className="relative text-sm sm:text-base hover:text-white transition-colors duration-300 before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-purple-400 before:to-pink-400 before:transition-all before:duration-300 hover:before:w-full"
                >
                  {item}
                </a>
              )
            )}
          </nav>

          {/* Copyright Text */}
          <div className="text-xs sm:text-sm text-gray-500 font-mono">
            © {new Date().getFullYear()} PIXELVERSE. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPart;
