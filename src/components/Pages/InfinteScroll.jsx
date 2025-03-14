import React from "react";
import InfiniteScroller from "./InfiniteScroller";

const InfiniteScroll = () => {
  const imageFiles = [
    { src: "/slideimages/slide1.jpg", text: "Beautiful Landscape 1" },
    { src: "/slideimages/slide2.jpg", text: "Peaceful Sunset" },
    { src: "/slideimages/slide3.jpg", text: "Mystic Mountains" },
    { src: "/slideimages/slide4.jpg", text: "Cityscape at Night" },
    { src: "/slideimages/slide5.jpg", text: "Serene Beach" },
    { src: "/slideimages/slide7.jpg", text: "Snowy Peaks" },
    { src: "/slideimages/slide8.jpg", text: "Golden Fields" },
    { src: "/slideimages/slide9.jpg", text: "Forest Trail" },
    { src: "/slideimages/slide10.jpg", text: "Rolling Hills" },
    { src: "/slideimages/slide11.jpg", text: "Ocean Waves" },
    { src: "/slideimages/slide15.jpg", text: "Sunset Over Water" },
  ];

  return (
    <>
      <h1 className="text-4xl font-bold text-center text-gray-800 mt-8 mb-5">
        Dreamscapes in Motion
      </h1>
      <div className="flex flex-col items-center space-y-8">
        <InfiniteScroller
          items={imageFiles.map((file, index) => (
            <div key={index} className="relative group w-auto max-w-xs">
              {/* Image */}
              <img
                src={file.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end">
                <p className="text-white text-lg font-semibold w-full text-center py-3 translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                  {file.text}
                </p>
              </div>
            </div>
          ))}
          speed={10}
        />
      </div>
    </>
  );
};

export default InfiniteScroll;
