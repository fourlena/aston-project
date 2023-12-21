import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoggedIn: false
};

const slice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setIsLoggedIn(state, action) {
			state.isLoggedIn = action.payload.isLoggedIn;
		}
	}
});

export const authReducer = slice.reducer;
export const authActions = slice.actions;
