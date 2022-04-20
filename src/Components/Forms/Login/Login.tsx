import React from 'react';
import { Form, Field, reduxForm } from 'redux-form';
import {
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useDispatch, useSelector } from 'Hooks/Redux';
import { login } from 'Services/Auth/Auth.actions';
import { LoginProps } from './Login.types';
import { UserType } from 'Types/Auth/Auth.types';

import renderTextField from '../../Fields/InputField';
import renderCheckboxField from '../../Fields/CheckboxField';

import useStyles from './Login.styles';

const Login = ({ handleSubmit, isModalOpen, handleModalOpen }: LoginProps) => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.Auth);

  const styles = useStyles();

  return (
    <Dialog
      open={isModalOpen}
      onClose={() => handleModalOpen('login')}
      transitionDuration={1}
      PaperProps={{ sx: { borderRadius: '25px', height: '450px' } }}
    >
      <DialogTitle sx={{ alignSelf: 'center' }}>Login</DialogTitle>
      <DialogContent>
        <Form
          onSubmit={handleSubmit(async (values: UserType) => {
            await dispatch(login(values));
            handleModalOpen('login');
          })}
        >
          <Stack direction="column" alignItems="center" spacing={0}>
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
            <LoadingButton
              loading={authState.isLoading}
              className={styles.loginButton}
              type="submit"
            >
              Login
            </LoadingButton>
            <Typography
              onClick={() => {
                handleModalOpen('register');
              }}
              variant="body2"
              color="textSecondary"
              className={styles.signUpLink}
            >
              {"Don't have an account yet? "}
              <b>Sign Up</b>
            </Typography>
          </Stack>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default reduxForm<{}, LoginProps>({
  form: 'LoginForm'
})(Login);
