import { makeStyles } from '@mui/styles';

const useStyles: any = makeStyles(() => ({
  // General
  navLinks: {
    color: 'whitesmoke',
    margin: 'auto 8px',
    textDecoration: 'none',
    transition: '0.3s',
    '&:after': {
      content: '""',
      width: '0',
      height: '0',
      position: 'absolute',
      backgroundColor: '#a8c1ff',
      margin: '25px -25px',
      transform: 'translateX(-50%)',
      transition: '0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55) all'
    },
    '&:hover': {
      color: '#a8c1ff',
      '&:after': {
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
