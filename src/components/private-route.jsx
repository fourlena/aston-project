import React from 'react';
import { Navigate } from 'react-router-dom';

import { getDataFromLS } from '../utils/local-storage';

const PrivateRoute = ({ children }) => {
	const isAuth = getDataFromLS('isAuth', '""');

	if (!isAuth) {
		return <Navigate to="/login" />;
	}

	return children;
};

export default PrivateRoute;
