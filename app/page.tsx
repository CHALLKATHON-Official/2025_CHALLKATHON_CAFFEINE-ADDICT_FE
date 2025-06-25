'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Typography } from '@mui/material';
import Story from './home_components/Story';
import TodoList from './home_components/TodoList';
import DailyQuestion from './home_components/DailyQuestion';
import PetalField from './home_components/PetalField';

import BeforeNotice from './home_components/before_included_components/BeforeNotice';
import InviteCode from './home_components/before_included_components/InviteCode';

// mockData
const mockUser = {
  name: '봉미선',
  hasRole: true,
  role: 'mom',
  hasFamily: true,
  familyMember: ['아빠', '아들', '딸']
}

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const nickname = localStorage.getItem('nickname');

    // TODO: 카카오로그인 성공 후 반환값 실제 형태 확인하기 !!
    // 로그인 정보 x 시 router.replace('/hellosplash'); 리디렉트
    if (!nickname) {
      console.log('로그인 정보 없음');
      // router.replace('/hellosplash');
      return;
    }
    // 역할이 없다면 router.replace('/welcomesplash');  리디렉트 
    if (!mockUser.hasRole) {
      console.log('역할 없음');
      router.replace('/welcomesplash');
    }
  }, [router, mockUser.hasRole]);

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
        !mockUser.hasFamily && (
          <>
            <BeforeNotice />
            <InviteCode />
          </>
        )
      }

      {/* 가족이 있는 경우 */}
      {mockUser.hasFamily && (
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
