import React, { useState, useEffect } from "react";
import gsap from "gsap";
import Hello from "../Hello"; // Import the main component after loading
import loadingTexts from "../Loader/LoadinText"; // Import text data
import Header from "../Pages/Header";

const Loader = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const count = setInterval(() => {
      setTextIndex((prevIndex) => {
        if (prevIndex < loadingTexts.length - 1) {
          return prevIndex + 1;
        } else {
          clearInterval(count);
          reveal();
          return prevIndex;
        }
      });
    }, 1200); // Change text every 1.2 seconds

    return () => clearInterval(count);
  }, []);

  const reveal = () => {
    const t1 = gsap.timeline();

    t1.to(".follow", { 
        width: "100%", 
        ease: "expo.inOut", 
        duration: 0.8 
      })
      .to(".hide", { 
        opacity: 0, 
        duration: 0.2 
      }, "-=0.5")
      .to(".hide", { 
        display: "none" 
      })
      .to(".follow", { 
        height: "100%", 
        ease: "expo.inOut", 
        duration: 0.5 
      })
      .to(".content", { 
        width: "100vw", 
        ease: "expo.inOut", 
        duration: 0.3
      }, "-=0.9")
      .to(".content", { 
        opacity: 1, 
        duration: 0.3,
        onComplete: () => setLoadingComplete(true) 
      });
  };

  return loadingComplete ? <Header/> : (
    <div className="w-screen h-screen flex justify-center items-center bg-[#f0f8ff] relative">
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="absolute h-[4px] w-0 left-0 z-10 bg-gradient-to-r from-pink-400 to-purple-500 rounded follow"></div>
        <div
          className="absolute left-0 bg-gradient-to-r from-pink-400 to-purple-500 h-[4px] transition-all duration-400 ease-out hide"
          style={{ width: ((textIndex + 1) / loadingTexts.length) * 100 + "%" }}
        ></div>
        <p className="absolute text-[50px] text-gray-700 font-semibold hide transition-opacity duration-500">
          {loadingTexts[textIndex]}
        </p>
      </div>
    </div>
  );
};

export default Loader;
