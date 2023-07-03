import React from 'react';
import '../src/App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';
import NavRoutes from './routes/NavRoutes';

const theme = createTheme({
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <NavRoutes />
      </ThemeProvider>
    </div>
  );
}
export default App;
