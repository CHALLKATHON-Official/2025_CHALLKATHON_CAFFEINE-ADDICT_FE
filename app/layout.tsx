import { ReactNode } from 'react';
import LayoutClient from './layout-client';
import Head from 'next/head';

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
			<Head>
				<link
					href="https://hangeul.pstatic.net/hangeul_static/webfont/MaruBuri/MaruBuri-Regular.eot"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<LayoutClient>{children}</LayoutClient>
				<div id="modal-root" />
			</body>
		</html>
	);
}
