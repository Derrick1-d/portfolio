import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

function Navbar({ scrollToSection, refs }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="w-full bg-white fixed shadow-md rounded-xl mt-2 px-6 py-4 flex items-center justify-between z-50">
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center relative">
        
        {/* Logo */}
        <img src="/assets/boy.png" alt="Profile" className="w-10 h-10 rounded-full" />

        {/* Hire Me Button (Centered in Mobile) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 md:hidden">
           <a href="mailto:derricktabiri046@gmail.com" className="bg-black text-white px-4 py-2 rounded-lg">
              Hire Me
           </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <button onClick={() => scrollToSection(refs.heroRef)} className="hover:text-gray-700">Home</button>
          <button onClick={() => scrollToSection(refs.aboutRef)} className="hover:text-gray-700">About Me</button>
          <button onClick={() => scrollToSection(refs.portfolioRef)} className="hover:text-gray-700">Portfolio</button>
          <button onClick={() => scrollToSection(refs.experienceRef)} className="hover:text-gray-700">Experience</button>
          <button onClick={() => scrollToSection(refs.profileRef)} className="hover:text-gray-700">Profile</button>
        </div>

        {/* Hire Me Button (Desktop) */}
        <div className="hidden md:flex">
            <a href="mailto:your-email@gmail.com" className="bg-black text-white px-4 py-2 rounded-lg">
              Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
        </button>
      </div>

      {/* Mobile Navigation Menu (Animated) */}
      <motion.div
        ref={menuRef}
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? 0 : "100%" }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg flex flex-col items-center pt-20 space-y-4 
        md:hidden ${menuOpen ? "flex" : "hidden"}`}
      >
        {/* Close Button for Mobile */}
        <button className="absolute top-4 right-4" onClick={() => setMenuOpen(false)}>
          <FiX className="text-3xl text-gray-700" />
        </button>

        {/* Mobile Links with Smooth Scrolling */}
        <button onClick={() => { scrollToSection(refs.heroRef); setMenuOpen(false); }} className="py-2">Home</button>
        <button onClick={() => { scrollToSection(refs.aboutRef); setMenuOpen(false); }} className="py-2">About Me</button>
        <button onClick={() => { scrollToSection(refs.portfolioRef); setMenuOpen(false); }} className="py-2">Portfolio</button>
        <button onClick={() => { scrollToSection(refs.experienceRef); setMenuOpen(false); }} className="py-2">Experience</button>
        <button onClick={() => { scrollToSection(refs.profileRef); setMenuOpen(false); }} className="py-2">Profile</button>

        {/* Hire Me Button (Inside Mobile Menu) */}
        <button className="bg-black text-white px-4 py-2 rounded-lg mt-4">Hire Me</button>
      </motion.div>
    </nav>
  );
}

export default Navbar;
