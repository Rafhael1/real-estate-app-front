import { InjectedFormProps } from 'redux-form';
export const ACTIONS = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',

  CREATE_USER_REQUEST: 'CREATE_USER_REQUEST',
  CREATE_USER_SUCCESS: 'CREATE_USER_SUCCESS',
  CREATE_USER_ERROR: 'CREATE_USER_ERROR',

  IS_LOGGED_REQUEST: 'IS_LOGGED_REQUEST',
  IS_LOGGED_SUCCESS: 'IS_LOGGED_SUCCESS',
  IS_LOGGED_ERROR: 'IS_LOGGED_ERROR'
};

export type LoginProps = {
  handleSubmit?: InjectedFormProps['handleSubmit'];
  isModalOpen?: boolean;
  handleModalOpen?: any;
};

export type UserType = {
  _id: string;
  name: string;
  email: string;
  password?: string;
  rememberMe?: boolean;
};

export interface IState {
  isLoading: boolean;
  hasError: boolean;
  user?: UserType;
  isAuthenticated: boolean;
}
