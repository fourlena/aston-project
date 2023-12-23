import React from 'react';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { favoriteActions } from '../../redux/slices/favorite-slice';
import { useGetPlaylistByIdQuery } from '../../api/playlists-api';

import FavoriteBtn from '../../components/favorite-btn/favorite-btn';
import Song from '../../components/song/song';
import {
	deleteFavoritePlaylist,
	getDataFromLS
} from '../../utils/local-storage';

import style from './playlist.module.css';

const Playlist = () => {
	const isAuth = getDataFromLS('isAuth', '""');
	const isAuthFav = isAuth + 'fav';

	const params = useParams();
	const current = params.id;
	const dispatch = useDispatch();

	const playlistsFavorite = useSelector(state =>
		state.favorite.favorites.find(el => el.id === current)
	);

	const { data: playlist, isLoading } = useGetPlaylistByIdQuery(current);

	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	const setFavorite = () => {
		if (playlistsFavorite) {
			dispatch(
				favoriteActions.deletePlaylistFromFavorite({
					playlistId: current
				})
			);
			deleteFavoritePlaylist(isAuthFav, playlist);
		} else {
			dispatch(favoriteActions.addPlaylistInFavorite({ playlist: playlist }));
		}
	};

	return (
		<>
			{playlist && (
				<div className={style.body}>
					<div className={style.containerData}>
						<div>
							<img
								className={style.img}
								src={playlist.images[0].url}
								alt="playlist"
							/>
						</div>

						<div className={style.containerInfo}>
							<p className={style.containerInfo}>Playlist</p>
							<h1 className={style.title}>{playlist.name}</h1>
							<p className={style.description}>{playlist.description}</p>
							<div className={style.info}>
								<p>{playlist.owner['display_name']}</p>
								<p>Likes: {playlist.followers.total}</p>
							</div>
						</div>
					</div>
					<div className={style.containerTracks}>
						<div className={style.buttons}>
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
							{isAuth && (
								<FavoriteBtn
									setFavorite={setFavorite}
									playlistsFavorite={playlistsFavorite}
								/>
							)}
						</div>
						<div>
							<div className={style.trackContainer}>
								<p>#</p>
								<p>TITLE</p>
								<p>ALBUM</p>
							</div>
							{playlist.tracks.items.slice(0, 10).map((el, id) => (
								<Song key={id} trackProps={el.track} idTrack={id + 1} />
							))}
						</div>
					</div>
				</div>
			)}
			;
		</>
	);
};

export default Playlist;
