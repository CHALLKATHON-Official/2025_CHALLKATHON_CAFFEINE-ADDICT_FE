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
			padding: '3rem 0 4rem'
		}}>
			<Box sx={{ width: '90%', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start' }}>
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

			{questionPast.map((question, idx) => (
				<Button
					key={idx}
					// onClick={() => router.push(`/questiondetail/${question.index}`)}
					onClick={() => router.push(`/questiondetail`)}
					sx={{
						width: '90%',
						marginTop: '1rem',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'flex-start',
						backgroundColor: 'transparent',
						boxShadow: 'none',
					}}
				>
					<Typography
						sx={{
							color: question.isAllDone ? 'red' : '#D9D9D9',
							fontSize: '1.2rem',
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
							border: '1px solid #6E4C36',
							borderRadius: '8px',
							padding: '0.5rem 1rem'
						}}
					>
						<Typography sx={{ color: '#B49066', fontSize: '1.2rem' }}>
							{question.content}
						</Typography>
					</Box>
				</Button>
			))}
		</Box>
	);
}
