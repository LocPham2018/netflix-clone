import reqInfo from '../requests/requests';
import classes from './MovieItem.module.css';

const MovieItem = props => {
	const { img_link: LINK } = reqInfo;

	// set image link and styling based on if we get poster image or backdrop image
	const imgSrc =
		LINK +
		(props.isPoster ? props.movie.poster_path : props.movie.backdrop_path);
	const imgClasses = `${classes.movie} ${
		props.isPoster ? classes['movie-poster'] : classes['movie-backdrop']
	}`;

	// set event handler when clicking movie image
	const toggleHandler = () => {
		props.onClick(props.movie);
	}

	return (
		<div className={imgClasses}>
			<img src={imgSrc} alt={props.movie.name || props.movie.title} onClick={toggleHandler} />
		</div>
	);
};

export default MovieItem;
