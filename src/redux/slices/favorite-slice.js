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
			state.favorites.push(action.payload.playlist);
		},
		deletePlaylistFromFavorite(state, action) {
			state.favorites = state.favorites.filter(
				tl => tl.id !== action.payload.playlistId
			);
		}
	}
});

export const favoriteReducer = slice.reducer;
export const favoriteActions = slice.actions;

export const getFavorites = state => state.favorite.favorites;
