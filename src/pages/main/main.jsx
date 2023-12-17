import React from 'react';

import { useGetPlaylistsQuery } from '../../api/playlists-api';

import Card from '../../components/card/card';

import style from './main.module.css';

const Main = () => {
	const { data: playlists, isLoading } = useGetPlaylistsQuery();
	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	return (
		<>
			<div>Header</div>
			<div className={style.mainBlock}>
				<h2>Spotify Playlists</h2>
				{playlists && (
					<div className={style.spotifyPlaylists}>
						{playlists.map(playlist => (
							<Card key={playlist.id} playlistProps={playlist} />
						))}
					</div>
				)}
			</div>
			<div>footer</div>
		</>
	);
};

export default Main;
