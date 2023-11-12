import React, { useState } from 'react'
import RegionPreferences from './RegionPreferences'
import CVPreferences from './CVPreferences'
import { Box, Button, CircularProgress, Divider, Typography } from '@mui/material'

const InputForm = ({ onSubmit, loadingResults }) => {
  const [preferences, setPreferences] = useState({ scores: {} })

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <CVPreferences setPreferences={setPreferences} />
        <Divider variant="middle" sx={{ width: '100%', margin: '20px' }} />
        <RegionPreferences setPreferences={setPreferences} />
        <Divider variant="middle" sx={{ width: '100%', margin: '10px' }} />
        <Button onClick={() => onSubmit(preferences)} variant="contained" color="success" size="large">{loadingResults? <CircularProgress size={24} color="inherit" /> : "Start searching"}</Button>
        {loadingResults && <Typography>Computing data...</Typography>}
      </Box>
    </>
  )
}

export default InputForm