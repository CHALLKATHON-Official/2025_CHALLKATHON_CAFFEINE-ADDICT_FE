import { Box } from '@mui/material';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<Box sx={{
			width: '400px',
			minHeight: '100vh',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			boxShadow: '0 0 20px rgba(0, 0, 0, 0.08);'
		}}>
			{children}
		</Box>
	);
}
