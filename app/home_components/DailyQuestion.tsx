'use client';
import { Box, Typography, Button } from '@mui/material';

// 홈화면 하단 데일리 질문 컴포넌트
export default function DailyQuestion() {
	const question = '나의 엄마는 어떤 사람이었나요?';

	return (
		<Button
			sx={{
				width: '100%',
				height: '8rem',
				color: 'black',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: 'transparent',
				backgroundImage: `url('/img/question_img.svg')`,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
			}}
		>
			<Typography>{question}</Typography>
		</Button>
	);
}
