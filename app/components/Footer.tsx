'use client';

import { Box, Button, Typography } from '@mui/material';
import { useRouter, usePathname } from 'next/navigation';

export default function Footer() {
	const router = useRouter();
	const pathname = usePathname();

	const hideOnRoutes = ['/login', '/signup'];
	const shouldHide = hideOnRoutes.includes(pathname);

	if (shouldHide) return null;

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
			<Button onClick={() => { router.push('/login') }}
				sx={{
					backgroundColor: '#DBD9CA',
					borderRadius: '0.5rem',
					display: 'flex',
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Typography sx={{ color: 'black' }}>홈</Typography>
			</Button>
			<Button onClick={() => { router.push('/login') }}
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flex: 1,
				}}
			>
				<Typography sx={{ color: 'black' }}>탐색</Typography>
			</Button>
			<Button onClick={() => { router.push('/login') }}
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flex: 1,
				}}
			>
				<Typography sx={{ color: 'black' }}>마이</Typography>
			</Button>
		</Box>
	);
}
