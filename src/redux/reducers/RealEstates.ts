/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { RealEstatesType } from '../Types/RealEstatesActionTypes'

import { ACTIONS } from '../Types/RealEstatesActionTypes'

interface IState  {
    isLoading: boolean,
    realEstates?: RealEstatesType
}

const INITIAL_STATE: IState = {
	isLoading: false,
	realEstates: []
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