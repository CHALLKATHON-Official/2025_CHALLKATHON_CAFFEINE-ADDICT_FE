'use client';

import { Box, Button, Typography } from '@mui/material';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Loading from './Loading';

export default function Footer() {
	const router = useRouter();
	const pathname = usePathname();
	// pathname을 기준으로 초기 버튼 상태 설정
	const [nowButton, setNowButton] = useState('');

	useEffect(() => {
		if (pathname.includes('/explore')) setNowButton('explore');
		else if (pathname.includes('/my')) setNowButton('my');
		else setNowButton('home');
	}, [pathname]);

	const hideOnRoutes = ['/login', '/signup'];
	const shouldHide = hideOnRoutes.includes(pathname);

	if (shouldHide) return null;

	const homeClickHandler = () => {
		setNowButton('home');
		router.push('/');
	};

	const exploreClickHandler = () => {
		setNowButton('explore');
		router.push('/explore');
	};

	const myClickHandler = () => {
		setNowButton('my');
		router.push('/my');
	};

	return (
		<Box sx={{
			width: '400px',
			height: '3rem',
			position: 'fixed',
			bottom: '0',
			padding: '0.5rem',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			backgroundColor: 'white',
			boxShadow: '0 0 10px rgba(0, 0, 0, 0.08);'
		}}>
			<Button onClick={homeClickHandler}
				sx={{
					backgroundColor: nowButton == 'home' ? '#DBD9CA' : 'transparent',
					borderRadius: '0.5rem',
					display: 'flex',
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Typography sx={{ color: 'black' }}>홈</Typography>
			</Button>
			<Button onClick={exploreClickHandler}
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flex: 1,
					backgroundColor: nowButton == 'explore' ? '#DBD9CA' : 'transparent',
				}}
			>
				<Typography sx={{ color: 'black' }}>탐색</Typography>
			</Button>
			<Button onClick={myClickHandler}
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flex: 1,
					backgroundColor: nowButton == 'my' ? '#DBD9CA' : 'transparent',
				}}
			>
				<Typography sx={{ color: 'black' }}>마이</Typography>
			</Button>
		</Box>
	);
}
