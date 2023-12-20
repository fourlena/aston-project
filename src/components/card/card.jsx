import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import FavoriteBtn from '../../components/favorite-btn/favorite-btn';
import { favoriteActions } from '../../pages/favorite/favorite-reducer';

import style from './card.module.css';

const Card = ({ playlistProps }) => {
	const dispatch = useDispatch();

	const playlistsFavorite = useSelector(state =>
		state.favorite.favorites.find(el => el.id === playlistProps.id)
	);

	const setFavorite = () => {
		if (playlistsFavorite) {
			dispatch(
				favoriteActions.deletePlaylistInFavorite({
					playlistId: playlistProps.id
				})
			);
		} else {
			dispatch(
				favoriteActions.addPlaylistInFavorite({ playlist: playlistProps })
			);
		}
	};

	return (
		<div className={style.spotifyPlaylist}>
			<img
				className={style.albumCover}
				src={playlistProps.images[0].url}
				alt="cover"
			/>
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
			<h4 className={style.title}>{playlistProps.name}</h4>
			<p className={style.subtitle}>{playlistProps.description}</p>
			<FavoriteBtn
				setFavorite={setFavorite}
				playlistsFavorite={playlistsFavorite}
			/>
		</div>
	);
};

export default Card;
