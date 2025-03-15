import React, { useState, useEffect } from "react";
import DefaultLayout from "./DefaultLayout";
import ResponsiveLayout from "./ResponsiveLayout";

const MainPage = () => {
  const [isResponsive, setIsResponsive] = useState(window.innerWidth >= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth >= 640); // Switch to ResponsiveLayout at 640px (sm breakpoint)
    };

    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isResponsive ? <ResponsiveLayout /> : <DefaultLayout />;
};

export default MainPage;
