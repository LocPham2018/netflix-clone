import { useEffect, useState } from 'react';

import useHttp from '../../../hooks/use-http';
import reqInfo from '../../../requests/requests';
import MovieList from '../../../ui/MovieList';

const TopRated = props => {
	const {
		link: LINK,
		requests: { fetchTopRated },
	} = reqInfo;
	const { sendRequest: fetchMovies } = useHttp();
	const [movies, setMovies] = useState([]);

	// get movie data from API
	useEffect(() => {
		const requestUrl = LINK + fetchTopRated;

		const getMovie = movies => {
			setMovies(movies);
		};

		fetchMovies(requestUrl, getMovie);
	}, [fetchMovies, LINK, fetchTopRated]);

	return (
		<div id="top-rated">
			<h2>Top Rated</h2>
			<MovieList
				movies={movies}
				onFetch={fetchMovies}
				listName={props.listName}
				clickedList={props.clickedList}
				onClick={props.onClick}
			/>
		</div>
	);
};

export default TopRated;
