'use client';
import { Box, Typography } from '@mui/material';
import Profile from './components/profile';
import MyFamily from './components/myFamily';
import OurCode from './components/ourCode';

// profile, family, code 조회에 필요한 API를 모두 호출하고 각 결과를 컴포넌트들에게 props로 넘겨줘야 한다.

export default function My() {

	return (
		<Box sx={{
			width: '100%',
			minHeight: '100vh',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'space-between',
			padding: '3rem 0 2rem 0',
			backgroundColor: '#F4F2E0',
		}}>
			<Profile myInfo={myInfo} />
			<MyFamily myInfo={myInfo} />
			<OurCode myInfo={myInfo} />
			<Box
				sx={{
					width: '100%',
					height: '20rem',
					backgroundImage: `url(/img/my_banner_family.svg)`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',

				}}
			/>
		</Box>
	);
}
