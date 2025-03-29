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
    </div>
  );
};

export default InfiniteScroller;
