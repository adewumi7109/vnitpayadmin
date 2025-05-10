"use client";
// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Main from "../components/dashboard/layout/Main";
import Sidebar from "../components/dashboard/layout/Sidebar";
import styles from './layout.module.css'
import { ModalProvider } from '@/app/context/ModalContext';
import GlobalModal from '@/app/components/modal/GlobalModal';
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Vnitpay Admin",
// };

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };
  return (
  
       <ModalProvider>
      <div className={styles.container}>
        {isSidebarOpen && (
    <div className={styles.overlay} onClick={() => setIsSidebarOpen(false)} />
  )}

       <div className={`${styles.sidebarWrapper} ${isSidebarOpen ? styles.sidebarMobileVisible : ""}`}>
  <Sidebar setIsSidebarOpen={setIsSidebarOpen} isOpen={isSidebarOpen} />
</div>

        
        <Main toggleSidebar={toggleSidebar}>{children}</Main>
      </div>
      <GlobalModal />
    </ModalProvider>
   
  );
}
