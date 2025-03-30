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
    <section className="w-full px-4 sm:px-6 py-8 md:py-12">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#93C5FD] mb-8 md:mb-12">
        Dreamscapes in Motion
      </h1>

      {/* Image Scroller */}
      <div className="w-full overflow-hidden">
        <InfiniteScroller
          items={imageFiles.map((file, index) => (
            <div
              key={index}
              className="relative group mx-2 sm:mx-3 flex-shrink-0"
            >
              {/* Image Container - Responsive Width */}
              <div className="w-[80vw] sm:w-[200px] md:w-[250px] lg:w-[350px] aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src={file.src}
                  alt={file.text}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end p-4">
                <p className="text-white text-xs sm:text-sm md:text-base font-medium w-full text-center transform translate-y-5 group-hover:translate-y-0 transition-transform duration-300">
                  {file.text}
                </p>
              </div>
            </div>
          ))}
          speed={10}
        />
      </div>
    </section>
  );
};

export default InfiniteScroll;
