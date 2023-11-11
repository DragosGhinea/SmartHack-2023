import './App.css';
import * as React from 'react';
import { Box } from '@mui/material';
import InputForm from './input/InputForm';


function App() {
  return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <InputForm />
      {/* <Stack spacing={3} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack> */}
    </Box>
  );
}

export default App;
