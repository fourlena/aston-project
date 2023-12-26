import { setDataToLS, key } from '../utils/local-storage';

export const LSMiddleware = state => next => action => {
	const { favorites } = state.getState().favorite;
	const { history } = state.getState().history;
	if (action.type === 'favorite/addPlaylistInFavorite') {
		const favPlaylist = [...favorites, action.payload.playlist];
		setDataToLS(key('fav'), favPlaylist);
	}
	if (action.type === 'history/addSearchInHistory') {
		const historySearch = [...history, action.payload.search];
		setDataToLS(key('history'), historySearch);
	}
	return next(action);
};
