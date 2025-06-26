'use client';
import { Box, Typography } from '@mui/material';
import CheckDiv from './CheckDiv';

interface TodoType {
	month: number;
	todolist: [string, boolean][]; // 각 항목은 [내용, isDone]
}

interface TodoProps {
	todoData: TodoType[];
}

export default function NotDoneList({ todoData }: TodoProps) {
	const hasData = Array.isArray(todoData) && todoData.length > 0;

	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: 'transparent',
				gap: '2rem',
				minHeight: '10rem',
			}}
		>
			{hasData ? (
				todoData.map((todo, idx) => (
					<CheckDiv key={idx} todoData={todo} />
				))
			) : (
				<Typography sx={{ color: '#999999' }}>
					아직 데이터가 없어요.
				</Typography>
			)}
		</Box>
	);
}
