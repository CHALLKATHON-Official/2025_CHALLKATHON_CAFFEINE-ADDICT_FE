'use client';
import { Box, Button, Typography } from '@mui/material';
import { useEffect } from 'react';
import { serverCall } from '../api/serverCall';

export default function HelloSplash() {
	const apiBaseUrl = process.env.NEXT_PUBLIC_SERVER_URI;
	const kakaoLoginUrl = `${apiBaseUrl}/oauth2/authorization/kakao`;

	// useEffect(() => {
	// 	const urlParams = new URLSearchParams(window.location.search);
	// 	const token = urlParams.get('token');
	// 	console.log('token:', token);

	// 	if (token) {
	// 		localStorage.setItem('accessToken', token);
	// 		console.log('data:', token);
	// 		fetchUserData();
	// 	};


	// }, []);
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const url = new URL(window.location.href);
			console.log('url:', url);
			const token = url.searchParams.get('token');

			if (token) {
				localStorage.setItem('accessToken', token);
				console.log('토큰 저장됨:', token);

				fetchUserData();
			}
		}
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
			justifyContent: 'center',
			backgroundColor: '#FFFDEB',
			padding: '3rem 0 4rem 0',
			gap: '17rem'
		}}>
			<Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center', justifyContent: 'center' }}>
				<Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', justifyContent: 'center' }}>
					<Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center', justifyContent: 'center' }}>
						<Typography sx={{ color: '#B49066', fontSize: '0.8rem' }}>매일 스쳐 지나가는 하루,</Typography>
						<Typography sx={{ color: '#B49066', fontSize: '0.8rem' }}>그 속에도 가족의 마음이 머무는 순간이 있습니다.</Typography>
					</Box>

					<Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center', justifyContent: 'center' }}>
						<Typography sx={{ color: '#B49066', fontSize: '0.8rem' }}>오늘도 함께 나눈 대화 한 줄이,</Typography>
						<Typography sx={{ color: '#B49066', fontSize: '0.8rem' }}>내일의 추억이 되기를 바랍니다.</Typography>
					</Box>
				</Box>

				<Box sx={{
					width: '10rem',
					height: '2.5rem',
					backgroundImage: `url(/img/logo_for_landing.svg)`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
				}} />
			</Box>

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
