import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  IconButton,
  Hidden,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Login, Logout } from '@mui/icons-material';
import logo from '../../assets/images/SehaThin.png';
import { logout, getCurrentUser } from '../../firebase/firebaseAuth';

export default function Navbar() {
  const link = {
    textDecoration: 'none',
    color: 'white',
  };

  const logoStyle = {
    height: 80,
    width: 80,
    backgroundColor: 'white',
    borderRadius: 50,
    marginTop: '0.5rem',
  };

  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const user = await getCurrentUser();
      setIsLoggedIn(user !== null);
    };
    checkAuth();
  }, []);

  const handleLogout = async () => {
    setIsLoading(true);

    setTimeout(async () => {
      await logout();
      setIsLoggedIn(false);
      setIsLoading(false);
      navigate('/');
    }, 3000);
  }

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  if (isLoading) {
    return (
      <Box minHeight="100vh" display="flex" justifyContent="center" alignItems="center">
        <Typography variant="h4">Logging out...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed' style={{ backgroundColor: '#19AE15' }}>
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <Link to='/'>
            <img src={logo} alt='logo' style={logoStyle} />
          </Link>
          <Hidden smUp>
            <IconButton
              size='large'
              onClick={toggleMenu}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Hidden smDown>
            <nav>
              <ul
                style={{
                  display: 'flex',
                  listStyleType: 'none',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 0,
                  padding: 0,
                }}
              >
                <li style={{ marginRight: '2rem' }}>
                  <Link to='/' style={link}>
                    Home
                  </Link>
                </li>
                <li style={{ marginRight: '2rem' }}>
                  <Link to='/about' style={link}>
                    About
                  </Link>
                </li>
                <li style={{ marginRight: '2rem' }}>
                  <Link to='/consult' style={link}>
                    Consult
                  </Link>
                </li>
                <li style={{ marginRight: '2rem' }}>
                  <Link to='/article' style={link}>
                    Article
                  </Link>
                </li>
                <li style={{ marginRight: '2rem' }}>
                  <Link to='/pricing' style={link}>
                    Pricing
                  </Link>
                </li>
                <li>
                  {isLoggedIn ? (
                    <Button
                      variant='outlined'
                      color='inherit'
                      onClick={handleLogout}
                      sx={{ borderRadius: '50px' }}
                      startIcon={<Logout />}
                    >
                      Logout
                    </Button>
                  ) : (
                    <Button
                      variant='outlined'
                      color='inherit'
                      component={Link}
                      to='/login'
                      sx={{ borderRadius: '50px' }}
                      startIcon={<Login />}
                    >
                      Login
                    </Button>
                  )}
                </li>
              </ul>
            </nav>
          </Hidden>
          <Drawer anchor='right' open={isMenuOpen} onClose={toggleMenu}>
            <div
              style={{
                width: 300,
                height: '100vh',
                padding: '32px',
                backgroundColor: '#19AE15',
              }}
            >
              <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
                <li style={{ marginBottom: '2rem' }}>
                  <Link to='/' style={link}>
                    Home
                  </Link>
                </li>
                <li style={{ marginBottom: '2rem' }}>
                  <Link to='/about' style={link}>
                    About
                  </Link>
                </li>
                <li style={{ marginBottom: '2rem' }}>
                  <Link to='/consult' style={link}>
                    Consult
                  </Link>
                </li>
                <li style={{ marginBottom: '2rem' }}>
                  <Link to='/article' style={link}>
                    Article
                  </Link>
                </li>
                <li style={{ marginBottom: '2rem' }}>
                  <Link to='/pricing' style={link}>
                    Pricing
                  </Link>
                </li>
                <li>
                  {isLoggedIn ? (
                    <Button
                      variant='outlined'
                      color='inherit'
                      onClick={handleLogout}
                      startIcon={<Logout />}
                      sx={{ width: '100%', borderRadius: '50px' }}
                    >
                      Logout
                    </Button>
                  ) : (
                    <Button
                      variant='outlined'
                      color='inherit'
                      component={Link}
                      to='/login'
                      startIcon={<Login />}
                      sx={{ width: '100%', borderRadius: '50px' }}
                    >
                      Login
                    </Button>
                  )}
                </li>
              </ul>
            </div>
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
