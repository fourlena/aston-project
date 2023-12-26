import { createSlice } from '@reduxjs/toolkit';

import { key, getDataFromLS } from '../../utils/local-storage';

const initialState = {
	history: getDataFromLS(key('history'), '[]')
};

const slice = createSlice({
	name: 'history',
	initialState,
	reducers: {
		addSearchInHistory(state, action) {
			state.history.push(action.payload.search);
		},
		deleteSearchFromHistory(state, action) {
			state.history = state.history.filter(el => el !== action.payload);
		}
	}
});

export const historyReducer = slice.reducer;
export const historyActions = slice.actions;

export const getHistory = state => state.history.history;
