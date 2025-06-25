'use client';
import { useState, useEffect } from 'react';
import { Box, Button, Typography, Snackbar } from '@mui/material';
import { serverCall } from '@/app/api/serverCall';

export default function OurCode() {
	const [inviteCode, setInviteCode] = useState<string | null>(null);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const fetchInviteCode = async () => {
			try {
				const res = await serverCall(
					'GET',
					'/api/v1/family/code',
					'',
					'초대 코드 조회 실패',
					'초대 코드 조회 성공'
				);
				setInviteCode(res.result.code);
			} catch (err) {
				console.error('초대코드 불러오기 실패:', err);
			}
		};

		fetchInviteCode();
	}, []);

	const handleCopy = async () => {
		try {
			if (inviteCode) {
				await navigator.clipboard.writeText(inviteCode);
				setOpen(true);
			}
		} catch (err) {
			console.error('복사 실패:', err);
		}
	};

	const handleClose = () => setOpen(false);

	return (
		<>
			<Box
				sx={{
					width: '90%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start',
					justifyContent: 'center',
				}}
			>
				<Typography>우리 가족 초대코드</Typography>
				<Box
					sx={{
						width: '100%',
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'center',
						gap: '1rem',
					}}
				>
					<Box
						sx={{
							width: '70%',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							padding: '0.5rem',
							borderRadius: '1rem',
							backgroundColor: 'transparent',
							border: '1px solid #6E4C36',
							color: '#6E4C36',
							fontWeight: 'bold',
						}}
					>
						{inviteCode ?? '로딩 중...'}
					</Box>
					<Button
						onClick={handleCopy}
						disabled={!inviteCode}
						sx={{
							width: '30%',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							padding: '0.5rem',
							borderRadius: '1rem',
							backgroundColor: '#6E4C36',
							color: 'white',
						}}
					>
						복사
					</Button>
				</Box>
			</Box>

			<Snackbar
				open={open}
				autoHideDuration={2000}
				onClose={handleClose}
				message="초대코드가 복사되었습니다! :)"
				anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
				ContentProps={{
					sx: {
						backgroundColor: '#DBD9CA',
						color: '#6E4C36',
						fontWeight: 'bold',
					},
				}}
			/>
		</>
	);
}
