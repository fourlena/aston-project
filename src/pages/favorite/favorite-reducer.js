import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	favorites: []
};

const slice = createSlice({
	name: 'favorite',
	initialState,
	reducers: {
		addPlaylistInFavorite(state, action) {
			debugger;
			state.favorites.push(action.payload.playlist);
		},
		deletePlaylistInFavorite(state, action) {
			debugger;
			state.favorites = state.favorites.filter(
				tl => tl.id !== action.payload.playlistId
			);
		}
	}
});

export const favoriteReducer = slice.reducer;
export const favoriteActions = slice.actions;
