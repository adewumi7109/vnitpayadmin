"use client";
import React, { useEffect, useState } from "react";
import Button from "../components/button/Button";
import Card from "../components/card/Card";
import { HiReceiptPercent } from "react-icons/hi2";
import styles from "./dashboard.module.css";
import {
  MdOutlineAccountBalanceWallet,
  MdPendingActions,
} from "react-icons/md";
import { RiBankCardLine } from "react-icons/ri";
import { CiReceipt } from "react-icons/ci";
import { CgPaypal } from "react-icons/cg";
import { useModal } from "@/app/context/ModalContext";
import DashboardForm from "../components/dashboard/forms/dashboard/DashboardForm";

function page() {
  const voucherData = [
    {
      title: "Voucher Balance",
      amount: "₦5,484,780.00",
      icon: <HiReceiptPercent />,
    },
    {
      title: "Pending Settlement",
      amount: "₦5,484,780.00",
      icon: <MdPendingActions />,
    },
    {
      title: "Token Balance",
      amount: "₦5,484,780.00",
      icon: <MdOutlineAccountBalanceWallet />,
    },
    { title: "Bank Balance", amount: "₦5,484,780.00", icon: <RiBankCardLine /> },
    { title: "VFD Balance", amount: "₦5,484,780.00", icon: <CiReceipt /> },
    { title: "Paystack Balance", amount: "₦5,484,780.00", icon: <CgPaypal /> },
  ];
  const { showModal } = useModal();
  const toggleModal = () => {
    showModal(<DashboardForm />);
  };

  return (
    <div>
      <Button onClick={toggleModal} title="Paystack Top-up" />
      <div className={styles.container}>
        {voucherData.map((item, index) => (
          <div key={index}>
            <Card title={item.title} amount={item.amount} icon={item.icon} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
