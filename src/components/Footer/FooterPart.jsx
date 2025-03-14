import React from "react";
import ExploreButton from "./ExploreButton";

const FooterPart = () => {
  return (
    <footer className="w-full h-[90vh] flex flex-col justify-center items-center text-black">
      {/* Top Section - Title */}
      <div className="text-center pt-[2vw] px-32">
        <h1 className="text-2xl md:text-4xl font-semibold max-w-3xl mx-auto leading-snug">
          Unleash your imagination and explore a world where AI meets
          creativity. Transform your ideas into reality with us!
        </h1>
      </div>

      {/* Middle Section - Explore Now Button */}
      <div className="mt-[2vw] mb-3">
        <ExploreButton/>
      </div>

      {/* Bottom Section - Brand Name */}
      <div className="flex flex-col items-center">
        <p className="text-[1.2vw] text-gray-900 mb-1">"Where AI Meets Creativity"</p>
        <h1 className="text-[20vw] font-semibold tracking-tighter uppercase leading-none">
          PIXELVERSE
        </h1>
      </div>

      {/* Bottom Section - Navigation & Copyright */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm mt-1 px-[2vw]">
        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <a href="#" className="hover:text-red-500">
            Shop
          </a>
          <a href="#" className="hover:text-red-500">
            Visit
          </a>
          <a href="#" className="hover:text-red-500">
            About Us
          </a>
          <a href="#" className="hover:text-red-500">
            News & Media
          </a>
          <a href="#" className="hover:text-red-500">
            Our Tools
          </a>
        </nav>

        {/* Copyright Text */}
        <div className="text-xs text-gray-500 mt-2 mb-2">
          © 2024 PixelVerse. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterPart;
