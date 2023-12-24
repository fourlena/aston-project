import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { getDataFromLS, removeDataFromLS } from '../../utils/local-storage';
import { useTheme } from '../../context/theme-provider';

import style from './header.module.css';

const Header = () => {
	const navigate = useNavigate();
	const isAuth = getDataFromLS('isAuth', '""');

	const logoutF = () => {
		removeDataFromLS('isAuth');
		navigate('/');
		window.location.reload();
	};

	const { theme, toggleTheme } = useTheme();

	return (
		<header className={style.header}>
			<div>
				<Link to={'/'}>
					<img
						className={style.img}
						src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
						alt="Logo"
					/>
				</Link>
			</div>
			<button onClick={toggleTheme}>
				{theme === 'light' ? <span>Light mode</span> : <span>Dark mode</span>}
			</button>
			<nav className={style.navbar}>
				{isAuth ? (
					<>
						<Link className={style.link} to="/favorites">
							Favourites
						</Link>
						<Link className={style.link} to="/history">
							History
						</Link>
						<button onClick={logoutF}>Logout</button>
					</>
				) : (
					<>
						<Link className={style.link} to="/login">
							Login
						</Link>
						<Link className={style.link} to="/registration">
							Registration
						</Link>
					</>
				)}
			</nav>
		</header>
	);
};

export default Header;
