import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	search: ''
};

const slice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearchValue(state, actions) {
			state.search = actions.payload.searchValue;
		}
	}
});

export const searchReducer = slice.reducer;
export const searchActions = slice.actions;
