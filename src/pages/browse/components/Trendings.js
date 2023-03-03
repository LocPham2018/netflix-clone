import { useEffect, useState } from 'react';

import useHttp from '../../../hooks/use-http';
import reqInfo from '../../../requests/requests';
import MovieList from '../../../ui/MovieList';

const Trendings = props => {
	const {
		link: LINK,
		requests: { fetchTrending },
	} = reqInfo;
	const { sendRequest: fetchMovies } = useHttp();
	const [movies, setMovies] = useState([]);

	// get movie data from API
	useEffect(() => {
		const requestUrl = LINK + fetchTrending;

		const getMovie = movies => {
			setMovies(movies);
		};

		fetchMovies(requestUrl, getMovie);
	}, [fetchMovies, LINK, fetchTrending]);

	return (
		<div id="trendings">
			<h2>Trendings</h2>
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

export default Trendings;
