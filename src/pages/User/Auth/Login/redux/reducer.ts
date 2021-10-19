import { ACTIONS, IState } from '../types'

const INITIAL_STATE: IState = {
	isLoading: false,
	hasError: false,
	isUserLogged: false
}

export const Auth = (state: IState = INITIAL_STATE, action: any) => {
	switch(action.type) {
	case ACTIONS.LOGIN_REQUEST:
		return {
			...state,
			isLoading: true
		}
	case ACTIONS.LOGIN_SUCCESS:
		return {
			...state,
			isLoading: false
		}
	case ACTIONS.LOGIN_ERROR:
		return {
			...state,
			isLoading: false,
			hasError: true
		}
	default: 
		return state
	}
}