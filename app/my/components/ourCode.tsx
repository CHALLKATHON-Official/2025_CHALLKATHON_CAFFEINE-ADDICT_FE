'use client';
import { useState } from 'react';
import { Box, Button, Typography, Snackbar } from '@mui/material';

interface myInfoType {
	inviteCode: number
}

interface ProfileProps {
	myInfo: myInfoType;
}

export default function OurCode({ myInfo }: ProfileProps) {
	const [open, setOpen] = useState(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(String(myInfo.inviteCode));
			setOpen(true);
		} catch (err) {
			console.error('복사 실패:', err);
		}
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Box sx={{
				width: '90%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'flex-start',
				justifyContent: 'center',
			}}>
				<Typography>우리 가족 초대코드</Typography>
				<Box sx={{
					width: '100%',
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center',
					gap: '1rem'
				}}>
					<Box sx={{
						width: '70%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem', borderRadius: '1rem',
						backgroundColor: 'transparent', border: '1px solid #6E4C36'
					}}>
						{myInfo.inviteCode}
					</Box>
					<Button
						onClick={handleCopy}
						sx={{
							width: '30%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem', borderRadius: '1rem',
							backgroundColor: '#6E4C36', color: 'white'
						}}>
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
