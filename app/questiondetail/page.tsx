'use client';

import { Box, Button, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { serverCall } from '@/app/api/serverCall';

interface Answer {
	answerId: number;
	memberName: string;
	memberProfileImage: string;
	content: string | null;
	answeredAt: string | null;
}

interface QuestionData {
	content: string;
	familyQuestionId: number;
	category: string;
	assignedDate: string;
}

export default function QuestionDetail() {
	const searchParams = useSearchParams();
	const index = searchParams.get('id');
	const myName = '이나영'; // 현재 로그인 사용자

	const [question, setQuestion] = useState<QuestionData | null>(null);
	const [answers, setAnswers] = useState<Answer[]>([]);

	useEffect(() => {
		if (!index) return;

		const fetchQuestionDetail = async () => {
			try {
				const res = await serverCall(
					'GET',
					`/api/v1/family/questions/${index}/answers`
				);
				const result = res?.result;
				setQuestion(result?.question);
				setAnswers(result?.answers || []);
			} catch (error) {
				console.error('질문 상세 조회 실패:', error);
			}
		};

		fetchQuestionDetail();
	}, [index]);

	const handleAnswerChange = (idx: number, newContent: string) => {
		setAnswers((prev) =>
			prev.map((a, i) =>
				i === idx ? { ...a, content: newContent } : a
			)
		);
	};

	const handleSave = async (content: string) => {
		if (!index) return;
		try {
			await serverCall(
				'POST',
				`/api/v1/family-questions/${index}/answers`,
				{ content },
				'답변 저장 실패',
				'답변 저장 성공'
			);
			alert('답변이 저장되었습니다!');
		} catch (error) {
			console.error('답변 저장 실패:', error);
		}
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
			{question && (
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
						justifyContent: 'center',
					}}
				>
					<Typography>{question.content}</Typography>
				</Box>
			)}

			{answers.map((a, i) => {
				const isMe = a.memberName === myName;
				return (
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
							<Typography>{a.memberName}</Typography>
						</Box>

						<TextField
							fullWidth
							size="small"
							multiline
							rows={3}
							disabled={!isMe}
							placeholder="열심히 답변을 적는 중..."
							value={a.content || ''}
							sx={{ backgroundColor: 'white' }}
							onChange={(e) => handleAnswerChange(i, e.target.value)}
						/>

						{isMe && (
							<Button
								sx={{ backgroundColor: '#6E4C36', color: 'white' }}
								onClick={() => handleSave(a.content || '')}
							>
								저장
							</Button>
						)}
					</Box>
				);
			})}
		</Box>
	);
}
