'use client';
import { Box, Button, Typography } from '@mui/material';
import { useEffect } from 'react';
import { serverCall } from '../api/serverCall';

export default function HelloSplash() {
	const apiBaseUrl = process.env.NEXT_PUBLIC_SERVER_URI;
	const kakaoLoginUrl = `${apiBaseUrl}/oauth2/authorization/kakao`;

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const token = urlParams.get('accessToken');

		if (token) {
			localStorage.setItem('accessToken', token);
		};
		fetchUserData();

	}, []);

	const handleKakaoLogin = () => {
		window.location.href = kakaoLoginUrl;
	};

	//-------

	const fetchUserData = async () => {
		console.log('fetchUserData 함수 요청 성공!');
		const userData = await serverCall('GET', '/api/v1/auth/me', "", '유저 정보 GET 실패', '유저 정보 GET 성공');
		console.log('유저 정보 GET 결과:', userData);
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
				sx={{
					width: '50%', height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'yellow',
					backgroundImage: `url(/img/button_kakao.png)`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
					borderRadius: '0.5rem'
				}} />
			{/* <Typography sx={{ color: 'black' }}>카카오 로그인</Typography> */}
		</Box>
	);
}
