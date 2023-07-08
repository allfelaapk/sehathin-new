import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from '../../firebase/auth';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return
    }
    if (user) navigate('/dashboard');
  }, [user, loading, navigate]);

  const handleRegister = () => {
    if (!name) {
      alert('Please enter name');
      return;
    }
    registerWithEmailAndPassword(name, email, password);
  };

  const handleGoogleRegister = () => {
    signInWithGoogle();
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
      <Container maxWidth="xs">
        <Box textAlign="center" mb={3}>
          <Typography variant="h4">Register</Typography>
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Full Name"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email Address"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
        </Box>
        <Box mt={2}>
          <Button variant="contained" fullWidth onClick={handleRegister}>
            Register
          </Button>
        </Box>
        <Box mt={2}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={handleGoogleRegister}
          >
            Register with Google
          </Button>
        </Box>
        <Box mt={2}>
          <Typography variant="body2">
            Already have an account? <Link to="/login">Login</Link> now.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Register;
