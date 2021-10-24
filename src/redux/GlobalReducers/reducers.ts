import { ACTIONS, IglobalReducers } from '../types'

export const INITIAL_STATE: IglobalReducers = {
  isLoading: false,
  isAuthenticated: false,
}

const reducer = (state: IglobalReducers = INITIAL_STATE, action: any) => {
  switch(action.type) {
  case ACTIONS.IS_LOGGED_REQUEST:
    return {
      ...state,
      isLoading: true
    }
  case ACTIONS.IS_LOGGED_SUCCESS:
    return {
      ...state,
      isLoading: false,
      isAuthenticated: action.payload
    }
  case ACTIONS.IS_LOGGED_ERROR:
    return {
      ...state,
      isLoading: false,
    }
  default: 
    return state
  }
}

export default reducer