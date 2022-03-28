import React from 'react';
import { Form, Field, reduxForm } from 'redux-form';
import { Stack, Button } from '@mui/material';
import { UserType } from './Register.types';
import { useDispatch } from '../../../Redux/Hooks';

import renderTextField from '../../Fields/InputField';

import { register } from './Register.actions';

const Register = ({ handleSubmit }: any) => {
  const dispatch = useDispatch();

  return (
    <Form
      onSubmit={handleSubmit((values: UserType) => dispatch(register(values)))}
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
  );
};

export default reduxForm({
  form: 'RegisterForm'
})(Register);
