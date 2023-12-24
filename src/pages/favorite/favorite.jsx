import React from 'react';
import { useSelector } from 'react-redux';

import Card from '../../components/card/card';
import SearchPanel from '../../components/search-panel/search-panel';
import style from '../main/main.module.css';
import { getFavorites } from '../../redux/slices/favorite-slice';

const Favorite = () => {
	const playlistsFavorite = useSelector(getFavorites);

	return (
		<>
			<SearchPanel />
			<div className={style.mainBlock}>
				<h2>Favorite Playlists</h2>

				{playlistsFavorite.length ? (
					<div className={style.spotifyPlaylists}>
						{playlistsFavorite.map(playlist => (
							<Card key={playlist.id} playlistProps={playlist} />
						))}
					</div>
				) : (
					<h2>You don't have favorite playlist</h2>
				)}
			</div>
		</>
	);
};

export default Favorite;
