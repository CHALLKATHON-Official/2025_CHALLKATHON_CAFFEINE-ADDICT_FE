'use client';
import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

const mockUser = {
	name: '봉미선',
};

const roles = [
	{ label: '엄마', color: '#E5E0D1', image: '/img/small_icon_mom.svg' },
	{ label: '아빠', color: '#EDF2E0', image: '/img/small_icon_dad.svg' },
	{ label: '아들', color: '#D8EFFF', image: '/img/small_icon_son.svg' },
	{ label: '딸', color: '#FFF4C3', image: '/img/small_icon_daghter.svg' },
];

export default function HelloSplash() {
	const [selectedRole, setSelectedRole] = useState<string | null>(null);

	const handleSelect = (role: string) => {
		setSelectedRole(role);
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
					{mockUser.name}님, 반가워요! 👋
				</Typography>
				<Typography sx={{ mt: 1, color: '#7b7b7b', fontSize: '0.9rem' }}>
					{mockUser.name}님의 가족 역할은...
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
				onClick={() => {
					console.log('선택한 역할:', selectedRole);
				}}
			>
				우리 가족의 momento, 바로 시작하기
			</Button>
		</Box>
	);
}
