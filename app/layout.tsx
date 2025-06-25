import { ReactNode } from 'react';
import LayoutClient from './layout-client';
import { Suspense } from 'react';
import Loading from './components/Loading';

export const metadata = {
	title: '모멘토',
	description: '우리 가족의 소중한 시간',
	icons: {
		icon: [
			{ url: '/TapLogo.svg', type: 'image/svg+xml' },
		],
	},
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="ko">
			<body>
				<Suspense fallback={<Loading />}>
					<LayoutClient>{children}</LayoutClient>
					<div id="modal-root" />
				</Suspense>
			</body>
		</html>
	);
}
