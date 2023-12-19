import React from 'react';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import SearchList from '../search-list/search-list';

import style from './search-panel.module.css';
import { searchActions } from './search-panel-reducer';

const SearchPanel = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const searchValue = useSelector(state => state.search.search);

	const onKeyPressCallback = e => {
		if (e.key === 'Enter') {
			onClickCallback();
		}
	};

	const onChangeCallback = e => {
		dispatch(searchActions.setSearchValue({ searchValue: e.target.value }));
	};

	const onClickCallback = () => {
		navigate(`/search?name=${searchValue}`);
	};

	return (
		<div>
			<div>
				<input
					className={style.input}
					value={searchValue}
					placeholder={'Введи имя плейлиста'}
					type={'text'}
					onChange={onChangeCallback}
					onKeyPress={onKeyPressCallback}
				/>
				<span className={style.container} onClick={onClickCallback}>
					<svg
						data-encore-id="icon"
						role="img"
						aria-hidden="true"
						viewBox="0 0 16 16"
					>
						<path d="M7 1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zM.25 7a6.75 6.75 0 1 1 12.096 4.12l3.184 3.185a.75.75 0 1 1-1.06 1.06L11.304 12.2A6.75 6.75 0 0 1 .25 7z"></path>
					</svg>
				</span>
			</div>
			{searchValue ? <SearchList searchValue={searchValue} /> : ''}
		</div>
	);
};

export default SearchPanel;
