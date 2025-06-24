'use client';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useRef, useState } from 'react';

export default function Certificate() {
	const fileInputRef = useRef<HTMLInputElement | null>(null);
	const [imageUrl, setImageUrl] = useState<string | null>(null);

	const handleImageClick = () => {
		fileInputRef.current?.click();
	};

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			const url = URL.createObjectURL(file);
			setImageUrl(url);
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
			<Box sx={{
				width: '90%',
				display: 'flex',
				flexDirection: 'column',
				gap: '0',
			}}>
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
						position: 'relative',
						overflow: 'hidden',
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

			<Box sx={{ width: '90%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
				<Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
					<Typography sx={{ color: '#DBD9CA', fontSize: '1rem' }}>기억하고 싶은 에피소드가 있다면 남겨주세요.</Typography>
					<Box
						sx={{
							width: '10px',
							height: '10px',
							backgroundImage: `url(/img/small_icon_pencil.svg)`,
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center',
						}}
					/>
				</Box>
				<Typography sx={{ color: '#DBD9CA', fontSize: '0.8rem' }}>소중한 우리 가족의 시간을 오래도록 보관할 수 있답니다.</Typography>
			</Box>

			<Box sx={{
				width: '90%',
				height: '10rem',
				backgroundImage: `url(/img/certificate_bottom.svg)`,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				border: '1px solid #6E4C36',
				borderRadius: '0 0 1rem 1rem',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}>
				<TextField
					variant="outlined"
					multiline
					minRows={5}
					sx={{ width: '90%' }}
					label='ex) 참 재미있는 하루였다!'
				/>
			</Box>

			<Box sx={{ width: '90%', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'column' }}>
				<Box
					sx={{
						width: '5rem',
						height: '5rem',
						backgroundImage: `url(/img/certificate_stemp.svg)`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
					}}
				/>
				<Button sx={{
					width: '100%',
					height: '3rem',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					borderRadius: '1rem',
					backgroundColor: '#DBD9CA',
					color: '#462B18',
					boxShadow: '0 0 10px rgba(0, 0, 0, 0.08);'
				}}>
					저장
				</Button>
			</Box>
		</Box>
	);
}
