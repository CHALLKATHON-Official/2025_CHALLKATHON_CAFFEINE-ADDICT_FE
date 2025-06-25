'use client';
import { Box, Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

// 홈화면 하단 데일리 질문 컴포넌트
export default function DailyQuestion() {
	const router = useRouter();
	const question = '나의 엄마는 어떤 사람이었나요?';

	return (
		<Box sx={{
			width: '100%',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			gap: '0.5rem',
		}}>
			<Button variant='contained'
				sx={{ backgroundColor: '#B49066' }}
			>
				질문 바꾸기
			</Button>
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
				onClick={() => { router.push('/dailyquestion'); }}
			>
				<Typography>{question}</Typography>
			</Button>
		</Box>
	);
}
