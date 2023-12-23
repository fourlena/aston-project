import React from 'react';

import { useSearchParams } from 'react-router-dom';

import style from '../main/main.module.css';
import Card from '../../components/card/card';
import SearchPanel from '../../components/search-panel/search-panel';
import { useGetPlaylistsBySearchQuery } from '../../api/playlists-api';

const Search = () => {
	const [searchParams] = useSearchParams();
	const searchQueryParam = searchParams.get('name');
	const { data: playlists, isLoading } =
		useGetPlaylistsBySearchQuery(searchQueryParam);

	if (isLoading) {
		return <h1>Loading...</h1>;
	}
	return (
		<>
			<SearchPanel />
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
		</>
	);
};

export default Search;
