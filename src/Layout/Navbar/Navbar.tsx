import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'Hooks/Redux';
import { logout } from 'Services/Auth/Auth.actions';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
  Divider,
  Button
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {
  ArrowRightAltRounded,
  LogoutRounded,
  ManageAccountsRounded
} from '@mui/icons-material';
import { blue } from '@mui/material/colors';
import useStyles from './Navbar.styles';

const Login = React.lazy(() => import('Components/Forms/Login/Login'));
const Register = React.lazy(() => import('Components/Forms/Register/Register'));

import { IState } from 'Types/Auth/Auth.types';

const pages = [
  { value: 'Home', route: '' },
  { value: 'Trending', route: 'search?search_type=trending' },
  { value: 'New', route: 'search?search_type=newest' },
  { value: 'About', route: 'about' }
];

const Navbar = () => {
  const dispatch = useDispatch();
  const styles = useStyles();

  const authReducer: IState = useSelector((state) => state.Auth);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState({
    login: false,
    register: false
  });

  const handleLogout = () => {
    dispatch(logout());
    handleCloseUserMenu();
  };

  const handleModalOpen = (modalType: string) => {
    setIsModalOpen({
      ...isModalOpen,
      [modalType === 'login' ? 'register' : 'login']: false,
      [modalType]: !isModalOpen[modalType]
    });
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="relative" sx={{ alignItems: 'center' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Namai
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.value}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            Namai
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              marginLeft: '30%',
              display: { xs: 'none', md: 'flex' }
            }}
          >
            {pages.map((page, index) => (
              <Link
                key={index}
                className={styles.navLinks}
                to={`/${page.route}`}
              >
                <Typography
                  style={{
                    fontWeight: 'bold',
                    fontSize: '1.1rem'
                  }}
                >
                  {page.value}
                </Typography>
              </Link>
            ))}
          </Box>
          {authReducer.isAuthenticated ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar sx={{ bgcolor: blue[900] }}>
                    {authReducer.user.name?.charAt(0)}
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <Link className={styles.buttonLink} to="/dashboard">
                  <MenuItem>
                    <ManageAccountsRounded />
                    <Typography textAlign="center">Dashboard</Typography>
                  </MenuItem>
                </Link>
                <Divider />
                <MenuItem onClick={handleLogout}>
                  <LogoutRounded color="error" />
                  <Typography color="error" textAlign="center">
                    Logout
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Box sx={{ flexGrow: 0 }}>
              <Button
                onClick={() => handleModalOpen('login')}
                color="secondary"
              >
                Advertise
                <ArrowRightAltRounded />
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
      <Register
        isModalOpen={isModalOpen.register}
        handleModalOpen={handleModalOpen}
      />
      <Login
        isModalOpen={isModalOpen.login}
        handleModalOpen={handleModalOpen}
      />
    </AppBar>
  );
};

export default Navbar;
