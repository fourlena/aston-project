import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { playlistsApi } from './api/playlists-api';
import { favoriteReducer } from './pages/favorite/favorite-reducer';
import { authReducer } from './pages/login/auth-reducer';

const rootReducer = combineReducers({
	auth: authReducer,
	favorite: favoriteReducer,
	[playlistsApi.reducerPath]: playlistsApi.reducer
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(playlistsApi.middleware)
});

// @ts-ignore
window.store = store;
