"use client"
import React from 'react'
import styles from './accountsummaries.module.css'
import { Table, Column } from '@/app/components/table/Table';
import { ReactNode } from 'react';

type Accountsummaries = {
    code: string;
    merchant: string | ReactNode;
    voucher: string;
    credit: string;
    debit: string;
    net: string;
    className?: string;

  };
  
  const columns: Column<Accountsummaries>[] = [
    { key: 'code', header: 'ACCOUNT CODE' },
    { key: 'merchant', header: 'COMPANY NAME'},
    { key: 'voucher', header: 'VOUCHER BALANCE(₦)', className: styles.alignRight },
    { key: 'credit', header: 'CREDIT BALANCE(₦)', className: styles.alignRight },
    { key: 'debit', header: 'DEBIT BALANCE(₦)', className: styles.alignRight },
    { key: 'net', header: 'NET BALANCE(₦)', className: styles.alignRight },

  ];
  
  
  const data: Accountsummaries[] = [
    {code:'638693133934511423', merchant: 'Vnicom Solution', voucher: '3,981,104.00', credit: '4,245,450.69', debit: '4,245,450.69', net: '-0.50' },
    {code:'738693133934511423', merchant: 'Vnicom Kitchen', voucher: '3,981,104.00', credit: '4,245,450.69', debit: '4,245,450.69', net: '-0.50' },
    {code:'38693133934511423', merchant: 'xcico Recording Studio', voucher: '3,981,104.00', credit: '4,245,450.69', debit: '4,245,450.69', net: '-0.50' },
    {code:'638693133934511423', merchant: 'Vnicom Solution', voucher: '3,981,104.00', credit: '4,245,450.69', debit: '4,245,450.69', net: '-0.50' },
    {code:'638693133964511423', merchant: 'Vnicom Solution', voucher: '3,981,104.00', credit: '4,245,450.69', debit: '4,245,450.69', net: '-0.50' },
    {code:'638645664511423', merchant: 'Vnicom Solution', voucher: '3,981,104.00', credit: '4,245,450.69', debit: '4,245,450.69', net: '-0.50' },
    {code:'638697773934511423', merchant: 'Vnicom Solution', voucher: '3,981,104.00', credit: '4,245,450.69', debit: '4,245,450.69', net: '-0.50' },
    {code:'638693133934511423', merchant: 'Vnicom Solution', voucher: '3,981,104.00', credit: '4,245,450.69', debit: '4,245,450.69', net: '-0.50' },
    {code:'638693133934511423', merchant: 'Vnicom Solution', voucher: '3,981,104.00', credit: '4,245,450.69', debit: '4,245,450.69', net: '-0.50' },
    {code:'638693133934511423', merchant: 'Vnicom Solution', voucher: '3,981,104.00', credit: '4,245,450.69', debit: '4,245,450.69', net: '-0.50' },
    {code:'638693133934511423', merchant: 'Vnicom Solution', voucher: '3,981,104.00', credit: '4,245,450.69', debit: '4,245,450.69', net: '-0.50' },
    {code:'638693133934511423', merchant: 'Vnicom Solution', voucher: '3,981,104.00', credit: '4,245,450.69', debit: '4,245,450.69', net: '-0.50' },
    {code:'638693133934511423', merchant: 'Vnicom Solution', voucher: '3,981,104.00', credit: '4,245,450.69', debit: '4,245,450.69', net: '-0.50' },
    {code:'638693133934511423', merchant: 'Vnicom Solution', voucher: '3,981,104.00', credit: '4,245,450.69', debit: '4,245,450.69', net: '-0.50' },
    {code:'638693133934511423', merchant: 'Vnicom Solution', voucher: '3,981,104.00', credit: '4,245,450.69', debit: '4,245,450.69', net: '-0.50' },
    {code:'638693133934511423', merchant: 'Vnicom Solution', voucher: '3,981,104.00', credit: '4,245,450.69', debit: '4,245,450.69', net: '-0.50' },
    {code:'638693133934511423', merchant: 'Vnicom Solution', voucher: '3,981,104.00', credit: '4,245,450.69', debit: '4,245,450.69', net: '-0.50' },
    {code:'638693133934511423', merchant: 'Vnicom Solution', voucher: '3,981,104.00', credit: '4,245,450.69', debit: '4,245,450.69', net: '-0.50' },
  ];
  

function page() {
    
  return (
    <div>
      <h2>Account Summaries</h2>
      <div className={styles.cont}>
      <Table columns={columns} data={data} pageSize={10} searchable={true}/>

      </div>
    </div>
  )
}

export default page