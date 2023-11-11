import React from 'react';
import { LocationCard } from './LocationCard';
import { Stack } from '@mui/material';

export function ResultList(props) {
    return (
        <Stack spacing={2} borderRadius={50}>
            {
                props.results.map((r, i) =>
                    <LocationCard key={i} city={r.city} country={r.country} companies={r.companies} />
                )
            }
        </Stack>
    );
}