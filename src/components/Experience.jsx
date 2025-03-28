import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      logo: "/assets/aiv.png",
      company: "Both Of Us",
      role: "Fullstack Engineer",
      duration: "2023 - Present"
    },
    {
      logo: "/assets/aiv.png",
      company: "Aiva Creative",
      role: "Associate Software Engineer",
      duration: "2022 - 2023"
    },
    {
      logo: "/assets/amali.png",
      company: "Amalitech Training gGmbH",
      role: "Fullstack Engineer",
      duration: "2021 - 2022"
    },
    {
      logo: "/assets/web.png",
      company: "Web Developer",
      role: "Web Development",
      duration: "2020 - 2021"
    }
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
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-base font-semibold text-blue-600 uppercase tracking-wide">
            Experience
          </h2>
          <h3 className="text-3xl font-bold text-gray-800 mt-2">
            Professional Journey
          </h3>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A global professional with diverse experience in full-stack development, 
            bringing innovative solutions to complex technical challenges.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
            >
              <div className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 w-24 h-24 flex items-center justify-center">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    {exp.company}
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
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
          <p className="text-sm text-gray-500 italic">
            Committed to continuous learning and professional growth
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;