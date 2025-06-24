'use client';
import * as React from 'react';
import dayjs from 'dayjs';

import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Box, Typography } from '@mui/material';

export default function Explore() {
	const today = dayjs();
	const year = today.year();
	const month = today.month() + 1; // 0부터 시작하므로 +1
	const date = today.date();

	return (
		<Box sx={{
			width: '100%',
			minHeight: '100vh',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'flex-start',
			backgroundImage: `url('/img/explore_background_img.svg')`,
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			padding: '3rem 0 4rem 0',
			gap: '2rem'
		}}>
			<Box sx={{ width: '90%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
				<Typography sx={{ color: '#6E4C36', fontSize: '1.2rem' }}>{year}년</Typography>
				<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-end', gap: '0.2rem' }}>
					<Typography sx={{ color: '#6E4C36', fontSize: '1.2rem', fontWeight: 'bold' }}>{month}월 {date}일, 우리 가족의</Typography>
					<Box sx={{
						width: '7rem',
						height: '1.5rem',
						backgroundImage: `url(/img/modium_logo.svg)`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
					}} />
				</Box>
			</Box>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DateCalendar
					defaultValue={today}
					showDaysOutsideCurrentMonth // 해당 월 외 날짜도 회색으로 표시
					displayWeekNumber // 주차 표시
					onChange={(newValue) => {
						console.log('선택한 날짜:', newValue?.format('YYYY-MM-DD'));
					}}
					sx={{ width: '100%', backgroundColor: 'white', padding: '0.5rem' }}
				/>
			</LocalizationProvider>
		</Box>
	);
}
