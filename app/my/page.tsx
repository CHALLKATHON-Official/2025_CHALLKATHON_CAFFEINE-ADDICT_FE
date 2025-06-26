'use client';
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Profile from './components/profile';
import MyFamily from './components/myFamily';
import OurCode from './components/ourCode';
import { serverCall } from '../api/serverCall';

// 타입 정의
interface ProfileType {
	email: string;
	familyId: number;
	familyRole: string;
	familyRoleSelected: boolean;
	id: number;
	profileImageUrl: string | null;
	username: string;
}

interface FamilyMember {
	userId: number;
	name: string;
	familyRole: string;
	profileImageUrl: string | null;
}

interface FamilyCode {
	code: string;
}

export default function My() {
	const [profile, setProfile] = useState<ProfileType | null>(null);
	const [family, setFamily] = useState<FamilyMember[] | null>(null);
	const [code, setCode] = useState<FamilyCode | null>(null);

	const fetchProfile = async () => {
		const data = await serverCall('GET', '/api/v1/auth/me', '', '');
		console.log('프로필 조회 결과는:', data);
		if (data?.result) setProfile(data.result);
	};

	const fetchFamily = async () => {
		const data = await serverCall('GET', '/api/v1/family/members', '', '');
		console.log('가족 목록 조회 결과는:', data);
		if (data?.result) setFamily(data.result);
	};

	const fetchCode = async () => {
		const data = await serverCall('GET', '/api/v1/family/code', '', '');
		console.log('가족 초대코드 조회 결과는:', data);
		if (data?.result) setCode(data.result);
	};

	useEffect(() => {
		fetchProfile();
		fetchFamily();
		fetchCode();
	}, []);

	return (
		<Box
			sx={{
				width: '100%',
				minHeight: '100vh',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'space-between',
				padding: '3rem 0 2rem 0',
				backgroundColor: '#F4F2E0',
			}}
		>

			{profile && (
				<Profile
					profile={{
						userId: profile.id,
						userName: profile.username,
						userEmail: profile.email,
						role: profile.familyRole,
						profileImg: profile.profileImageUrl,
					}}
				/>
			)}
			{family && (
				<MyFamily family={family} />)}
			{code && (
				<OurCode code={code} />)}

			<Box
				sx={{
					width: '100%',
					height: '20rem',
					backgroundImage: `url(/img/my_banner_family.svg)`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
				}}
			/>
		</Box>
	);
}
