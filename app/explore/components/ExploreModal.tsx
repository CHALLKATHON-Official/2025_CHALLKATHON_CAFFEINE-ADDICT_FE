'use client';

import { Box, Button, Typography } from '@mui/material';
import CustomModal from '@/app/components/CustomModal';
import { Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/navigation';

interface ExploreModalProps {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
}

const mockData = [
	'/img/small_icon_mom.svg',
	'/img/small_icon_dad.svg'
]

export default function ExploreModal({ open, setOpen }: ExploreModalProps) {
	const router = useRouter();
	const closeModal = () => {
		setOpen(false);
	};
	const goBook = () => {
		router.push('/futureevent');
	}

	return (
		<CustomModal onClose={closeModal} backgroundImage='/img/modal_future_before_img.svg'
			width='90%' height='30rem' flexDirection='column'>
			<Box sx={{
				width: '100%', height: '30rem', display: 'flex', flexDirection: 'column',
				alignItems: 'space-between', justifyContent: 'center', gap: '3rem'
			}}>
				<Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>2025년, 6월27일</Typography>

				<Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignContent: 'center', gap: '1rem' }}>
					<Typography>예약된 메시지</Typography>
					<Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center' }}>
						<Box sx={{
							width: '3rem',
							height: '3rem',
							backgroundImage: `url(${mockData[0]})`,
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center',
						}} />
						<Box sx={{
							width: '70%', backgroundColor: '#EEEBD7', padding: '0.5rem', borderRadius: '0.5rem',
							display: 'flex', alignItems: 'center', justifyContent: 'center'
						}}>
							<Typography>쉿, 6월 27일에 공개돼요!</Typography>
						</Box>
					</Box>
					<Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center' }}>
						<Box sx={{
							width: '3rem',
							height: '3rem',
							backgroundImage: `url(${mockData[1]})`,
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center',
						}} />
						<Box sx={{
							width: '70%', backgroundColor: '#EEEBD7', padding: '0.5rem', borderRadius: '0.5rem',
							display: 'flex', alignItems: 'center', justifyContent: 'center'
						}}>
							<Typography>쉿, 6월 27일에 공개돼요!</Typography>
						</Box>
					</Box>
				</Box>

				<Button
					variant='contained'
					sx={{ width: '100%', backgroundColor: '#DBD9CA', color: 'black', padding: '0.5rem' }}
					onClick={goBook}
				>
					예약 메시지 추가하기
				</Button>
			</Box>
		</CustomModal>
	);
}
