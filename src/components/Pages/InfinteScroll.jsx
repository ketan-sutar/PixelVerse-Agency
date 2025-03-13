import React from "react";
import InfiniteScroller from "./InfiniteScroller";

const InfiniteScroll = () => {
  const imageFiles = [
    "/slideimages/slide1.jpg",
    "/slideimages/slide2.jpg",
    "/slideimages/slide3.jpg",
    "/slideimages/slide4.jpg",
    "/slideimages/slide5.jpg",

    "/slideimages/slide7.jpg",
    "/slideimages/slide8.jpg",
    "/slideimages/slide9.jpg",
    "/slideimages/slide10.jpg",
    "/slideimages/slide11.jpg",

    "/slideimages/slide15.jpg",
  ];

  return (
    <>
    <h1
    className="text-4xl font-bold text-center text-gray-800 mt-8 mb-5"
    >Dreamscapes in Motion</h1>
      <div className="flex flex-col items-center space-y-8">
        {/* Image Scroller */}
        <InfiniteScroller
          items={imageFiles.map((file, index) => (
            <img
              key={index}
              src={file} // Corrected path
              alt={`Slide ${index + 1}`}
              className="w-full max-w-xs h-auto rounded-lg"
            />
          ))}
          speed={55}
        />
      </div>
    </>
  );
};

export default InfiniteScroll;
