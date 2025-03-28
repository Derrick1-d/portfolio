import React from 'react';
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
  faMapMarkerAlt 
} from '@fortawesome/free-solid-svg-icons';

function About() {
  const socialLinks = [
    { 
      icon: faGithub, 
      href: "https://github.com/yourgithub",
      color: "#333"
    },
    { 
      icon: faLinkedin, 
      href: "https://linkedin.com/in/yourlinkedin",
      color: "#0077B5"
    },
    { 
      icon: faSkype, 
      href: "https://join.skype.com/invite/yourid",
      color: "#00AFF0"
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
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white shadow-xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left Column - Personal Information */}
        <div className="bg-gradient-to-br from-blue-100 to-white p-12 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              About Me
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Full Stack Developer | Problem Solver | Innovation Enthusiast
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              A passionate Junior Software Developer with a comprehensive skill set spanning 
              full-stack development. I excel in crafting robust, scalable applications 
              by seamlessly integrating front-end design with powerful back-end functionality. 
              My approach combines technical expertise with creative problem-solving, 
              ensuring innovative and user-centric solutions.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-all duration-300 hover:scale-110"
                  style={{ color: social.color }}
                >
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column - Contact and Details */}
        <div className="bg-gray-50 p-12 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Contact Information
            </h2>
            
            <div className="space-y-6">
              {contactDetails.map((contact, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 shadow-md flex items-center space-x-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-blue-50 p-3 rounded-full">
                    <FontAwesomeIcon 
                      icon={contact.icon}
                      className="text-3xl text-blue-600"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      {contact.title}
                    </h3>
                    <a 
                      href={contact.link} 
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {contact.content}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center text-sm text-gray-500">
              CERTIFIED SALESFORCE COMMERCE CLOUD DEVELOPER
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;