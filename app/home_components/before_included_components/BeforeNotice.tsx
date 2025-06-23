// 가족에 속하기 전, 홈화면 상단 컴포넌트

'use client';
import { Box, Typography, Button } from '@mui/material';
export default function BeforeNotice() {

	return (
		<Box sx={{
			width: '90%',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			gap: '1rem',
		}}>
			<Box
				sx={{
					width: '100%',
					color: 'black',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: '#DBD9CA',
					borderRadius: '1rem',
					padding: '1rem',
					gap: '2rem'
				}}
			>
				<Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', justifyContent: 'center' }}>
					<Box
						sx={{
							width: '5rem',
							height: '5rem',
							borderRadius: '50%',
							backgroundImage: `url(/img/icon_cry.svg)`,
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center',
						}}
					/>

					<Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center', justifyContent: 'center' }}>
						<Typography sx={{ color: '#6E4C36', fontSize: '0.8rem' }}>아직 혼자밖에 없어요...</Typography>
						<Typography sx={{ color: '#6E4C36', fontSize: '1rem', fontWeight: 'bold' }}>모멘토는 2명부터 시작할 수 있어요!</Typography>
					</Box>
				</Box>

				<Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', justifyContent: 'center' }}>
					<Box
						sx={{
							width: '3rem',
							height: '3rem',
							backgroundImage: `url(/img/small_icon_grid_family.svg)`,
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center',
						}}
					/>
					<Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', alignItems: 'center', justifyContent: 'center' }}>
						<Typography sx={{ color: '#6E4C36', fontSize: '0.8rem' }}>가족을 추가하거나, 가족에게 초대를 받아</Typography>
						<Typography sx={{ color: '#6E4C36', fontSize: '0.8rem' }}>모멘토를 즐겁게 시작해보세요!</Typography>
					</Box>
				</Box>
			</Box>

			<Button sx={{
				width: '100%',
				display: 'flex',
				borderRadius: '1rem',
				alignItems: 'center',
				justifyContent: 'center',
				padding: '1rem',
				backgroundColor: '#6E4C36',
				boxShadow: '0 0 10px rgba(0, 0, 0, 0.08);'
			}}>
				<Typography sx={{ color: 'white', fontSize: '1rem' }}>모멘토에서 우리 가족 만들기</Typography>
			</Button>
		</Box>
	);
}
