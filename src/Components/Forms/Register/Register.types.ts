import { InjectedFormProps } from 'redux-form';

export type RegisterProps = {
  handleSubmit?: InjectedFormProps['handleSubmit'];
  isModalOpen?: boolean;
  handleModalOpen?: any;
};
