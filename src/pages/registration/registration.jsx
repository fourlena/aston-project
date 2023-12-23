import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { getData, setDataToLS } from '../../utils/local-storage';
import FormC from '../../components/form/form';
import style from '../../components/form/form.module.css';

const RegisterC = () => {
	const navigate = useNavigate();

	const [errorRegister, setErrorRegister] = useState({});

	const registerF = data => {
		const users = JSON.parse(getData('users'));
		if (users === null) {
			setDataToLS('users', [data]);
			setDataToLS('isAuth', data.email);
			navigate('/');
			window.location.reload();
		} else {
			if (users.find(user => user.email === data.email)) {
				setErrorRegister({ email: 'User already exist with this email' });
				return;
			}
			setDataToLS('users', [...users, data]);
			setDataToLS('isAuth', data.email);
			navigate('/');
			window.location.reload();
		}
	};

	return (
		<>
			<FormC
				name={'Registration'}
				submit={registerF}
				errorInfo={errorRegister}
			/>
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
