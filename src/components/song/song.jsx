import React from 'react';

import style from './song.module.css';

const Song = ({ trackProps, idTrack }) => {
	return (
		<div className={style.trackContainer}>
			<p>{idTrack}</p>
			<div className={style.trackContainer}>
				<img
					className={style.img}
					src={trackProps.album.images[1].url}
					alt="album"
				/>
				<div>
					<p>{trackProps.name}</p>
					<p>{trackProps.album.artists[0].name}</p>
				</div>
			</div>
			<p>{trackProps.album.name}</p>
		</div>
	);
};

export default Song;
