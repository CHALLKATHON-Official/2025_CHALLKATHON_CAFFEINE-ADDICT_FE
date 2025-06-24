'use client';
import { Box, Typography, LinearProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';


// mockData
const userStory = {
	role: '아들',
	imageUrl: '/img/my_banner_family.svg',
};

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

// 한글 role을 영어 key로 변환
function getRoleKey(koreanRole: string): keyof typeof rollImgMap {
	return Object.keys(rollTextMap).find(key => rollTextMap[key as keyof typeof rollTextMap] === koreanRole) as keyof typeof rollImgMap;
}

export default function Story() {
	const router = useRouter();
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const timeout = setTimeout(() => {
			router.back();
		}, 5000);

		// progress bar 증가
		const interval = setInterval(() => {
			setProgress(prev => (prev >= 100 ? 100 : prev + 1));
		}, 50);

		return () => {
			clearTimeout(timeout);
			clearInterval(interval);
		};
	}, [router]);

	const roleKey = getRoleKey(userStory.role);
	const roleImg = rollImgMap[roleKey];

	return (
		<Box sx={{
			width: '100%',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: '#F6F4E0'
		}}>
			<Box sx={{
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
			}}>
				<LinearProgress variant="determinate" value={progress} sx={{ width: '100%', height: '0.5rem', backgroundColor: '#B49066' }} />
				<Box sx={{
					width: '100%',
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
					padding: '1rem'
				}}>
					<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
						<Box sx={{
							width: '3rem',
							height: '3rem',
							backgroundImage: `url(${roleImg})`,
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center',
						}} />
						<Typography>{userStory.role}</Typography>
					</Box>

					<Box sx={{
						width: '5rem',
						height: '1rem',
						backgroundImage: `url(/img/modium_logo.svg)`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
					}} />
				</Box>
			</Box>
			<Box sx={{
				width: '100%',
				minHeight: '90vh',
				backgroundImage: `url(${userStory.imageUrl})`,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
			}} />
		</Box>
	);
}
