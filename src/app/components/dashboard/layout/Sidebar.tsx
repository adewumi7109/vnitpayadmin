"use client";

import React from "react";
import styles from "./page.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { PiCardsThreeFill, PiGitPullRequestBold } from "react-icons/pi";
import { IoReceipt } from "react-icons/io5";
import { BsReceipt } from "react-icons/bs";
import { HiOutlineReceiptTax } from "react-icons/hi";
import { FaUserCog, FaUsers } from "react-icons/fa";

const sidebarData = [
  { name: "Dashboard", icon: <MdDashboard />, path: "/dashboard" },
  { name: "Requests", icon: <PiGitPullRequestBold />, path: "/dashboard/requests" },
  { name: "Paystack Transfers", icon: <IoReceipt />, path: "/dashboard/paystacktransfers" },
  { name: "Settlements", icon: <BsReceipt />, path: "/dashboard/settlements" },
  { name: "Account Summaries", icon: <HiOutlineReceiptTax />, path: "/dashboard/accountsummaries" },
  { name: "Manage Merchant", icon: <FaUserCog />, path: "/dashboard/managemerchant" },
  { name: "Cards", icon: <PiCardsThreeFill />, path: "/dashboard/cards" },
  { name: "Users", icon: <FaUsers />, path: "/dashboard/users" },
];

function Sidebar({ isOpen, setIsSidebarOpen }: any) {
  const pathname = usePathname();

  // Sort paths longest to shortest for most specific match
  const sortedLinks = [...sidebarData].sort((a, b) => b.path.length - a.path.length);

  // Find the most specific active link
  const activePath = sortedLinks.find(link => pathname === link.path || pathname.startsWith(`${link.path}/`))?.path;

  return (
    <div  className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ""}`}>
      <div>
        <img src="/logo/vnitpay-full-white.svg" alt="logo" />

        <ul>
          {sidebarData.map((link, index) => {
            const isActive = link.path === activePath;

            return (
              <li key={index} className={isActive ? styles.active : ""}>
               <Link href={link.path} className={styles.link} onClick={() => isOpen && setIsSidebarOpen(false)}>
                  <div>{link.icon}</div>
                  <div>{link.name}</div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
