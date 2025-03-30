import React from "react";
import { motion } from "framer-motion";

const DefaultLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 px-4 py-12 sm:px-6 lg:px-8 overflow-hidden">
      <div className="w-full max-w-6xl text-center space-y-8 md:space-y-12 relative">
        {/* Animated background elements */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
          className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-green-500 filter blur-3xl mix-blend-screen"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-yellow-400 filter blur-3xl mix-blend-screen"
        />

        {/* Main Heading with animated gradient */}
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw] font-bold font-serif tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-yellow-200 to-green-300 bg-size-200 animate-text-gradient"
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
          <div className="hidden md:block w-16 h-px bg-gradient-to-r from-transparent to-yellow-400 mr-4" />
          <p className="text-[4vw] sm:text-[3.5vw] md:text-[2.5vw] lg:text-[1.5vw] font-medium font-sans leading-tight text-gray-300 uppercase tracking-widest">
            Crafting Immersive Visual Experiences
          </p>
          <div className="hidden md:block w-16 h-px bg-gradient-to-l from-transparent to-yellow-400 ml-4" />
        </motion.div>

        {/* Description with subtle animation */}
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-[3.5vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.1vw] font-light font-sans text-gray-400 max-w-3xl mx-auto leading-relaxed"
        >
          We specialize in <span className="text-yellow-300 font-medium">AI-driven digital art</span>, creating stunning visuals that captivate and inspire through <span className="text-green-300 font-medium">innovative technology</span> and creative vision.
        </motion.p>

        {/* Secondary Heading with hover effect */}
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          whileHover={{ scale: 1.02 }}
          className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw] font-bold font-serif tracking-tighter mt-8 md:mt-12 text-gray-200 hover:text-yellow-300 transition-colors duration-300 relative inline-block"
        >
          Agency
          <span className="absolute -right-6 bottom-0 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">/</span>
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
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                delay: i * 0.2
              }}
              className="w-2 h-2 rounded-full bg-yellow-400"
            />
          ))}
        </motion.div>

        {/* Subtle CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-12"
        >
          <button className="px-8 py-3 bg-transparent border-2 border-yellow-400 text-yellow-400 font-medium rounded-full hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 group">
            <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
              Explore Our Work →
            </span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default DefaultLayout;