import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { historyActions } from '../../redux/slices/history-slice';
import { getDataFromLS, setDataToLS } from '../../utils/local-storage';
import { getHistory } from '../../redux/slices/history-slice';

import style from './history.module.css';

const History = () => {
	const isAuth = getDataFromLS('isAuth', '""');
	const isAuthHistory = isAuth + ' history';
	const history = useSelector(getHistory);
	const dispatch = useDispatch();

	function deleteOneHistory(e) {
		const delHistory = e.target.getAttribute('id');
		dispatch(historyActions.deleteSearchFromHistory(delHistory));
		const history = getDataFromLS(isAuthHistory, '[]').filter(
			el => el !== delHistory
		);
		setDataToLS(isAuthHistory, history);
	}

	return (
		<div>
			<h2>History of search</h2>
			{history.length ? (
				<div>
					{history.map((el, id) => (
						<div className={style.history} key={id}>
							<Link className={style.link} to={`/search?name=${el}`}>
								{el}
							</Link>
							<span id={el} className={style.btn} onClick={deleteOneHistory}>
								delete
							</span>
						</div>
					))}
				</div>
			) : (
				<h2>You don't have history</h2>
			)}
		</div>
	);
};

export default History;
