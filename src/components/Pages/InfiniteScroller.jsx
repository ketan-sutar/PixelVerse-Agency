import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

const InfiniteScroller = ({ items, speed }) => {
  const controls = useAnimation(); // 🔥 Animation controller

  const startAnimation = () => {
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        ease: "linear",
        repeat: Infinity,
        duration: speed,
      },
    });
  };

  return (
    <div 
      className="overflow-hidden whitespace-nowrap w-full relative"
      onMouseEnter={() => controls.stop()} // 🔥 Pause on hover
      onMouseLeave={startAnimation} // 🔥 Resume without restart
    >
      <motion.div 
        className="flex space-x-4 w-max"
        animate={controls} // Use animation controller
      >
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex-shrink-0">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteScroller;
