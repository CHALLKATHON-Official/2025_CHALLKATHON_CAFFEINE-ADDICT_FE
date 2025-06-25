'use client';
import { Box, Button, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

export default function HelloSplash() {
	const apiBaseUrl = process.env.NEXT_PUBLIC_SERVER_URI;
	const kakaoLoginUrl = `${apiBaseUrl}/oauth2/authorization/kakao`;

	const [nickname, setNickname] = useState<string | null>(null);
	const [checkedAuth, setCheckedAuth] = useState(false);

	// 카카오 로그인 성공 후 쿼리 파라미터 확인
	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const oauthResult = urlParams.get('oauth');

		if (oauthResult === 'success') {
			alert('카카오 로그인 성공!');
			checkAuth();
		}
	}, []);

	// 카카오로그인 됐으면 정보 저장
	const checkAuth = async () => {
		try {
			const res = await fetch(`${apiBaseUrl}/api/user/me`, {
				method: 'GET',
				credentials: 'include',
			});

			if (!res.ok) {
				console.log('인증 실패: 응답이 실패 상태입니다');
				throw new Error('인증 실패');
			}

			const data = await res.json();
			localStorage.setItem('nickname', data.nickname);
			setNickname(data.nickname);
		} catch (err) {
			console.error('인증 에러:', err);
		} finally {
			setCheckedAuth(true);
		}
	};

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
