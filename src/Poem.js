import pinkrose from './images/pinkrose.png';
import rose from './images/rose.png';

class Poem{
	constructor(title, poem, author, flower, flowerCount){
		this.poem = poem;
		this.title= title;
		this.author=author;
		this.flower=flower;
		this.flowerCount = flowerCount;
	}
};

const poems = [
	new Poem(`My Heart Leaps Up`, `My heart leaps up when I behold
			A rainbow in the sky:
			So was it when my life began;
			So is it now I am a man;
			So be it when I shall grow old,
			Or let me die!
			The Child is father of the Man;
			And I could wish my days to be
			Bound each to each by natural piety.`,
	`William Wordsworth`,
	rose,
	10
	),

	new Poem(`A Slumber Did My Spirit Seal`, `A slumber did my spirit seal
			I had no human fears:
			She seemed a thing that could not feel
			The touch of earthly years.

			No motion has she now, no force;
			She neither hears nor sees;
			Rolled round in earth’s diurnal course,
			With rocks, and stones, and trees.`,
		`William Wordsworth`,
		pinkrose,
		4
	),
]

export default poems;
