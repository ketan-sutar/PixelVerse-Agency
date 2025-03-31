import React from "react";
import { motion } from "framer-motion";

const ThirdPage = () => {
  return (
    <section
      className="
    bg-[#0B0C10]
    w-full py-16 sm:py-24 px-4 sm:px-8 
     text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-16 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/2 space-y-6 text-center lg:text-left"
          >
            <h2
              className="font-barlow font-semibold
               text-3xl sm:text-4xl md:text-5xl
               leading-tight"
            >
              Empowering Creators with Digital Excellence
            </h2>

            <p className="font-barlow font-light
            text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 lg:pr-8">
              Where visionary art converges with groundbreaking innovation to
              redefine creative possibilities in the digital realm.
            </p>

            <div className="mt-10">
              <motion.button
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 10px 20px rgba(0, 0, 255, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Explore More
                <svg
                  className="ml-3 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/2 w-full"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  src: "/images/2.1img.jpg",
                  alt: "Artistic Design",
                  aspect: "aspect-[3/4]",
                },
                {
                  src: "/images/2.2img.jpg",
                  alt: "Digital Artwork",
                  aspect: "aspect-[3/4]",
                },
                {
                  src: "/images/2.3img.jpg",
                  alt: "Abstract Art",
                  aspect: "aspect-[3/4]",
                  className: "hidden md:block",
                },
              ].map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  className={`relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg ${
                    image.aspect
                  } ${image.className || ""}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium text-sm sm:text-base">
                      {image.alt}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ThirdPage;
