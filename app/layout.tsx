import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "모멘토",
  description: "우리 가족의 소중한 시간",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Layout>
          {children}
        </Layout>
        {/* <footer>
          <p>footer입니다.</p>
        </footer> */}
      </body>
    </html>
  );
}
