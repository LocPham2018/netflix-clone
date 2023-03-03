import YouTube from 'react-youtube';
import reqInfo from '../requests/requests';
import classes from './MovieDetail.module.css';

const opts = {
	height: '400',
	width: '100%',
	playerVars: {
		autoplay: 0,
	},
};

const MovieDetail = props => {
	const { img_link: LINK } = reqInfo;

	// set component content
	let detailContent = <p>No detail available</p>;
	if (props.movieData) {
		const imgSrc = LINK + props.movieData.backdrop_path;
		const title = props.movieData.name || props.movieData.title;
		detailContent = (
			<>
				<div>
					<div className={classes.title}>{title}</div>
					<p className={classes.date}>
						Release Date: {props.movieData.release_date || props.movieData.first_air_date}
					</p>
					<p className={classes.vote}>
						Vote: {props.movieData.vote_average}/10
					</p>
					<p>{props.movieData.overview}</p>
				</div>
				{props.movieData.key ? (
					<YouTube videoId={props.movieData.key} opts={opts} />
				) : (
					<div>
						<img src={imgSrc} alt={title} />
					</div>
				)}
			</>
		);
	}

	return <div className={classes.detail}>{detailContent}</div>;
};

export default MovieDetail;
