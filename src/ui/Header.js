import reqInfo from '../requests/requests';
import useHttp from '../hooks/use-http';
import { useEffect, useState } from 'react';
import Banner from './Banner';

const Header = () => {
	const {
		link: LINK,
		requests: { fetchNetflixOriginals },
	} = reqInfo;
	const { sendRequest: fetchMovies } = useHttp();
	const [movie, setMovie] = useState(null);

	// get movie data from API
	useEffect(() => {
		const requestUrl = LINK + fetchNetflixOriginals;

		const getMovie = movies => {
			const result =
				movies[Math.floor(Math.random() * movies.length - 1)];
			setMovie(result);
		};

		fetchMovies(requestUrl, getMovie);
	}, [fetchMovies, LINK, fetchNetflixOriginals]);

	return (
		<Banner
			onFetch={fetchMovies}
			movie={movie}
		/>
	);
};

export default Header;
