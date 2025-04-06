

const Footer = ({ scrollToSection, refs }) => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">TABIRI DERRICK</h2>
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <nav className="mt-4 md:mt-0">
          <ul className="flex space-x-4">
            <li><button onClick={() => scrollToSection(refs.heroRef)} className="text-gray-400 hover:text-white">Hero</button></li>
            <li><button onClick={() => scrollToSection(refs.aboutRef)} className="text-gray-400 hover:text-white">About</button></li>
            <li><button onClick={() => scrollToSection(refs.portfolioRef)} className="text-gray-400 hover:text-white">Portfolio</button></li>
            <li><button onClick={() => scrollToSection(refs.experienceRef)} className="text-gray-400 hover:text-white">Experience</button></li>
            <li><button onClick={() => scrollToSection(refs.profileRef)} className="text-gray-400 hover:text-white">Profile</button></li>
          </ul>
        </nav>

        <div className="mt-4 md:mt-0 flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook"></i></a>
          <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
          <a href="http://linkedin.com/in/derrick-tabiri-b71b051b9" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
