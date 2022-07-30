import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'Utils/Hooks/Redux';
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
  Button,
  Drawer
} from '@mui/material';
import useMediaQuery from 'Utils/Hooks/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import {
  ArrowRightAltRounded,
  LogoutRounded,
  ManageAccountsRounded,
  DomainAddRounded,
  ArrowBackRounded
} from '@mui/icons-material';
import { blue } from '@mui/material/colors';
import { NavLink } from './Navbar.styles';

const Login = React.lazy(() => import('Components/Login/Login'));
const Register = React.lazy(() => import('Components/Register/Register'));

import { IState } from 'Types/Auth/Auth.types';

interface INavbarProps {
  transparent?: boolean;
}

const pages = [
  { value: 'Home', route: '/' },
  { value: 'Trending', route: '/search?search-type=trending' },
  { value: 'New', route: '/search?search-type=newest' },
  { value: 'About', route: '/about' }
];

const linkMenuStyle = { textDecoration: 'none', color: 'inherit' };

const Navbar = ({ transparent }: INavbarProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isMobile } = useMediaQuery();

  const authReducer: IState = useSelector((state) => state.Auth);
  const [anchorDrawer, setAnchorDrawer] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState({
    login: false,
    register: false
  });

  const handleLogout = () => {
    dispatch(logout());
    handleCloseUserMenu();
  };

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setAnchorDrawer(open);
    };

  const handleModalOpen = (modalType: string) => {
    setIsModalOpen({
      ...isModalOpen,
      [modalType === 'login' ? 'register' : 'login']: false,
      [modalType]: !isModalOpen[modalType]
    });
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar
      position="relative"
      sx={{
        alignItems: 'center',
        backgroundColor: transparent ? 'transparent' : 'primary.dark'
      }}
    >
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
              aria-label="menu-button"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              open={anchorDrawer}
              onClose={toggleDrawer(false)}
              elevation={2}
              PaperProps={{
                sx: { backgroundColor: 'background.default' }
              }}
              transitionDuration={{
                enter: 200,
                exit: 200
              }}
            >
              {pages.map((page, index) => (
                <MenuItem
                  key={index}
                  onClick={() => {
                    toggleDrawer(false);
                    navigate(page.route);
                  }}
                  sx={{
                    width: '250px',
                    justifyContent: 'center'
                  }}
                  divider
                >
                  <Typography variant="body1">{page.value}</Typography>
                </MenuItem>
              ))}
              <IconButton
                onClick={toggleDrawer(false)}
                aria-label="close-drawer"
                size="large"
                sx={{
                  position: 'fixed',
                  top: '93vh',
                  left: '200px'
                }}
              >
                <ArrowBackRounded />
              </IconButton>
            </Drawer>
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
            flexGrow={1}
            maxHeight="50px"
            marginLeft={'30%'}
            marginTop={'20px'}
            display={{ xs: 'none', md: 'flex' }}
          >
            {pages.map((page, index) => (
              <Link
                key={index}
                to={`${page.route}`}
                style={{ textDecoration: 'none' }}
              >
                <NavLink>{page.value}</NavLink>
              </Link>
            ))}
          </Box>
          {authReducer.isAuthenticated && authReducer.user._id ? (
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
                <Link to="/dashboard" style={linkMenuStyle}>
                  <MenuItem>
                    <ManageAccountsRounded />
                    <Typography textAlign="center">Dashboard</Typography>
                  </MenuItem>
                </Link>
                <Link to="/dashboard" style={linkMenuStyle}>
                  <MenuItem>
                    <DomainAddRounded />
                    <Typography textAlign="center">Place Ad</Typography>
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
            <Box flexGrow={0}>
              {!isMobile && (
                <Button
                  aria-label="login"
                  onClick={() => handleModalOpen('login')}
                  color="secondary"
                  variant="outlined"
                  sx={{ marginRight: '10px' }}
                >
                  Login
                </Button>
              )}
              <Button
                aria-label="place-ad"
                onClick={() => handleModalOpen('login')}
                color="secondary"
              >
                Place Ad
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
