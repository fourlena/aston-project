import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Main from './pages/main/main';
import Search from './pages/search/search';
import Favorite from './pages/favorite/favorite';
import Playlist from './pages/playlist/playlist';
import Login from './pages/login/login';
import Register from './pages/register/register';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/search" element={<Search />} />
					<Route path="/favorites" element={<Favorite />} />
					<Route path="/playlist/:id" element={<Playlist />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
