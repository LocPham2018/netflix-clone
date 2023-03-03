import { useState } from 'react';

import Actions from './components/Actions';
import Comedies from './components/Comedies';
import Documentaries from './components/Documentaries';
import Horrors from './components/Horrors';
import Originals from './components/Originals';
import Romances from './components/Romances';
import TopRated from './components/TopRated';
import Trendings from './components/Trendings';
import classes from './MovieSection.module.css';

const MovieSection = () => {
	// define where to display MovieDetail component
	const [clickedList, setClickedList] = useState('');

	const clickedListHandler = listName => {
		setClickedList(listName);
	};

	return (
		<section className={classes.container}>
			<Originals
				listName="originals"
				clickedList={clickedList}
				onClick={clickedListHandler}
			/>
			<Trendings
				listName="trendings"
				clickedList={clickedList}
				onClick={clickedListHandler}
			/>
			<TopRated 
				listName="top-rated"
				clickedList={clickedList}
				onClick={clickedListHandler}
			/>
			<Actions 
				listName="actions"
				clickedList={clickedList}
				onClick={clickedListHandler}
			/>
			<Comedies 
				listName="comedies"
				clickedList={clickedList}
				onClick={clickedListHandler}
			/>
			<Horrors 
				listName="horrors"
				clickedList={clickedList}
				onClick={clickedListHandler}
			/>
			<Romances 
				listName="romances"
				clickedList={clickedList}
				onClick={clickedListHandler}
			/>
			<Documentaries 
				listName="documentaries"
				clickedList={clickedList}
				onClick={clickedListHandler}
			/>
		</section>
	);
};

export default MovieSection;
