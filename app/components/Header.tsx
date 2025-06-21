'use client';

import { Box, Button, Typography } from '@mui/material';
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
	const router = useRouter();
	const pathname = usePathname();

	const hideOnRoutes = ['/login', '/signup'];
	const shouldHide = hideOnRoutes.includes(pathname);

	if (shouldHide) return null;

	return (
		<Box sx={{
			width: '400px',
			position: 'fixed',
			top: '0',
			padding: '0 1rem 0 1rem',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			backgroundColor: '#D9D9D9'
		}}>
			<Typography>모멘토</Typography>
			<Button onClick={() => { router.push('/login') }}>로그인</Button>
		</Box>
	);
}
