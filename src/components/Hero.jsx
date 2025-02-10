import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { faGithub, faLinkedin, faSkype } from "@fortawesome/free-brands-svg-icons";

const Profile = () => {
  const skillsLeft = [
  { name: "TailwindCSS", icon: <i className="fab fa-css3-alt"></i> }, 
  { name: "React", icon: <i className="fab fa-react"></i> }, 
  { name: "JavaScript", icon: <i className="fab fa-js-square"></i> }, 
  { name: "PHP", icon: <i className="fab fa-php"></i> }, 
  { name: "Bootstrap", icon: <i className="fab fa-bootstrap"></i> }, 
];

const skillsRight = [
  { name: "MySQL", icon: <i className="fas fa-database"></i> }, 
  { name: "Postgres", icon: <i className="fas fa-server"></i> }, 
  { name: "NodeJS", icon: <i className="fab fa-node-js"></i> }, 
  { name: "Laravel", icon: <i className="fab fa-laravel"></i> }, 
  { name: "WordPress", icon: <i className="fab fa-wordpress"></i> }, 
];


  return (
    
    <div className=" bg-gray-100 flex items-center justify-center mt-30 ">
      
      <div className="max-w-6xl p-20 flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-10">
        
        {/* Text Content */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            DERRICK KOFI TABIRI
          </h1>

          <p className="text-xl text-gray-600 mb-6">Fullstack Developer</p>

          {/* Skills */}
          <div className="flex justify-center lg:justify-start gap-6">
            <div className="space-y-4">
              {skillsLeft.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 px-5 py-3 border border-gray-300 rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow duration-300"
                >
                  <span className="text-blue-500">{skill.icon}</span>
                  <p className="text-gray-800">{skill.name}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {skillsRight.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 px-5 py-3 border border-gray-300 rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow duration-300"
                >
                  <span className="text-blue-500">{skill.icon}</span>
                  <p className="text-gray-800">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="w-full lg:w-1/3 flex flex-col items-center">
          <img
            src="assets/boy.png"
            alt="Profile"
            className="w-150 h-110"
          />
          {/* Social Links */}
          <div className="mt-8 flex justify-center space-x-6">
  <a
    href="https://github.com"
    className="text-gray-500 hover:text-gray-800 transition"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon icon={faGithub} className="text-2xl" />
  </a>
  <a
    href="https://linkedin.com"
    className="text-gray-500 hover:text-gray-800 transition"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
  </a>
  <a
    href="https://skype.com"
    className="text-gray-500 hover:text-gray-800 transition"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon icon={faSkype} className="text-2xl" />
  </a>
</div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
