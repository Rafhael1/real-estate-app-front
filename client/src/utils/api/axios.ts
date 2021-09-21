import axios from 'axios'

export default axios.create({
	baseURL: 'http://localhost:8000/api',
	headers: {
		'Access-Control-Allow-Origin': '*',
		'authToken': localStorage.authToken || sessionStorage.authToken
	}
})