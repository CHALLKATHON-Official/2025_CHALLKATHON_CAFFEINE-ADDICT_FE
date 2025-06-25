'use client';
import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { serverCall } from '@/app/api/serverCall';

interface Member {
	userId: number;
	name: string;
	familyRole: 'mom' | 'dad' | 'son' | 'daughter';
	profileImageUrl: string | null;
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

export default function MyFamily() {
	const [members, setMembers] = useState<Member[]>([]);

	useEffect(() => {
		const fetchFamilyMembers = async () => {
			try {
				const res = await serverCall(
					'GET',
					'/api/v1/family/members',
					'',
					'가족 구성원 조회 실패',
					'가족 구성원 조회 성공'
				);
				setMembers(res.result);
			} catch (error) {
				console.error('가족 정보 불러오기 실패:', error);
			}
		};

		fetchFamilyMembers();
	}, []);

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
				{members.map((member, idx) => (
					<Box
						key={idx}
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
								backgroundImage: `url(${member.profileImageUrl ?? rollImgMap[member.familyRole]
									})`,
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								backgroundPosition: 'center',
							}}
						/>
						<Typography
							sx={{ marginTop: '0.5rem', color: '#6E4C36', fontSize: '0.8rem' }}
						>
							{rollTextMap[member.familyRole]}
						</Typography>
					</Box>
				))}
			</Box>
		</Box>
	);
}
