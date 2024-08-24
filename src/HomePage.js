import React from 'react';
import { useState, useEffect} from 'react';
import rose from "./images/pinkrose.png"
import "./HomePage.css";
import poems from './Poem';

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

function Poem({index}){
	return <div className="poem">
			<h3 className="poemtitle">{poems[index].title}</h3>
			<p> {poems[index].poem} </p>
			<h5 className="author"> - {poems[index].author}</h5>
		</div>
};

function Flower({index}){
	return <img className="backgroundFlower" src={poems[index].flower} alt="flower"/>;
};

function SidePanel({index}){
	return <div className="sidepanel">
		<div className="flowerContainer">
			<img className="flower"src={poems[index].flower} alt="rose"/>
		</div>
		<div className="circle"></div>
		</div>;
};

function HomePage(){
	const {width, height} = useWindowSize();
	const [index, setIndex] = useState(1);

	return <div className="main">
			<h1 className="logo">PuspGeet</h1>
			<div className="wrapper"> 
				<Poem index={index}/>
				{width > 900 ? <SidePanel index={index}/> : <Flower index={index}/>} 	
			</div>
		</div>;
};

export default HomePage;
