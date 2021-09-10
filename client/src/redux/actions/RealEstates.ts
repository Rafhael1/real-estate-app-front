/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from "../../pages/Common/utils/api/axios"

import { Dispatch } from "redux"
import { RealEstatesDispatchTypes, ACTIONS } from "../actionTypes/RealEstatesActionTypes"

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

export const addNewRealEstate = (values: any = {}) => async (dispatch: Dispatch<RealEstatesDispatchTypes>) => {
	dispatch({
		type: ACTIONS.ADD_NEW_REAL_STATE_REQUEST
	})

	const data = {
		title: values.title,
		description: values.description,
		address: values.address,
		country: values.country,
		price: values.price,
		status: values.status
	}

	const formData: any = new FormData()

	formData.append("images", values.image1)
	formData.append("images", values.image2)
	formData.append("images", values.image3)
	formData.append("images", values.image4)
	formData.append("images", values.image5)

	try {
		const res = await axios.post("realestates/upload", formData, {
			headers: {
				"authToken": localStorage.authToken
			},
			data: data
		})
		console.log(res)
		dispatch({
			type: ACTIONS.ADD_NEW_REAL_STATE_SUCCESS
		})
	} catch (error) {
		dispatch({
			type: ACTIONS.ADD_NEW_REAL_STATE_ERROR
		})
	}
}