'use client';
import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import FutureModal from './FutureModal';

export default function FutureEvent() {
	const [open, setOpen] = useState(false);

	return (
		<Box sx={{
			width: '100%',
			minHeight: '100vh',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'space-between',
			backgroundColor: '#F4F2E0',
			padding: '4rem 0 6rem 0'
		}}>
			<Box sx={{ width: '90%', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: '0.5rem', flexDirection: 'column' }}>
				<Box sx={{ width: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: '0.5rem', flexDirection: 'column' }}>
					<Typography>2025년 6월 27일에,</Typography>
					<Typography>우리 가족 모두에게 전할 메시지를 적어주세요.</Typography>
				</Box>

				<TextField
					variant="outlined"
					multiline
					minRows={10}
					sx={{ width: '100%' }}
					label='ex) 우리 딸 시험 파이팅!!'
				/>
				<Button sx={{
					width: '20%', backgroundColor: '#DBD9CA', display: 'flex', alignItems: 'center', justifyContent: 'center',
					color: 'white', padding: '0.5rem', borderRadius: '1rem'
				}}>이미지 추가</Button>
			</Box>

			<Button sx={{
				width: '90%', backgroundColor: '#6E4C36', display: 'flex', alignItems: 'center', justifyContent: 'center',
				color: 'white', padding: '0.5rem', borderRadius: '1rem'
			}}
				onClick={() => { setOpen(true) }}
			>
				예약하기
			</Button>

			{open && <FutureModal open={open} setOpen={setOpen} />}
		</Box>
	);
}
