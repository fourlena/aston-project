import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { getDataFromLS, setDataToLS } from '../../local-storage';
import FormC from '../../components/form/form';
import style from '../../components/form/form.module.css';
import { authActions } from '../login/auth-reducer';

const RegisterC = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

	if (isLoggedIn) {
		navigate('/');
	}

	const [errorRegister, setErrorRegister] = useState({});

	const registerF = data => {
		const users = getDataFromLS('users', '[]');
		if (users) {
			if (users.some(user => user.email === data.email)) {
				setErrorRegister({ email: 'User already exist with this email' });
			} else {
				setDataToLS('users', [data]);
				dispatch(authActions.setIsLoggedIn({ isLoggedIn: true }));
			}
		}
	};

	return (
		<>
			<FormC name={'Register'} submit={registerF} errorInfo={errorRegister} />
			{errorRegister && errorRegister.email && (
				<span className={style.text}>{errorRegister.email}</span>
			)}
			{errorRegister && errorRegister.password && (
				<span className={style.text}>{errorRegister.password}</span>
			)}
			<Link to={'/login'}> Login </Link>
		</>
	);
};

export default RegisterC;
