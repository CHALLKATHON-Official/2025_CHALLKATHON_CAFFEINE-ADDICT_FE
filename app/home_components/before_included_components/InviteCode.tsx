// 가족에 속하기 전, 홈화면 상단 컴포넌트

'use client';
import { Box, Typography, Button, TextField } from '@mui/material';
export default function InviteCode() {
	return (
		<Box
			sx={{
				width: '90%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: '#FFFDEB',
				borderRadius: '1rem',
				padding: '1rem',
				gap: '2rem'
			}}
		>
			<Typography sx={{ color: '#6E4C36', fontSize: '0.8rem' }}>혹시,</Typography>

			<Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-start', justifyContent: 'center' }}>
				<Box sx={{ display: 'flex', flexDirection: 'row', gap: '0.4rem', alignItems: 'center', justifyContent: 'center' }}>
					<Box
						sx={{
							width: '10px',
							height: '10px',
							borderRadius: '50%',
							backgroundColor: '#F5C1BA'
						}}
					/>
					<Box
						sx={{
							width: '10px',
							height: '10px',
							borderRadius: '50%',
							backgroundColor: '#B0D1B3'
						}}
					/>
					<Box
						sx={{
							width: '10px',
							height: '10px',
							borderRadius: '50%',
							backgroundColor: '#9AC6E4'
						}}
					/>
					<Box
						sx={{
							width: '10px',
							height: '10px',
							borderRadius: '50%',
							backgroundColor: '#FCCB52'
						}}
					/>
				</Box>
				<Typography sx={{ color: '#6E4C36' }}>우리가족이 모멘토에 이미 만들어져 있다면?</Typography>
			</Box>

			<Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-start', justifyContent: 'center' }}>
				<Typography sx={{ color: '#6E4C36', fontSize: '0.8rem' }}>가족 초대코드 입력</Typography>
				<TextField variant='outlined' label='초대코드' sx={{ width: '100%', borderRadius: '1rem' }} />
			</Box>

			<Button sx={{
				width: '100%', display: 'flex',
				alignItems: 'center', justifyContent: 'center',
				backgroundColor: '#DBD9CA', padding: '0.5rem', borderRadius: '1rem', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2);'
			}}>
				<Typography sx={{ color: '#6E4C36', fontSize: '1rem' }}>입장하기</Typography>
			</Button>
		</Box>
	);
}
