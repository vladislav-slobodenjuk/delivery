import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

// import 'components/App/App.css';

import {
  AppBar,
  Container,
  Menu,
  MenuItem,
  Toolbar,
  Box,
  IconButton,
  Button,
  Typography,
} from '@mui/material';
import { Adb as AdbIcon, Menu as MenuIcon } from '@mui/icons-material';

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo link */}
            <AdbIcon sx={{ display: { xs: 'none', sm: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component={NavLink}
              to="/"
              sx={{
                mr: 2,
                display: { xs: 'none', sm: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
              {/* burger button */}
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

              {/* pop-up menu */}
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', sm: 'none' },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    component={NavLink}
                    to="/"
                    textAlign="center"
                    sx={{
                      color: 'inherit',
                      textDecoration: 'none',
                    }}
                  >
                    Shop
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    component={NavLink}
                    to="/cart"
                    textAlign="center"
                    sx={{
                      color: 'inherit',
                      textDecoration: 'none',
                    }}
                  >
                    Shopping Cart
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', sm: 'none' }, mr: 1 }} />

            {/* small screen logo */}
            <Typography
              variant="h5"
              noWrap
              component={NavLink}
              to="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', sm: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
              <Button
                onClick={handleCloseNavMenu}
                component={NavLink}
                to="/"
                exact="true"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Shop
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                component={NavLink}
                to="/cart"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Shopping Cart
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Outlet />
    </>
  );
};
export default ResponsiveAppBar;
