import React from 'react';

import style from './card.module.css';

const Card = ({ playlistProps }) => {
	return (
		<div className={style.spotifyPlaylist}>
			<img
				className={style.albumCover}
				src={playlistProps.images[0].url}
				alt="cover"
			/>
			<div className={style.playBtn}>
				<span className={style.play}></span>
			</div>
			<h4 className={style.title}>{playlistProps.name}</h4>
			<p className={style.subtitle}>{playlistProps.description}</p>
		</div>
	);
};

export default Card;
