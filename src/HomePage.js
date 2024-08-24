import React from 'react';
import { useState, useEffect} from 'react';
import rose from "./images/pinkrose.png"
import "./HomePage.css";

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

function Poem(){
	const poem = `  "My heart leaps up when I behold
					A rainbow in the sky:
					So was it when my life began;
					So is it now I am a man;
					So be it when I shall grow old,
					Or let me die!
					The Child is father of the Man;
					And I could wish my days to be
					Bound each to each by natural piety."`;


	return <p className="poem"> {poem} </p>;
};

function Flower(){
	return <img className="backgroundFlower" src={rose} alt="rose"/>;
};

function SidePanel(){
	return <div className="sidepanel">
		<div className="flowerContainer">
			<img className="flower"src={rose} alt="rose"/>
		</div>
		<div className="circle"></div>
		</div>;
};

function HomePage(){

	const {width, height} = useWindowSize();

	return <div className="main">
			<h1 className="logo"> PG </h1>
			<div className="wrapper"> 
				<Poem/>
				{width > 1000 ? <SidePanel/> : <Flower/>} 	
			</div>
		</div>;
};

export default HomePage;
