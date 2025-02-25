import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">PɪxᴇʟVᴇʀsᴇ</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700">
          <li className="hover:text-black cursor-pointer">SHOP</li>
          <li className="hover:text-black cursor-pointer">VISIT</li>
          <li className="hover:text-black cursor-pointer">ABOUT US</li>
          <li className="hover:text-black cursor-pointer">NEWS & MEDIA</li>
          <li className="hover:text-black cursor-pointer">OUR TOOLS</li>
        </ul>

        {/* Chat Button & Mobile Menu */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-gray-100 border border-gray-300 px-4 py-2 rounded-full text-sm font-semibold">
            LET’S CHAT ⭐
          </button>

          {/* Hamburger Menu */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white border-t border-gray-200 py-2 px-4">
          <li className="py-2 text-gray-700 hover:text-black cursor-pointer">SHOP</li>
          <li className="py-2 text-gray-700 hover:text-black cursor-pointer">VISIT</li>
          <li className="py-2 text-gray-700 hover:text-black cursor-pointer">ABOUT US</li>
          <li className="py-2 text-gray-700 hover:text-black cursor-pointer">NEWS & MEDIA</li>
          <li className="py-2 text-gray-700 hover:text-black cursor-pointer">OUR TOOLS</li>
          <button className="mt-3 w-full bg-gray-100 border border-gray-300 py-2 rounded-full text-sm font-semibold">
            LET’S CHAT ⭐
          </button>
        </ul>
      )}
    </nav>
  );
}
