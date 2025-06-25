'use client';
import { Box, Typography, Button, Checkbox } from '@mui/material';
import { useRouter } from 'next/navigation';
import Splash_after_makeTodo from './Splash_after_makeTodo';
import Splash_before_makeTodo from './Splash_before_makeTodo';

// 홈화면 상단 TODO list 컴포넌트 
export default function TodoList() {
	const router = useRouter();

	// mockData
	const month = 6;
	const todolist = [
		'해외여행에서 호캉스 즐기기',
		'경주 대릉원에서 가족사진 찍기',
		'용인 에버랜드에서 푸바오 보기',
	];

	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: 'transparent',
				padding: '1rem',
				gap: '0.5rem',
			}}
		>
			<Button variant='contained' sx={{ backgroundColor: '#B49066' }}>TODO-list 바꾸기</Button>
			<Box
				sx={{
					width: '100%',
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
					backgroundColor: 'transparent',
				}}
			>
				<Typography sx={{ color: '#6E4C36', fontSize: '1.2rem' }}>
					{month}월의 TODO-list
				</Typography>
				<Button
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						borderRadius: '0.5rem',
						backgroundColor: '#DBD9CA',
						color: '#6E4C36',
						padding: '0 1rem',
					}}
					onClick={() => {
						router.push('/todohistory');
					}}
				>
					내역 보기
				</Button>
			</Box>

			<Box
				sx={{
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
					boxShadow: '0 0 10px rgba(0, 0, 0, 0.08)',
				}}
			>
				{todolist.map((todo, index) => (
					<Box
						key={index}
						sx={{
							display: 'flex',
							flexDirection: 'row',
							gap: '1rem',
							justifyContent: 'flex-start',
							alignItems: 'center',
						}}
					>
						<Checkbox
							onClick={(e) => {
								e.preventDefault(); // 체크를 일단 방지
								router.push('/certificate');
							}}
							sx={{
								width: '1rem',
								height: '1rem',
								color: 'white',
								'&.Mui-checked': {
									color: 'white',
								},
							}}
						/>
						<Typography sx={{ color: '#6E4C36', fontSize: '0.9rem' }}>
							{todo}
						</Typography>
					</Box>
				))}
			</Box>
		</Box>
	);
}
