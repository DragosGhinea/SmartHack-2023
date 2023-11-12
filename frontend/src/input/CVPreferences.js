import React, { useRef } from 'react'
import CVFileUpload from './CVFileUpload'
import { TextField } from '@mui/material'

const CVPreferences = ({setPreferences}) => {
  const updateDescribeYourself = (event) => {
    setPreferences((prevPreferences) => ({
      ...prevPreferences,
      describeYourself: event.target.value,
    }));
  }

  return (
    <>
        <CVFileUpload setPreferences = {setPreferences}/>
        <TextField
        id="outlined-multiline-flexible"
        label="Describe yourself"
        multiline
        fullWidth
        sx = {{
            marginTop: "20px"
        }}
        onChange={updateDescribeYourself}
      />
    </>
  )
}

export default CVPreferences