'use client';
import { Box } from '@mui/material';
import MovingPetal from './moving_fetal';

export default function PetalField() {
	const petals = Array.from({ length: 15 }, (_, i) => ({
		id: i,
		top: Math.random() * 100,
		left: Math.random() * 100,
		delay: Math.random() * 3,
	}));

	return (
		<Box
			sx={{
				position: 'fixed',
				top: '70%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
				width: '400px',
				height: '200px',
				pointerEvents: 'none', // 클릭 방해 방지
				zIndex: 10,
			}}
		>
			{petals.map(({ id, top, left, delay }) => (
				<MovingPetal key={id} top={top} left={left} delay={delay} />
			))}
		</Box>
	);
}
