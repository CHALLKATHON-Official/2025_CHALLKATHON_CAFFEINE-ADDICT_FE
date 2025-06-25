'use client';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useRef, useState } from 'react';
import CertModal from './CertModal';
import { serverCall } from '@/app/api/serverCall';

export default function Certificate() {
	const fileInputRef = useRef<HTMLInputElement | null>(null);
	const [imageUrl, setImageUrl] = useState<string | null>(null);
	const [file, setFile] = useState<File | null>(null);
	const [memo, setMemo] = useState('');
	const [open, setOpen] = useState(false);
	const todoId = 123; // 일단 임시 데이터 

	const handleImageClick = () => {
		fileInputRef.current?.click();
	};

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e.target.files?.[0];
		if (selectedFile) {
			setFile(selectedFile);
			const url = URL.createObjectURL(selectedFile);
			setImageUrl(url);
		}
	};

	const handleSubmit = async () => {
		if (!file || !memo) {
			alert('이미지와 메모를 모두 입력해주세요.');
			return;
		}

		const formData = new FormData();
		formData.append('image', file);
		formData.append('memo', memo);

		try {
			await serverCall('PUT', `/api/v1/families/todo-lists/${todoId}/complete`, formData, '');
			setOpen(true);
		} catch (error) {
			console.error('인증 실패:', error);
			alert('업로드 중 오류가 발생했습니다.');
		}
	};

	return (
		<Box sx={{
			width: '100%',
			minHeight: '100vh',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: '#FFFDEB',
			gap: '1.5rem'
		}}>
			<Typography sx={{ color: '#6E4C36', fontSize: '1.2rem', fontWeight: 'bold' }}>인증사진을 올려주세요!</Typography>

			<Box sx={{ width: '90%', display: 'flex', flexDirection: 'column' }}>
				<Button
					onClick={handleImageClick}
					sx={{
						width: '100%',
						height: '12rem',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						border: '1px solid #DBD9CA',
						backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				>
					{!imageUrl && (
						<Typography sx={{ color: '#DBD9CA', fontSize: '3rem', fontWeight: 'bold' }}>+</Typography>
					)}
				</Button>

				<input
					type="file"
					accept="image/*"
					ref={fileInputRef}
					style={{ display: 'none' }}
					onChange={handleFileChange}
				/>
			</Box>

			<Box sx={{ width: '90%' }}>
				<Typography sx={{ color: '#DBD9CA', fontSize: '1rem' }}>기억하고 싶은 에피소드가 있다면 남겨주세요.</Typography>
				<TextField
					variant="outlined"
					multiline
					minRows={5}
					fullWidth
					value={memo}
					onChange={(e) => setMemo(e.target.value)}
					sx={{ mt: 1 }}
					label="ex) 참 재미있는 하루였다!"
				/>
			</Box>

			<Box sx={{ width: '90%' }}>
				<Button
					fullWidth
					onClick={handleSubmit}
					sx={{
						height: '3rem',
						borderRadius: '1rem',
						backgroundColor: '#DBD9CA',
						color: '#462B18',
						boxShadow: '0 0 10px rgba(0, 0, 0, 0.08)',
					}}
				>
					저장
				</Button>
			</Box>

			{open && <CertModal open={open} setOpen={setOpen} />}
		</Box>
	);
}
