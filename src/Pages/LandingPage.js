import '../Styles/LandingPage.css';
import {useEffect, useState} from 'react';

const LandingPage = () => {
    const [isDark, setIsDark] = useState(false);
    
    useEffect(()=>{
        const saved = localStorage.getItem("darkMode") === "dark";
        setIsDark(saved);
    },[]);

    useEffect(() => {
        document.body.classList.toggle("dark", !isDark);
    }, [isDark]);

	return <div className="front-page-div">
			<h1 className="front-page-title"> HK </h1>
            <div className="front-page-full-name-div">
                <h1 className="front-page-full-name">俳句 </h1>
                <h5 className="front-page-full-name-small">Haiku</h5>
            </div>
            <div class="sun-container">
                <div class="sun"></div>
                <div class="reflection"></div>
            </div>
			<p className="front-page-tagline"> Poems By People</p>
			<p className="front-page-paragraph"> To read a poem is to hear it with our eyes; to hear it is to see it with our ear.</p>
		<button className="front-page-button" onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem("darkMode", !isDark ? "dark" : "light");
        }}> Explore Poems </button>
		</div>;
}

export default LandingPage;
