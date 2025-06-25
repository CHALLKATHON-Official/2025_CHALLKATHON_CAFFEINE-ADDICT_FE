'use client';
import { useState } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { serverCall } from '@/app/api/serverCall';

export default function BeforeNotice() {
	const [inviteCode, setInviteCode] = useState<string | null>(null);

	const handleCreateFamily = async () => {
		try {
			const response = await serverCall('POST', '/api/v1/family/create', '', '가족 생성 실패', '가족 생성 성공');
			console.log('가족 생성 응답:', response);

			const code = response.result.code;
			setInviteCode(code);
		} catch (err) {
			console.error('가족 생성 에러:', err);
		}
	};

	const handleCopy = async () => {
		if (!inviteCode) return;
		try {
			await navigator.clipboard.writeText(inviteCode);
			alert('초대 코드가 복사되었습니다.');
		} catch (err) {
			alert('복사에 실패했습니다.');
		}
	};

	return (
		<Box sx={{ width: '90%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
			{/* 안내 박스 */}
			<Box
				sx={{
					width: '100%',
					color: 'black',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					backgroundColor: '#DBD9CA',
					borderRadius: '1rem',
					padding: '1rem',
					gap: '2rem',
				}}
			>
				{/* 상단 메시지 */}
				<Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
					<Box
						sx={{
							width: '5rem',
							height: '5rem',
							borderRadius: '50%',
							backgroundImage: `url(/img/icon_cry.svg)`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}
					/>
					<Box sx={{ textAlign: 'center' }}>
						<Typography sx={{ color: '#6E4C36', fontSize: '0.8rem' }}>아직 혼자밖에 없어요...</Typography>
						<Typography sx={{ color: '#6E4C36', fontSize: '1rem', fontWeight: 'bold' }}>모멘토는 2명부터 시작할 수 있어요!</Typography>
					</Box>
				</Box>

				{/* 하단 메시지 */}
				<Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
					<Box
						sx={{
							width: '3rem',
							height: '3rem',
							backgroundImage: `url(/img/small_icon_grid_family.svg)`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}
					/>
					<Box sx={{ textAlign: 'center' }}>
						<Typography sx={{ color: '#6E4C36', fontSize: '0.8rem' }}>가족을 추가하거나, 가족에게 초대를 받아</Typography>
						<Typography sx={{ color: '#6E4C36', fontSize: '0.8rem' }}>모멘토를 즐겁게 시작해보세요!</Typography>
					</Box>
				</Box>
			</Box>

			{/* 가족 생성 버튼 */}
			<Button
				onClick={handleCreateFamily}
				sx={{
					width: '100%',
					display: 'flex',
					borderRadius: '1rem',
					alignItems: 'center',
					justifyContent: 'center',
					padding: '1rem',
					backgroundColor: '#6E4C36',
					boxShadow: '0 0 10px rgba(0, 0, 0, 0.08);',
				}}
			>
				<Typography sx={{ color: 'white', fontSize: '1rem' }}>모멘토에서 우리 가족 만들기</Typography>
			</Button>

			{/* 초대 코드 출력 및 복사 버튼 */}
			{inviteCode && (
				<Box
					sx={{
						width: '100%',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						padding: '0.8rem 1rem',
						backgroundColor: '#F5F5F5',
						borderRadius: '0.8rem',
					}}
				>
					<Typography sx={{ color: '#D9D9D9', fontSize: '1rem' }}>
						초대코드: {inviteCode}
					</Typography>
					<IconButton onClick={handleCopy}>
						<ContentCopyIcon sx={{ color: '#B89574' }} />
					</IconButton>
				</Box>
			)}
		</Box>
	);
}
