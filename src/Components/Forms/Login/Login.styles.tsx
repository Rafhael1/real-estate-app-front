import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  dialogTitle: {
    fontWeight: 900
  },
  loginButton: {
    width: '200px'
  },
  signUpLink: {
    cursor: 'pointer',
    textDecoration: 'underline',
    alignItems: 'center',
    marginTop: '15px'
  }
}));

export default useStyles;
