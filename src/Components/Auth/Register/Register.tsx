import React from 'react';
import { Form, Field, reduxForm } from 'redux-form';
import {
  Stack,
  Button,
  Dialog,
  DialogTitle,
  DialogContent
} from '@mui/material';
import { RegisterProps } from './Register.types';
import { useDispatch } from '../../../Redux/Hooks';
import { UserType } from 'Types/Auth/Auth.types';

import renderTextField from '../../Fields/InputField';

import { register } from 'Services/Auth/Auth.actions';

const Register = ({
  handleSubmit,
  isModalOpen,
  handleModalOpen
}: RegisterProps) => {
  const dispatch = useDispatch();

  return (
    <Dialog
      open={isModalOpen}
      onClose={() => handleModalOpen('register')}
      transitionDuration={1}
      PaperProps={{ sx: { borderRadius: '25px', height: '450px' } }}
    >
      <DialogTitle sx={{ alignSelf: 'center' }}>Create Account</DialogTitle>
      <DialogContent>
        <Form
          onSubmit={handleSubmit(async (values: UserType) => {
            await dispatch(register(values));
            handleModalOpen('register');
          })}
        >
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={0}
          >
            <Field
              name="name"
              variant="outlined"
              color="primary"
              label="Name"
              type="text"
              component={renderTextField}
            />
            <Field
              name="email"
              variant="outlined"
              color="primary"
              label="Email"
              type="email"
              component={renderTextField}
            />
            <Field
              name="password"
              variant="outlined"
              color="primary"
              label="Password"
              type="password"
              component={renderTextField}
            />
            <Field
              component={Button}
              type="submit"
              props={{
                variant: 'contained',
                color: 'primary'
              }}
            >
              Sign Up
            </Field>
          </Stack>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default reduxForm<{}, RegisterProps>({
  form: 'RegisterForm'
})(Register);
