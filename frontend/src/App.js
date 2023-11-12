import './App.css';
import * as React from 'react';
import { Box, Container, Typography } from '@mui/material';
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
        const results = await performSearch(preferences.pdfText + "\n" + preferences.describeYourself, preferences.scores);
        setResults(results);
      }} />
      <Container width="90%">
        <ResultList results={results} />
      </Container>
      <PowerdBy />
    </Box>
  );
}

export default App;
