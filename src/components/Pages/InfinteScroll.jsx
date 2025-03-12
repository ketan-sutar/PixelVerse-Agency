import React from "react";

import InfiniteScroller from "./InfiniteScroller";

const InfiniteScroll = () => {
  const imageFiles = [
    "img_1.jpg",
    "img_2.jpg",
    "img_3.jpg",
    "img_4.jpg",
    
  ];

  return (
    <div className="flex flex-col items-center space-y-8">
      <h1 className="text-center text-white text-2xl font-bold">
        Infinite Scroll with Framer Motion
      </h1>

      {/* Text Scroller */}
      <InfiniteScroller
        items={["HTML", "CSS", "JS", "React", "Framer Motion", "Animation"]}
        speed={10}
      />

      {/* Image Scroller from Public Folder */}
      <InfiniteScroller
        items={imageFiles.map((file, index) => (
          <img
            key={index}
            src={`/images/${file}`} // Use public folder path
            alt=""
            className="w-full max-w-xs h-auto rounded-lg"

          />
        ))}
        speed={15}
      />
    </div>
  );
};

export default InfiniteScroll;
