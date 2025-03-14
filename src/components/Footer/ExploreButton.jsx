import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";

const ExploreButton = () => {
  const [hovered, setHovered] = useState(false);
  const buttonRef = useRef(null);
  const spotlightRef = useRef(null);

  const handleMouseMove = (e) => {
    if (buttonRef.current && spotlightRef.current) {
      const { left } = buttonRef.current.getBoundingClientRect();
      const movX = e.clientX - left;

      gsap.to(spotlightRef.current, {
        x: movX,
        scale: 30,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    gsap.to(spotlightRef.current, {
      scale: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <button
      ref={buttonRef}
      className="relative w-auto mb-3 flex items-center bg-white text-black px-6 py-3 rounded-full shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        handleMouseLeave();
      }}
      onMouseMove={handleMouseMove}
    >
      <span className="font-medium">Explore More</span>

      {/* Spotlight Effect */}
      <div
        ref={spotlightRef}
        className="button__spotlight absolute top-1/2 left-0 w-1 h-1 bg-black rounded-full opacity-50"
      ></div>

      
    </button>
  );
};

export default ExploreButton;
