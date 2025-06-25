'use client';
import './globals.css';
import { usePathname } from 'next/navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';
import { ReactNode } from 'react';

const HIDE_ROUTES = ['/login', '/signup', '/story', '/hellosplash', '/welcomesplash'];

export default function LayoutClient({ children }: { children: ReactNode }) {
	const pathname = usePathname();
	const shouldHide = HIDE_ROUTES.includes(pathname);

	return (
		<>
			{!shouldHide && <Header />}
			<Layout>{children}</Layout>
			{!shouldHide && <Footer />}
		</>
	);
}
