import React from 'react';
import { Form, Field, reduxForm } from 'redux-form';
import { Stack, Button } from '@mui/material';
import { UserType } from './login.types';
import { useAppDispatch } from '../../../Redux/hooks';
import { login } from './login.actions';

import renderTextField from '../../../Components/Fields/inputField';
import renderCheckboxField from '../../../Components/Fields/checkboxField';

// import useStyles from './login.styles';

const Login = ({ handleSubmit }: any) => {
  const dispatch = useAppDispatch();

  return (
    <Form
      onSubmit={handleSubmit((values: UserType) => dispatch(login(values)))}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        <Field
          name="email"
          color="primary"
          label="Email"
          type="email"
          autoFocus
          component={renderTextField}
        />
        <Field
          name="password"
          color="primary"
          label="Password"
          type="password"
          component={renderTextField}
        />
        <Field
          name="rememberMe"
          type="checkbox"
          label="Remember Me"
          color="secondary"
          component={renderCheckboxField}
        />
        <Button type="submit">Login</Button>
      </Stack>
    </Form>
  );
};

export default reduxForm({
  form: 'LoginForm'
})(Login);
