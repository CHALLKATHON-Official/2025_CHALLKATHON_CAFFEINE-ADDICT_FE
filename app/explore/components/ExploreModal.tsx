'use client';

import { Box, Button, Typography } from '@mui/material';
import CustomModal from '@/app/components/CustomModal';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { serverCall } from '@/app/api/serverCall';

interface ExploreModalProps {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
	date: string; // YYYY-MM-DD
}

interface MessageItem {
	id: number;
	content: string;
	imageUrl: string;
}

export default function ExploreModal({ open, setOpen, date }: ExploreModalProps) {
	const router = useRouter();
	const [messages, setMessages] = useState<MessageItem[]>([]);

	const closeModal = () => {
		setOpen(false);
	};

	const goBook = () => {
		router.push(`/futureevent?date=${date}`);
	};

	useEffect(() => {
		const fetchMessages = async () => {
			try {
				const res = await serverCall('GET', `/api/v1/messages?date=${date}`);
				if (res?.result) setMessages(res.result);
			} catch (err) {
				console.error('메시지 목록 불러오기 실패:', err);
			}
		};

		if (open && date) {
			fetchMessages();
		}
	}, [open, date]);

	return (
		<CustomModal onClose={closeModal} backgroundImage='/img/modal_future_before_img.svg'
			width='90%' height='30rem' flexDirection='column'>
			<Box sx={{
				width: '100%', height: '30rem', display: 'flex', flexDirection: 'column',
				alignItems: 'space-between', justifyContent: 'center', gap: '3rem'
			}}>
				<Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{date.replace(/-/g, '년 ').replace(/-(\d\d)$/, '월 $1일')}</Typography>

				<Box sx={{
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'flex-start',
					alignContent: 'center',
					gap: '1rem'
				}}>
					<Typography>예약된 메시지</Typography>

					{messages.length === 0 ? (
						<Typography sx={{ color: '#888' }}>아직 예약된 메시지가 없습니다.</Typography>
					) : (
						messages.map((msg) => (
							<Box key={msg.id} sx={{
								width: '100%',
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignContent: 'center'
							}}>
								<Box sx={{
									width: '3rem',
									height: '3rem',
									backgroundImage: `url(${msg.imageUrl})`,
									backgroundSize: 'cover',
									backgroundRepeat: 'no-repeat',
									backgroundPosition: 'center',
								}} />
								<Box sx={{
									width: '70%', backgroundColor: '#EEEBD7', padding: '0.5rem', borderRadius: '0.5rem',
									display: 'flex', alignItems: 'center', justifyContent: 'center'
								}}>
									<Typography>쉿, {date.replace(/.*-(\d{2})$/, '$1')}일에 공개돼요!</Typography>
								</Box>
							</Box>
						))
					)}
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
