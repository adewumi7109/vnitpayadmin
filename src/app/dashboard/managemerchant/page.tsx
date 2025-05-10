"use client"
import React from 'react'
import styles from './managemerchant.module.css'
import { Table, Column } from '@/app/components/table/Table';
import { ReactNode } from 'react';
import Link from 'next/link';
import Button from '@/app/components/button/Button';
import LocationForm from '@/app/components/dashboard/forms/location/LocationForm';
import { useModal } from '@/app/context/ModalContext';

type Managemerchants = {
    id: string | ReactNode;
    merchant: string ;
    email: string;
    description: string;

  };
  
  const columns: Column<Managemerchants>[] = [
    { key: 'id', header: 'MERCHANT ID' },
    { key: 'merchant', header: 'MERCHANT NAME'},
    { key: 'email', header: 'CONTACT EMAIL'},
    { key: 'description', header: 'DESCRIPTION'},


  ];
  
  
  const data: Managemerchants[] = [
    {id:<Link className={styles.link} href='managemerchant/638527552837100001'>638527552837100001</Link>, merchant: 'Vnicom Solution', email: 'vnicom@gmail.com', description: 'smart payment'},
    {id:<Link className={styles.link} href='managemerchant/638527552837100001'>638693133934511423</Link>, merchant: 'vnitpay Corp', email: 'com@gmail.com', description: 'smart payment'},
   {id:<Link className={styles.link} href='managemerchant/638527552837100001'>638693138136019105</Link>, merchant: 'Vnicom Kitchen', email: 'vnicomkitchen@gmail.com', description: 'Vnicom Kitchen'},
   {id:<Link className={styles.link} href='managemerchant/638527552837100001'>638693436625367765</Link>, merchant: 'Tech Hub', email: 'vnicomtechhub@gmail.com', description: 'Tech Hub '},
   {id:<Link className={styles.link} href='managemerchant/638527552837100001'>638527552837100001</Link>, merchant: 'Vnicom Solution', email: 'vnicom@gmail.com', description: 'smart payment'},
   {id:<Link className={styles.link} href='managemerchant/638527552837100001'>638527552837100001</Link>, merchant: 'Vnicom Solution', email: 'vnicom@gmail.com', description: 'smart payment'},
   {id:<Link className={styles.link} href='managemerchant/638527552837100001'>638527552837100001</Link>, merchant: 'Vnicom Solution', email: 'vnicom@gmail.com', description: 'smart payment'},
   {id:<Link className={styles.link} href='managemerchant/638527552837100001'>638527552837100001</Link>, merchant: 'Vnicom Solution', email: 'vnicom@gmail.com', description: 'smart payment'},
   {id:<Link className={styles.link} href='managemerchant/638527552837100001'>638527552837100001</Link>, merchant: 'Vnicom Solution', email: 'vnicom@gmail.com', description: 'smart payment'},
  ];
  

function page() {
   const { showModal } = useModal();
  const toggleModal = () => {
   showModal(<LocationForm/>);
  };

 
    
  return (
    <div>
      <h2>Manage Merchants</h2>
        <div  style={{marginTop: '20px'}}>
        <Button onClick={toggleModal} title="New Location" />

        </div>
        <div className={styles.cont}>

      <Table columns={columns} data={data} pageSize={10} searchable={true}/>
        </div>
    </div>
  )
}

export default page