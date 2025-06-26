'use client';
import { Box, Typography, Button, Checkbox } from '@mui/material';
import { useRouter } from 'next/navigation';

interface TodoType {
	month: number;
	todolist: [string, boolean][];
}

interface TodoProps {
	todoData: TodoType;
}

export default function CheckDiv({ todoData }: TodoProps) {
	const router = useRouter();

	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'flex-start',
				justifyContent: 'center',
				backgroundColor: '#DBD9CA',
				gap: '1rem',
				padding: '1rem',
				borderRadius: '1rem',
				border: '2px solid #6E4C36',
				boxShadow: '0 0 10px rgba(0, 0, 0, 0.08)',
			}}
		>
			{todoData.todolist.map((todo, index) => (
				<Box
					key={index}
					sx={{
						display: 'flex',
						flexDirection: 'row',
						gap: '1rem',
						justifyContent: 'flex-start',
						alignItems: 'center',
					}}
				>
					<Checkbox
						onClick={(e) => {
							e.preventDefault();
							router.push('/certificate');
						}}
						sx={{
							width: '1rem',
							height: '1rem',
							color: 'white',
							'&.Mui-checked': {
								color: 'white',
							},
						}}
					/>
					<Typography sx={{ color: '#6E4C36', fontSize: '0.9rem' }}>
						{todo}
					</Typography>
				</Box>
			))}
		</Box>
	);
}
