//import { ACTIONS } from "../actions/RealEstates"

import { RealEstatesType } from "../actionTypes/RealEstatesActionTypes"

import { ACTIONS } from "../actionTypes/RealEstatesActionTypes"

interface IState  {
    isLoading: boolean,
    realEstates?: RealEstatesType
}

const INITIAL_STATE: IState = {
	isLoading: false,
	realEstates: [{description: "hiiiiiiiii", country: "hey"}]
}

export const RealEstates = (state: IState = INITIAL_STATE, action: any) => {
	switch(action.type) {
	case ACTIONS.GET_REAL_ESTATES_REQUEST:
		return {
			...state,
			isLoading: true
		}
	case ACTIONS.GET_REAL_ESTATES_SUCCESS:
		return {
			...state,
			isLoading: false,
			realEstates: action.payload
		}
	case ACTIONS.GET_REAL_ESTATES_ERROR:
		return {
			isLoading: false,
		}
	default:
		return state
	}
}