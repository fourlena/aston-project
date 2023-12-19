import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const client_id = '02a257e075c649b08a23a849daa6aaf8';
const client_secret = '67b0c310042c419f9bc442d6fd9b1329';

async function getToken() {
	const response = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		body:
			'grant_type=client_credentials&client_id=' +
			client_id +
			'&client_secret=' +
			client_secret,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
	return await response.json();
}

const response = await getToken();
const TOKEN = response.access_token;

export const playlistsApi = createApi({
	reducerPath: 'playlistsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.spotify.com/v1',
		headers: { Authorization: `Bearer ${TOKEN}` }
	}),

	endpoints: build => ({
		getPlaylists: build.query({
			query: () => ({
				url: '/browse/featured-playlists'
			}),
			transformResponse: response => response.playlists.items
		}),
		getPlaylistsBySearch: build.query({
			query: search => {
				return {
					url: '/search?',
					params: {
						q: search,
						type: 'playlist'
					}
				};
			},
			transformResponse: response => response.playlists.items
		}),
		getPlaylistsList: build.query({
			query: (search = '') => {
				return {
					url: '/search?',
					params: {
						q: search,
						type: 'playlist',
						limit: '5'
					}
				};
			},
			transformResponse: response => response.playlists.items
		})
	})
});

export const {
	useGetPlaylistsQuery,
	useGetPlaylistsBySearchQuery,
	useGetPlaylistsListQuery
} = playlistsApi;
