'use client';

import { Box, keyframes } from '@mui/material';

const bounce = keyframes`
  0%   { transform: scale(1); opacity: 0.6; }
  50%  { transform: scale(1.5); opacity: 1; }
  100% { transform: scale(1); opacity: 0.6; }
`;

const icons = [
	'/img/todo_icon_dad.svg',
	'/img/todo_icon_mom.svg',
	'/img/todo_icon_son.svg',
	'/img/todo_icon_daughter.svg',
];

export default function Loading() {
	return (
		<Box
			sx={{
				width: '100%',
				minHeight: '100vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: 'rgba(0,0,0,0.5)',
				zIndex: 9999,
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					gap: '2rem',
				}}
			>
				{icons.map((src, idx) => (
					<Box
						key={idx}
						component="img"
						src={src}
						sx={{
							width: '3rem',
							height: '3rem',
							animation: `${bounce} 1.2s ease-in-out infinite`,
							animationDelay: `${idx * 0.2}s`,
						}}
					/>
				))}
			</Box>
		</Box>
	);
}
