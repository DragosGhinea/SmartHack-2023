import './App.css';
import * as React from 'react';
import { Box, Button, Typography } from '@mui/material';
import InputForm from './input/InputForm';
import PowerdBy from './poweredby/PowerdBy';


function App() {
  return (
      <Box
        display="flex"
        alignItems="center"
        minHeight="100vh"
        flexDirection="column"
        gap="50px"
      >
        <Typography variant="h3" component="h3" sx = {{marginTop: '50px'}}>
          WhileTrue Companies Explorer
        </Typography>
        <InputForm />
        <Button variant="contained" color="success" size="large">Start searching</Button>
        <PowerdBy />
    </Box>
  );
}

export default App;
