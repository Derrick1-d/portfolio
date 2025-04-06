import React, { useContext } from "react";
import { motion } from "framer-motion";
// Import the theme context

const ProfilePage = ({darkMode}) => {
  // Use the theme context

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
      <div className={`flex justify-center items-center py-16 px-4 ${
          darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-gray-100 to-white'
      }`}>
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className={`w-full max-w-6xl shadow-2xl rounded-2xl overflow-hidden p-12 grid grid-cols-1 md:grid-cols-3 gap-12 items-center ${
                darkMode ? 'bg-gray-800' : 'bg-white'
            }`}
        >
          {/* Left Section - Training & Certifications */}
          <motion.div
              variants={itemVariants}
              className="space-y-6"
          >
            <h2 className={`text-2xl font-bold mb-6 uppercase border-b-4 border-blue-500 pb-2 ${
                darkMode ? 'text-gray-100' : 'text-gray-800'
            }`}>
              Training & Certifications
            </h2>
            <ul className="space-y-3">
              {[
                "Reactjs",
                "Front-End Web UI Frameworks: Bootstrap 4",
                "Laravel Framework",
                "NodeJs"
              ].map((cert, index) => (
                  <motion.li
                      key={index}
                      variants={itemVariants}
                      className={`flex items-center space-x-3 transition-colors ${
                          darkMode
                              ? 'text-gray-300 hover:text-blue-400'
                              : 'text-gray-700 hover:text-blue-600'
                      }`}
                  >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                      <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                          clipRule="evenodd"
                      />
                    </svg>
                    <span>{cert}</span>
                  </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Center Section - Profile Image */}
          <motion.div
              variants={itemVariants}
              className="flex justify-center items-center"
          >
            <div className="relative">
              <div className={`absolute -inset-2 rounded-full opacity-75 blur-xl animate-pulse ${
                  darkMode ? 'bg-blue-600' : 'bg-blue-400'
              }`}></div>
              <img
                  src="/assets/boy.png"
                  alt="Profile"
                  className={`relative z-10 rounded-full w-64 h-64 object-cover shadow-2xl transform transition-transform hover:scale-105 ${
                      darkMode ? 'border-4 border-gray-700' : 'border-4 border-white'
                  }`}
              />
            </div>
          </motion.div>

          {/* Right Section - Tools & Technologies */}
          <motion.div
              variants={itemVariants}
              className="space-y-6"
          >
            <h2 className={`text-2xl font-bold mb-6 uppercase border-b-4 border-green-500 pb-2 ${
                darkMode ? 'text-gray-100' : 'text-gray-800'
            }`}>
              Tools & Technologies
            </h2>
            <ul className="space-y-3">
              {[
                "Git", "Firebase",  "AWS",
                "Apache WebServer",
                "NPM", "IntelliJ", "Web Storm", "Visual Studio Code"
              ].map((tool, index) => (
                  <motion.li
                      key={index}
                      variants={itemVariants}
                      className={`flex items-center space-x-3 transition-colors ${
                          darkMode
                              ? 'text-gray-300 hover:text-green-400'
                              : 'text-gray-700 hover:text-green-600'
                      }`}
                  >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                      <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                          clipRule="evenodd"
                      />
                    </svg>
                    <span>{tool}</span>
                  </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
  );
};

export default ProfilePage;