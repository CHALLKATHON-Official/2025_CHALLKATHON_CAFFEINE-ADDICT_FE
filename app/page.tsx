'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Button } from '@mui/material';
import Story from './home_components/Story';
import TodoList from './home_components/TodoList';
import DailyQuestion from './home_components/DailyQuestion';
import PetalField from './home_components/PetalField';
import Loading from './components/Loading';
import { serverCall } from './api/serverCall';

import BeforeNotice from './home_components/before_included_components/BeforeNotice';
import InviteCode from './home_components/before_included_components/InviteCode';

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const apiBaseUrl = process.env.NEXT_PUBLIC_SERVER_URI;
  const kakaoLoginUrl = `${apiBaseUrl}/oauth2/authorization/kakao`;

  const handleKakaoLogin = () => {
    window.location.href = kakaoLoginUrl;
  };

  const fetchUserData = async () => {
    try {
      const userData = await serverCall('GET', '/api/v1/auth/me', '', '유저 정보 GET 실패');
      const result = userData.result;

      if (!result.familyRoleSelected) {
        // 역할을 아직 설정하지 않은 경우 리디렉트
        const username = encodeURIComponent(result.username);
        router.replace(`/welcomesplash?username=${username}`);
      }
      // 사용자 상태 저장
      setUser(result);
      setIsLoading(false);
    } catch (err) {
      console.error('유저 정보 조회 실패:', err);
      setIsLoading(false);
    }
  };

  // URL에 토큰이 있으면 저장하고 fetch 호출
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (token) {
      localStorage.setItem('accessToken', token);
      console.log('토큰 저장됨:', token);
    }
  }, []);

  // 토큰 유무 확인하고 유저 데이터 요청
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      console.log('로그인 정보 없음, 로그인 페이지로 이동');
      router.replace('/hellosplash');
      return;
    }
    fetchUserData();
  }, [router]);

  if (isLoading || !user) return <Loading />;

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
      {/* 가족이 없는 경우 */}
      {user.familyId === null && (
        <>
          <BeforeNotice />
          <InviteCode />
        </>
      )}

      {/* 가족이 있는 경우 */}
      {user.familyId !== null && (
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
      )}

      {/* 디버깅용 로그인 버튼 */}
      {/* <Button onClick={handleKakaoLogin}>로그인</Button> */}
    </Box>
  );
}
