import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for the menu



export const Navigation: React.FC = ({

}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="fixed top-0 w-full bg-gray-700 backdrop-blur-md shadow-sm z-40">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-medium text-white  w-52 tracking-wide  transition-colors duration-300"
            
          >
            <p className="flex justify-center">
            SEA
            </p>
            <p className="flex justify-center">
              PORHAI

            </p>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden w-full justify-end md:flex items-center space-x-8 ">
            {["aboutme", "education", "skills", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-white `}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
           
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md py-4 px-6">
            {["aboutme", "education", "skills", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item);
                  closeMenu();
                }}
                className="block w-full text-gray-600 hover:text-blue-500 py-2 text-left" // Added w-full and text-left for proper alignment
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
           
          </div>
        )}
      </div>
    </nav>
  );
};
