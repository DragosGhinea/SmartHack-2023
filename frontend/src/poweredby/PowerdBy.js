import { Box, Typography } from '@mui/material'
import React from 'react'
import veridionImg from './imgs/veridion.png'
import teleportImg from './imgs/teleport.png'
import openAIImg from './imgs/openai.png'

const PowerdBy = () => {
  return (
    <>
      <Typography variant="h3" sx = {{marginTop: '70px'}}>
        Powered by
      </Typography>
      <Box 
        display="flex"
        maxWidth="100%"
        width="100%"
        justifyContent="space-around"
        alignItems="center"
        gap="30px"
        sx = {{
          marginBottom: '50px',
          overflowX: 'auto'
        }}
      >
        <a href="https://veridion.com/">
          <img 
            draggable="false"
            src={veridionImg} alt="Veridion"
            width="600px"
          />
        </a>

        <a href="https://developers.teleport.org/">
          <img 
            draggable="false"
            src={teleportImg} alt="Teleport"
            width="200px"
          />
        </a>

        <a href="https://openai.com/">
          <img 
            draggable="false"
            src={openAIImg} alt="OpenAI"
            width="200px"
          />
        </a>
      </Box>
    </>
  )
}

export default PowerdBy