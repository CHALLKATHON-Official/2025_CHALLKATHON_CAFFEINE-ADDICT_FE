'use client';

import { Box, Typography } from '@mui/material';

export default function Home() {

  return (
    <Box sx={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem'
    }}>
      <Typography>모멘토 홈화면 !!</Typography>
    </Box>
  );
}
