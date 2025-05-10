"use client";
import React from "react";
import styles from "./page.module.css";
import Button from "../../button/Button";
import Footer from "../../footer/Footer";
import { useRouter } from "next/navigation";
import { IoReorderThreeOutline } from "react-icons/io5";

function Main({ children, toggleSidebar }: { children: React.ReactNode, toggleSidebar: () => void }) {
  const router = useRouter()
  const handleLogout = (e:any) => {
    e.preventDefault(); 
  const confirmed = window.confirm('Are you sure you want to logout?');
  if (confirmed) {
    router.push('/');
  }
  };

  return (
 <>
  
    <div className={styles.main}>
      <div onClick={toggleSidebar} className={styles.burger}>
          <IoReorderThreeOutline />
        </div>
      <div className={styles.header}>
        <p>Welcome, ogunsanyaadewumi01@gmail.com!</p>
        <Button onClick={handleLogout} title="Logout" />
      </div>
     
      {children}
    <Footer/>
    </div>
 </>
  );
}

export default Main;
