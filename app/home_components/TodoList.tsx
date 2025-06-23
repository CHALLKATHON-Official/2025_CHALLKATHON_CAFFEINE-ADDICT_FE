'use client';
import { Box, Typography, Button, Checkbox } from '@mui/material';

// 홈화면 상단 TODO list 컴포넌트 
export default function TodoList() {
	const month = 6;
	const todolist = [
		'해외여행에서 호캉스 즐기기',
		'경주 대릉원에서 가족사진 찍기',
		'용인 에버랜드에서 푸바오 보기',
	];

	return (
		<Box sx={{
			width: '100%',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: 'transparent',
			padding: '1rem',
			gap: '0.5rem'
		}}>
			<Box sx={{
				width: '100%',
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between',
				backgroundColor: 'transparent',
			}}>
				<Typography sx={{ color: '#6E4C36', fontSize: '1.2rem' }}>{month}월의 TODO-list</Typography>
				<Button sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					borderRadius: '0.5rem',
					backgroundColor: '#DBD9CA',
					color: '#6E4C36',
					padding: '0 1rem'
				}}>
					내역 보기
				</Button>
			</Box>
			<Box sx={{
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'flex-start',
				justifyContent: 'center',
				backgroundColor: '#DBD9CA',
				gap: '1rem',
				padding: '1rem',
				borderRadius: '1rem',
				border: '2px solid #6E4C36',
				boxShadow: '0 0 10px rgba(0, 0, 0, 0.08);'
			}}
			>
				<Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem', justifyContent: 'flex-start', alignItems: 'center' }}>
					<Checkbox sx={{
						width: '1rem', height: '1rem',
						color: 'white', // 기본 테두리
						'&.Mui-checked': {
							color: 'white',
						},
					}} />
					<Typography sx={{ color: '#6E4C36', fontSize: '0.9rem' }}>{todolist[0]}</Typography>
				</Box>
				<Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem', justifyContent: 'flex-start', alignItems: 'center' }}>
					<Checkbox sx={{
						width: '1rem', height: '1rem',
						color: 'white',
						'&.Mui-checked': {
							color: 'white',
						},
					}} />
					<Typography sx={{ color: '#6E4C36', fontSize: '0.9rem' }}>{todolist[1]}</Typography>
				</Box>
				<Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem', justifyContent: 'flex-start', alignItems: 'center' }}>
					<Checkbox sx={{
						width: '1rem', height: '1rem',
						color: 'white',
						'&.Mui-checked': {
							color: 'white',
						},
					}} />
					<Typography sx={{ color: '#6E4C36', fontSize: '0.9rem' }}>{todolist[2]}</Typography>
				</Box>
			</Box>
		</Box>
	);
}
