import { makeStyles } from '@mui/styles';

const useStyles: any = makeStyles(() => ({
  // General
  navLinks: {
    color: 'whitesmoke',
    margin: 'auto 20px',
    textDecoration: 'none',
    transition: '0.3s',
    '&:after': {
      content: '""',
      width: '0',
      height: '0',
      position: 'relative',
      bottom: 0,
      left: '50%',
      top: '1px',
      display: 'flex',
      backgroundColor: '#a8c1ff',
      transform: 'translateX(-50%)',
      transition: ' width 0.3s ease 0s, left 0.3s ease 0s'
    },
    '&:hover': {
      color: '#a8c1ff',
      '&:after': {
        borderRadius: '25px',
        width: '50%',
        height: '3px'
      }
    }
  },
  // Auth Pages
  authNavbar: {
    minHeight: '400px'
  }
}));

export default useStyles;
