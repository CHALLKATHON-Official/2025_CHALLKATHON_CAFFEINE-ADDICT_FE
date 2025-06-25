'use client';

// 페이지간 라우팅 시 frozen 대비 
import { Box, Typography } from '@mui/material';

export default function Loading() {

	return (
		<Box sx={{
			width: '100%',
			minHeight: '100vh',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: 'white',
		}}>
			<Typography variant="h6" color="text.secondary">로딩 중입니다...</Typography>
		</Box>
	);
}