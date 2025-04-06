import { useRef, useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import PortfolioWorks from "./components/PortfolioWorks";
import Experience from "./components/Experience";
import ProfilePage from "./components/ProfilePage";
import Footer from "./components/Footer";
import './App.css';

function App() {
    // Theme state
    const [darkMode, setDarkMode] = useState(false);

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

    // Toggle theme function
    const toggleTheme = () => {
        setDarkMode(!darkMode);
        localStorage.setItem('darkMode', !darkMode);
    };

    // Initialize theme from localStorage on component mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('darkMode');
        if (savedTheme !== null) {
            setDarkMode(savedTheme === 'true');
        } else {
            // Check user's system preference
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setDarkMode(prefersDark);
        }
    }, []);

    // Apply theme class to the document body
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <div className={`${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} min-h-screen flex flex-col transition-colors duration-300`}>
            <Navbar
                scrollToSection={scrollToSection}
                refs={{ heroRef, aboutRef, portfolioRef, experienceRef, profileRef }}
                darkMode={darkMode}
                toggleTheme={toggleTheme}
            />

            {/* Sections with theme props */}
            <div ref={heroRef}><Hero darkMode={darkMode} /></div>
            <div ref={aboutRef}><About darkMode={darkMode} /></div>
            <div ref={portfolioRef}><PortfolioWorks darkMode={darkMode} /></div>
            <div ref={experienceRef}><Experience darkMode={darkMode} /></div>
            <div ref={profileRef}><ProfilePage darkMode={darkMode} /></div>

            <Footer
                scrollToSection={scrollToSection}
                refs={{ heroRef, aboutRef, portfolioRef, experienceRef, profileRef }}
                darkMode={darkMode}
            />
        </div>
    );
}

export default App;