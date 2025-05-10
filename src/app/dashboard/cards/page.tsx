"use client"
import React from 'react'
import styles from './cards.module.css'
import { Table, Column } from '@/app/components/table/Table';
import { ReactNode } from 'react';

type Cards = {
    name: string;
    status: string | ReactNode;
    email: string;
    limit: string;

  };
  
  const columns: Column<Cards>[] = [
    { key: 'name', header: 'NAME' },
    { key: 'status', header: 'STATUS'},
    { key: 'email', header: 'EMAIL'},
    { key: 'limit', header: 'LIMIT(₦)', className: styles.alignRight },


  ];
  
  
  const data: Cards[] = [
    {name:'Ogunsanya', status: 'Registered', email: 'Ogunsano@gmail.com', limit: '100,000.00'},
    {name:'Dev Stephen', status: 'Opened', email: 'devstephen@gmail.com', limit: '300,000.00'},
    {name:'Adexcico', status: 'Registered', email: 'xcico@gmail.com', limit: '500,000.00'},
    {name:'Ogunsanya', status: 'Registered', email: 'Ogunsano@gmail.com', limit: '100,000.00'},
    {name:'Ogunsanya', status: 'Registered', email: 'Ogunsano@gmail.com', limit: '100,000.00'},
    {name:'Ogunsanya', status: 'Registered', email: 'Ogunsano@gmail.com', limit: '100,000.00'},
  ];
  

function page() {
    
  return (
    <div>
      <h2>Cards</h2>
      <div className={styles.cont}>

      <Table columns={columns} data={data} pageSize={10} searchable={true} filterKey="status"
  filterOptions={['Registered', 'Opened', 'Activated', 'Blocked', 'Deactivated']}
  filterLabel="All"/>
  </div>
    </div>
  )
}

export default page