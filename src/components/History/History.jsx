import React from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Typography,
  Box
} from '@mui/material';

// Dummy data for the history
const historyData = [
  {
    year: '1900',
    description: 'The place was established as a small village.'
  },
  {
    year: '1950',
    description: 'It grew into a larger town with significant trade.'
  },
  {
    year: '2000',
    description: 'Became a modern city with skyscrapers and technology.'
  },
  {
    year: '2020',
    description: 'The city is now a major global hub for finance and culture.'
  }
];

export const History = () => {
  return (
    <Box sx={{ width: '100%', padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        History of the Place
      </Typography>
      <Stepper orientation="vertical" nonLinear>
        {historyData.map((event, index) => (
          <Step key={event.year} active>
            <StepLabel>{event.year}</StepLabel>
            <StepContent>
              <Typography>{event.description}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};
