import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export const Navigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Disable scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  // Track active section while scrolling
  useEffect(() => {
    const sections = ["about me", "education", "skills", "contact"];

    const onScroll = () => {
      const scrollPosition = window.scrollY;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - 100;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-lg shadow-lg z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="text-white tracking-wide">
          <p className="text-center text-xl md:text-xl font-extrabold leading-tight font-serif">
            <span className="bg-gradient-to-r from-gray-400 to-indigo-200 text-transparent bg-clip-text">
              SEA
            </span>
          </p>
          <p className="text-center text-xl md:text-xl font-extrabold leading-tight font-serif">
            <span className="bg-gradient-to-r from-indigo-200 to-gray-400 text-transparent bg-clip-text">
              PORHAI
            </span>
          </p>
        </Link>



        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {["about me", "education", "skills", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`text-white text-lg font-medium transition-all duration-300 
                ${activeSection === item ? "border-b-2 border-black" : "hover:text-blue-400"}`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar (Right Side) */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-gray-900/90 text-white shadow-xl transform transition-transform duration-300 
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h2 className="text-xl font-semibold">Menu</h2>

        </div>

        <div className="flex flex-col
        
        bg-gray-700
        h-[100vh]
        
        items-start space-y-6 p-6">
          {["about me", "education", "skills", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`text-lg w-full text-left font-medium transition-all duration-300 
                ${activeSection === item ? "text-blue-400" : "hover:text-blue-400"}`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div onClick={closeMenu} className="fixed h-[100vh] w-[50%] bg-white/50 inset-0 bg-opacity-50 backdrop-blur-md transition-opacity">
        </div>
      )}
    </nav>
  );
};
