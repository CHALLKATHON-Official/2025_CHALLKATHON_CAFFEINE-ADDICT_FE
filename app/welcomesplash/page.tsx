'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { serverCall } from '../api/serverCall';

const mockUser = {
	name: '봉미선',
};

const roles = [
	{ label: '엄마', code: 'MOM', color: '#E5E0D1', image: '/img/small_icon_mom.svg' },
	{ label: '아빠', code: 'DAD', color: '#EDF2E0', image: '/img/small_icon_dad.svg' },
	{ label: '아들', code: 'SON', color: '#D8EFFF', image: '/img/small_icon_son.svg' },
	{ label: '딸', code: 'DAUGHTER', color: '#FFF4C3', image: '/img/small_icon_daghter.svg' },
];

export default function WelcomeSplash() {
	const router = useRouter();
	const [selectedRole, setSelectedRole] = useState<string | null>(null);
	const searchParams = useSearchParams();
	const [username, setUsername] = useState<string | null>(null);

	useEffect(() => {
		const name = searchParams.get('username');
		setUsername(name);
	}, [searchParams]);


	const handleSelect = (role: string) => {
		setSelectedRole(role);
	};

	const handleSubmit = async () => {
		if (!selectedRole) return;

		// label로부터 code 찾기
		const roleObj = roles.find((r) => r.label === selectedRole);
		if (!roleObj) return;

		try {
			await serverCall(
				'PUT',
				'/api/v1/auth/family-role',
				{ familyRole: roleObj.code },
				'가족 역할 선택 실패',
				'가족 역할 선택 성공'
			);

			// 성공 후 홈 화면으로 이동
			router.push('/');
		} catch (err) {
			console.error('역할 설정 중 에러 발생:', err);
		}
	};

	return (
		<Box
			sx={{
				width: '100%',
				minHeight: '100vh',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'space-between',
				backgroundColor: 'white',
				padding: '3rem 0 4rem 0',
			}}
		>
			<Box sx={{ textAlign: 'center' }}>
				<Typography variant="h6" fontWeight="bold">
					{username}님, 반가워요! 👋
				</Typography>
				<Typography sx={{ mt: 1, color: '#7b7b7b', fontSize: '0.9rem' }}>
					{username}님의 가족 역할은...
				</Typography>
			</Box>

			<Box sx={{ width: '80%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
				{roles.map(({ label, color, image }) => (
					<Button
						key={label}
						onClick={() => handleSelect(label)}
						sx={{
							width: '100%',
							height: '4rem',
							backgroundColor: selectedRole === label ? color : 'transparent',
							border: selectedRole === label ? 'none' : '1px solid #8B6F52',
							borderRadius: '1rem',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'flex-start',
							px: '1rem',
							gap: '1rem',
							fontSize: '1rem',
							fontWeight: 600,
							color: '#4C3B28',
							transition: '0.2s ease',
						}}
					>
						<Box
							sx={{
								width: '2.5rem',
								height: '2.5rem',
								backgroundImage: `url(${image})`,
								backgroundSize: 'contain',
								backgroundRepeat: 'no-repeat',
								backgroundPosition: 'center',
							}}
						/>
						{label}
					</Button>
				))}
			</Box>

			<Button
				disabled={!selectedRole}
				variant="contained"
				sx={{
					backgroundColor: '#B89574',
					color: 'white',
					borderRadius: '1rem',
					width: '80%',
					height: '3rem',
					fontWeight: 600,
					boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
					'&:hover': {
						backgroundColor: '#a7805f',
					},
				}}
				onClick={handleSubmit}
			>
				우리 가족의 momento, 바로 시작하기
			</Button>
		</Box>
	);
}
