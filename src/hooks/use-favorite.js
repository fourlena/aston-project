import { useSelector } from 'react-redux';

import { getFavorites } from '../redux/slices/favorite-slice';

export const useFavorite = id => {
	const favorites = useSelector(getFavorites);

	return !!favorites.find(el => el.id === id);
};
