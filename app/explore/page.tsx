'use client';
import * as React from 'react';
import { DateCalendar, PickersDay, PickersDayProps } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

// 서버에서 받아올 예약이 있는 날짜 mockData (일단 일만 일치하면 이미지 표시하도록 처리)
const hasEventDay = [1, 2, 5, 7];

function CustomPickersDay(props: PickersDayProps) {
	const { day, ...other } = props;
	const isEvent = hasEventDay.includes(day.date());

	return (
		<Box sx={{ position: 'relative' }}>
			<PickersDay day={day} {...other} />
			<Box
				sx={{
					position: 'absolute',
					bottom: 2,
					left: '50%',
					transform: 'translateX(-50%)',
					width: 16,
					height: 16,
					backgroundImage: `url(${isEvent ? '/img/small_icon_son.svg' : '/img/small_icon_daghter.svg'
						})`,
					backgroundSize: 'contain',
					backgroundRepeat: 'no-repeat',
				}}
			/>
		</Box>
	);
}

export default function Explore() {
	const router = useRouter();
	const today = dayjs();
	const year = today.year();
	const month = today.month() + 1; // 0부터 시작하므로
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
					showDaysOutsideCurrentMonth
					displayWeekNumber
					onChange={(newValue) => {
						if (newValue) {
							router.push(`/futureevent?date=${newValue.format('YYYY-MM-DD')}`);
						}
					}}
					slots={{
						day: CustomPickersDay,
					}}
					sx={{ width: '100%', backgroundColor: 'white', padding: '0.5rem' }}
				/>
			</LocalizationProvider>
		</Box>
	);
}
