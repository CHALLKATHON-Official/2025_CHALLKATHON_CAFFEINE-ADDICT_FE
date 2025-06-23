'use client';
import { Box, Typography } from '@mui/material';

export default function ProgressBar() {
	const mockData = 5; // 현재 값 (서버 연동해야함)
	const total = 30; // 목표 값
	const percentage = (mockData / total) * 100;

	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'flex-start',
				justifyContent: 'center',
				backgroundColor: 'transparent',
				padding: '0 1rem',
				gap: '0.5rem',
			}}
		>
			<Box
				sx={{
					width: 'auto',
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					gap: '0.5rem',
				}}
			>
				<Box
					sx={{
						width: '1rem',
						height: '1rem',
						backgroundImage: `url('/img/small_icon_fire.svg')`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
					}}
				/>
				<Typography sx={{ fontSize: '0.8rem' }}>
					매달 우리 가족 TODO list 추천받기
				</Typography>
				<Box
					sx={{
						width: '1rem',
						height: '1rem',
						backgroundImage: `url('/img/small_icon_fire.svg')`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
					}}
				/>
			</Box>

			<Box
				sx={{
					width: '100%',
					height: '1rem',
					borderRadius: '999px',
					border: '1px solid #DBD9CA',
					backgroundColor: '#F5F5F5',
					overflow: 'hidden',
					position: 'relative',
				}}
			>
				<Box
					sx={{
						width: `${percentage}%`,
						height: '100%',
						background: 'linear-gradient(90deg, #8B6D5C, #B0957D)',
						borderRadius: '999px',
						transition: 'width 0.3s ease-in-out',
					}}
				/>
			</Box>
			<Box sx={{ alignSelf: 'flex-end' }}>
				<Typography sx={{ fontSize: '0.7rem' }}>{`${mockData}/${total}`}</Typography>
			</Box>
		</Box>
	);
}
