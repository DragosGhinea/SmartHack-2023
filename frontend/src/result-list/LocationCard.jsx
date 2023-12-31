import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardContent, Stack, Typography } from "@mui/material";
import { getScoresByCityName } from '../cities'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';

const LocationStats = (props) => {
    const [scores, setScores] = useState(null);
    const [viewScores, setViewScores] = useState(false)
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const scores = await getScoresByCityName(props.city);
          setScores(scores);
          console.log(scores);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, [props.city]);

    if (!scores)
        return null;
  
    return <>
        <Button variant="contained" onClick={() => setViewScores(prevScore => !prevScore)}>{viewScores?"Hide Scores":"Show City Scores"}</Button> <Typography variant="h5">Overall Score: <b>{parseFloat(scores['overall_score']).toFixed(2)}</b>/100</Typography>
        {viewScores && (
            <>
                <Typography>Cost of Living: <b>{parseFloat(scores['Cost of Living']).toFixed(2)}</b>/10</Typography>
                <Typography>Safety: <b>{parseFloat(scores['Safety']).toFixed(2)}</b>/10</Typography>
                <Typography>Education: <b>{parseFloat(scores['Education']).toFixed(2)}</b>/10</Typography>
                <Typography>Outdoors: <b>{parseFloat(scores['Outdoors']).toFixed(2)}</b>/10</Typography>
                <Typography>Environmental Quality: <b>{parseFloat(scores['Environmental Quality']).toFixed(2)}</b>/10</Typography>
            </>
         )
        }
    </>
  };

export function LocationCard(props) {
    return (
        <Card>
            <CardContent>
                <h2>{props.city}, {props.country}</h2>
                <LocationStats city = {props.city}/>
                <h3 style={{ color: "gray" }}>Top companies</h3>
                <Stack spacing={1}>
                    {props.companies.slice(0, 3).map((c, i) =>
                        <SmallCompanyCard key={i} name={c.company_name} description={c.short_description} linkedin={c.linkedin_url} website={c.website_url}/>
                    )}
                </Stack>
            </CardContent>
        </Card>
    );
}

function SmallCompanyCard(props) {
    return (
        <Box sx={{ border: 1, padding: 2.5, borderColor: "#bbb", borderRadius: 4, display: 'flex', flexDirection: 'column', position: 'relative' }}>
            <Stack>
                <Typography noWrap fontSize={18} fontWeight="bold" title={props.name}>
                    {props.name}
                </Typography>
                <Typography>{props.description}</Typography>
            </Stack>
            <div style = {{marginTop: '20px', display: 'flex', justifyContent: 'space-around'}}>
                {props.website && <Button
                                        variant="contained"
                                        color="success"
                                        target="_blank"
                                        href={props.website}
                                        startIcon={<LanguageIcon style = {{width: '25px'}}/>}
                                        style={{
                                            width: '15%',
                                            fontSize: '12px', 
                                            padding: '8px 16px',
                                        }}>
                                    Website
                                </Button>
                }

                {props.linkedin && <Button
                                        variant="contained"
                                        color="primary"
                                        target="_blank"
                                        href={props.linkedin}
                                        startIcon={<LinkedInIcon style = {{width: '25px'}}/>}
                                        style={{
                                            width: '15%',
                                            fontSize: '12px', 
                                            padding: '8px 16px',
                                        }}>
                                    LinkedIn
                                </Button>
                }
            </div>
        </Box>
    );
}