'use client';
import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

interface TodoProps {
	todoData: string[];
}

interface DoneItemData {
	img: string;
	memo: string;
}

export default function DoneList({ todoData }: TodoProps) {
	const [openStates, setOpenStates] = useState<boolean[]>(Array(todoData.length).fill(false));

	const doneMockData: DoneItemData[] = todoData.map((_, i) => ({
		img: '/img/my_banner_family.svg',
		memo: `제발 자고싶어 ${i + 1}`, // 각 항목마다 다르게 mock 만듦
	}));

	const handleToggle = (index: number) => {
		const newOpenStates = [...openStates];
		newOpenStates[index] = !newOpenStates[index];
		setOpenStates(newOpenStates);
	};

	return (
		<Box sx={{
			width: '100%',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: 'transparent',
			gap: '1rem'
		}}>
			{todoData.map((item, index) => (
				<Box key={index} sx={{ width: '100%' }}>
					<Button
						onClick={() => handleToggle(index)}
						sx={{
							width: '100%',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'flex-start',
							flexDirection: 'row',
							gap: '0.5rem',
							backgroundColor: '#DBD9CA',
							color: 'white',
							borderRadius: '1rem',
							padding: '1rem',
						}}
					>
						{/* <Typography sx={{ color: 'white', fontSize: '1rem', fontWeight: 'bold' }}>DONE</Typography> */}
						<Box sx={{
							width: '5rem',
							height: '2rem',
							backgroundImage: `url(/img/icon_done.svg)`,
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center',
						}} />
						<Typography sx={{ color: '#6E4C36', fontSize: '1.1rem', fontWeight: 'bold' }}>
							{item}
						</Typography>
					</Button>

					{openStates[index] && (
						<Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', mt: 1 }}>
							<Box
								sx={{
									width: '100%',
									height: '5rem',
									backgroundImage: `url(${doneMockData[index].img})`,
									backgroundSize: 'cover',
									backgroundRepeat: 'no-repeat',
									backgroundPosition: 'center',
								}}
							/>
							<Box
								sx={{
									width: '100%',
									height: '5rem',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									backgroundColor: '#F8F8F8',
									borderRadius: '0 0 1rem 1rem',
									color: '#6E4C36',
									fontWeight: 'bold'
								}}
							>
								{doneMockData[index].memo}
							</Box>
						</Box>
					)}
				</Box>
			))}
		</Box>
	);
}
