'use client';
import { Box, Typography } from '@mui/material';
import NotDoneList from './components/NotDoneList';
import DoneList from './components/DoneList';
import { notDoneList, doneList } from '../mockData/todo_history'; // mockData 
// page가 NtDoneList에게 props -> NotDoneList가 CheckDiv에게 props (todoData)

export default function TodoHistory() {

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
					<Typography>아직 안 한 우리 가족의 TODO-list</Typography>
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
				<NotDoneList todoData={notDoneList} />
			</Box>

			<Box sx={{ width: '90%', display: 'flex', flexDirection: 'column', gap: '0.5rem', justifyContent: 'center', alignItems: 'center' }}>
				<Box sx={{ width: '90%', display: 'flex', flexDirection: 'row', gap: '0.5rem', justifyContent: 'flex-start' }}>
					<Typography>우리 가족이 정복한 TODO-list</Typography>
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
				<DoneList todoData={doneList} />
			</Box>
		</Box>
	);
}
