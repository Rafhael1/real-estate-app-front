/** @format */

export const ACTIONS = {
  IS_LOGGED_REQUEST: 'IS_LOGGED_REQUEST',
  IS_LOGGED_SUCCESS: 'IS_LOGGED_SUCCESS',
  IS_LOGGED_ERROR: 'IS_LOGGED_ERROR'
}

export interface IglobalReducers {
  isLoading: boolean
  isAuthenticated: boolean
}

export interface IsLoggedRequest {
  type: typeof ACTIONS.IS_LOGGED_REQUEST
}

export interface IsLoggedSuccess {
  type: typeof ACTIONS.IS_LOGGED_SUCCESS
}

export interface IsLoggedError {
  type: typeof ACTIONS.IS_LOGGED_ERROR
}

export type IsLoggedDispatchTypes =
  | IsLoggedRequest
  | IsLoggedSuccess
  | IsLoggedError
