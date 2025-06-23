'use client';
import { Box, Typography } from '@mui/material';
import Story from './home_components/Story';
import ProgressBar from './home_components/Progress';
import TodoList from './home_components/TodoList';
import DailyQuestion from './home_components/DailyQuestion';

// 모멘토 홈화면
export default function Home() {

  return (
    <Box sx={{
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundImage: `url('/img/home_background_img.svg')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      padding: '3rem 0 4rem 0'
    }}>
      <Box sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
      }}>
        <Story />
        <ProgressBar />
        <TodoList />
      </Box>
      <DailyQuestion />
    </Box>
  );
}
