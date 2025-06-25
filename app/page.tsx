'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Typography } from '@mui/material';
import Story from './home_components/Story';
import TodoList from './home_components/TodoList';
import DailyQuestion from './home_components/DailyQuestion';
import PetalField from './home_components/PetalField';
import Loading from './components/Loading';

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

// 경우의 수 정리 
// 1. 이미 로그인한 정보가 있는 유저 -> 바로 홈화면 안내 (유저가 가족에 속했는지 여부에 따라 컴포넌트 달리 렌더링됨)
// 2. 로그인 정보가 없는 유저 -> 로그인 화면으로 안내
// 3. 새롭게 가입해서 로그인한 유저 -> role 설정 화면으로 안내
// 4. 가입해서 로그인했고 role 설정도 한 우저 -> 홈화면 안내 (유저가 가족에 속했는지 여부에 따라 컴포넌트 달리 렌더링됨)

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');

    // 유저의 로그인 정보가 없을 경우 로그인 화면으로 안내
    // if (!token) {
    //   console.log('로그인 정보 없음');
    //   router.replace('/hellosplash');
    //   return;
    // }
    // 유저가 로그인했지만 role을 설정하지 않은 경우 설정 화면으로 안내
    if (!mockUser.hasRole) {
      console.log('역할 없음');
      router.replace('/welcomesplash');
      return;
    }

    // 모든 조건 통과 -> 로딩 끝
    setIsLoading(false);
  }, [router]);

  if (isLoading) {
    // return (
    //   <Box sx={{
    //     width: '100%',
    //     minHeight: '100vh',
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     backgroundColor: 'white',
    //   }}>
    //     <Typography variant="h6" color="text.secondary">로딩 중입니다...</Typography>
    //   </Box>
    // );
    return <Loading />
  }


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



// 디버깅 대비 코드 
// useEffect(() => {
  //   const token = localStorage.getItem('accessToken');
  //   // 로그인 정보 x 시 router.replace('/hellosplash'); 리디렉트
  //   if (!token) {
  //     console.log('로그인 정보 없음');
  //     router.replace('/hellosplash');
  //     return;
  //   }
  //   // 역할이 없다면 router.replace('/welcomesplash');  리디렉트 
  //   if (!mockUser.hasRole) {
  //     console.log('역할 없음');
  //     router.replace('/welcomesplash');
  //   }
  // }, [router, mockUser.hasRole]);
