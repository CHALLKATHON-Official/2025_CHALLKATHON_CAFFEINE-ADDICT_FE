import { ReactNode } from 'react';
import LayoutClient from './layout-client';

export const metadata = {
	title: '모멘토',
	description: '우리 가족의 소중한 시간',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="ko">
			<body>
				<LayoutClient>{children}</LayoutClient>
				<div id="modal-root" />
			</body>
		</html>
	);
}
