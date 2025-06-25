'use client';
import { Box, Button, TextField, Typography } from '@mui/material';

export default function FutureMessage() {

	return (
		<Box sx={{
			width: '100%',
			minHeight: '100vh',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'space-between',
			backgroundColor: '#F4F2E0',
			padding: '4rem 0 6rem 0'
		}}>
			<Typography>여기는 예약메시지를 읽을 수 있는 화면</Typography>
		</Box>
	);
}
