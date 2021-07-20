export const ACTIONS = {
	GET_REAL_ESTATES_REQUEST: "GET_REAL_ESTATES_REQUEST",
	GET_REAL_ESTATES_SUCCESS: "GET_REAL_ESTATES_SUCCESS",
	GET_REAL_ESTATES_ERROR: "GET_REAL_ESTATES_ERROR",
}

export type RealEstatesType = {
	description: string,
	country: string
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

export type RealEstatesDispatchTypes = RealEstatesRequest | RealEstatesSuccess | RealEstatesError