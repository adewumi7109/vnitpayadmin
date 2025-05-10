"use client";
import React, { useState } from 'react';
import styles from './dashboard.module.css';
import Button from '@/app/components/button/Button';

const roles = ['Merchant', 'Support', 'Admin', 'Agent'];

const DashboardForm: React.FC = () => {
  const [formData, setFormData] = useState({
    amount: '',
    firstName: '',
    lastName: '',
    role: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // submit to API or backend here
  };

  return (
   <>
  
    
    <div className={styles.formContainer}>
    <h2 className={styles.title}>Paystack Top-up</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="amount">Amount</label>
          <input
            type="amount"
            id="amount"
            name="amount"
            placeholder="1000"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>

        

        <button type="submit" className={styles.submitButton}>Send</button>
      </form>
    </div>
   </>
  );
};

export default DashboardForm;
