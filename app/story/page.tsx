'use client';
import { Box, Typography } from '@mui/material';

export default function Story() {

	return (
		<Box sx={{
			width: '90%',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
		}}>
			<Typography>여기는 스토리 화면</Typography>
		</Box>
	);
}
