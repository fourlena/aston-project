import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Main from './pages/main/main';
import Search from './pages/search/search';
import Favorite from './pages/favorite/favorite';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path={'/'} element={<Main />} />
					<Route path="/search?" element={<Search />} />
					<Route path="/favorites" element={<Favorite />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
