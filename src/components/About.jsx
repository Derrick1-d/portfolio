import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faSkype
} from '@fortawesome/free-brands-svg-icons';
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faDownload
} from '@fortawesome/free-solid-svg-icons';


const About = ({ darkMode }) => {
  // Use your theme context

  const socialLinks = [
    {
      icon: faGithub,
      href: "https://github.com/Derrick1-d",
      color: darkMode ? "#ffffff" : "#333", // Adjust color based on theme
      label: "GitHub"
    },
    {
      icon: faLinkedin,
      href: "http://linkedin.com/in/derrick-tabiri-b71b051b9",
      color: darkMode ? "#0a66c2" : "#0077B5",
      label: "LinkedIn"
    },
    {
      icon: faSkype,
      href: "https://join.skype.com/invite/yourid",
      color: darkMode ? "#00AFF0" : "#00AFF0",
      label: "Skype"
    }
  ];

  const contactDetails = [
    {
      icon: faPhone,
      title: "Call Me",
      content: "+233 558686295",
      link: "tel:+233558686295"
    },
    {
      icon: faEnvelope,
      title: "Email Me",
      content: "derricktabiri046@gmail.com",
      link: "mailto:derricktabiri046@gmail.com"
    },
    {
      icon: faMapMarkerAlt,
      title: "Location",
      content: "Accra, Ghana",
      link: "https://maps.google.com/?q=Accra,Ghana"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
      <div className={`min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 ${darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-blue-50 to-indigo-50'}`}>
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className={`w-full max-w-5xl shadow-xl rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
        >
          {/* Left Column - Personal Information */}
          <div className={`p-6 sm:p-8 md:p-12 flex flex-col justify-center relative overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800' : 'bg-gradient-to-br from-blue-100 via-blue-50 to-white'}`}>
            {/* Background pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5">
              <svg width="100%" height="100%" viewBox="0 0 100 100">
                <pattern id="pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="currentColor" className={darkMode ? "text-gray-300" : "text-blue-900"} />
                </pattern>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern)" />
              </svg>
            </div>

            <motion.div
                variants={itemVariants}
                className="relative z-10"
            >
              <h1 className={`text-3xl sm:text-4xl font-bold mb-2 relative inline-block ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                About Me
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></span>
              </h1>
              <p className={`text-lg sm:text-xl mb-6 font-light ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Full Stack Developer | Problem Solver | Innovation Enthusiast
              </p>

              <div className={`backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-sm mb-8 ${darkMode ? 'bg-gray-700/60 border border-gray-600' : 'bg-white/60 border border-blue-100'}`}>
                <p className={`text-base sm:text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  A passionate Junior Software Developer with a comprehensive skill set spanning
                  full-stack development. I excel in crafting robust, scalable applications
                  by seamlessly integrating front-end design with powerful back-end functionality.
                  My approach combines technical expertise with creative problem-solving,
                  ensuring innovative and user-centric solutions.
                </p>
              </div>

              {/* Social Links with labels */}
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                    <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-2 py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'}`}
                        style={{ color: social.color }}
                    >
                      <FontAwesomeIcon icon={social.icon} />
                      <span className="font-medium">{social.label}</span>
                    </motion.a>
                ))}

                {/* Resume download button */}
                <motion.a
                    href="/resume.pdf"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 py-2 px-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faDownload} />
                  <span className="font-medium">Resume</span>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Contact and Details */}
          <div className={`p-6 sm:p-8 md:p-12 flex flex-col justify-center ${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-700' : 'bg-gradient-to-br from-gray-50 to-white'}`}>
            <motion.div
                variants={itemVariants}
            >
              <h2 className={`text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center relative inline-block pb-2 mx-auto ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                Contact Information
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></span>
              </h2>

              <div className="space-y-4 sm:space-y-6">
                {contactDetails.map((contact, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        className={`rounded-xl p-4 sm:p-6 shadow-md flex items-center space-x-4 sm:space-x-6 transition-all duration-300 ${
                            darkMode
                                ? 'bg-gray-700 border border-gray-600 hover:border-blue-400'
                                : 'bg-white border border-gray-100 hover:border-blue-200'
                        }`}
                    >
                      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 sm:p-4 rounded-full flex-shrink-0">
                        <FontAwesomeIcon
                            icon={contact.icon}
                            className="text-xl sm:text-2xl text-white"
                        />
                      </div>
                      <div>
                        <h3 className={`text-base sm:text-lg font-semibold mb-1 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                          {contact.title}
                        </h3>
                        <a
                            href={contact.link}
                            className={`transition-colors text-sm sm:text-base ${
                                darkMode
                                    ? 'text-gray-300 hover:text-blue-400'
                                    : 'text-gray-600 hover:text-blue-600'
                            }`}
                        >
                          {contact.content}
                        </a>
                      </div>
                    </motion.div>
                ))}
              </div>

              {/* Availability indicator */}
              <motion.div
                  variants={itemVariants}
                  className={`mt-8 flex flex-col items-center justify-center gap-2 p-4 rounded-xl border ${
                      darkMode
                          ? 'bg-green-900/20 border-green-700'
                          : 'bg-green-50 border-green-100'
                  }`}
              >
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></span>
                  <span className={`font-medium ${darkMode ? 'text-green-400' : 'text-green-700'}`}>Available for opportunities</span>
                </div>
                <p className={`text-sm text-center ${darkMode ? 'text-green-300' : 'text-green-600'}`}>
                  Currently open to freelance projects and full-time positions
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
  );
}

export default About;