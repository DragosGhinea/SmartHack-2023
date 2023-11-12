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
                <ScoreSlider name="Cost of Living" tooltip="Price of average consumer basket."/>
                <ScoreSlider name="Education" tooltip="Best local university, average student results."/>
                <ScoreSlider name="Safety" tooltip="Crime rate, guns per capita."/>
                <ScoreSlider name="Outdoors" tooltip="Presence of hills, mountains and water access."/>
                <ScoreSlider name="Environmental Quality" tooltip="Cleanliness, air and water quality."/>
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
                <ScoreSlider name="Economy" tooltip="GDP per capita, growth rate."/>
                <ScoreSlider name="Housing" tooltip="Average rent price per month."/>
                <ScoreSlider name="Startups" tooltip="Presence of new startups, investors and events."/>
                <ScoreSlider name="Venture Capital" tooltip="Venture capital."/> 
                <ScoreSlider name="Travel Connectivity" tooltip="Connection to trains and airports."/>
                <ScoreSlider name="Commute" tooltip="Quality of traffic."/> 
                <ScoreSlider name="Businenss Freedom" tooltip="Business freedom from corruption."/>
                <ScoreSlider name="Healthcare" tooltip="Healthcare quality and life expectancy."/> 
                <ScoreSlider name="Taxation" tooltip="Taxation."/>
                <ScoreSlider name="Internet Access" tooltip="Internet download and upload speed."/>
                <ScoreSlider name="Leisure & Culture" tooltip="Museums, cinemas, galleries, concerts etc."/> 
                <ScoreSlider name="Tolerance" tooltip="Acceptance of minorities, LGBT rights."/>
            </Box>
        </Box>
    </>
  )
}

export default RegionPreferences