import { setDataToLS, key } from '../utils/local-storage';

export const LSMiddleware = state => next => action => {
	const { favorites } = state.getState().favorite;
	if (action.type === 'favorite/addPlaylistInFavorite') {
		const favPlaylist = [...favorites, action.payload.playlist];
		setDataToLS(key('fav'), favPlaylist);
	}
	return next(action);
};
