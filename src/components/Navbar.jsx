import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiMail, FiHome, FiUser, FiBriefcase, FiFolder, FiBook } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

function Navbar({ scrollToSection, refs, darkMode, toggleTheme }) {
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
      <nav className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-md transition-colors duration-300`}>
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
                src="/assets/boy.png"
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
            />
            <span className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-800'} hidden md:block`}>
            Derrick Tabiri
          </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
                <motion.button
                    key={index}
                    onClick={() => handleNavClick(item.ref)}
                    className={`flex items-center space-x-2 ${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors`}
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

            {/* Dark Mode Toggle (Desktop) */}
            <motion.button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-800'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
              {darkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
              ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <motion.button
                onClick={() => setMenuOpen(!menuOpen)}
                whileTap={{ scale: 0.9 }}
                className={darkMode ? 'text-white' : 'text-gray-800'}
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
                  className={`fixed top-0 right-0 w-64 h-full ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-2xl z-50 md:hidden`}
              >
                <div className="p-6">
                  {/* Close Button */}
                  <motion.button
                      onClick={() => setMenuOpen(false)}
                      className="absolute top-4 right-4"
                      whileTap={{ scale: 0.9 }}
                  >
                    <FiX className={`text-2xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} />
                  </motion.button>

                  {/* Mobile Navigation Links */}
                  <div className="flex flex-col space-y-4 mt-12">
                    {navItems.map((item, index) => (
                        <motion.button
                            key={index}
                            onClick={() => handleNavClick(item.ref)}
                            className={`flex items-center space-x-3 py-3 px-4 rounded-lg ${
                                darkMode
                                    ? 'text-gray-300 hover:bg-gray-700'
                                    : 'text-gray-700 hover:bg-blue-50'
                            } transition-colors`}
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

                    {/* Dark Mode Toggle (Mobile) */}
                    <motion.button
                        onClick={toggleTheme}
                        className={`flex items-center px-3 py-2 rounded-md w-full mt-4 ${
                            darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-800'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                      {darkMode ? 'Light Mode' : 'Dark Mode'}
                      <span className="ml-2">
                    {darkMode ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                    )}
                  </span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
          )}
        </AnimatePresence>
      </nav>
  );
}

export default Navbar;