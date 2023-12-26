import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { useGetPlaylistsBySearchQuery } from '../../api/playlists-api';

import Card from '../../components/card/card';
import SearchPanel from '../../components/search-panel/search-panel';
import style from '../main/main.module.css';

import { searchActions } from '../../redux/slices/search-slice';

const Search = () => {
	const [searchParams] = useSearchParams();
	const searchQueryParam = searchParams.get('name');
	const dispatch = useDispatch();
	const { data: playlists, isLoading } =
		useGetPlaylistsBySearchQuery(searchQueryParam);

	useEffect(() => {
		if (!searchQueryParam) {
			return;
		}
		dispatch(searchActions.setSearchValue({ searchValue: searchQueryParam }));
	}, [dispatch, searchQueryParam]);

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
