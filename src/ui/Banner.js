import classes from './Banner.module.css';
import reqInfo from '../requests/requests';

const Banner = props => {
	const { img_link: LINK } = reqInfo;

	// set component content
	let movieContent = <header></header>;
	if (props.movie) {
		movieContent = (
			<header className={classes.banner}>
				<img src={LINK + props.movie.backdrop_path} alt={props.movie.name} />
				<div className={classes.info}>
					<h1>{props.movie.name}</h1>
					<button>Play</button>
					<button>My List</button>
					<p>{props.movie.overview}</p>
				</div>
			</header>
		);
	}

	return movieContent;
};

export default Banner;
