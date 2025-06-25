'use client';

import { Box, Button, Typography, Checkbox } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Splash_after_makeTodo from './Splash_after_makeTodo';
import Splash_before_makeTodo from './Splash_before_makeTodo';
import { serverCall } from '@/app/api/serverCall';

export default function TodoList() {
	const router = useRouter();
	const [beforeOpen, setBeforeOpen] = useState(false);
	const [afterOpen, setAfterOpen] = useState(false);
	const [todoList, setTodoList] = useState<string[]>([]);

	useEffect(() => {
		const fetchRecentTodos = async () => {
			try {
				const res = await serverCall(
					'GET',
					'/api/v1/families/my/todo-lists/recent'
				);
				const recentTodos = res.result?.map((item: any) => item.content) || [];
				setTodoList(recentTodos);
			} catch (error) {
				console.error('초기 TODO 불러오기 실패:', error);
			}
		};
		fetchRecentTodos();
	}, []);

	const handleChangeTodoList = async () => {
		try {
			setBeforeOpen(true);

			const response = await serverCall(
				'POST',
				'/api/v1/families/my/todo-lists/generate',
				null,
				'투두리스트 생성 성공',
				'투두리스트 생성 실패'
			);

			const newTodos = response.result?.map((item: any) => item.content) || [];
			setTodoList(newTodos);

			setTimeout(() => {
				setBeforeOpen(false);
				setAfterOpen(true);
			}, 5000);
		} catch (error) {
			console.error('투두 생성 오류:', error);
			alert('투두리스트 생성에 실패했습니다.');
			setBeforeOpen(false);
		}
	};

	return (
		<>
			<Splash_before_makeTodo open={beforeOpen} setOpen={setBeforeOpen} />
			<Splash_after_makeTodo open={afterOpen} setOpen={setAfterOpen} />

			<Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem', gap: '0.5rem' }}>
				<Button variant='contained' sx={{ backgroundColor: '#B49066' }} onClick={handleChangeTodoList}>
					TODO-list 바꾸기
				</Button>

				<Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
					<Typography sx={{ color: '#6E4C36', fontSize: '1.2rem' }}>우리의 TODO-list</Typography>
					<Button onClick={() => router.push('/todohistory')} sx={{ backgroundColor: '#DBD9CA', color: '#6E4C36', borderRadius: '0.5rem', padding: '0 1rem' }}>
						내역 보기
					</Button>
				</Box>

				<Box sx={{ width: '100%', backgroundColor: '#DBD9CA', borderRadius: '1rem', padding: '1rem', border: '2px solid #6E4C36', boxShadow: '0 0 10px rgba(0, 0, 0, 0.08)' }}>
					{todoList.map((todo, index) => (
						<Box key={index} sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
							<Checkbox
								onClick={(e) => {
									e.preventDefault();
									router.push('/certificate');
								}}
								sx={{
									width: '1rem',
									height: '1rem',
									color: 'white',
									'&.Mui-checked': { color: 'white' },
								}}
							/>
							<Typography sx={{ color: '#6E4C36', fontSize: '0.9rem' }}>{todo}</Typography>
						</Box>
					))}
				</Box>
			</Box>
		</>
	);
}
