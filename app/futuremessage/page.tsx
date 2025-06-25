'use client';

import { Box, Typography, Avatar } from '@mui/material';

const mockData = [
	{
		sender: '아빠',
		avatar: '/img/small_icon_dad.svg',
		bgColor: '#B4C5B9',
		text: '가나다라마바사 아자차카타파하 가나다라마바사 아자차카타파하 가나다라마바사 아자차카타파하 가나다라마바사 아자차카타파하',
		image: '/img/my_banner_family.svg',
	},
	{
		sender: '엄마',
		avatar: '/img/small_icon_mom.svg',
		bgColor: '#E9B8AC',
		text: '가나다라마바사 아자차카타파하 가나다라마바사 아자차카타파하 가나다라마바사 아자차카타파하 가나다라마바사 아자차카타파하',
		image: '/img/my_banner_family.svg',
	},
];

export default function FutureMessage() {
	return (
		<Box
			sx={{
				width: '100%',
				minHeight: '100vh',
				backgroundColor: '#F4F2E0',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: '4rem',
				padding: '4rem 1.5rem 6rem',
			}}
		>
			{mockData.map((item, index) => (
				<Box
					key={index}
					sx={{
						width: '100%',
						maxWidth: '400px',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						gap: '1rem',
					}}
				>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
						<Avatar src={item.avatar} sx={{ bgcolor: item.bgColor, width: 32, height: 32 }} />
						<Typography sx={{ fontWeight: 'bold' }}>from. {item.sender}</Typography>
					</Box>
					<Box
						sx={{
							backgroundColor: 'white',
							borderRadius: '1rem',
							padding: '1rem',
							boxShadow: '0 0 5px rgba(0,0,0,0.1)',
							width: '100%',
							fontSize: '0.9rem',
							lineHeight: '1.4rem',
						}}
					>
						{item.text}
					</Box>
					<Box
						component="img"
						src={item.image}
						alt={`${item.sender}가 첨부한 이미지`}
						sx={{
							width: '100%',
							height: '200px',
							borderRadius: '1rem',
							backgroundColor: '#ccc',
							objectFit: 'cover',
						}}
					/>
				</Box>
			))}
		</Box>
	);
}
