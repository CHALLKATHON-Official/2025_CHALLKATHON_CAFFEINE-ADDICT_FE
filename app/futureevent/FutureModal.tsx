'use client';

import { Box, Button, Typography } from '@mui/material';
import CustomModal from '@/app/components/CustomModal';
import { Dispatch, SetStateAction } from 'react';

interface ExploreModalProps {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function FutureModal({ open, setOpen }: ExploreModalProps) {

	const closeModal = () => {
		setOpen(false);
	};

	return (
		<CustomModal onClose={closeModal} backgroundImage='/img/modal_future_after_img.svg'
			width='70%' height='30rem'>
			<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '25rem' }}>
				<Typography sx={{ color: 'white' }}>미래로 편지를 보내는 중...</Typography>
			</Box>
		</CustomModal>
	);
}
