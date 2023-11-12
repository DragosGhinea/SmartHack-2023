import React from 'react'
import RegionPreferences from './RegionPreferences'
import CVPreferences from './CVPreferences'
import { Box, Divider } from '@mui/material'

const InputForm = () => {
  return (
    <>
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
        >
            <CVPreferences />
            <Divider variant="middle" sx = {{width: '100%', margin: '20px'}}/>
            <RegionPreferences />
            <Divider variant="middle" sx = {{width: '100%', margin: '10px'}}/>
        </Box>
    </>
  )
}

export default InputForm