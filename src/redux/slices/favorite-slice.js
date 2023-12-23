import { createSlice } from '@reduxjs/toolkit';

import { key, getDataFromLS } from '../../utils/local-storage';

const initialState = {
	favorites: getDataFromLS(key('fav'), '[]')
};

const slice = createSlice({
	name: 'favorite',
	initialState,
	reducers: {
		addPlaylistInFavorite(state, action) {
			debugger;
			state.favorites.push(action.payload.playlist);
		},
		deletePlaylistFromFavorite(state, action) {
			debugger;
			state.favorites = state.favorites.filter(
				tl => tl.id !== action.payload.playlistId
			);
		},
		addAllFavoritePlaylist(state, action) {
			state.favoriteMovies.push(...action.payload.playlist);
		},
		clearFavoriteMovies(state) {
			state.favoriteMovies = [];
		}
	}
});

export const favoriteReducer = slice.reducer;
export const favoriteActions = slice.actions;
