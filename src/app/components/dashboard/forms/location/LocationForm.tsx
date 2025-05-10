"use client";
import React, { useState } from 'react';
import styles from './location.module.css';
import Button from '@/app/components/button/Button';

const roles = ['Merchant', 'Support', 'Admin', 'Agent'];

const LocationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    description: '',
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
    <h2 className={styles.title}>Add new location</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder=""
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder=""
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            placeholder=""
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        

        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </div>
   </>
  );
};

export default LocationForm;
