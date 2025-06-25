'use client';

import { Box, Button, Typography } from '@mui/material';
import CustomModal from '@/app/components/CustomModal';
import { Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/navigation';

interface TodoModalProps {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Splash_before_makeTodo({ open, setOpen }: TodoModalProps) {
	if (!open) { return null; }

	const router = useRouter();
	const closeModal = () => {
		setOpen(false);
	};
	const goBook = () => {
		router.push('/futureevent');
	}

	return (
		<CustomModal onClose={closeModal} backgroundImage='/img/modal_makeTodo_before_img.svg'
			height='30rem' flexDirection='column'>
			<Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
				<Typography sx={{ color: 'white' }}>AI가 새로운 데이터를 만들고 있어요...</Typography>
			</Box>
		</CustomModal>
	);
}
