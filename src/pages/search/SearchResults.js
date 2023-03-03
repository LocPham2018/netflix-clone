import { useEffect, useState } from 'react';

import useHttp from '../../hooks/use-http';
import reqInfo from '../../requests/requests';
import MovieList from '../../ui/MovieList';
import classes from './SearchResults.module.css';

const SearchResults = props => {
	const {
		link: LINK,
		requests: { fetchSearch },
	} = reqInfo;
	const { sendRequest: fetchMovies } = useHttp();
	const [movies, setMovies] = useState([]);

	// get movie data from API
	useEffect(() => {
		let requestUrl = LINK + fetchSearch + `&query=${props.query}`;

		const getMovies = movies => {
			setMovies(movies);
		};

		fetchMovies(requestUrl, getMovies);
	}, [fetchMovies, LINK, fetchSearch, props.query]);

	return (
		<div className={classes.results}>
			<h2>Search Result</h2>
			<MovieList
				movies={movies}
				onFetch={fetchMovies}
				isPoster={true}
				isWrap={true}
			/>
		</div>
	);
};

export default SearchResults;
