import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "../assets/images/img_1.jpg";
import img2 from "../assets/images/img_2.jpg";
import img3 from "../assets/images/img_3.jpg";
import img4 from "../assets/images/img_4.jpg";
import img5 from "../assets/images/img_3.jpg";
import img6 from "../assets/images/img_2.jpg";

const images = [img1, img2, img3, img4, img5, img6];

const ImageSlider = () => {
  return (
    <div className="relative w-full max-w-auto mx-auto">
      {/* Custom Navigation Buttons */}
      <button
        className="absolute left-2 z-10 p-3 bg-white rounded-full shadow-lg top-1/2 -translate-y-1/2 hover:bg-gray-200 transition"
        id="prev"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        className="absolute right-2 z-10 p-3 bg-white rounded-full shadow-lg top-1/2 -translate-y-1/2 hover:bg-gray-200 transition"
        id="next"
      >
        <ChevronRight size={28} />
      </button>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3.5}
        centeredSlides
        navigation={{ prevEl: "#prev", nextEl: "#next" }}
        loop
        className="py-6"
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 5 },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center transition-transform duration-300">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-[60vw] h-[45vh] rounded-3xl object-cover shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
