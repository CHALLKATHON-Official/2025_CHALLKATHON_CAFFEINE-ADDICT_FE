'use client';
import { useState } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import { serverCall } from '@/app/api/serverCall';

export default function InviteCode() {
	const [inviteCode, setInviteCode] = useState('');

	const handleJoinFamily = async () => {
		if (!inviteCode.trim()) {
			alert('초대 코드를 입력해주세요.');
			return;
		}

		try {
			const response = await serverCall(
				'POST',
				`/api/v1/family/join?inviteCode=${inviteCode}`,
				'',
				'가족 입장 실패',
				'가족 입장 성공'
			);
			console.log('가족 입장 응답:', response);

			alert('가족 방에 성공적으로 입장했습니다!');
			// 필요 시 router.replace('/home') 등 이동 처리 추가
		} catch (err: any) {
			console.error('가족 입장 실패:', err);
			alert(err.message || '알 수 없는 오류가 발생했습니다.');
		}
	};

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
				gap: '2rem',
			}}
		>
			<Typography sx={{ color: '#6E4C36', fontSize: '0.8rem' }}>혹시,</Typography>

			<Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-start' }}>
				<Box sx={{ display: 'flex', flexDirection: 'row', gap: '0.4rem' }}>
					{['#F5C1BA', '#B0D1B3', '#9AC6E4', '#FCCB52'].map((color, i) => (
						<Box key={i} sx={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: color }} />
					))}
				</Box>
				<Typography sx={{ color: '#6E4C36' }}>우리가족이 모멘토에 이미 만들어져 있다면?</Typography>
			</Box>

			{/* 입력 영역 */}
			<Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
				<Typography sx={{ color: '#6E4C36', fontSize: '0.8rem' }}>가족 초대코드 입력</Typography>
				<TextField
					variant="outlined"
					label="초대코드"
					value={inviteCode}
					onChange={(e) => setInviteCode(e.target.value)}
					sx={{ width: '100%', borderRadius: '1rem' }}
				/>
			</Box>

			{/* 버튼 */}
			<Button
				onClick={handleJoinFamily}
				sx={{
					width: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: '#DBD9CA',
					padding: '0.5rem',
					borderRadius: '1rem',
					boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
				}}
			>
				<Typography sx={{ color: '#6E4C36', fontSize: '1rem' }}>입장하기</Typography>
			</Button>
		</Box>
	);
}
