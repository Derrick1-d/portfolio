import { useRef } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import PortfolioWorks from "./components/PortfolioWorks";
import Experience from "./components/Experience";
import ProfilePage from "./components/ProfilePage";
import Footer from "./components/Footer";
import './App.css';

function App() {
  // Create refs for each section
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const experienceRef = useRef(null);
  const profileRef = useRef(null);

  // Function to scroll to a section smoothly
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar scrollToSection={scrollToSection} refs={{ heroRef, aboutRef, portfolioRef, experienceRef, profileRef }} />
      
      {/* Sections */}
      
      <div ref={heroRef}><Hero /></div>

      <div ref={aboutRef}><About /></div>
      <div ref={portfolioRef}><PortfolioWorks /></div>
      <div ref={experienceRef}><Experience /></div>
      <div ref={profileRef}><ProfilePage /></div>

      <Footer scrollToSection={scrollToSection} refs={{ heroRef, aboutRef, portfolioRef, experienceRef, profileRef }} />
    </div>
  );
}

export default App;
