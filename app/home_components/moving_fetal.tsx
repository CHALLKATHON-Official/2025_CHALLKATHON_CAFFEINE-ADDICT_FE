'use client';
import { Box } from '@mui/material';

export default function MovingPetal({
	top,
	left,
	delay,
}: {
	top: number;
	left: number;
	delay: number;
}) {
	return (
		<Box
			sx={{
				position: 'absolute',
				width: '12px',
				height: '12px',
				top: `${top}%`,
				left: `${left}%`,
				backgroundImage: `url(/img/petal_img.svg)`,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				animation: `sway 6s ease-in-out infinite`,
				animationDelay: `${delay}s`,
				'@keyframes sway': {
					'0%': { transform: 'translateY(0px) rotate(0deg)' },
					'50%': { transform: 'translateY(10px) rotate(5deg)' },
					'100%': { transform: 'translateY(0px) rotate(0deg)' },
				},
			}}
		/>
	);
}
