import { InjectedFormProps } from 'redux-form';

export type AuthProps = {
  handleSubmit?: InjectedFormProps['handleSubmit'];
  isModalOpen?: boolean;
  handleModalOpen?: any;
};

export type RegisterProps = {
  handleSubmit?: InjectedFormProps['handleSubmit'];
  isModalOpen?: boolean;
  handleModalOpen?: any;
};

export type UserType = {
  _id?: string;
  name?: string;
  email: string;
  password?: string;
  rememberMe?: boolean;
  city?: string;
  country?: string;
};

export interface IState {
  isLoading: boolean;
  isLoadingLocation: boolean;
  hasError: boolean;
  user?: UserType;
  isAuthenticated: boolean;
}
