import { styled } from '@mui/styles';

export const NavLink = styled('a')({
  color: 'whitesmoke',
  margin: 'auto 20px',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  textDecoration: 'none',
  transition: '0.3s',
  '&:after': {
    content: '""',
    width: '0',
    height: '0',
    position: 'relative',
    bottom: '2px',
    left: '60%',
    display: 'flex',
    backgroundColor: '#a8c1ff',
    transform: 'translateX(-50%)',
    transition: ' width 0.3s ease 0s, left 0.3s ease 0s'
  },
  '&:hover': {
    color: '#a8c1ff',
    marginTop: '0px',
    '&:after': {
      borderRadius: '25px',
      width: '25px',
      height: '2.5px'
    }
  }
});
