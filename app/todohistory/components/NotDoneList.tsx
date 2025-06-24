'use client';
import { Box, Typography } from '@mui/material';
import CheckDiv from './CheckDiv';
/*
{
		month: 5,
		list: [
			['배고프다', true],
			['졸려', false], // false면 TODO를 수행했다는 뜻
			['출근하기 싫어', true],
		]
	},
*/

// TodoType 자체를 []로 수정하고 boolean (수행여부) 받도록 수정해야함 !! 
interface TodoType {
	month: number,
	todolist: string[];
}

interface TodoProps {
	todoData: TodoType;
}

export default function NotDoneList({ todoData }: TodoProps) {

	return (
		<Box sx={{
			width: '100%',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: 'transparent'
		}}>
			<CheckDiv todoData={todoData} />
		</Box>
	);
}
