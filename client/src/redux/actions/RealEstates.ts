import axios from "../../components/utils/api/axios"

import { Dispatch } from "redux"
import { RealEstatesDispatchTypes, ACTIONS } from "../actionTypes/RealEstatesActionTypes"
//import { ACTIONS } from "../actionTypes/RealEstatesActionTypes"

export const getRealEstates = () => async (dispatch: Dispatch<RealEstatesDispatchTypes>) => {
	dispatch({
		type: ACTIONS.GET_REAL_ESTATES_REQUEST
	})
	try {

		const res = await axios.get("/image")

		dispatch({
			type: ACTIONS.GET_REAL_ESTATES_SUCCESS,
			payload: res.data
		})
	} catch (error) {
		dispatch({
			type: ACTIONS.GET_REAL_ESTATES_ERROR
		})
	}

}