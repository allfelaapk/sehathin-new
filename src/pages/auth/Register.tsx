import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, Container, Typography, Grid } from '@mui/material';
import logo from '../../assets/images/SehaThin.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  auth,
  signInWithGoogle,
  signInWithFacebook,
} from '../../firebase/firebaseAuth';
import { Google, Facebook } from '@mui/icons-material';

const Register = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate('/dashboard');
  }, [user, loading, navigate]);

  const handleGoogleRegister = () => {
    signInWithGoogle();
  };

  const handleFacebookRegister = () => {
    signInWithFacebook();
  };

  const logoStyle = {
    width: '100%',
    height: 'auto',
  };

  if (loading) {
    return (
      <Box
        minHeight='100vh'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Typography variant='h4'>Loading...</Typography>
      </Box>
    );
  }

  return (
    <Box
      minHeight='100vh'
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <Container maxWidth='md'>
        <Grid container spacing={2} alignItems='center'>
          <Grid item xs={12} sm={6}>
            <Box>
              <img src={logo} alt='Logo' style={logoStyle} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box textAlign='center'>
              <Typography variant='h4'>Create an Account</Typography>
              <Box mt={2}>
                <Button
                  variant='outlined'
                  color='primary'
                  size='large'
                  sx={{ borderRadius: '50px' }}
                  fullWidth
                  startIcon={<Google />}
                  onClick={handleGoogleRegister}
                >
                  Sign Up With Google
                </Button>
              </Box>
              <Box mt={2}>
                <Button
                  variant='outlined'
                  color='secondary'
                  size='large'
                  sx={{ borderRadius: '50px' }}
                  fullWidth
                  startIcon={<Facebook />}
                  onClick={handleFacebookRegister}
                  disabled
                >
                  Sign Up With Facebook
                </Button>
              </Box>
              <Box mt={2}>
                <Typography variant='body1'>
                  Already have an account?{' '}
                  <Link
                    style={{ textDecoration: 'none', color: '#19AE15' }}
                    to='/login'
                  >
                    Login
                  </Link>{' '}
                  now.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Register;
