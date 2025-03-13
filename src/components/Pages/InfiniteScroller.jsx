import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const InfiniteScroller = ({ items, speed = 10 }) => {
  const controls = useAnimation(); // 🔥 Animation controller

  useEffect(() => {
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        ease: "linear",
        repeat: Infinity,
        duration: speed,
      },
    });
  }, [controls, speed]); // ✅ Start animation when component mounts

  return (
    <div className="overflow-hidden whitespace-nowrap w-full relative">
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
