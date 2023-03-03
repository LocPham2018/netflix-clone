import { useRef } from 'react';
import classes from './SearchBar.module.css';

const SearchBar = props => {
	const searchRef = useRef();

	// set event handler for search and reset button
	const searchHandler = evt => {
		evt.preventDefault();
		props.onQuery(searchRef.current.value);
	}

	const resetHandler = () => searchRef.current.value = '';

	return (
		<section className={classes.container}>
			<form onSubmit={searchHandler}>
				<input type="text" ref={searchRef} />
				<div className={classes.btns}>
					<button className={classes['button-alt']} onClick={resetHandler}>RESET</button>
					<button type="submit" className={classes.button}>SEARCH</button>
				</div>
			</form>
		</section>
	);
};

export default SearchBar;
