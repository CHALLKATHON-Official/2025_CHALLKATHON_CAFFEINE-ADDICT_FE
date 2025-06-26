'use client';
import { Box, Typography } from '@mui/material';

interface Member {
	userId: number;
	name: string;
	familyRole: string;
	profileImageUrl: string | null;
}

interface MyFamilyProps {
	family: Member[];
}

const rollTextMap: Record<string, string> = {
	MOM: '엄마',
	DAD: '아빠',
	SON: '아들',
	DAUGHTER: '딸',
};

const rollImgMap: Record<string, string> = {
	MOM: '/img/small_icon_mom.svg',
	DAD: '/img/small_icon_dad.svg',
	SON: '/img/small_icon_son.svg',
	DAUGHTER: '/img/small_icon_daghter.svg',
};

export default function MyFamily({ family }: MyFamilyProps) {
	return (
		<Box
			sx={{
				width: '90%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'flex-start',
				justifyContent: 'center',
				padding: '3rem 0 4rem 0',
				backgroundColor: '#F4F2E0',
				gap: '1rem',
			}}
		>
			<Typography>우리가족</Typography>
			<Box
				sx={{
					width: '100%',
					display: 'flex',
					flexDirection: 'row',
					gap: '1rem',
					alignItems: 'center',
					justifyContent: 'flex-start',
				}}
			>
				{family.map((member) => (
					<Box
						key={member.userId}
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
						}}
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
								backgroundImage: `url(${member.profileImageUrl ?? rollImgMap[member.familyRole]})`,
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								backgroundPosition: 'center',
							}}
						/>
						<Typography
							sx={{ marginTop: '0.5rem', color: '#6E4C36', fontSize: '0.8rem' }}
						>
							{rollTextMap[member.familyRole]}, {member.name}
						</Typography>
					</Box>
				))}
			</Box>
		</Box>
	);
}
