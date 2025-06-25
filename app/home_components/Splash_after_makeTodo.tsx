import { Box, Button, Typography, keyframes } from '@mui/material';
import CustomModal from '@/app/components/CustomModal';
import { Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/navigation';

interface TodoModalProps {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
}

// 위아래 흔들리는 애니메이션
const floatUpDown = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-50px); }
  100% { transform: translateY(0px); }
`;

const floatDownUp = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(50px); }
  100% { transform: translateY(0px); }
`;

export default function Splash_after_makeTodo({ open, setOpen }: TodoModalProps) {
	if (!open) { return null; }

	const router = useRouter();
	const closeModal = () => setOpen(false);
	const goHome = () => router.push('/');

	return (
		<CustomModal onClose={closeModal} backgroundImage='/img/modal_makeTodo_after_2.svg' width='70%' height='30rem' flexDirection='column'>
			<Box
				sx={{
					position: 'absolute',
					bottom: '30%',
					left: '5%',
					width: '90%',
					display: 'flex',
					justifyContent: 'center',
					gap: '1rem',
					zIndex: 10,
				}}
			>
				{[
					{ src: '/img/todo_icon_dad.svg', anim: floatUpDown },
					{ src: '/img/todo_icon_son.svg', anim: floatDownUp },
					{ src: '/img/todo_icon_daughter.svg', anim: floatUpDown },
					{ src: '/img/todo_icon_mom.svg', anim: floatDownUp },
				].map((icon, idx) => (
					<Box
						key={idx}
						component="img"
						src={icon.src}
						sx={{
							width: '3rem',
							height: '3rem',
							animation: `${icon.anim} 2s ease-in-out infinite`,
						}}
					/>
				))}
			</Box>

			<Box
				sx={{
					width: '100%',
					height: '25rem',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<Typography sx={{ color: 'white', fontSize: '0.8rem' }}>새로운 데이터가 완성되었습니다!</Typography>
				<Button variant='contained' onClick={closeModal}>확인</Button>
			</Box>
		</CustomModal>
	);
}
