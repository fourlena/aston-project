import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { playlistsApi } from './api/playlists-api';

const rootReducer = combineReducers({});

export const store = configureStore({
	reducer: {
		[playlistsApi.reducerPath]: playlistsApi.reducer
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(playlistsApi.middleware)
});

export type AppRootStateType = ReturnType<typeof rootReducer>;

// @ts-ignore
window.store = store;
