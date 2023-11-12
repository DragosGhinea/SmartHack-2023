import './App.css';
import * as React from 'react';
import { Alert, Box, Button, CircularProgress, Container, Typography } from '@mui/material';
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
  const [loadingResults, setLoadingResults] = React.useState(false)

  const [alertProblem, setAlertProblem] = React.useState("");

  const printAlert = (alert_msg) => {
    setAlertProblem(alert_msg)
    setTimeout(() => {
      setAlertProblem("")
    }, 2000);
  }

  const resultsList = React.useRef();

  return (
    <Box
      display="flex"
      alignItems="center"
      minHeight="100vh"
      flexDirection="column"
      gap="50px"
    >
      {alertProblem && (
        <Alert severity="warning" color="warning" sx = {{
          position: 'absolute'
        }}>
            {alertProblem}
        </Alert>
      )
      }
      <Typography variant="h3" component="h3" sx={{ marginTop: '50px' }}>
        WhileTrue Companies Explorer
      </Typography>
      <InputForm loadingResults = {loadingResults} onSubmit={async (preferences) => {
        if (!preferences.pdfText)
          preferences.pdfText = ""
        if (!preferences.describeYourself)
          preferences.describeYourself = ""

        if (preferences.pdfText === "" && preferences.describeYourself === "") {
          printAlert("You need to upload a CV or at least tell us something about yourself!")
          return;
        }

        setLoadingResults(true);
        const results = await performSearch(preferences.pdfText + "\n" + preferences.describeYourself, preferences.scores);
        setResults(results);
        setLoadingResults(false);
        resultsList.current.scrollIntoView({ behavior: 'smooth' });
      }} />
      <Container width="90%" ref={resultsList}>
        <ResultList results={results}/>
      </Container>
      <PowerdBy />
    </Box>
  );
}

export default App;
