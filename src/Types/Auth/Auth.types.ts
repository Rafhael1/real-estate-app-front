import { InjectedFormProps } from 'redux-form';
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
  city?: string;
  country?: string;
};

export interface IState {
  isLoading: boolean;
  hasError: boolean;
  user?: UserType;
  isAuthenticated: boolean;
}
