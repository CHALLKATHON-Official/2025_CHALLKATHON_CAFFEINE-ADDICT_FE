'use client';
import { Box, Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import Splash_after_makeTodo from './Splash_after_makeTodo';
import Splash_before_makeTodo from './Splash_before_makeTodo';
import { useState, useEffect } from 'react';
import { serverCall } from '../api/serverCall';

export default function DailyQuestion() {
	const router = useRouter();

	const [question, setQuestion] = useState<string>('로딩 중...');
	const [beforeOpen, setBeforeOpen] = useState(false);
	const [afterOpen, setAfterOpen] = useState(false);

	useEffect(() => {
		const fetchRecentQuestion = async () => {
			try {
				const res = await serverCall(
					'GET',
					'/api/v1/family/questions/recent'
				);
				const latest = res?.result?.content;
				if (latest) setQuestion(latest);
				else setQuestion('오늘의 질문이 아직 없습니다.');
			} catch (error) {
				console.error('최신 질문 불러오기 실패:', error);
				setQuestion('질문을 불러오지 못했습니다.');
			}
		};

		fetchRecentQuestion();
	}, []);

	const handleChangeQuestion = async () => {
		setBeforeOpen(true);

		try {
			const res = await serverCall(
				'POST',
				'/api/v1/questions/generate'
			);
			const newQuestion = res?.result.content;
			if (newQuestion) {
				setQuestion(newQuestion);
			}
		} catch (error) {
			console.error('질문 생성 실패:', error);
		}

		setTimeout(() => {
			setBeforeOpen(false);
			setAfterOpen(true);
		}, 5000);
	};

	return (
		<>
			<Splash_before_makeTodo open={beforeOpen} setOpen={setBeforeOpen} />
			<Splash_after_makeTodo open={afterOpen} setOpen={setAfterOpen} />
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
					onClick={handleChangeQuestion}
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
		</>
	);
}
