export const ACTIONS = {
	LOGIN_REQUEST: 'LOGIN_REQUEST',
	LOGIN_SUCCESS: 'LOGIN_SUCCESS',
	LOGIN_ERROR: 'LOGIN_ERROR',
}

type UserType = {
	id: string,
	name: string,
    email: string,
    password: string
}[]

export interface IState {
    isLoading: boolean,
    hasError: boolean,
    user?: UserType,
	isUserLogged: boolean
}

export interface LoginRequest {
	type: typeof ACTIONS.LOGIN_REQUEST
}

export interface LoginSuccess {
	type: typeof ACTIONS.LOGIN_SUCCESS
}

export interface LoginError {
	type: typeof ACTIONS.LOGIN_ERROR
}

export type LoginDispatchTypes = LoginRequest | LoginSuccess | LoginError
