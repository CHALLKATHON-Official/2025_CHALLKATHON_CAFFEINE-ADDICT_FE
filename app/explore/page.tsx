'use client';
import { useState, useEffect } from 'react';
import { DateCalendar, PickersDay, PickersDayProps } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import ExploreModal from './components/ExploreModal';
import { serverCall } from '@/app/api/serverCall';

type MessageMap = Record<string, boolean>;

function CustomPickersDay(
	props: PickersDayProps & { messageMap: MessageMap }
) {
	const { day, messageMap, ...other } = props;
	const router = useRouter();
	const [open, setOpen] = useState(false);
	const today = dayjs();

	const dateStr = day.format('YYYY-MM-DD');
	const isEvent = messageMap[dateStr] === true;
	const isPastOrToday = day.isBefore(today, 'day') || day.isSame(today, 'day');
	const isFuture = day.isAfter(today, 'day');

	const handleClick = () => {
		if (isFuture) {
			setOpen(true); // 미래 날짜 → 모달
		} else if (isPastOrToday && isEvent) {
			router.push(`/futuremessage?date=${dateStr}`); // 과거/오늘 & 이벤트 -> 페이지 이동
		}
		// 과거 & 이벤트 없음 → 무반응
	};

	return (
		<Box sx={{ position: 'relative' }}>
			<PickersDay {...other} day={day} onClick={handleClick} />
			<Box
				sx={{
					position: 'absolute',
					bottom: 2,
					left: '50%',
					transform: 'translateX(-50%)',
					width: 20,
					height: 20,
					backgroundImage: `url(${isEvent ? '/img/small_icon_present.svg' : '/img/small_icon_empty.svg'})`,
					backgroundSize: 'contain',
					backgroundRepeat: 'no-repeat',
				}}
			/>
			{open && <ExploreModal open={open} setOpen={setOpen} date={dateStr} />}
		</Box>
	);
}

export default function Explore() {
	const router = useRouter();
	const today = dayjs();
	const [messageMap, setMessageMap] = useState<MessageMap>({});

	useEffect(() => {
		const fetchMessages = async () => {
			const year = today.year();
			const month = today.month() + 1;
			const daysInMonth = today.daysInMonth();

			const newMap: MessageMap = {};

			await Promise.all(
				Array.from({ length: daysInMonth }, (_, i) => {
					const date = dayjs(`${year}-${month}-${i + 1}`, 'YYYY-M-D').format('YYYY-MM-DD');
					return serverCall('GET', `/api/v1/messages?date=${date}`)
						.then((res) => {
							if (res?.result?.length > 0) {
								newMap[date] = true;
							}
						})
						.catch(() => {
							newMap[date] = false;
						});
				})
			);

			setMessageMap(newMap);
		};

		fetchMessages();
	}, []);

	return (
		<Box
			sx={{
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
				gap: '2rem',
			}}
		>
			<Box sx={{ width: '90%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
				<Typography sx={{ color: '#6E4C36', fontSize: '1.2rem' }}>{today.year()}년</Typography>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'flex-start',
						justifyContent: 'flex-end',
						gap: '0.2rem',
					}}
				>
					<Typography sx={{ color: '#6E4C36', fontSize: '1.2rem', fontWeight: 'bold' }}>
						{today.month() + 1}월 {today.date()}일, 우리 가족의
					</Typography>
					<Box
						sx={{
							width: '7rem',
							height: '1.5rem',
							backgroundImage: `url(/img/modium_logo.svg)`,
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center',
						}}
					/>
				</Box>
			</Box>

			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DateCalendar
					defaultValue={today}
					showDaysOutsideCurrentMonth
					displayWeekNumber
					slots={{
						day: (props) => (
							<CustomPickersDay {...props} messageMap={messageMap} />
						),
					}}
					sx={{ width: '100%', backgroundColor: 'white', padding: '0.5rem' }}
				/>
			</LocalizationProvider>
		</Box>
	);
}
