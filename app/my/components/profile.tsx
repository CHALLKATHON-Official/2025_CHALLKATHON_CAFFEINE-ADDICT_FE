'use client';
import { Box, Button, Typography } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';

interface myInfoType {
	userName: string,
	roll: string,
	profileImg: string,
	// familyMember: string[],
	// inviteCode: number
}

interface ProfileProps {
	myInfo: myInfoType;
}

export default function Profile({ myInfo }: ProfileProps) {

	return (
		<Box sx={{
			width: '100%',
			height: '10rem',
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
			padding: '1rem',
			backgroundColor: 'white',
			borderBottom: '1px solid #6E4C36',
			borderTop: '1px solid #6E4C36',
		}}>
			<Box sx={{
				width: '7rem',
				height: '7rem',
				borderRadius: '50%',
				backgroundColor: '#DBD9CA',
				padding: '10%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundImage: `url(${myInfo.profileImg})`,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				position: 'relative'
			}}>
				<Box
					sx={{
						position: 'absolute',
						bottom: '4px',
						right: '4px',
						width: '1.5rem',
						height: '1.5rem',
						borderRadius: '50%',
						backgroundColor: '#B49066',
						color: '#fff',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						fontSize: '16px',
						fontWeight: 'bold',
						boxShadow: '0 0 3px rgba(0,0,0,0.3)',
					}}
				>
					<CreateIcon sx={{ color: 'white', width: '0.8rem' }} />
				</Box>
			</Box>

			<Box sx={{
				display: 'flex',
				flexDirection: 'column',
				width: '60%',
				height: '100%',
				alignItems: 'center',
				justifyContent: 'center',
				gap: '1.5rem'
			}}>
				<Box sx={{
					display: 'flex',
					flexDirection: 'row',
					width: '100%',
					alignItems: 'center',
					justifyContent: 'flex-start',
					gap: '1rem'
				}}>
					<Typography sx={{ fontSize: '1.2rem' }}>{myInfo.userName}</Typography>
					<Button sx={{
						width: '3rem', padding: '0.2rem', backgroundColor: '#FCCB52', display: 'flex',
						alignItems: 'center', justifyContent: 'center', borderRadius: '1rem', color: 'black'
					}}>{myInfo.roll}</Button>
				</Box>

				<Box sx={{
					display: 'flex',
					width: '100%',
					alignItems: 'center',
					justifyContent: 'flex-end',
				}}>
					<Button sx={{
						display: 'flex',
						alignItems: 'center',
						justifyItems: 'center',
						borderRadius: '1rem',
						border: '1px solid #D9D9D9',
						color: '#B49066',
						padding: '0 1rem'
					}}>
						로그아웃
					</Button>
				</Box>
			</Box>
		</Box>
	);
}
