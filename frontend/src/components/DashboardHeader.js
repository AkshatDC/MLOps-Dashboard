import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function DashboardHeader() {
  return (
    <AppBar position="static" color="primary" elevation={8}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, letterSpacing: '0.1em' }}>
          MLOps Dashboard
        </Typography>
        {/* Future place for user profile or navigation icons */}
      </Toolbar>
    </AppBar>
  );
}

export default DashboardHeader;
