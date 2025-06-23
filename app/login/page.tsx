'use client';

import { Box, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const apiBaseUrl = process.env.NEXT_PUBLIC_SERVER_URI;
const kakaoLoginUrl = `${apiBaseUrl}/oauth2/authorization/kakao`;

export default function Login() {
	const [nickname, setNickname] = useState<string | null>(null);

	useEffect(() => {
		const name = localStorage.getItem('nickname');
		if (name) setNickname(name);
	}, []);

	const handleKakaoLogin = () => {
		window.location.href = kakaoLoginUrl;
		console.log('uri는:', kakaoLoginUrl);
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
