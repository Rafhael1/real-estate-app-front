import React from 'react';
import { Form, Field, reduxForm } from 'redux-form';
import {
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography
} from '@mui/material';
import { useForm } from 'react-hook-form';
import LoadingButton from '@mui/lab/LoadingButton';
import { useDispatch, useSelector } from 'Hooks/Redux';
import { login } from 'Services/Auth/Auth.actions';
import { UserType, AuthProps } from 'Types/Auth/Auth.types';

import renderTextField from '../../Fields/InputField';
import renderCheckboxField from '../../Fields/CheckboxField';
import { TextField, CheckboxField } from 'Components';

import useStyles from './Login.styles';

const Login = ({ isModalOpen, handleModalOpen }: AuthProps) => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.Auth);
  const { control, handleSubmit } = useForm();

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
        <form
          onSubmit={handleSubmit(async (values: UserType) => {
            await dispatch(login(values));
            handleModalOpen('login');
          })}
        >
          <Stack direction="column" alignItems="center" spacing={0}>
            <TextField
              name="email"
              color="primary"
              label="Email"
              type="email"
              autoFocus
              control={control}
            />
            <TextField
              name="password"
              color="primary"
              label="Password"
              type="password"
              control={control}
            />
            <CheckboxField
              name="rememberMe"
              type="checkbox"
              label="Remember Me"
              color="primary"
              control={control}
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
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default reduxForm<{}, AuthProps>({
  form: 'LoginForm'
})(Login);
