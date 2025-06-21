'use client';

import { Box, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const KAKAO_CLIENT_ID = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID!;
const REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI!;
const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;

export default function Login() {
	const [nickname, setNickname] = useState<string | null>(null);

	useEffect(() => {
		const name = localStorage.getItem('nickname');
		if (name) setNickname(name);
	}, []);

	const handleKakaoLogin = () => {
		window.location.href = kakaoAuthUrl;
	};

	return (
		<Box sx={{
			width: '100%',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			gap: '1rem'
		}}>
			<Typography>모멘토 카카오로그인 간단 테스트 중</Typography>
			{nickname ? (
				<Typography>안녕하세요, {nickname}님!</Typography>
			) : (
				<Button variant='contained' onClick={handleKakaoLogin}>카카오 로그인</Button>
			)}
		</Box>
	);
}
