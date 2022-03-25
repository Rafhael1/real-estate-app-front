import { makeStyles } from '@mui/styles';

const useStyles: any = makeStyles(() => ({
  // General
  navLinks: {
    color: 'whitesmoke',
    margin: 'auto 20px',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    textDecoration: 'none',
    transition: '0.3s',
    '&:before': {
      content: '""',
      width: '0',
      height: '0',
      position: 'absolute',
      backgroundColor: '#a8c1ff',
      margin: '26px 1.3%',
      transform: 'translateX(-50%)',
      transition: '0.3s cubic-bezier(0.48, 0.55, 0.565, 1.55) all'
    },
    '&:hover': {
      color: '#a8c1ff',
      '&:before': {
        borderRadius: '25px',
        width: '30px',
        height: '3px',
        alignSelf: 'center'
      }
    }
  },
  // Auth Pages
  authNavbar: {
    minHeight: '400px'
  }
}));

export default useStyles;
