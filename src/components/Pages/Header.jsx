import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import MainPage from "./MainPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import FourthPage from "./FourthPage";
import { FifthPage } from "./FifthPage";
import LastPage from "./LastPage";
import FooterPart from "../Footer/FooterPart";
import Cursor from "../Cursor";

const Header = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Removed isDesktop from dependencies to prevent unnecessary updates

  return (
    <>
      {isDesktop && <Cursor />}
      <Navbar />
      <MainPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <LastPage />
      <FooterPart />
    </>
  );
};

export default Header;
