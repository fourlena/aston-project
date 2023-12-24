import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDebounce } from '../../hooks/use-debounce';
import SearchList from '../search-list/search-list';

import style from './search-panel.module.css';

const SearchPanel = () => {
	const [searchValue, setSearchValue] = useState('');
	const [isFocus, setFocus] = useState(false);
	const [error, setError] = useState('');
	const navigate = useNavigate();
	const debouncedSearch = useDebounce(searchValue, 500);

	const onKeyPressCallback = e => {
		if (e.key === 'Enter') {
			onClickCallback();
		}
	};

	const onChangeCallback = e => {
		setSearchValue(e.target.value);
		setFocus(true);
	};

	const onClickCallback = () => {
		if (!debouncedSearch) {
			setError('Enter playlist name');
		}
		navigate(`/search?name=${debouncedSearch}`);
	};

	const onFocus = () => {
		setFocus(true);
	};
	const onBlur = () => {
		setTimeout(() => setFocus(false), 500);
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
					onFocus={onFocus}
					onBlur={onBlur}
				/>
				<span className={style.container} onClick={onClickCallback}>
					<svg
						className={style.svg}
						data-encore-id="icon"
						role="img"
						aria-hidden="true"
						viewBox="0 0 16 16"
					>
						<path d="M7 1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zM.25 7a6.75 6.75 0 1 1 12.096 4.12l3.184 3.185a.75.75 0 1 1-1.06 1.06L11.304 12.2A6.75 6.75 0 0 1 .25 7z"></path>
					</svg>
				</span>
			</div>
			{debouncedSearch && isFocus ? (
				<SearchList searchValue={debouncedSearch} />
			) : (
				''
			)}
			{error && <p className={style.error}>{error}</p>}
		</div>
	);
};

export default SearchPanel;
