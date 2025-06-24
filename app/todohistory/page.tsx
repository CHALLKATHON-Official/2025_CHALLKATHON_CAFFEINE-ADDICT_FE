'use client';
import { Box, Typography } from '@mui/material';

export default function TodoHistory() {

	return (
		<Box sx={{
			width: '90%',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
		}}>
			<Typography>여기는 투두 히스토리 화면</Typography>
		</Box>
	);
}
