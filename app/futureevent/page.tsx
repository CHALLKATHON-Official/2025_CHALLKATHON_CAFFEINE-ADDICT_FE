'use client';

import { useState } from 'react';
import {
	Box, Button, TextField, Typography
} from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';
import FutureModal from './FutureModal';
import { serverCall } from '@/app/api/serverCall';

export default function FutureEvent() {
	const [open, setOpen] = useState(false);
	const [content, setContent] = useState('');
	const [imageFile, setImageFile] = useState<File | null>(null);
	const router = useRouter();
	const searchParams = useSearchParams();
	const reservedDate = searchParams.get('date'); // YYYY-MM-DD

	const handleSubmit = async () => {
		if (!reservedDate || !content || !imageFile) {
			alert('내용과 이미지를 모두 입력해주세요.');
			return;
		}

		setOpen(true);

		const formData = new FormData();
		formData.append('content', content);
		formData.append('reservedDate', reservedDate);
		formData.append('image', imageFile);

		// 디버깅용 확인
		for (const pair of formData.entries()) {
			console.log(`${pair[0]}:`, pair[1]);
		}

		try {
			const apiBaseUrl = process.env.NEXT_PUBLIC_SERVER_URI;
			const response = await fetch(`${apiBaseUrl}/api/v1/messages`, {
				method: 'POST',
				body: formData,
				// Content-Type 절대 지정 X → 브라우저가 multipart/form-data 자동 처리
			});

			if (!response.ok) {
				const errorText = await response.text();
				console.error('요청 실패:', errorText);
				throw new Error(`HTTP ${response.status}`);
			}

			alert('성공적으로 발송되었습니다!');
			router.push('/explore');
		} catch (error) {
			console.error('메시지 등록 실패:', error);
			alert('에러가 발생했습니다. 콘솔을 확인하세요.');
		} finally {
			setOpen(false);
		}
	};


	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) setImageFile(file);
	};

	return (
		<Box sx={{
			width: '100%',
			minHeight: '100vh',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'space-between',
			backgroundImage: 'url(/img/letter_back_img.svg)',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			padding: '3rem 0 6rem 0'
		}}>
			<Box sx={{
				width: '90%',
				display: 'flex',
				alignItems: 'flex-start',
				justifyContent: 'center',
				gap: '1rem',
				flexDirection: 'column'
			}}>
				<Typography>{reservedDate?.replace(/-/g, '년 ').replace(/(\d{2})$/, '$1일에')},</Typography>
				<Typography>우리 가족 모두에게 전할 메시지를 적어주세요.</Typography>

				<TextField
					variant="outlined"
					multiline
					minRows={19}
					sx={{ width: '100%' }}
					label='ex) 우리 딸 시험 파이팅!!'
					value={content}
					onChange={(e) => setContent(e.target.value)}
				/>

				<Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: '1rem' }}>
					<Button
						component="label"
						sx={{
							width: '20%',
							backgroundColor: '#DBD9CA',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							color: '#6E4C36',
							padding: '0.5rem',
							borderRadius: '1rem',
							cursor: 'pointer'
						}}
					>
						이미지 추가
						<input
							type="file"
							accept="image/*"
							hidden
							onChange={handleImageChange}
						/>
					</Button>
					{imageFile && (
						<Box
							component="img"
							src={URL.createObjectURL(imageFile)}
							alt="첨부 이미지 미리보기"
							sx={{
								width: '20%',
								height: 'auto',
								borderRadius: '1rem',
								objectFit: 'cover',
							}}
						/>
					)}
				</Box>
			</Box>

			<Button
				sx={{
					width: '90%',
					backgroundColor: '#6E4C36',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					color: 'white',
					padding: '0.5rem',
					borderRadius: '1rem'
				}}
				onClick={handleSubmit}
			>
				예약하기
			</Button>

			{open && <FutureModal open={open} setOpen={setOpen} />}
		</Box>
	);
}
