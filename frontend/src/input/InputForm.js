import React, { useState } from 'react'
import RegionPreferences from './RegionPreferences'
import CVPreferences from './CVPreferences'
import { Box, Button, Divider } from '@mui/material'

const InputForm = ({onSubmit}) => {
  const [preferences, setPreferences] = useState({})
  

  return (
    <>
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
        >
            <CVPreferences setPreferences={setPreferences}/>
            <Divider variant="middle" sx = {{width: '100%', margin: '20px'}}/>
            <RegionPreferences setPreferences={setPreferences}/>
            <Divider variant="middle" sx = {{width: '100%', margin: '10px'}}/>
            <Button onClick = {() => onSubmit(preferences)} variant="contained" color="success" size="large">Start searching</Button>
        </Box>
    </>
  )
}

export default InputForm