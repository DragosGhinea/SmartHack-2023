import React from 'react'
import CVFileUpload from './CVFileUpload'
import { TextField } from '@mui/material'

const CVPreferences = () => {
  return (
    <>
        <CVFileUpload />
        <TextField
        id="outlined-multiline-flexible"
        label="Describe yourself"
        multiline
        fullWidth
        sx = {{
            marginTop: "20px"
        }}
      />
    </>
  )
}

export default CVPreferences