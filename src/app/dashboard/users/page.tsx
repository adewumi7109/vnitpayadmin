"use client"
import React from 'react'
import styles from './users.module.css'
import { Table, Column } from '@/app/components/table/Table';
import { ReactNode } from 'react';
import Button from '@/app/components/button/Button';
import { useRouter } from 'next/navigation';

type Users = {
    name: string;
    email: string;
    email_confirmation: string | ReactNode;
    account_locked: string;
    role: string;

  };
  
  const columns: Column<Users>[] = [
    { key: 'name', header: 'NAME' },
    { key: 'email', header: 'EMAIL' },
    { key: 'email_confirmation', header: 'EMAIL CONFIRMED' },
    { key: 'account_locked', header: 'ACCOUNT LOCKED' },
    { key: 'role', header: 'ROLE' },



  ];
  
  
  const data: Users[] = [
    {name: 'Vnicom solution', email: 'vnicomhub@gmail.com', email_confirmation: 'True', account_locked: 'false', role: 'Admin'},
    {name: 'Vnicom solution', email: 'vnicomhub@gmail.com', email_confirmation: 'True', account_locked: 'false', role: 'Admin'},
    {name: 'Vnicom solution', email: 'vnicomhub@gmail.com', email_confirmation: 'True', account_locked: 'false', role: 'Admin'},
    {name: 'Vnicom solution', email: 'vnicomhub@gmail.com', email_confirmation: 'True', account_locked: 'false', role: 'Admin'},
    {name: 'Vnicom solution', email: 'vnicomhub@gmail.com', email_confirmation: 'True', account_locked: 'false', role: 'Admin'},
    {name: 'Vnicom solution', email: 'vnicomhub@gmail.com', email_confirmation: 'True', account_locked: 'false', role: 'Admin'},
    {name: 'Vnicom solution', email: 'vnicomhub@gmail.com', email_confirmation: 'True', account_locked: 'false', role: 'Admin'},
    {name: 'Vnicom solution', email: 'vnicomhub@gmail.com', email_confirmation: 'True', account_locked: 'false', role: 'Admin'},
    {name: 'Vnicom solution', email: 'vnicomhub@gmail.com', email_confirmation: 'True', account_locked: 'false', role: 'Admin'},
    {name: 'Vnicom solution', email: 'vnicomhub@gmail.com', email_confirmation: 'True', account_locked: 'false', role: 'Admin'},
    {name: 'Vnicom solution', email: 'vnicomhub@gmail.com', email_confirmation: 'True', account_locked: 'false', role: 'Admin'},
    {name: 'Vnicom solution', email: 'vnicomhub@gmail.com', email_confirmation: 'True', account_locked: 'false', role: 'Admin'},
    {name: 'Vnicom solution', email: 'vnicomhub@gmail.com', email_confirmation: 'True', account_locked: 'false', role: 'Admin'},
  ];
  

function page() {

     const router = useRouter();
   const handleClick = ()=>{
     router.push('/dashboard/users/newuser');
   }
    
  return (
    <div>
      <h2>Users</h2>
      <div style={{ marginTop: '20px'}}>
        <Button title='New User +' onClick={handleClick}/>
      </div>
      <div className={styles.cont}>

      <Table columns={columns} data={data} pageSize={10} searchable={true}/>
      </div>
    </div>
  )
}

export default page