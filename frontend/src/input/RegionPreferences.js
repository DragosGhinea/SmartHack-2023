import React, { useRef } from 'react'
import ScoreSlider from './ScoreSlider'
import { Box, Button } from '@mui/material'

const RegionPreferences = () => {
  const advancedFiltersBox = useRef();

  const toggleAdvancedFiltersBox = () => {
    const boxElement = advancedFiltersBox.current;
  
    if (boxElement.style.display === 'flex' || boxElement.style.display === '') {
      boxElement.style.display = 'none';
    } else {
      boxElement.style.display = 'flex';
    }
  };

  return (
    <>
        <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
        >
            <Box
                sx={{
                display: 'flex',
                flexWrap: 'wrap',
                maxWidth: 800,
                justifyContent: 'space-around'
                }}
            >
                <ScoreSlider name="Cost of Living"/>
                <ScoreSlider name="Education"/>
                <ScoreSlider name="Safety"/>
                <ScoreSlider name="Outdoors"/>
                <ScoreSlider name="Environmental Quality"/>
            </Box>

            <Button 
                variant="contained"
                sx = {{marginTop: 5, marginBottom: 3}}
                onClick = {toggleAdvancedFiltersBox}
                >Advanced filters</Button>
            
            <Box ref={advancedFiltersBox}
                sx={{
                display: 'none',
                flexWrap: 'wrap',
                maxWidth: 800,
                justifyContent: 'space-around'
                }}
            >
                <ScoreSlider name="Economy"/>
                <ScoreSlider name="Housing" tooltip="Something something something"/>
                <ScoreSlider name="Startups"/>
                <ScoreSlider name="Venture Capital"/> 
                <ScoreSlider name="Travel Connectivity"/>
                <ScoreSlider name="Commute"/> 
                <ScoreSlider name="Businenss Freedom"/>
                <ScoreSlider name="Healthcare"/> 
                <ScoreSlider name="Taxation"/>
                <ScoreSlider name="Internet Access"/>
                <ScoreSlider name="Leisure & Culture"/> 
                <ScoreSlider name="Tolerance"/>
            </Box>
        </Box>
    </>
  )
}

export default RegionPreferences