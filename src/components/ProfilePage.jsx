import React from "react";
import { motion } from "framer-motion";

const ProfilePage = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white flex justify-center items-center py-16 px-4">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full max-w-6xl bg-white shadow-2xl rounded-2xl overflow-hidden p-12 grid grid-cols-1 md:grid-cols-3 gap-12 items-center"
      >
        {/* Left Section - Training & Certifications */}
        <motion.div 
          variants={itemVariants}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 uppercase border-b-4 border-blue-500 pb-2">
            Training & Certifications
          </h2>
          <ul className="space-y-3 text-gray-700">
            {[
              "React Nano Degree",
              "Salesforce Certified B2C Commerce Developer",
              "Object-Oriented Design",
              "Web Development with Java Spring Framework",
              "Front-End Web UI Frameworks: Bootstrap 4",
              "Java Programming: Problem Solving",
              "Java Server Page",
              "Laravel Framework",
              "NodeJs"
            ].map((cert, index) => (
              <motion.li 
                key={index}
                variants={itemVariants}
                className="flex items-center space-x-3 hover:text-blue-600 transition-colors"
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
            <div className="absolute -inset-2 bg-blue-400 rounded-full opacity-75 blur-xl animate-pulse"></div>
            <img
              src="/assets/boy.png"
              alt="Profile"
              className="relative z-10 rounded-full w-64 h-64 object-cover shadow-2xl border-4 border-white transform transition-transform hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Right Section - Tools & Technologies */}
        <motion.div 
          variants={itemVariants}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 uppercase border-b-4 border-green-500 pb-2">
            Tools & Technologies
          </h2>
          <ul className="space-y-3 text-gray-700">
            {[
              "Git", "Bitbucket", "G-Cloud", "AWS", 
              "Nginx WebServer", "Apache WebServer", 
              "NPM", "IntelliJ", "Web Storm", "Visual Studio Code"
            ].map((tool, index) => (
              <motion.li 
                key={index}
                variants={itemVariants}
                className="flex items-center space-x-3 hover:text-green-600 transition-colors"
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