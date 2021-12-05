/** @format */

export const ACTIONS = {
  CREATE_USER_REQUEST: 'CREATE_USER_REQUEST',
  CREATE_USER_SUCCESS: 'CREATE_USER_SUCCESS',
  CREATE_USER_ERROR: 'CREATE_USER_ERROR',

  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',

  IS_LOGGED_REQUEST: 'IS_LOGGED_REQUEST',
  IS_LOGGED_SUCCESS: 'IS_LOGGED_SUCCESS',
  IS_LOGGED_ERROR: 'IS_LOGGED_ERROR'
}

export type UserType = {
  id: string
  name: string
  email: string
  password: string
}

export interface CreateUserRequest {
  type: typeof ACTIONS.CREATE_USER_REQUEST
}

export interface CreateUserSuccess {
  type: typeof ACTIONS.CREATE_USER_SUCCESS
  payload: UserType
}

export interface CreateUserError {
  type: typeof ACTIONS.CREATE_USER_ERROR
}

export type CreateUserDispatchTypes =
  | CreateUserRequest
  | CreateUserSuccess
  | CreateUserError

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
