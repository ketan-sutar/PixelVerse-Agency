import React from "react";
import Navbar from "../Navbar/Navbar";
import MainPage  from "./MainPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import FourthPage from "./FourthPage";
import { FifthPage } from "./FifthPage";
// import SixthPage from "./SixthPage";
import LastPage from "./LastPage";
import FooterPart from "../Footer/FooterPart";

const Header = () => {
  return (
    <>
      <Navbar />
      <MainPage />
      <SecondPage/>
      <ThirdPage/>
      <FourthPage/>
      <FifthPage/>
      {/* images add kr ntr use kr ha part */}
      <LastPage/>
      <FooterPart/>



    </>
  );
};

export default Header;
