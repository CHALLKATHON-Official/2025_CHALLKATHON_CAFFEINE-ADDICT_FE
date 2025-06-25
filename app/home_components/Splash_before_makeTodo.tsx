'use client';
import { Box, Typography } from '@mui/material';

export default function Splash_before_makeTodo() {

	return (
		<Box sx={{
			width: '100%',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: '#F6F4E0'
		}}>
			<Typography>여기는 투두리스트 만드는 스플래쉬</Typography>
			<Typography>투두리스트를 새로 생성 중...</Typography>
		</Box>
	);
}
