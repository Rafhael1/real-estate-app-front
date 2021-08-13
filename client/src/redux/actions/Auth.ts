import axios from "../../components/utils/api/axios"

import { Dispatch } from "redux"

import { CreateUserDispatchTypes, IsLoggedDispatchTypes, ACTIONS } from "../actionTypes/AuthActionTypes"

export const createUser = (values: any = {}) => async (dispatch: Dispatch<CreateUserDispatchTypes>) => {
	const body = {
		name: values.name || "",
		email: values.email || "",
		password: values.password || "",
	}
	console.log(values, body)
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

// export const login = () => async(dispatch:<Dispatch>) => {

// }

export const isLogged = () => async (dispatch: Dispatch<IsLoggedDispatchTypes>) => {
	dispatch({ type: ACTIONS.IS_LOGGED_REQUEST})
	try {
		const res = await axios.get("/user/verify-user")
		dispatch({
			type: ACTIONS.IS_LOGGED_SUCCESS,
			payload: res
		})
	} catch (error) {
		dispatch({type: ACTIONS.IS_LOGGED_ERROR})
	}
}