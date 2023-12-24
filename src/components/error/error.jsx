import React from 'react';
import { Link } from 'react-router-dom';

import style from './error.module.css';

const Error = () => {
	return (
		<div className={style.error}>
			<p>Something went wrong.</p>
			<Link className={style.link} to="/">
				Back to Homepage
			</Link>
		</div>
	);
};

export default Error;
