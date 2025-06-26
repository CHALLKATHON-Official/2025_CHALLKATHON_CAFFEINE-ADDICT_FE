'use client';
import { useRef, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import { serverCall } from '@/app/api/serverCall';

interface myInfoType {
	userId: number;
	userName: string;
	userEmail: string;
	role: 'MOM' | 'DAD' | 'SON' | 'DAUGHTER';
	profileImg: string | null;
}

interface ProfileProps {
	profile: myInfoType;
}

const rollTextMap: Record<string, string> = {
	MOM: '엄마',
	DAD: '아빠',
	SON: '아들',
	DAUGHTER: '딸',
};

const rollImgMap: Record<string, string> = {
	MOM: '/img/small_icon_mom.svg',
	DAD: '/img/small_icon_dad.svg',
	SON: '/img/small_icon_son.svg',
	DAUGHTER: '/img/small_icon_daghter.svg',
};

export default function Profile({ profile }: ProfileProps) {
	const [currentImage, setCurrentImage] = useState(profile.profileImg);
	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleImageClick = () => {
		fileInputRef.current?.click();
	};

	const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (!file) return;

		const reader = new FileReader();
		reader.onloadend = async () => {
			const base64 = reader.result as string;

			try {
				await serverCall('PATCH', '/api/v1/users/me/image', { image: base64 });
				setCurrentImage(base64); // 이미지 업로드 성공 시 즉시 UI 반영
			} catch (error) {
				console.error('프로필 이미지 업데이트 실패:', error);
			}
		};

		reader.readAsDataURL(file);
	};

	return (
		<Box sx={{
			width: '100%',
			height: '10rem',
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
			padding: '1rem',
			backgroundColor: 'white',
			borderBottom: '1px solid #6E4C36',
			borderTop: '1px solid #6E4C36',
		}}>
			<Box
				sx={{
					width: '7rem',
					height: '7rem',
					borderRadius: '50%',
					backgroundColor: '#DBD9CA',
					padding: '10%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundImage: currentImage
						? `url(${currentImage})`
						: `url(${rollImgMap[profile.role]})`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
					position: 'relative',
					cursor: 'pointer'
				}}
				onClick={handleImageClick}
			>
				<input
					type="file"
					accept="image/*"
					style={{ display: 'none' }}
					ref={fileInputRef}
					onChange={handleFileChange}
				/>
				<Box
					sx={{
						position: 'absolute',
						bottom: '4px',
						right: '4px',
						width: '1.5rem',
						height: '1.5rem',
						borderRadius: '50%',
						backgroundColor: '#B49066',
						color: '#fff',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						fontSize: '16px',
						fontWeight: 'bold',
						boxShadow: '0 0 3px rgba(0,0,0,0.3)',
					}}
				>
					<CreateIcon sx={{ color: 'white', width: '0.8rem' }} />
				</Box>
			</Box>

			<Box sx={{
				display: 'flex',
				flexDirection: 'column',
				width: '60%',
				height: '100%',
				alignItems: 'center',
				justifyContent: 'center',
				gap: '1.5rem'
			}}>
				<Box sx={{
					display: 'flex',
					flexDirection: 'row',
					width: '100%',
					alignItems: 'center',
					justifyContent: 'flex-start',
					gap: '1rem'
				}}>
					<Typography sx={{ fontSize: '1.2rem', color: '#6E4C36' }}>{profile.userName}</Typography>
					<Button sx={{
						width: '3rem', padding: '0.2rem', backgroundColor: '#FCCB52', display: 'flex',
						alignItems: 'center', justifyContent: 'center', borderRadius: '1rem', color: 'black'
					}}>{rollTextMap[profile.role]}</Button>
				</Box>

				<Box sx={{
					display: 'flex',
					width: '100%',
					alignItems: 'center',
					justifyContent: 'flex-end',
				}}>
					<Button sx={{
						display: 'flex',
						alignItems: 'center',
						justifyItems: 'center',
						borderRadius: '1rem',
						border: '1px solid #D9D9D9',
						color: '#B49066',
						padding: '0 1rem'
					}}>
						로그아웃
					</Button>
				</Box>
			</Box>
		</Box>
	);
}
