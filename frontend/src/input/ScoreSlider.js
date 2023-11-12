import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Tooltip, Typography } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const ScoreSlider = ({setPreferences, name, tooltip}) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
      setPreferences((prevPreferences) => ({
        ...prevPreferences,
        scores: {
          ...prevPreferences.scores,
          [name]: newValue
        }
      }));
    };

  return (
    <>
    <Box sx={{ width: 300 }}>
        <Box display="flex" alignItems="center">
            <Typography>{name} ({value}+)</Typography>
            {tooltip && <Tooltip title={tooltip}><InfoOutlinedIcon fontSize='small' sx={{ marginLeft: 1 }} /></Tooltip>}
        </Box>
        <Slider
            size="small"
            min = {0}
            max = {10}
            step={0.1}
            defaultValue={0}
            aria-label="Small"
            valueLabelDisplay="auto"
            onChange={handleChange}
        />
    </Box>
    </>
  )
}

export default ScoreSlider