// storing variables for getting data from API

const LINK = `https://api.themoviedb.org/3`;

const IMG_LINK = `https://image.tmdb.org/t/p/original`;

const API_KEY = '4b5b37a64c07e1fa4478f9616b7713e8';

const requests = {
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
	fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
};

const reqInfo = { link: LINK, img_link: IMG_LINK, api_key: API_KEY, requests };

export default reqInfo;
