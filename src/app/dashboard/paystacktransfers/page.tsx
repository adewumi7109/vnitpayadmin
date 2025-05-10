"use client"
import React from 'react'
import styles from './paystack.module.css'
import { Table, Column } from '@/app/components/table/Table';
import { ReactNode } from 'react';

type Paystack = {
    date: string;
    amount: string | ReactNode;
    status: string;
    className?: string;

  };
  
  const columns: Column<Paystack>[] = [
    { key: 'date', header: 'DATE' },
    { key: 'amount', header: 'AMOUNT(₦)', className: styles.alignRight },
    {
      key: 'status',
      header: 'STATUS',
      render: (value) => {
        const lower = String(value).toLowerCase();
        const className =
          lower === 'success'
            ? styles.success
            : lower === 'pending'
            ? styles.pending
            : '';
        return <span className={className}>{value}</span>;
      },
    },
  ];
  
  
  const data: Paystack[] = [
    { date: '3/11/2025 7:20:04 PM', amount: '12,000.00', status: 'Success'},
    { date: '4/14/2025 7:20:04 PM', amount: '15,000.00', status: 'Pending'},
    { date: '3/1/2024 7:20:04 PM', amount: '2,000.00', status: 'Success'},
    { date: '3/11/2025 7:20:04 PM', amount: '12,000.00', status: 'Success'},
    { date: '3/11/2023 7:20:04 PM', amount: '8,000.00', status: 'Success'},
    { date: '3/11/2025 7:20:04 PM', amount: '12,000.00', status: 'Success'},
    { date: '3/11/2025 7:20:04 PM', amount: '22,000.00', status: 'Pending'},
    { date: '3/11/2025 7:20:04 PM', amount: '12,000.00', status: 'Success'},
    { date: '3/11/2025 7:20:04 PM', amount: '12,000.00', status: 'Success'},
    { date: '3/11/2025 7:20:04 PM', amount: '12,000.00', status: 'Success'},
    { date: '3/12/2025 7:20:04 PM', amount: '15,000.00', status: 'Pending'},
    { date: '3/11/2025 7:20:04 PM', amount: '12,000.00', status: 'Success'},
    { date: '3/11/2025 7:20:04 PM', amount: '12,000.00', status: 'Success'},
    { date: '3/11/2025 7:20:04 PM', amount: '12,000.00', status: 'Success'},
    { date: '3/11/2025 7:20:04 PM', amount: '12,000.00', status: 'Success'},
 
    // Add more for pagination
  ];
  

function page() {
    
  return (
    <div>
      <h2>Paystack Transfers</h2>
      <div className={styles.cont}>

      <Table columns={columns} data={data} pageSize={10} searchable={true}/>
      </div>
    </div>
  )
}

export default page