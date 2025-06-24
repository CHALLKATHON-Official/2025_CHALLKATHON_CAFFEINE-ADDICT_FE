'use client';
import { Box, Typography } from '@mui/material';
import Story from './home_components/Story';
import ProgressBar from './home_components/Progress';
import TodoList from './home_components/TodoList';
import DailyQuestion from './home_components/DailyQuestion';
import PetalField from './home_components/PetalField';

import BeforeNotice from './home_components/before_included_components/BeforeNotice';
import InviteCode from './home_components/before_included_components/InviteCode';

// 모멘토 홈화면
export default function Home() {
  const noFamily = false;

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
      {/* 첫 회원가입해서 아직 가족이 없는 경우 */}
      {
        noFamily && (
          <>
            <BeforeNotice />
            <InviteCode />
          </>
        )
      }

      {/* 가족이 있는 경우 */}
      {!noFamily && (
        <>
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

          <PetalField />
        </>
      )
      }
    </Box>
  );
}
