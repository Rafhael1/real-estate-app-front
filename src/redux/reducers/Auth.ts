/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { UserType } from '../actionTypes/AuthActionTypes'

import { ACTIONS } from '../actionTypes/AuthActionTypes'

interface IState {
    isLoading: boolean,
    hasError: boolean,
    user?: UserType,
	isUserLogged: boolean
}

const INITIAL_STATE: IState = {
	isLoading: false,
	hasError: false,
	isUserLogged: false
}

export const Auth = (state: IState = INITIAL_STATE, action: any) => {
	switch(action.type) {
	case ACTIONS.CREATE_USER_REQUEST:
		return {
			...state,
			isLoading: true
		}
	case ACTIONS.CREATE_USER_SUCCESS:
		return {
			...state,
			isLoading: false
		}
	case ACTIONS.CREATE_USER_ERROR:
		return {
			...state,
			isLoading: false,
			hasError: true
		}
	case ACTIONS.IS_LOGGED_REQUEST:
		return {
			...state,
			isLoading: true
		}
	case ACTIONS.IS_LOGGED_SUCCESS:
		return {
			...state,
			isLoading: false,
			isUserLogged: action.payload
		}
	default: 
		return state
	}
}