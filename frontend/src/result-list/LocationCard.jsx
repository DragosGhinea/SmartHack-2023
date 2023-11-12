import React from 'react';
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";

export function LocationCard(props) {
    return (
        <Card>
            <CardContent>
                <h2>{props.city}, {props.country}</h2>
                <h3 style={{ color: "gray" }}>Top companies</h3>
                <Stack spacing={1}>
                    {props.companies.map((c, i) =>
                        <SmallCompanyCard key={i} name={c.company_name} description={c.short_description} />
                    )}
                </Stack>
            </CardContent>
        </Card>
    );
}

function SmallCompanyCard(props) {
    return (
        <Box sx={{ border: 1, padding: 2.5, borderColor: "#bbb", borderRadius: 4 }}>
            <Stack direction="row" alignItems="center" spacing={2}>
                <Typography noWrap fontSize={18} fontWeight="bold" width={100} title={props.name}>
                    {props.name}
                </Typography>
                <p>{props.description}</p>
            </Stack>
        </Box>
    );
}