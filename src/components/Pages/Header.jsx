import React from "react";
import Navbar from "../Navbar/Navbar";
import MainPage  from "./MainPage";
import SecondPage from "./SecondPage";

const Header = () => {
  return (
    <>
      <Navbar />
      <MainPage />
      <SecondPage/>
    </>
  );
};

export default Header;
