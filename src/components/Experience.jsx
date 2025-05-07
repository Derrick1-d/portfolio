import React, { useContext } from "react";
import { motion } from "framer-motion";
// Import your theme context

const Experience = ({darkMode}) => {
  // Use the theme context

  const experiences = [
    {
      logo: "/assets/ttu logo.png",
      company: "TAKORADI TECHNICAL UNIVERSITY",
      role: "Fullstack Developer",
      duration: "2024 - Present"
    },
    // You can add more experiences here
  ];

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

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.05,
      boxShadow: darkMode
          ? "0 10px 20px rgba(0,0,0,0.3)"
          : "0 10px 20px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 }
    }
  };

  return (
      <div className={`py-16 ${darkMode ? 'bg-gray-900' : ''}`}>
        <div className="container mx-auto px-4">
          <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
          >
            <h2 className="text-base font-semibold uppercase tracking-wide text-blue-600">
              Experience
            </h2>
            <h3 className={`text-3xl font-bold mt-2 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
              Professional Journey
            </h3>
            <p className={`mt-4 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              A global professional with diverse experience in full-stack development,
              bringing innovative solutions to complex technical challenges.
            </p>
          </motion.div>

          <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="flex flex-wrap justify-center gap-8"
          >
            {experiences.map((exp, index) => (
                <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover="hover"
                    className={`rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl w-full sm:w-64 ${
                        darkMode ? 'bg-gray-800' : 'bg-white'
                    }`}
                >
                  <div className="p-6 flex flex-col items-center text-center">
                    <div className={`mb-4 w-24 h-24 flex items-center justify-center ${
                        darkMode ? 'bg-gray-700 rounded-full p-2' : ''
                    }`}>
                      <img
                          src={exp.logo}
                          alt={exp.company}
                          className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div>
                      <h4 className={`text-xl font-semibold mb-2 ${
                          darkMode ? 'text-gray-100' : 'text-gray-800'
                      }`}>
                        {exp.company}
                      </h4>
                      <p className={`text-sm mb-2 ${
                          darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {exp.role}
                      </p>
                      <p className="text-xs text-blue-600 font-medium">
                        {exp.duration}
                      </p>
                    </div>
                  </div>
                </motion.div>
            ))}
          </motion.div>

          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center mt-12"
          >
            <p className={`text-sm italic ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              Committed to continuous learning and professional growth
            </p>
          </motion.div>
        </div>
      </div>
  );
};

export default Experience;