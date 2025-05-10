"use client"
import React from 'react'
import styles from './settlement.module.css'
import { Table, Column } from '@/app/components/table/Table';
import { ReactNode } from 'react';

type Settlement = {
    ref: string;
    merchant: string | ReactNode;
    status: string;
    amount: string;
    className?: string;

  };
  
  const columns: Column<Settlement>[] = [
    { key: 'ref', header: 'TRANSACTION REF' },
    { key: 'merchant', header: 'MERCHANT NAME'},
    {
      key: 'status',
      header: 'STATUS',
      render: (value) => {
        const lower = String(value).toLowerCase();
        const className =
          lower === 'complete'
          ? styles.complete
          : lower === 'pending'
          ? styles.pending
          : '';
          return <span className={className}>{value}</span>;
        },
      },
      { key: 'amount', header: 'AMOUNT(₦)', className: styles.alignRight },
  ];
  
  
  const data: Settlement[] = [
    { ref: '1', merchant: 'Vnicom Kitchen', status: 'Complete', amount: '400.00'},
    { ref: '2', merchant: 'Vnicom Solution', status: 'Complete', amount: '700.00'},
    { ref: '55', merchant: 'Xcico Recording studio', status: 'Pending', amount: '1400.00'},
    { ref: '23', merchant: 'Vnicom Kitchen', status: 'Complete', amount: '1000.00'},
    { ref: '5', merchant: 'Adexcico', status: 'Complete', amount: '400.00'},
    { ref: '1', merchant: 'Vnicom Kitchen', status: 'Complete', amount: '400.00'},
    { ref: '1', merchant: 'Vnicom Kitchen', status: 'Complete', amount: '400.00'},
    { ref: '1', merchant: 'Vnicom Kitchen', status: 'Complete', amount: '400.00'},
    { ref: '7', merchant: 'Vnicom Kitchen', status: 'Complete', amount: '400.00'},
    { ref: '1', merchant: 'Vnicom Kitchen', status: 'Complete', amount: '400.00'},
    { ref: '1', merchant: 'Vnicom Kitchen', status: 'Complete', amount: '400.00'},
    { ref: '1', merchant: 'Vnicom Kitchen', status: 'Complete', amount: '400.00'},
    { ref: '1', merchant: 'Vnicom Kitchen', status: 'Complete', amount: '400.00'},
    { ref: '18', merchant: 'Vnicom Kitchen', status: 'Complete', amount: '400.00'},
    { ref: '1', merchant: 'Vnicom Kitchen', status: 'Complete', amount: '400.00'},
    { ref: '1', merchant: 'Vnicom Kitchen', status: 'Complete', amount: '400.00'},
    { ref: '1', merchant: 'Vnicom Kitchen', status: 'Complete', amount: '400.00'},
    { ref: '1', merchant: 'Vnicom Kitchen', status: 'Complete', amount: '400.00'},
    { ref: '1', merchant: 'Vnicom Kitchen', status: 'Complete', amount: '400.00'},
  
 
    // Add more for pagination
  ];
  

function page() {
    
  return (
    <div>
      <h2>Settlements</h2>
      <div className={styles.cont}>

      <Table columns={columns} data={data} pageSize={10} searchable={true} filterKey="status"
  filterOptions={['Pending', 'Complete']}
  filterLabel="All"/>
  </div>
    </div>
  )
}

export default page