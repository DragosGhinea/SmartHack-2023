import React, { useRef } from 'react'
import ScoreSlider from './ScoreSlider'
import { Box, Button, Typography } from '@mui/material'

const RegionPreferences = ({setPreferences}) => {
  const advancedFiltersBox = useRef();

  const toggleAdvancedFiltersBox = () => {
    const boxElement = advancedFiltersBox.current;
  
    if (boxElement.style.display === 'flex') {
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
            <Typography variant="h4" mb={5}>Select some city regional filters</Typography>
            <Box
                sx={{
                display: 'flex',
                flexWrap: 'wrap',
                maxWidth: 800,
                justifyContent: 'space-around'
                }}
            >
                <ScoreSlider setPreferences = {setPreferences} name="Cost of Living" tooltip="Price of average consumer basket."/>
                <ScoreSlider setPreferences = {setPreferences} name="Education" tooltip="Best local university, average student results."/>
                <ScoreSlider setPreferences = {setPreferences} name="Safety" tooltip="Crime rate, guns per capita."/>
                <ScoreSlider setPreferences = {setPreferences} name="Outdoors" tooltip="Presence of hills, mountains and water access."/>
                <ScoreSlider setPreferences = {setPreferences} name="Environmental Quality" tooltip="Cleanliness, air and water quality."/>
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
                <ScoreSlider setPreferences = {setPreferences} name="Economy" tooltip="GDP per capita, growth rate."/>
                <ScoreSlider setPreferences = {setPreferences} name="Housing" tooltip="Average rent price per month."/>
                <ScoreSlider setPreferences = {setPreferences} name="Startups" tooltip="Presence of new startups, investors and events."/>
                <ScoreSlider setPreferences = {setPreferences} name="Venture Capital" tooltip="Venture capital."/> 
                <ScoreSlider setPreferences = {setPreferences} name="Travel Connectivity" tooltip="Connection to trains and airports."/>
                <ScoreSlider setPreferences = {setPreferences} name="Commute" tooltip="Quality of traffic."/> 
                <ScoreSlider setPreferences = {setPreferences} name="Businenss Freedom" tooltip="Business freedom from corruption."/>
                <ScoreSlider setPreferences = {setPreferences} name="Healthcare" tooltip="Healthcare quality and life expectancy."/> 
                <ScoreSlider setPreferences = {setPreferences} name="Taxation" tooltip="Taxation."/>
                <ScoreSlider setPreferences = {setPreferences} name="Internet Access" tooltip="Internet download and upload speed."/>
                <ScoreSlider setPreferences = {setPreferences} name="Leisure & Culture" tooltip="Museums, cinemas, galleries, concerts etc."/> 
                <ScoreSlider setPreferences = {setPreferences} name="Tolerance" tooltip="Acceptance of minorities, LGBT rights."/>
            </Box>
        </Box>
    </>
  )
}

export default RegionPreferences