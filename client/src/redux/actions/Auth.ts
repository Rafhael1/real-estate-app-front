import axios from "../../utils/api/axios"

import { Dispatch } from "redux"

import { 
	LoginDispatchTypes,
	CreateUserDispatchTypes, 
	IsLoggedDispatchTypes, 
	ACTIONS,
} from "../actionTypes/AuthActionTypes"

export const createUser = (values: any = {}) => async (dispatch: Dispatch<CreateUserDispatchTypes>) => {
	const body = {
		name: values.name || "",
		email: values.email || "",
		password: values.password || "",
	}
	dispatch({
		type: ACTIONS.CREATE_USER_REQUEST
	})
	try {
		const res = await axios.post("/user/register",
			body
		)

		dispatch({
			type: ACTIONS.CREATE_USER_SUCCESS,
			payload: res
		})
	} catch (error) {
		dispatch({
			type: ACTIONS.CREATE_USER_ERROR
		})
	}
}

export const login = (values) => async (dispatch:Dispatch<LoginDispatchTypes>) => {
	dispatch({
		type: ACTIONS.LOGIN_REQUEST
	})
	const body = values
	try {
		const res = await axios.post("/user/login", body)
		console.log(res)
		if(res.data.authToken) {
			if(values.rememberMe) {
				localStorage.setItem("authToken", res.data.authToken)
			} else {
				sessionStorage.setItem("authToken", res.data.authToken)
			}
		}
		dispatch({
			type: ACTIONS.LOGIN_SUCCESS
		})
	} catch (error) {
		dispatch({
			type: ACTIONS.LOGIN_ERROR
		})
	}
}

export const isLogged = () => async (dispatch: Dispatch<IsLoggedDispatchTypes>) => {
	dispatch({ type: ACTIONS.IS_LOGGED_REQUEST })
	try {
		const res = await axios.post("/user/verify-user", {
		})
		dispatch({
			type: ACTIONS.IS_LOGGED_SUCCESS,
			payload: res.data
		})
	} catch (error) {
		dispatch({ type: ACTIONS.IS_LOGGED_ERROR })
	}
}