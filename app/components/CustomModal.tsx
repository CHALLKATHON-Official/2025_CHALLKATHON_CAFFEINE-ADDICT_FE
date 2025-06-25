'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Box, Button } from '@mui/material';

interface CustomModalProps {
	onClose: () => void;
	children: React.ReactNode;
	backgroundImage?: string;
	width?: string;
	height?: string;
	borderRadius?: string;
	flexDirection?: string;
	alignItems?: string;
	justifyContent?: string;
}

export default function CustomModal({ onClose, children, backgroundImage, width, height, borderRadius,
	flexDirection, alignItems, justifyContent }: CustomModalProps) {
	const [mounted, setMounted] = useState(false);
	const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

	useEffect(() => {
		setMounted(true);
		setModalRoot(document.getElementById('modal-root'));
	}, []);

	if (!mounted || !modalRoot) return null;

	return createPortal(
		<Box
			sx={{
				position: 'fixed',
				top: 0,
				left: '50%',
				transform: 'translateX(-50%)',
				width: '400px',
				height: '100vh',
				backgroundColor: 'rgba(0, 0, 0, 0.5)',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				zIndex: 1300,
			}}

		>
			<Box
				sx={{
					width: width ? width : '90%',
					height: height ? height : '5rem',
					maxWidth: '500px',
					backgroundColor: 'white',
					borderRadius: borderRadius ? borderRadius : '1rem',
					padding: '2rem',
					position: 'relative',
					backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
					boxShadow: 3,
					flexDirection: flexDirection ? flexDirection : 'column',
					alignItems: alignItems ? alignItems : 'center',
					justifyContent: justifyContent ? justifyContent : 'center'
				}}
			>
				<Button
					onClick={onClose}
					sx={{
						position: 'absolute',
						top: '1rem',
						right: '1rem',
						fontWeight: 'bold',
						color: '#444',
					}}
				>
					x
				</Button>
				{children}
			</Box>
		</Box>,
		modalRoot
	);
}
