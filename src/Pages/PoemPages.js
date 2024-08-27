import React from 'react';
import { useState, useEffect} from 'react';
import "../Styles/PoemPage.css";
import poems from '../Models/Poem';
import { PiFlowerTulipBold  } from "react-icons/pi";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";

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
			<p className="flower-count">{poems[index].flowerCount} <PiFlowerTulipBold/> </p>
			<p>" {poems[index].poem}"</p>
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
			<h1 className="logo"><span style={{color: "black"}}>p</span>usp<span style={{color: "black"}}>G</span>eet</h1>
			<hr/>
			<div className="wrapper"> 
				<Poem index={index}/>
				{width > 900 ? <SidePanel index={index}/> : null} 	
			</div>
			<div className="controls">
				<button className="btn back" onClick={() => {
					if(index == 0) setIndex(poems.length - 1);
					else setIndex((index - 1) % poems.length);
				}}><MdArrowBackIosNew/> </button>
				<button className="btn like"> <PiFlowerTulipBold className="flowericon"/> </button>
				<button className="btn next" onClick={() => {
					setIndex((index + 1) % poems.length);
				}}> <MdArrowForwardIos/> </button>
			</div>
		</div>;
};

export default HomePage;
