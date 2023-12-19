import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { playlistsApi } from './api/playlists-api';
import { searchReducer } from './components/search-panel/search-panel-reducer';

const rootReducer = combineReducers({
	search: searchReducer,
	[playlistsApi.reducerPath]: playlistsApi.reducer
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(playlistsApi.middleware)
});

// @ts-ignore
window.store = store;
