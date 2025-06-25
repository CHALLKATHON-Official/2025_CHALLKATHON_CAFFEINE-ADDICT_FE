'use client';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { questionMock } from '../mockData/questionDetail';

export interface Answer {
	nickname: string;
	role: 'dad' | 'mom' | 'son' | 'daghter';
	answer: string | null;
	isMe: boolean;
}

export default function QuestionDetail() {
	const [answers, setAnswers] = useState<Answer[]>(questionMock.answers);
	const [myAnswer, setMyAnswer] = useState(
		answers.find((a) => a.isMe)?.answer || ''
	);
	const isAllDone = answers.every((a) => a.answer);

	const handleSave = () => {
		setAnswers((prev) =>
			prev.map((a) =>
				a.isMe ? { ...a, answer: myAnswer } : a
			)
		);
	};

	return (
		<Box
			sx={{
				width: '100%',
				minHeight: '100vh',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				backgroundColor: '#FFFDEB',
				padding: '3rem 0 4rem 0',
				gap: '2rem',
			}}
		>
			<Box
				sx={{
					width: '90%',
					height: '3rem',
					backgroundColor: '#D5D0C2',
					padding: '0.5rem 1rem',
					borderRadius: '12px',
					boxShadow: '0px 4px 4px rgba(0,0,0,0.25)',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<Typography>
					{questionMock.question}
				</Typography>
			</Box>

			{answers.map((a, i) => (
				<Box
					key={i}
					sx={{
						width: '90%',
						display: 'flex',
						flexDirection: 'column',
						gap: '0.3rem',
					}}
				>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
						<Box
							sx={{
								width: '2rem',
								height: '2rem',
								backgroundImage: `url(/img/small_icon_${a.role}.svg)`,
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								backgroundPosition: 'center',
							}}
						/>
						<Typography>{a.role}</Typography>
					</Box>
					<TextField
						fullWidth
						size="small"
						multiline
						rows={3}
						disabled={!a.isMe || !!a.answer}
						placeholder={a.answer ? '' : '열심히 답변을 적는 중...'}
						value={a.isMe ? myAnswer : a.answer || ''}
						onChange={(e) => setMyAnswer(e.target.value)}
						sx={{ backgroundColor: 'white' }}
					/>
				</Box>
			))}

			<Box sx={{
				width: '90%',
				display: 'flex',
				justifyContent: 'flex-end'
			}}>
				<Button
					variant="contained"
					sx={{ backgroundColor: '#6E4C36' }}
					onClick={handleSave}
				>
					저장
				</Button>
			</Box>
		</Box>
	);
}
