'use client';
import "./globals.css";
// import type { Metadata } from "next";
import React from "react";
import { usePathname } from "next/navigation";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";

// header, footer 컴포넌트 조건부 렌더링을 위해 layout 파일 자체가 client 파일이어야 하므로 임시 주석 처리 
// export const metadata: Metadata = {
//   title: "모멘토",
//   description: "우리 가족의 소중한 시간",
// };

const HIDE_ROUTES = ['/login', '/signup', '/story', '/hellosplash', '/welcomesplash'];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const shouldHide = HIDE_ROUTES.includes(pathname);

  return (
    <html lang="en">
      <body>
        {!shouldHide && <Header />}
        <Layout>
          {children}
        </Layout>
        {!shouldHide && <Footer />}
      </body>
    </html>
  );
}
