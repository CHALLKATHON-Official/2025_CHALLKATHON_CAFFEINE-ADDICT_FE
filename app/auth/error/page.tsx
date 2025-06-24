'use client';
import { Box, Typography } from '@mui/material';

export default function ErrorPage() {

	return (
		<Box sx={{
			width: '100%',
			minHeight: '100vh',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
		}}>
			<Typography>카카오로그인 실패 페이지 ㅠㅠ</Typography>
		</Box>
	);
}
