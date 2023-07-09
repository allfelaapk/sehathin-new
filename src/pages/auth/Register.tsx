import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
} from '@mui/material';
import logo from '../../assets/images/SehaThin.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  auth,
  signInWithGoogle,
  signInWithFacebook,
} from '../../firebase/auth';
import { Google, Facebook } from '@mui/icons-material';

const Register = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return
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
      <Box minHeight="100vh" display="flex" justifyContent="center" alignItems="center">
        <Typography variant="h4">Loading...</Typography>
      </Box>
    );
  }

  return (
    <Box minHeight="100vh" display="flex" justifyContent="center" alignItems="center">
      <Container maxWidth="md">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6}>
            <Box mr={4}>
              <img src={logo} alt="Logo" style={ logoStyle } />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box textAlign="center">
              <Typography variant="h4">Create an Account</Typography>
              <Box mt={2}>
                <Button variant="contained" color="primary" size="large" fullWidth startIcon={<Google />} onClick={handleGoogleRegister}>
                  Sign Up With Google
                </Button>
              </Box>
              <Box mt={2}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  fullWidth
                  startIcon={<Facebook />}
                  onClick={handleFacebookRegister}
                  disabled
                >
                  Sign Up With Facebook
                </Button>
              </Box>
              <Box mt={2}>
                <Typography variant="body1">
                  Already have an account? <Link to="/login">Login</Link> now.
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
