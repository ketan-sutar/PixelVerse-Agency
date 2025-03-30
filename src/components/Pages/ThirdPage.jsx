import React from "react";
import { motion } from "framer-motion";

const ThirdPage = () => {
  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight">
                Empowering Creators
               with Digital Excellence
            </h2>
            
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 lg:pr-8">
              Where visionary art converges with groundbreaking innovation to redefine creative possibilities in the digital realm.
            </p>
            
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
                background: "linear-gradient(to right, #3b82f6, #8b5cf6)"
              }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium sm:font-semibold rounded-full inline-flex items-center gap-2 sm:gap-3 transition-all duration-300 mt-4"
            >
              <span>Explore All Works</span>
              <motion.span 
                animate={{ x: [0, 4, 0] }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-lg sm:text-xl"
              >
                ↗
              </motion.span>
            </motion.button>
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
                  aspect: "aspect-[3/4]"
                },
                { 
                  src: "/images/2.2img.jpg", 
                  alt: "Digital Artwork",
                  aspect: "aspect-[3/4]" 
                },
                { 
                  src: "/images/2.3img.jpg", 
                  alt: "Abstract Art",
                  aspect: "aspect-[3/4]",
                  className: "hidden md:block"
                },
              ].map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  className={`relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg ${image.aspect} ${image.className || ''}`}
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
