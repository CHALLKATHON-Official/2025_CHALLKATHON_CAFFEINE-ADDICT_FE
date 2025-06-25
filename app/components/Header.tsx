'use client';

import { Box, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function Header() {
	const router = useRouter();

	const handleLogout = () => {
		localStorage.removeItem('accessToken');
		router.replace('/hellosplash');
	};

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
			<Button sx={{ color: 'grey', fontSize: '0.8rem' }} onClick={handleLogout}>
				LOGOUT
			</Button>
		</Box>
	);
}
