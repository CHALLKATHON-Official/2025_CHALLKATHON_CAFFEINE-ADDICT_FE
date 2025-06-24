'use client';
import { Box, Button, Typography } from '@mui/material';

interface myInfoType {
	inviteCode: number
}

interface ProfileProps {
	myInfo: myInfoType;
}

export default function OurCode({ myInfo }: ProfileProps) {

	return (
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
				<Button sx={{
					width: '30%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem', borderRadius: '1rem',
					backgroundColor: '#6E4C36', color: 'white'
				}}>
					복사
				</Button>
			</Box>
		</Box>
	);
}
