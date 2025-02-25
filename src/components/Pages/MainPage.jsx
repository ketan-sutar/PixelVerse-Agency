import React from "react";

const MainPage = () => {
  return (
    <>
      <div className="flex flex-col items-center  justify-center min-h-[90vh]  text-black">
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <h1 className="2xl:text-[12vw] font-serif font-normal tracking-tight">
              Pixel Verse
            </h1>
            <div className="ml-[3.5vw] text-xs font-sans font-normal">
              Crafting Immersive <br />
              Visual Experiences
            </div>
          </div>
          <div className="flex ml-[20%] items-center mt-[-6vw]">
            <p className="text-sm font-sans font-normal mr-3">
              We are specialised in <br />
              AI-driven digital art <br />
              design.
            </p>
            <div className="2xl:text-[12vw] font-serif font-normal tracking-tight">
              /Agency
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
