import axios from 'axios'

export default axios.create({
	baseURL: `http://${process.env.REACT_APP_API}:8000/api`,
	headers: {
		'Access-Control-Allow-Origin': '*',
		'authToken': localStorage.authToken || sessionStorage.authToken
	}
})