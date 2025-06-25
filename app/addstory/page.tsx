'use client';
import { Box, Button, Typography, Snackbar } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { serverCall } from '@/app/api/serverCall';

export default function AddStory() {
	const router = useRouter();
	const fileInputRef = useRef<HTMLInputElement | null>(null);
	const [imageUrl, setImageUrl] = useState<string | null>(null);
	const [imageBase64, setImageBase64] = useState<string | null>(null);
	const [isPicking, setIsPicking] = useState(true);
	const [snackOpen, setSnackOpen] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			fileInputRef.current?.click();
		}, 300);

		const fallbackTimeout = setTimeout(() => {
			if (!imageUrl) router.back();
		}, 60000);

		return () => {
			clearTimeout(timeout);
			clearTimeout(fallbackTimeout);
		};
	}, [imageUrl, router]);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setImageBase64(reader.result as string);
				setImageUrl(URL.createObjectURL(file));
			};
			reader.readAsDataURL(file);
		} else {
			router.back();
		}
		setIsPicking(false);
	};

	const handleConfirm = async () => {
		if (!imageBase64) return;

		try {
			await serverCall(
				'POST',
				'/api/v1/stories',
				{ image: imageBase64 },
				'스토리 업로드 실패',
				'스토리 업로드 성공'
			);
			setSnackOpen(true);
			setTimeout(() => router.back(), 1500);
		} catch (err) {
			alert('스토리 업로드에 실패했습니다.');
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
				justifyContent: 'center',
				backgroundImage: `url('/img/story_background_img.svg')`,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				gap: '2rem',
			}}
		>
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
						disabled={!imageBase64}
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

			<Snackbar
				open={snackOpen}
				autoHideDuration={1500}
				message="스토리가 업로드되었습니다!"
				anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
				ContentProps={{
					sx: {
						backgroundColor: '#DBD9CA',
						color: '#6E4C36',
						fontWeight: 'bold',
					},
				}}
			/>
		</Box>
	);
}
