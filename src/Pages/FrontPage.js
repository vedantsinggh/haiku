import react from 'react';
import {LightColor} from '../Constants/Colors';
import '../Styles/FrontPage.css';
import frontimage from '../Assets/Images/frontpagepen.png';

const HomePage = () => {
	return <div className="front-page-div">
			<h1 className="front-page-title"> PuspGeet </h1>
			<img className="front-page-image" src={frontimage}/>
			<p className="front-page-tagline"> Poems By People</p>
			<p className="front-page-paragraph"> To read a poem is to hear it with our eyes; to hear it is to see it with our ear.</p>
		<button className="front-page-button"> Explore Poems </button>
		</div>;
}

export default HomePage;
