import React from 'react';
import { useState, useEffect } from 'react';
import "../Styles/PoemPage.css";
import poems from '../Models/Poem';
import { PiFlowerTulipBold } from "react-icons/pi";
import { MdArrowForwardIos, MdArrowBackIosNew, MdShare, MdBookmark } from "react-icons/md";
import { IoSunny, IoMoon } from "react-icons/io5";

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []); 
    
    return windowSize;
}

function Poem({ index, isLiked, onLike }) {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <div 
            className={`poem-container ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="poem-background-effect"></div>
            <h3 className="poem-title">{poems[index].title}</h3>
            <p className="poem-flower-count">
                <PiFlowerTulipBold className="flower-icon" /> 
                {poems[index].flowerCount} flowers
            </p>
            <div className="poem-content">
                {poems[index].poem}
            </div>
            <h5 className="poem-author">{poems[index].author}</h5>
        </div>
    );
}

function SunElement() {
    return (
        <div className="sun-container">
            <div className="sun"></div>
            <div className="reflection"></div>
        </div>
    );
}

function FloatingElements() {
    const symbols = ['❀', '❁', '❂', '❃', '❄', '❅', '❆', '❇', '❈'];
    
    return (
        <div className="floating-elements">
            {symbols.map((symbol, index) => (
                <div 
                    key={index} 
                    className="floating-element"
                    style={{ 
                        left: `${(index + 1) * 10}%`,
                        animationDelay: `${index * 2}s`
                    }}
                >
                    {symbol}
                </div>
            ))}
        </div>
    );
}

export default function PoemPage() {
    const { width } = useWindowSize();
    const [index, setIndex] = useState(0);
    const [isDark, setIsDark] = useState(true);
    const [isLiked, setIsLiked] = useState(false);
    const [buttonAnimation, setButtonAnimation] = useState('');
    
    useEffect(() => {
        const saved = localStorage.getItem("darkMode") === "dark";
        setIsDark(saved);
    }, []);
    
    useEffect(() => {
        document.body.classList.toggle("dark", isDark);
        localStorage.setItem("darkMode", isDark ? "dark" : "light");
    }, [isDark]);

    const handleButtonClick = (action) => {
        setButtonAnimation(action);
        setTimeout(() => setButtonAnimation(''), 150);
    };

    const handlePrevious = () => {
        handleButtonClick('prev');
        if (index === 0) setIndex(poems.length - 1);
        else setIndex((index - 1) % poems.length);
    };

    const handleNext = () => {
        handleButtonClick('next');
        setIndex((index + 1) % poems.length);
    };

    const handleLike = () => {
        handleButtonClick('like');
        setIsLiked(!isLiked);
    };

    const handleThemeToggle = () => {
        setIsDark(!isDark);
    };

    const handleShare = () => {
        handleButtonClick('share');
        if (navigator.share) {
            navigator.share({
                title: poems[index].title,
                text: poems[index].poem,
                url: window.location.href,
            });
        } else {
            navigator.clipboard.writeText(`${poems[index].title}\n\n${poems[index].poem}\n\n- ${poems[index].author}`);
        }
    };

    const handleBookmark = () => {
        handleButtonClick('bookmark');
        // Add bookmark logic here
    };

    return (
        <div className="poem-page-div">
            <FloatingElements />
            
            <button 
                className="theme-toggle" 
                onClick={handleThemeToggle}
                title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
                {isDark ? <IoSunny /> : <IoMoon />}
                <span className="theme-text">
                    {isDark ? "Light" : "Dark"}
                </span>
            </button>

            <header className="header">
                <div className="logo">
                    <span style={{ color: "#FB6A65" }}>H</span>ai
                    <span style={{ color: "#FB6A65" }}>K</span>u
                </div>
                <SunElement />
            </header>

            <main className="main-content">
                <h1 className="poem-page-title">Poems By People</h1>
                <hr />
                
                <div className="poem-flex-box">
                    <Poem 
                        index={index} 
                        isLiked={isLiked}
                        onLike={handleLike}
                    />
                </div>

                <div className="poem-counter">
                    {index + 1} of {poems.length}
                </div>

                <div className="controls">
                    <button 
                        className={`btn back ${buttonAnimation === 'prev' ? 'clicked' : ''}`}
                        onClick={handlePrevious}
                        title="Previous Poem"
                    >
                        <MdArrowBackIosNew />
                    </button>
                    
                    <button 
                        className={`btn like ${isLiked ? 'liked' : ''} ${buttonAnimation === 'like' ? 'clicked' : ''}`}
                        onClick={handleLike}
                        title={isLiked ? "Unlike" : "Like this poem"}
                    >
                        <PiFlowerTulipBold className="flowericon" />
                    </button>
                    
                    <button 
                        className={`btn next ${buttonAnimation === 'next' ? 'clicked' : ''}`}
                        onClick={handleNext}
                        title="Next Poem"
                    >
                        <MdArrowForwardIos />
                    </button>
                    
                    <button 
                        className={`btn share ${buttonAnimation === 'share' ? 'clicked' : ''}`}
                        onClick={handleShare}
                        title="Share Poem"
                    >
                        <MdShare />
                    </button>
                    
                    <button 
                        className={`btn bookmark ${buttonAnimation === 'bookmark' ? 'clicked' : ''}`}
                        onClick={handleBookmark}
                        title="Bookmark"
                    >
                        <MdBookmark />
                    </button>
                </div>
            </main>
        </div>
    );
}
