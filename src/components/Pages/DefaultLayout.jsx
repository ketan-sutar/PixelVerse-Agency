import React from "react";
import { motion } from "framer-motion";

const DefaultLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0B0C10] px-4 py-12 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Gradient background overlay */}
      <div
        className="absolute inset-0 bg-[#0B0C10]
       from-[#1E3A8A]/20 to-[#7C3AED]/20 pointer-events-none"
      />

      <div className="w-full max-w-6xl text-center space-y-8 md:space-y-12 relative z-10">
        {/* Main Heading with animated gradient */}
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw]  tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#6A0DAD] to-[#E75480]
 bg-size-200 animate-text-gradient
 font-kanit font-normal
 "
        >
          PixelVerse
        </motion.h1>

        {/* Subheading with decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex items-center justify-center"
        >
          <div className="hidden md:block w-16 h-px bg-gradient-to-r from-transparent to-[#38BDF8] mr-4" />
          <p className="text-[4vw] sm:text-[3.5vw] md:text-[2.5vw] lg:text-[1.5vw] font-medium font-barlow leading-tight text-white uppercase tracking-widest">
            Crafting Immersive Visual Experiences
          </p>
          <div className="hidden md:block w-16 h-px bg-gradient-to-l from-transparent to-[#38BDF8] ml-4" />
        </motion.div>

        {/* Description with subtle animation */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-[3.5vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.1vw] font-light font-barlow text-[#93C5FD]/80 max-w-3xl mx-auto leading-relaxed"
        >
          We specialize in{" "}
          <span className="text-[#38BDF8] font-medium">
            AI-driven digital art
          </span>
          , creating stunning visuals that captivate and inspire through{" "}
          <span className="text-[#9333EA] font-medium">
            innovative technology
          </span>{" "}
          and creative vision.
        </motion.p>

        {/* Secondary Heading with hover effect */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          whileHover={{ scale: 1.02 }}
          className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw]  font-kanit font-normal tracking-tighter mt-8 md:mt-12             text-transparent bg-clip-text bg-gradient-to-l from-[#6A0DAD] to-[#E75480]
   relative inline-block group"
        >
          Agency
        </motion.h2>

        {/* Animated decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex justify-center space-x-6 mt-12"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -10, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-2 h-2 rounded-full bg-[#38BDF8]"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default DefaultLayout;
