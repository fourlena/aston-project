import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { getData, setDataToLS } from '../../utils/local-storage';

import FormC from '../../components/form/form';

import style from '../../components/form/form.module.css';

const Login = () => {
	const [errorLogin, setErrorLogin] = useState({});

	const navigate = useNavigate();

	const loginF = data => {
		const users = JSON.parse(getData('users'));
		if (!users) {
			setErrorLogin({
				email:
					'User with this email does not exist. Register using the link below'
			});
			return;
		}
		if (!users.find(user => user.email === data.email)) {
			setErrorLogin({
				email:
					'User with this email does not exist. Register using the link below'
			});
			return;
		}
		users.forEach(user => {
			if (user.email === data.email && user.password === user.password) {
				setDataToLS('isAuth', data.email);
				navigate('/');
				window.location.reload();
			}
		});
		setErrorLogin({ password: 'Invalid password' });
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
			<Link to={'/registration'}> Register </Link>
		</>
	);
};

export default Login;
