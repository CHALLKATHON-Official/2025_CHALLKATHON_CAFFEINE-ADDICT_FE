'use client';
import { Box, Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { mockFamilyMember } from '../mockData/home_story';

// 역할 매핑
const roleMap: Record<string, string> = {
	mom: '엄마',
	dad: '아빠',
	daughter: '딸',
	son: '아들',
};

export default function Story() {
	const router = useRouter();

	// Family member에서 본인이라면 무조건 맨 앞으로 위치
	const sortedMembers = [
		...mockFamilyMember.filter((member) => member.isMe),
		...mockFamilyMember.filter((member) => !member.isMe),
	];

	// 스토리 유무, 읽음 여뷰에 따라 다르게 border 스타일 설정하기 위함 
	const getBorderStyle = (member: any) => {
		if (!member.hasStory) return 'none';
		if (member.storyReaded) return '3px solid #D9D9D9';
		return '1px solid red';
	};

	// 클릭 시 넘어가는 화면에 이미지 전달하여 띄우도록 한다 
	const handleClick = (imageUrl: string) => {
		router.push(`/story?imageUrl=${encodeURIComponent(imageUrl)}`);
	};

	return (
		<Box
			sx={{
				width: '100%',
				padding: '1rem',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'flex-start',
				gap: '1rem',
				backgroundColor: 'transparent',
				position: 'relative',
			}}
		>
			{sortedMembers.map((member, idx) => (
				<Box
					key={idx}
					sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}
				>
					<Button
						onClick={() => handleClick(member.imageUrl)}
						sx={{
							width: '4rem',
							height: '4rem',
							borderRadius: '50%',
							border: getBorderStyle(member),
							backgroundColor: '#DBD8C9',
							padding: '10%',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<Box
							sx={{
								width: '100%',
								height: '100%',
								borderRadius: '50%',
								backgroundImage: `url(${member.imageUrl})`,
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								backgroundPosition: 'center',
							}}
						/>
						{member.isMe && (
							<Box
								sx={{
									position: 'absolute',
									bottom: '-6px',
									right: '-6px',
									width: '20px',
									height: '20px',
									borderRadius: '50%',
									backgroundColor: '#FFC107',
									color: '#fff',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									fontSize: '16px',
									fontWeight: 'bold',
									boxShadow: '0 0 3px rgba(0,0,0,0.3)',
								}}
							>
								+
							</Box>
						)}
					</Button>
					<Typography sx={{ marginTop: '0.5rem', color: '#6E4C36', fontSize: '0.8rem' }}>
						{member.isMe ? '내 스토리' : (roleMap[member.role] || member.role)}
					</Typography>
				</Box>
			))}
		</Box>
	);
}
