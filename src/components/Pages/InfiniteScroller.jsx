import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Icons for buttons

const InfiniteScroller = ({ items }) => {
  const scrollRef = useRef(null);

  // Scroll left
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // Scroll right
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full">
      {/* Left Scroll Button */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600"
      >
        <FaChevronLeft size={20} />
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="w-full overflow-x-auto flex scrollbar-hide scroll-smooth snap-x snap-mandatory px-10"
      >
        <div className="flex gap-x-4">
          {items.map((item, index) => (
            <div key={index} className="flex-shrink-0 snap-start">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Right Scroll Button */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600"
      >
        <FaChevronRight size={20} />
      </button>
    </div>
  );
};

export default InfiniteScroller;
