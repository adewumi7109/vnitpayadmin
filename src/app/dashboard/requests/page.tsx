"use client"
import React from 'react'
import styles from './requests.module.css'
import { Table, Column } from '@/app/components/table/Table';
import type { ReactNode } from 'react';

type User = {
    id: string;
    VIN: string;
    RegNumber: string;
    Merchant: string;
    Granted: string | ReactNode;
  };
  
  const columns: Column<User>[] = [
    { key: 'id', header: '#' },
    { key: 'VIN', header: 'VIN' },
    { key: 'RegNumber', header: 'REGNUMBER' },
    { key: 'Merchant', header: 'MERCHANT' },
 {
      key: 'Granted',
      header: 'GRANTED',
      render: (value) => {
        const lower = String(value).toLowerCase();
        const className =
          lower === 'yes'
          ? styles.yes
          : lower === 'no'
          ? styles.no
          : '';
          return <span className={className}>{value}</span>;
        },
      },
  ];
  
  const data: User[] = [
    { id: '1/29/2025', VIN: '1G1FP21F2JL110996', RegNumber: 'REG2025LAG', Merchant: 'Vnicom Solution',Granted: 'No'  },
    { id: '1/29/2025', VIN: '1G1FP21F2JL110996', RegNumber: 'REG2025LAG', Merchant: 'Vnicom Solution',Granted: 'No'  },
    { id: '1/29/2025', VIN: '1G1FP21F2JL110996', RegNumber: 'REG2025LAG', Merchant: 'Xcico Recording Studio',Granted: 'No' },
 
    // Add more for pagination
  ];
  

function page() {
    
  return (
    <div>
      <h2>Requests</h2>
      <div className={styles.cont}>

      <Table columns={columns} data={data} pageSize={10} searchable={true}/>
      </div>
    </div>
  )
}

export default page