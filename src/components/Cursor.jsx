import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    if (!cursorRef.current) return;

    // Initialize cursor position
    gsap.set(cursorRef.current, {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    });

    const moveCursor = (x, y) => {
      gsap.to(cursorRef.current, {
        x: x - 20, // Center the cursor (since it's 40px wide)
        y: y - 20, // Center the cursor (since it's 40px tall)
        duration: 0.2,
        ease: "power1.out"
      });
    };

    const handleMouseMove = (e) => {
      moveCursor(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 h-[40px] w-[40px] rounded-full 
      z-[9999] pointer-events-none shadow-2xl bg-gradient-to-r from-[#6A0DAD] to-[#E75480] 
      opacity-75 blur-lg transform -translate-x-1/2 -translate-y-1/2"
    />
  );
};

export default Cursor;