'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { serverCall } from '../serverCall';

export default function KakaoCallback() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const code = searchParams?.get('code');
    if (!code) return;

    const login = async () => {
      try {
        const res = await serverCall(
          'POST',
          `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/kakao`, // 아직 명세서 없어서 임시 엔드포인트
          { code },
          '로그인 성공',
          '로그인 실패'
        );

        localStorage.setItem('jwt', res.token);
        localStorage.setItem('nickname', res.user.nickname);
        router.push('/');
      } catch (err: any) {
        alert(err.message || '로그인 처리 중 오류 발생');
      } finally {
        setLoading(false);
      }
    };

    login();
  }, [searchParams, router]);

  return loading ? <p>로그인 중입니다...</p> : <p>완료</p>;
}
