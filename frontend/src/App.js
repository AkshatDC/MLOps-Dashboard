import React from 'react';
import { CssBaseline, Container, Typography, Box, Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DashboardHeader from './components/DashboardHeader';  // import the new header component

// Custom dark theme with luxurious, intellectual vibe
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1e1e1e'
    },
    primary: {
      main: '#bb86fc',
    },
    secondary: {
      main: '#03dac6',
    },
    text: {
      primary: '#e0e0e0',
      secondary: '#a0a0a0',
    },
  },
  typography: {
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    h4: {
      fontWeight: 700,
      letterSpacing: '0.1em',
      marginBottom: '1rem',
    },
    body1: {
      fontSize: '1.1rem',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', backgroundColor: darkTheme.palette.background.default }}>
        {/* Header */}
        <DashboardHeader />

        {/* Main content */}
        <Container maxWidth="md" sx={{ paddingTop: 4 }}>
          <Paper elevation={10} sx={{ padding: 4, borderRadius: 3 }}>
            <Typography variant="h4" color="primary" align="center">
              MLOps Dashboard
            </Typography>
            <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 3 }}>
              Real-time monitoring, explainability, and drift detection for ML models.
            </Typography>
            <Typography variant="body1" color="text.primary">
              Welcome to the MLOps Dashboard prototype. This platform will offer insights into deployed machine learning models, providing metrics, explanations, and alerts to maintain reliability and trust in AI systems.
            </Typography>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
