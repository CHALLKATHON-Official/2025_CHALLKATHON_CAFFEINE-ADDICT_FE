'use client';
import { Box, Button, Typography } from '@mui/material';
import { questionPast } from '../mockData/question_past';
import { useRouter } from 'next/navigation';

export default function DailyQuestion() {
	const router = useRouter();

	return (
		<Box sx={{
			width: '100%',
			minHeight: '100vh',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'flex-start',
			backgroundColor: '#FFFDEB',
			padding: '3rem 0 4rem',
			gap: '2rem'
		}}>
			<Box sx={{ width: '90%', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start', gap: '0.5rem' }}>
				<Typography sx={{ color: '#B49066', fontSize: '1.2rem' }}>우리 가족 질문 보관함</Typography>
				<Box sx={{
					width: '2rem',
					height: '2rem',
					backgroundImage: `url(/img/small_icon_bookshelf.svg)`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
				}} />
			</Box>

			<Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
				{questionPast.map((question, idx) => (
					<Button
						key={idx}
						// onClick={() => router.push(`/questiondetail/${question.index}`)}
						onClick={() => router.push(`/questiondetail`)}
						sx={{
							width: '90%',
							// marginTop: '1rem',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'flex-start',
							backgroundColor: 'transparent',
							boxShadow: 'none',
						}}
					>
						<Typography
							sx={{
								color: question.isAllDone ? '#FF0000' : '#D9D9D9',
								fontSize: '1rem',
								marginRight: '1rem',
								minWidth: '2rem'
							}}
						>
							{question.index}
						</Typography>
						<Box
							sx={{
								width: '100%',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'flex-start',
								border: '1px solid #B49066',
								borderRadius: '8px',
								padding: '0.2rem 1rem'
							}}
						>
							<Typography sx={{ color: 'black', fontSize: '1rem' }}>
								{question.content}
							</Typography>
						</Box>
					</Button>
				))}
			</Box>
		</Box>
	);
}
