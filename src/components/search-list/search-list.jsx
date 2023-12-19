import React from 'react';

import { useGetPlaylistsListQuery } from '../../api/playlists-api';

import style from './search-list.module.css';

const SearchList = ({ searchValue }) => {
	const { data: playlists } = useGetPlaylistsListQuery(searchValue);

	return (
		<div>
			{playlists && (
				<div className={style.resultsList}>
					{playlists.map(playlist => (
						<div className={style.searchResult} key={playlist.id}>
							{playlist.name}
						</div>
					))}
				</div>
			)}
		</div>
	);
};
export default SearchList;
