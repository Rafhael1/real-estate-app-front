import { InjectedFormProps } from 'redux-form';

export type LoginProps = {
  handleSubmit?: InjectedFormProps['handleSubmit'];
  isModalOpen?: boolean;
  handleModalOpen?: any;
};
