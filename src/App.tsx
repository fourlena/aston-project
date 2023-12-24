import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/header';
import PrivateRoute from './components/private-route';
import { ErrorBoundary } from './components/error-boundary';

const Main = lazy(() => import('./pages/main/main'));
const Search = lazy(() => import('./pages/search/search'));
const Favorite = lazy(() => import('./pages/favorite/favorite'));
const Playlist = lazy(() => import('./pages/playlist/playlist'));
const Login = lazy(() => import('./pages/login/login'));
const Register = lazy(() => import('./pages/registration/registration'));
const History = lazy(() => import('./pages/history/history'));

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<ErrorBoundary>
					<Suspense fallback={<div>Loading...</div>}>
						<Routes>
							<Route path="/" element={<Main />} />
							<Route path="/login" element={<Login />} />
							<Route path="/registration" element={<Register />} />
							<Route path="/search" element={<Search />} />
							<Route
								path="/favorites"
								element={
									<PrivateRoute>
										<Favorite />
									</PrivateRoute>
								}
							/>
							<Route
								path="/history"
								element={
									<PrivateRoute>
										<History />
									</PrivateRoute>
								}
							/>
							<Route path="/playlist/:id" element={<Playlist />} />
						</Routes>
					</Suspense>
				</ErrorBoundary>
			</div>
		</BrowserRouter>
	);
}

export default App;
