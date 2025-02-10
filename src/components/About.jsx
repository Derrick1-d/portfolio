import React from 'react';

function About() {
  return (
    <div className="bg-white flex flex-col items-center text-gray-800 p-10 md:p-20">
      {/* Header Section */}
      <header className="w-full py-6 text-center">
        <h1 className="text-2xl font-bold text-gray-700">About Me</h1>
        <p className="text-xl text-gray-600 mt-2">I'm a Full Stack Developer</p>
      </header>

      {/* Main Content */}
      <div className="w-full max-w-3xl text-center px-6 md:px-0">
        <p className="text-lg leading-relaxed">
          A Junior Software Developer skilled in managing all aspects of software development 
          from concept, navigation, and layout to programming, UX, and SEO. 
          Proficient in writing well-designed, testable, and efficient code using best practices. 
          A fast learner, hard worker, and team player with expertise in various scripting languages. 
          With a strong foundation in front-end and back-end technologies, I have contributed to 
          several successful projects and am driven to deliver high-quality, user-friendly applications.
        </p>
      </div>

      {/* Contact Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div>
          <h3 className="text-lg font-semibold">Let's Get in Touch</h3>
          <p className="mt-2">📞 <a href="tel:+233558686295" className="hover:text-blue-600">+233 558686295</a></p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Drop an Email</h3>
          <p className="mt-2">✉️ <a href="mailto:derricktabiri046@gmail.com" className="hover:text-blue-600">derricktabiri046@gmail.com</a></p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Follow Me</h3>
          <div className="mt-2 flex justify-center space-x-4 text-2xl">
            <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://join.skype.com/invite/yourid" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
              <i className="fab fa-skype"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 w-full bg-gray-900 py-4 text-center text-gray-300">
        <p>CERTIFIED SALESFORCE COMMERCE CLOUD DEVELOPER</p>
      </footer>
    </div>
  );
}

export default About;
