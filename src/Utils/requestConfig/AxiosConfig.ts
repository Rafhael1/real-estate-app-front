import axios, { AxiosResponse } from 'axios';
declare module 'axios' {
	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	interface AxiosResponse<T = any> extends Promise<T> {}
}

const client = axios.create({
	baseURL: import.meta.env.VITE_API,
	headers: {
		'Access-Control-Allow-Origin': '*',
		Authorization: `Bearer ${
			localStorage.getItem('authToken') || sessionStorage.getItem('authToken')
		}`
	}
});

client.interceptors.response.use(
	(response: AxiosResponse) => response.data,
	(error) => {
		return Promise.reject(error);
	}
);

export default client;
