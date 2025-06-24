'use client';
import { Box, Button, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddStory() {
	const router = useRouter();
	const fileInputRef = useRef<HTMLInputElement | null>(null);
	const [imageUrl, setImageUrl] = useState<string | null>(null);
	const [isPicking, setIsPicking] = useState(true);

	useEffect(() => {
		const timeout = setTimeout(() => {
			fileInputRef.current?.click();
		}, 300);

		// 60초 내에 파일을 선택하지 않으면 뒤로가기
		const fallbackTimeout = setTimeout(() => {
			if (!imageUrl) router.back();
		}, 6000);

		return () => {
			clearTimeout(timeout);
			clearTimeout(fallbackTimeout);
		};
	}, [imageUrl, router]);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			const url = URL.createObjectURL(file);
			setImageUrl(url);
		} else {
			// 아무 파일도 선택하지 않고 취소한 경우
			router.back();
		}
		setIsPicking(false);
	};

	const handleConfirm = () => {
		router.back();
	};

	return (
		<Box sx={{
			width: '100%',
			minHeight: '100vh',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			backgroundImage: `url('/img/story_background_img.svg')`,
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			gap: '2rem',
		}}>
			{isPicking ? (
				<Typography sx={{ fontSize: '1.2rem', color: '#6E4C36' }}>앨범을 열고 있어요...</Typography>
			) : (
				<>
					<Box
						sx={{
							marginTop: '5rem',
							width: '80%',
							height: '60vh',
							display: 'flex',
							backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center',
						}}
					/>

					<Button
						sx={{
							width: '80%',
							display: 'flex',
							alignItems: 'center',
							boxShadow: '0 0 10px rgba(0, 0, 0, 0.08)',
							justifyContent: 'center',
							borderRadius: '1rem',
							backgroundColor: '#B49066',
							color: 'white',
						}}
						onClick={handleConfirm}
						disabled={!imageUrl}
					>
						확인
					</Button>
				</>
			)}

			<input
				type="file"
				accept="image/*"
				ref={fileInputRef}
				style={{ display: 'none' }}
				onChange={handleFileChange}
			/>
		</Box>
	);
}
