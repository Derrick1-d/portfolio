import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { faGithub, faLinkedin, faSkype } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const skills = [
  { name: "TailwindCSS", icon: "fab fa-css3-alt", color: "#38bdf8" },
  { name: "React", icon: "fab fa-react", color: "#61dafb" },
  { name: "JavaScript", icon: "fab fa-js-square", color: "#f7df1e" },
  { name: "PHP", icon: "fab fa-php", color: "#777bb3" },
  { name: "Bootstrap", icon: "fab fa-bootstrap", color: "#7952b3" },
  { name: "MySQL", icon: "fas fa-database", color: "#00618a" },
  { name: "Postgres", icon: "fas fa-server", color: "#336791" },
  { name: "NodeJS", icon: "fab fa-node-js", color: "#68a063" },
  { name: "Laravel", icon: "fab fa-laravel", color: "#ff2d20" },
  { name: "WordPress", icon: "fab fa-wordpress", color: "#21759b" },
];

const Profile = ({ darkMode }) => {
  return (
      <div id="profile-section" className="min-h-screen w-full flex items-center justify-center mt-5 p-6">
        <div className={`w-full max-w-4xl shadow-lg rounded-2xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className={`p-8 md:p-12 flex flex-col items-center text-center ${darkMode ? 'bg-gray-800' : 'bg-whitesmoke'} transition-colors duration-300`}>
            {/* Profile Image */}
            <motion.div
                className="mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
              <motion.img
                  src="assets/boy.png"
                  alt="Profile"
                  className={`w-48 h-48 rounded-full border-4 ${darkMode ? 'border-gray-700' : 'border-gray-300'} shadow-lg object-cover`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
              />
            </motion.div>

            {/* Name and Title */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h1 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-2 transition-colors duration-300`}>
                DERRICK KOFI TABIRI
              </h1>
              <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8 transition-colors duration-300`}>
                Fullstack Developer
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full mb-8"
            >
              {skills.map((skill, index) => (
                  <motion.div
                      key={index}
                      className={`p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out ${
                          darkMode ? 'bg-gray-700' : 'bg-white'
                      }`}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: darkMode ? '0 10px 15px rgba(0,0,0,0.3)' : '0 10px 15px rgba(0,0,0,0.1)'
                      }}
                  >
                    <i
                        className={`${skill.icon} text-4xl mb-3 block`}
                        style={{ color: skill.color }}
                    ></i>
                    <span className={`${darkMode ? 'text-gray-200' : 'text-gray-800'} text-sm font-medium transition-colors duration-300`}>
                  {skill.name}
                </span>
                  </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex space-x-6"
            >
              {[
                { icon: faGithub, link: "https://github.com/Derrick1-d", color: darkMode ? "#f0f6fc" : "#333" },
                { icon: faLinkedin, link: "http://linkedin.com/in/derrick-tabiri-b71b051b9", color: "#0077B5" },
                { icon: faSkype, link: "https://skype.com", color: "#00AFF0" }
              ].map((social, index) => (
                  <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transform transition-all duration-300 hover:scale-110"
                      style={{ color: social.color }}
                  >
                    <FontAwesomeIcon icon={social.icon} className="text-4xl" />
                  </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
  );
};

export default Profile;