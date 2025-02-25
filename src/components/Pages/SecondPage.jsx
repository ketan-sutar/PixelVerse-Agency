import React from "react";

const SecondPage = () => {
  return (
    <>
      <div className="flex items-center px-[2vw] justify-between min-h-[80vh]   text-black">
      {/* Left: Image Gallery */}
      <div className="flex space-x-6">
        <img
          src="https://via.placeholder.com/300"
          alt="Nature Image"
          className="w-[300px] h-[400px] rounded-2xl object-cover bg-black"
        />
        <img
          src="https://via.placeholder.com/300"
          alt="AI Art"
          className="w-[300px] h-[400px] rounded-2xl object-cover bg-red-100"
        />
        <img
          src="https://via.placeholder.com/300"
          alt="AI Art"
          className="w-[300px] h-[400px] rounded-2xl object-cover bg-red-100"
        />
      </div>

      {/* Right: Category List */}
      <div className="flex flex-col  pr-[1v] items-start space-y-1  text-lg font-sans">
        <div className="w-auto h-auto relative top-[-12vw]">
        <button className=" top-6 right-6 px-4 py-1 bg-black text-white rounded-full text-sm flex items-center">
          Scroll down <span className="ml-2">⬇</span>
        </button>
        </div>
       

        <p className="text-gray-400 text-lg">Nature Images </p>
        <p className="font-bold text-xl flex items-center">
          → AI Images <span className="ml-2 text-gray-400"></span>
        </p>
        <p className="text-gray-400 text-lg">Hand Draw </p>
      </div>
    </div>
    </>
  );
};

export default SecondPage;
