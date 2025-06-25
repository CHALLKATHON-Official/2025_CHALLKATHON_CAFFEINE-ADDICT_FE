'use client';
import { Box, Button, Typography } from '@mui/material';
import { useEffect } from 'react';

export default function HelloSplash() {
	const apiBaseUrl = process.env.NEXT_PUBLIC_SERVER_URI;
	const kakaoLoginUrl = `${apiBaseUrl}/oauth2/authorization/kakao`;

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const token = urlParams.get('accessToken');

		if (token) {
			localStorage.setItem('accessToken', token);
		}
	}, []);

	const handleKakaoLogin = () => {
		window.location.href = kakaoLoginUrl;
	};

	return (
		<Box sx={{
			width: '100%',
			minHeight: '100vh',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'flex-end',
			backgroundImage: `url('/img/firstSplash_backImg.svg')`,
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			padding: '3rem 0 4rem 0'
		}}>
			<Button
				onClick={handleKakaoLogin}
				sx={{ width: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'yellow' }}>
				<Typography sx={{ color: 'black' }}>카카오 로그인</Typography>
			</Button>
		</Box>
	);
}
