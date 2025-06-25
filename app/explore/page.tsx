'use client';
// import * as React from 'react';
import { useState } from 'react';
import { DateCalendar, PickersDay, PickersDayProps } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import ExploreModal from './components/ExploreModal';

// 경우의 수 정리
// 현재보다 과거인데 예약내역이 없는 날짜 -> 클릭해도 반응 없어야 함
// 현재보다 과거 또는 현재와 일치하는데 예약 내역이 있는 날짜 -> 클릭하면 /futuremessage로 이동해야 함
// 현재보다 미래인 날짜 -> 클릭하면 handleClick으로 setOpen(true) 가 되어야 함 

// 서버에서 받아올 예약이 있는 날짜 mockData (일단 일만 일치하면 이미지 표시하도록 처리)
const hasEventDay = [1, 2, 5, 7, 24, 26, 28, 29];

function CustomPickersDay(props: PickersDayProps) {
	const { day, onClick, ...other } = props;
	const isEvent = hasEventDay.includes(day.date());
	const [open, setOpen] = useState(false); // 각 날짜 클릭 시 모달 open 상태 제어 

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		// console.log('클릭!');

		setOpen(true);
		// if (onClick) onClick(e); // 기존 onClick도 호출 (DateCalendar의 onChange 위해 필요)
	};

	return (
		<Box sx={{ position: 'relative' }}>
			<PickersDay day={day} {...other} onClick={handleClick} />
			<Box
				sx={{
					position: 'absolute',
					bottom: 2,
					left: '50%',
					transform: 'translateX(-50%)',
					width: 20,
					height: 20,
					backgroundImage: `url(${isEvent ? '/img/small_icon_present.svg' : '/img/small_icon_empty.svg'
						})`,
					backgroundSize: 'contain',
					backgroundRepeat: 'no-repeat',
				}}
			/>
			{open && <ExploreModal open={open} setOpen={setOpen} />}
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
					// onChange={(newValue) => {
					// 	if (newValue) {
					// 		router.push(`/futureevent?date=${newValue.format('YYYY-MM-DD')}`);
					// 	}
					// }}
					slots={{
						day: CustomPickersDay,
					}}
					sx={{ width: '100%', backgroundColor: 'white', padding: '0.5rem' }}
				/>
			</LocalizationProvider>
		</Box>
	);
}
