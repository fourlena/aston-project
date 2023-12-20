import React from 'react';

import { useSelector } from 'react-redux';

import Card from '../../components/card/card';
import SearchPanel from '../../components/search-panel/search-panel';
import style from '../main/main.module.css';

const Favorite = () => {
	const playlistsFavorite = useSelector(state => state.favorite.favorites);

	return (
		<>
			<div>Header</div>
			<SearchPanel />
			<div className={style.mainBlock}>
				<h2>Favorite Playlists</h2>
				{playlistsFavorite && (
					<div className={style.spotifyPlaylists}>
						{playlistsFavorite.map(playlist => (
							<Card key={playlist.id} playlistProps={playlist} />
						))}
					</div>
				)}
			</div>
			<div>footer</div>
		</>
	);
};

export default Favorite;
