'use client';
import { Box, Typography } from '@mui/material';
import NotDoneList from './components/NotDoneList';
import DoneList from './components/DoneList';
import { useEffect, useState } from 'react';
import { fetchRequest } from '../api/fetchRequest';

export default function TodoHistory() {
	const [doneTodos, setDoneTodos] = useState([]);
	const [pendingTodos, setPendingTodos] = useState([]);

	useEffect(() => {
		const fetchTodos = async () => {
			try {
				const done = await fetchRequest({
					method: 'GET',
					endpoint: '/api/v1/families/my/todo-lists?status=completed',
				});
				setDoneTodos(done.result || []);

				const pending = await fetchRequest({
					method: 'GET',
					endpoint: '/api/v1/families/my/todo-lists?status=pending',
				});
				setPendingTodos(pending.result || []);
			} catch (error) {
				console.error('투두 불러오기 실패:', error);
			}
		};

		fetchTodos();
	}, []);

	return (
		<Box sx={{
			width: '100%',
			minHeight: '100vh',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'flex-start',
			backgroundColor: '#FFFDEB',
			gap: '4rem',
			padding: '3rem 0 4rem 0'
		}}>
			<Box sx={{ width: '90%', display: 'flex', flexDirection: 'column', gap: '0.5rem', justifyContent: 'center', alignItems: 'center' }}>
				<Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', gap: '0.5rem', justifyContent: 'flex-start' }}>
					<Typography sx={{ color: '#6E4C36' }}>아직 안 한 우리 가족의 TODO-list</Typography>
					<Box
						sx={{
							width: '20px',
							height: '20px',
							backgroundImage: `url(/img/small_icon_fire.svg)`,
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center',
						}}
					/>
				</Box>
				{/* <NotDoneList
				todoData={pendingTodos}
				 /> */}
			</Box>

			<Box sx={{ width: '90%', display: 'flex', flexDirection: 'column', gap: '0.5rem', justifyContent: 'center', alignItems: 'center' }}>
				<Box sx={{ width: '90%', display: 'flex', flexDirection: 'row', gap: '0.5rem', justifyContent: 'flex-start' }}>
					<Typography sx={{ color: '#6E4C36' }}>우리 가족이 정복한 TODO-list</Typography>
					<Box
						sx={{
							width: '20px',
							height: '20px',
							backgroundImage: `url(/img/small_icon_mountain.svg)`,
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center',
						}}
					/>
				</Box>
				<DoneList todoData={doneTodos} />
			</Box>
		</Box>
	);
}
