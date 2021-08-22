export const ACTIONS = {
	GET_REAL_ESTATES_REQUEST: "GET_REAL_ESTATES_REQUEST",
	GET_REAL_ESTATES_SUCCESS: "GET_REAL_ESTATES_SUCCESS",
	GET_REAL_ESTATES_ERROR: "GET_REAL_ESTATES_ERROR",

	ADD_NEW_REAL_STATE_REQUEST: "ADD_NEW_REAL_STATE_REQUEST",
	ADD_NEW_REAL_STATE_SUCCESS: "ADD_NEW_REAL_STATE_SUCCESS",
	ADD_NEW_REAL_STATE_ERROR: "ADD_NEW_REAL_STATE_ERROR",
}

export type RealEstatesType = {
	title: string,
	description: string,
	country: string,
	price: string,
	status: string
}[]

export interface RealEstatesRequest {
	type: typeof ACTIONS.GET_REAL_ESTATES_REQUEST
}

export interface RealEstatesSuccess {
	type: typeof ACTIONS.GET_REAL_ESTATES_SUCCESS,
	payload: RealEstatesType
}

export interface RealEstatesError {
	type: typeof ACTIONS.GET_REAL_ESTATES_ERROR
}

export interface AddNewRealEstateRequest {
	type: typeof ACTIONS.ADD_NEW_REAL_STATE_REQUEST
}

export interface AddNewRealEstateSuccess {
	type: typeof ACTIONS.ADD_NEW_REAL_STATE_SUCCESS
}

export interface AddNewRealEstateError {
	type: typeof ACTIONS.ADD_NEW_REAL_STATE_ERROR
}


export type RealEstatesDispatchTypes = 
	RealEstatesRequest | 
	RealEstatesSuccess | 
	RealEstatesError   |
	AddNewRealEstateRequest |
	AddNewRealEstateSuccess |
	AddNewRealEstateError

