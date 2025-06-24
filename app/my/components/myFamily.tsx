'use client';
import { Box, Typography } from '@mui/material';

interface myInfoType {
	familyMember: string[],
}

interface ProfileProps {
	myInfo: myInfoType;
}

const rollTextMap: Record<string, string> = {
	mom: '엄마',
	dad: '아빠',
	son: '아들',
	daughter: '딸',
};

const rollImgMap: Record<string, string> = {
	mom: '/img/small_icon_mom.svg',
	dad: '/img/small_icon_dad.svg',
	son: '/img/small_icon_son.svg',
	daughter: '/img/small_icon_daghter.svg',
};


export default function MyFamily({ myInfo }: ProfileProps) {

	return (
		<Box sx={{
			width: '90%',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'flex-start',
			justifyContent: 'center',
			padding: '3rem 0 4rem 0',
			backgroundColor: '#F4F2E0',
			gap: '1rem'
		}}>
			<Typography>우리가족</Typography>
			<Box sx={{
				width: '100%', display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center', justifyContent: 'flex-start'
			}}>
				{myInfo.familyMember.map((member, idx) => (
					<Box
						key={idx}
						sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
					>
						<Box
							sx={{
								width: '4rem',
								height: '4rem',
								borderRadius: '50%',
								backgroundColor: '#DBD8C9',
								padding: '10%',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								backgroundImage: `url(${rollImgMap[member]})`,
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								backgroundPosition: 'center',
							}}
						>
						</Box>
						<Typography sx={{ marginTop: '0.5rem', color: '#6E4C36', fontSize: '0.8rem' }}>
							{rollTextMap[member]}
						</Typography>
					</Box>
				))}
			</Box>
		</Box>
	);
}
