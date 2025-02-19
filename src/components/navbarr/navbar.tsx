import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for the menu

interface NavigationProps {
  activeSection?: string;
  CV_URL?: string;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  CV_URL,
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
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-40">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-medium text-blue-800 tracking-wide hover:text-blue-600 transition-colors duration-300"
            style={{ fontFamily: 'Sigmar, cursive' }}
          >
            SEA PORHAI
          </Link>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["aboutme", "education", "skills", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm font-medium transition-colors duration-300 ${activeSection === item
                  ? "text-blue-500"
                  : "text-gray-600 hover:text-blue-500"
                  }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
            {CV_URL && (
              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-blue-500 hover:text-white transition-colors duration-300"
              >
                View CV
              </a>
            )}
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
                className="block w-full text-gray-600 hover:text-blue-500 py-2 text-left"  // Added w-full and text-left for proper alignment
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
            {CV_URL && (
              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-gray-600 hover:text-blue-500 py-2 text-left"
                onClick={closeMenu}
              >
                View CV
              </a>
            )}
          </div>
        )}

      </div>
    </nav>
  );
};
