import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiMail, FiHome, FiUser, FiBriefcase, FiFolder, FiBook } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

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

  const navItems = [
    { 
      label: "Home", 
      icon: <FiHome />, 
      ref: refs.heroRef 
    },
    { 
      label: "About Me", 
      icon: <FiUser />, 
      ref: refs.aboutRef 
    },
    { 
      label: "Portfolio", 
      icon: <FiFolder />, 
      ref: refs.portfolioRef 
    },
    { 
      label: "Experience", 
      icon: <FiBriefcase />, 
      ref: refs.experienceRef 
    },
    { 
      label: "Profile", 
      icon: <FiBook />, 
      ref: refs.profileRef 
    }
  ];

  const handleNavClick = (ref) => {
    scrollToSection(ref);
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img 
            src="/assets/boy.png" 
            alt="Profile" 
            className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
          />
          <span className="font-bold text-lg text-gray-800 hidden md:block">
            Derrick Tabiri
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <motion.button 
              key={index}
              onClick={() => handleNavClick(item.ref)}
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.icon}
              <span>{item.label}</span>
            </motion.button>
          ))}

          {/* Hire Me Button (Desktop) */}
          <motion.a 
            href="mailto:derricktabiri046@gmail.com"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiMail />
            <span>Hire Me</span>
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <motion.button 
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {menuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween" }}
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-2xl z-50 md:hidden"
          >
            <div className="p-6">
              {/* Close Button */}
              <motion.button 
                onClick={() => setMenuOpen(false)}
                className="absolute top-4 right-4"
                whileTap={{ scale: 0.9 }}
              >
                <FiX className="text-2xl text-gray-600" />
              </motion.button>

              {/* Mobile Navigation Links */}
              <div className="flex flex-col space-y-4 mt-12">
                {navItems.map((item, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleNavClick(item.ref)}
                    className="flex items-center space-x-3 text-gray-700 py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </motion.button>
                ))}

                {/* Hire Me Button (Mobile) */}
                <motion.a
                  href="mailto:derricktabiri046@gmail.com"
                  className="bg-blue-600 text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 mt-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiMail />
                  <span>Hire Me</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;