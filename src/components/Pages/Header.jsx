import React from "react";
import Navbar from "../Navbar/Navbar";
import MainPage  from "./MainPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import FourthPage from "./FourthPage";
import { FifthPage } from "./FifthPage";
import SixthPage from "./SixthPage";

const Header = () => {
  return (
    <>
      <Navbar />
      <MainPage />
      <SecondPage/>
      <ThirdPage/>
      <FourthPage/>
      <FifthPage/>
      <SixthPage/>


    </>
  );
};

export default Header;
