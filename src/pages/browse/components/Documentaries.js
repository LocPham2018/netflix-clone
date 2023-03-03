import { useEffect, useState } from 'react';

import useHttp from '../../../hooks/use-http';
import reqInfo from '../../../requests/requests';
import MovieList from '../../../ui/MovieList';

const Documentaries = props => {
	const {
		link: LINK,
		requests: { fetchDocumentaries },
	} = reqInfo;
	const { sendRequest: fetchMovies } = useHttp();
	const [movies, setMovies] = useState([]);

	// get movie data from API
	useEffect(() => {
		const requestUrl = LINK + fetchDocumentaries;

		const getMovie = movies => {
			setMovies(movies);
		};

		fetchMovies(requestUrl, getMovie);
	}, [fetchMovies, LINK, fetchDocumentaries]);

	return (
		<div id="top-rated">
			<h2>Documentaries</h2>
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

export default Documentaries;
