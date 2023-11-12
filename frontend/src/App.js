import './App.css';
import * as React from 'react';
import { Box, Button, Typography } from '@mui/material';
import InputForm from './input/InputForm';
import PowerdBy from './poweredby/PowerdBy';
import getIndustryKeywords from './api/openAI';
import { searchCompaniesWithCityScores } from './companySearch';
import { ResultList } from './result-list/ResultList';

async function performSearch(description, minScores) {
  const keywords = await getIndustryKeywords(description);
  try {
    return await searchCompaniesWithCityScores(minScores, keywords);
  } catch (error) {
    return [];
  }
}

function App() {
  const [results, setResults] = React.useState([]);
  return (
    <Box
      display="flex"
      alignItems="center"
      minHeight="100vh"
      flexDirection="column"
      gap="50px"
    >
      <Typography variant="h3" component="h3" sx={{ marginTop: '50px' }}>
        WhileTrue Companies Explorer
      </Typography>
      <InputForm onSubmit={async (preferences) => {
        const results = await performSearch(preferences.pdfText, preferences.scores);
        setResults(results);
      }} />
      <ResultList results={results} />
      <PowerdBy />
    </Box>
  );
}

export default App;
