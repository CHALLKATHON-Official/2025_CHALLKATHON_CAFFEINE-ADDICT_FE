'use client';
import { Box, Typography } from '@mui/material';

export default function DailyQuestion() {

	return (
		<Box sx={{
			width: '90%',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
		}}>
			<Typography>여기는 질문 목록 화면</Typography>
		</Box>
	);
}
