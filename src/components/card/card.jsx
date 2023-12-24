import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import FavoriteBtn from '../../components/favorite-btn/favorite-btn';
import { favoriteActions } from '../../redux/slices/favorite-slice';

import {
	deleteFavoritePlaylist,
	getDataFromLS
} from '../../utils/local-storage';
import { useFavorite } from '../../hooks/use-favorite';

import style from './card.module.css';

const Card = ({ playlistProps }) => {
	const isAuth = getDataFromLS('isAuth', '""');
	const isAuthFav = isAuth + 'fav';

	const dispatch = useDispatch();
	const playlistsFavorite = useFavorite(playlistProps.id);

	const setFavorite = () => {
		if (playlistsFavorite) {
			dispatch(
				favoriteActions.deletePlaylistFromFavorite({
					playlistId: playlistProps.id
				})
			);
			deleteFavoritePlaylist(isAuthFav, playlistProps);
		} else {
			dispatch(
				favoriteActions.addPlaylistInFavorite({ playlist: playlistProps })
			);
		}
	};

	return (
		<div className={style.spotifyPlaylist}>
			<Link to={`/playlist/${playlistProps.id}`}>
				<img
					className={style.albumCover}
					src={playlistProps.images[0].url}
					alt="cover"
				/>
			</Link>
			<div className={style.playBtn}>
				<span className={style.play}>
					<svg
						className={style.svg}
						data-encore-id="icon"
						role="img"
						aria-hidden="true"
						viewBox="0 0 24 24"
					>
						<path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
					</svg>
				</span>
			</div>
			<Link to={`/playlist/${playlistProps.id}`}>
				<h4 className={style.title}>{playlistProps.name}</h4>
			</Link>
			<p className={style.subtitle}>{playlistProps.description}</p>
			{isAuth && (
				<FavoriteBtn
					setFavorite={setFavorite}
					playlistsFavorite={playlistsFavorite}
				/>
			)}
		</div>
	);
};

export default Card;

Card.propTypes = {
	playlistProps: PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		images: PropTypes.arrayOf(PropTypes.object)
	})
};
