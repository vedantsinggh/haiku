import '../Styles/LandingPage.css';
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

const LandingPage = () => {
    const [isDark, setIsDark] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        const saved = localStorage.getItem("darkMode") === "dark";
        setIsDark(saved);
    }, []);
    
    useEffect(() => {
        document.body.classList.toggle("dark", isDark);
    }, [isDark]);

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        localStorage.setItem("darkMode", newTheme ? "dark" : "light");
    };

    // Generate floating elements
    const generateFloatingElements = () => {
        const elements = ['❀', '✿', '🌸', '🌺', '🌻', '🌷', '✨', '💫'];
        const floatingElements = [];
        
        for (let i = 0; i < 12; i++) {
            const element = elements[Math.floor(Math.random() * elements.length)];
            const left = Math.random() * 100;
            const animationDelay = Math.random() * 20;
            const animationDuration = 15 + Math.random() * 10;
            
            floatingElements.push(
                <div
                    key={i}
                    className="floating-element"
                    style={{
                        left: `${left}%`,
                        animationDelay: `${animationDelay}s`,
                        animationDuration: `${animationDuration}s`
                    }}
                >
                    {element}
                </div>
            );
        }
        
        return floatingElements;
    };

    return (
        <>
            {/* Floating background elements */}
            <div className="floating-elements">
                {generateFloatingElements()}
            </div>

            {/* Theme toggle button */}
            <button 
                className="theme-toggle" 
                onClick={toggleTheme}
                aria-label="Toggle theme"
            >
                {isDark ? '☀️' : '🌙'}
                <span className="theme-text">
                    {isDark ? 'Light' : 'Dark'}
                </span>
            </button>

            <div className="front-page-div">
                <h1 className="front-page-title">HK</h1>
                
                <div className="front-page-full-name-div">
                    <h1 className="front-page-full-name">俳句</h1>
                    <h5 className="front-page-full-name-small">Haiku</h5>
                </div>
                
                <div className="sun-container">
                    <div className="sun"></div>
                    <div className="reflection"></div>
                </div>

                <div className="front-page-content-container">
                    <p className="front-page-tagline">Poems By People</p>
                    <hr />
                    <p className="front-page-paragraph">
                        To read a poem is to hear it with our eyes; to hear it is to see it with our ear.
                    </p>
                </div>
                
                <button 
                    className="front-page-button" 
                    onClick={() => {
                        navigate("/poems");
                        console.log('Navigate to poems page');
                    }}
                    aria-label="Explore poems"
                >
                    Explore Poems
                </button>
            </div>
        </>
    );
};

export default LandingPage;
