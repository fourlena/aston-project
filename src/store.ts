import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { playlistsApi } from './api/playlists-api';

import { favoriteReducer } from './redux/slices/favorite-slice';
import { LSMiddleware } from './redux/middleware';

const rootReducer = combineReducers({
	favorite: favoriteReducer,
	[playlistsApi.reducerPath]: playlistsApi.reducer
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(playlistsApi.middleware).concat(LSMiddleware)
});

// @ts-ignore
window.store = store;
