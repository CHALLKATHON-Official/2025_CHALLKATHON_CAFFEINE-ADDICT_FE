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
			backgroundColor: 'transparent'
		}}>
			<Button
				onClick={() => { router.push('/') }}
				sx={{
					width: '5.3rem',
					height: '1.2rem',
					backgroundImage: `url(/img/modium_logo.svg)`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
					padding: '0.5rem',
				}}
			/>
			<Button onClick={() => { router.push('/login') }} sx={{ color: 'black' }}>로그인</Button>
		</Box>
	);
}
