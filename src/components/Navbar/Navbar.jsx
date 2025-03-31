import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#0B0C10] shadow-lg">
      <div className="container mx-auto px-[4.5vw] py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-jersey text-[#F3F4F6]">PɪxᴇʟVᴇʀsᴇ</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {["SHOP", "VISIT", "ABOUT US", "NEWS & MEDIA", "OUR TOOLS"].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="relative text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-300 
                          before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 
                          before:bg-gradient-to-r before:from-purple-400 before:to-pink-400 
                          before:transition-all before:duration-300 hover:before:w-full"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Chat Button & Mobile Menu */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-gradient-to-r from-[#1E3A8A] to-[#7C3AED] px-4 py-2 rounded-full text-sm font-semibold text-white shadow-md hover:scale-105 transition-transform">
            LET’S CHAT <span className="text-[1.2vw]">👋</span>
          </button>

          {/* Hamburger Menu */}
          <button className="md:hidden text-[#F3F4F6]" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0B0C10] border-t border-[#1E3A8A] py-4 px-6">
          <ul className="space-y-3">
            {["SHOP", "VISIT", "ABOUT US", "NEWS & MEDIA", "OUR TOOLS"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="relative text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-300 
                            before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 
                            before:bg-gradient-to-r before:from-purple-400 before:to-pink-400 
                            before:transition-all before:duration-300 hover:before:w-full"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <button className="mt-4 w-full bg-gradient-to-r from-[#1E3A8A] to-[#7C3AED] py-2 rounded-full text-sm font-semibold text-white shadow-md hover:scale-105 transition-transform">
            LET’S CHAT <span className="text-[2.5vw]">👋</span>
          </button>
        </div>
      )}
    </nav>
  );
}
