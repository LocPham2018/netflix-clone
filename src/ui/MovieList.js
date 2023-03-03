import { useState } from 'react';
import useHttp from '../hooks/use-http';
import reqInfo from '../requests/requests';
import MovieDetail from './MovieDetail';
import MovieItem from './MovieItem';
import classes from './MovieList.module.css';

const MovieList = props => {
	const [isDetailOpen, setDetailOpen] = useState(false);
	const [movie, setMovie] = useState(null);
	const { link: LINK, api_key: API_KEY } = reqInfo;
	const { sendRequest: fetchMovie } = useHttp();
	const isOpen = props.clickedList === props.listName && isDetailOpen;

	// set movie for displaying MovieDetail component
	const getMovie = (movie, response) => {
		if (!Array.isArray(response)) {
			setMovie(movie);
			return;
		}
		const results = response.filter(
			video =>
				video.site === 'YouTube' &&
				(video.type === 'Trailer' || video.type === 'Teaser')
		);
		if (results.length === 0) {
			setMovie(movie);
		} else {
			setMovie({
				...movie,
				key: results[0].id,
			});
		}
	};

	// handle toggling MovieDetail component when clicking into movie image
	const toggleDetailHandler = clickedMovie => {
		props.onClick(props.listName);
		if (movie && movie.id !== clickedMovie.id) {
			setDetailOpen(true);
		} else {
			setDetailOpen(prevState => !prevState);
		}
		fetchMovie(
			`${LINK}/movie/${clickedMovie.id}/videos?api_key=${API_KEY}`,
			getMovie.bind(null, clickedMovie)
		);
	};

	// set styling based on isWrap props
	// if movie list has to wrap, set wrap class; if not, set nowrap class
	const listClasses = `${classes.movies} ${
		props.isWrap ? classes.wrap : classes.nowrap
	}`;

	// set movies list
	let moviesContent = <p></p>;
	if (props.movies.length > 0) {
		moviesContent = props.movies.map(movie => (
			<MovieItem
				key={movie.id}
				movie={movie}
				isPoster={props.isPoster}
				onClick={toggleDetailHandler}
			/>
		));
	}

	return (
		<>
			<div className={listClasses}>{moviesContent}</div>
			{isOpen && <MovieDetail movieData={movie} />}
		</>
	);
};

export default MovieList;
