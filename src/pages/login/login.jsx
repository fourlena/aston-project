import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { getDataFromLS } from '../../local-storage';

import FormC from '../../components/form/form';

import style from '../../components/form/form.module.css';

import { authActions } from './auth-reducer';

const Login = () => {
	const [errorLogin, setErrorLogin] = useState({});

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

	if (isLoggedIn) {
		navigate('/');
	}

	const loginF = data => {
		const users = getDataFromLS('users', '""');
		if (users) {
			const user = users?.find(user => user.email === data.email);
			if (user) {
				if (user.password === data.password) {
					dispatch(authActions.setIsLoggedIn({ isLoggedIn: true }));
				} else {
					setErrorLogin({ password: 'Invalid password' });
				}
			} else {
				setErrorLogin({
					email: 'User does not exist. Register using the link below'
				});
			}
		} else {
			setErrorLogin({
				email: 'User does not exist. Register using the link below'
			});
		}
	};

	return (
		<>
			<FormC name={'Login'} submit={loginF} />
			{errorLogin && errorLogin.email && (
				<span className={style.text}>{errorLogin.email}</span>
			)}
			{errorLogin && errorLogin.password && (
				<span className={style.text}>{errorLogin.password}</span>
			)}
			<Link to={'/register'}> Register </Link>
		</>
	);
};

export default Login;
