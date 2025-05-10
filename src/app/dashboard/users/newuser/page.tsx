"use client";
import React, { useState } from "react";
import styles from "./newuser.module.css";
import Button from "@/app/components/button/Button";
import MerchantForm from "@/app/components/dashboard/forms/merchant/MerchantForm";
import { useModal } from "@/app/context/ModalContext";

const roles = ["Merchant", "Support", "Admin", "Agent"];

interface Merchant {
  MerchantId: number;
  CompanyName: string;
}

const NewUserForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    role: "",
  });

  const [merchants, setMerchants] = useState<Merchant[]>([]);
  const { showModal, hideModal } = useModal();

const handleMerchantSelect = (merchant: Merchant) => {
  const exists = merchants.some((m) => m.MerchantId === merchant.MerchantId);

  if (exists) {
    alert(`Merchant "${merchant.CompanyName}" is already added.`);
    return;
  }

  setMerchants((prev) => [...prev, merchant]);
  hideModal();
};


  const toggleModal = (e: React.FormEvent) => {
    e.preventDefault();
    showModal(<MerchantForm onSelect={handleMerchantSelect} />);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRemoveMerchant = (merchantId: number) => {
    setMerchants((prev) => prev.filter(m => m.MerchantId !== merchantId));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("User Data:", formData);
    console.log("Merchants:", merchants);
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Create New User</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Form Inputs */}
        <div className={styles.formGroup}>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className={styles.formGroup}>
          <label>First Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>

        <div className={styles.formGroup}>
          <label>Last Name</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>

        <div className={styles.formGroup}>
          <label>Role</label>
          <select name="role" value={formData.role} onChange={handleChange} required>
            <option value="">Select Role</option>
            {roles.map((role) => (
              <option key={role} value={role}>{role}</option>
            ))}
          </select>
        </div>

        <div>
          <Button title="Add Merchant +" onClick={toggleModal} />
        </div>

        {merchants.length > 0 && (
          <div style={{ marginTop: "1rem" }}>
            <h4>Selected Merchants</h4>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Merchant ID</th>
                  <th>Merchant Name</th>
                  <th>Make Admin</th>
                  <th>Action</th>
                </tr>
              </thead>
            <tbody>
  {merchants.map((merchant) => (
    <tr key={merchant.MerchantId}>
      <td>{merchant.MerchantId}</td>
      <td>{merchant.CompanyName}</td>
      <td>
        <input type="checkbox" />
      </td>
      <td>
        <button
          className={styles.removeButton}
          onClick={() =>
            setMerchants((prev) =>
              prev.filter((m) => m.MerchantId !== merchant.MerchantId)
            )
          }
        >
          Remove
        </button>
      </td>
    </tr>
  ))}
</tbody>

            </table>
          </div>
        )}

        <button type="submit" className={styles.submitButton}>Create User</button>
      </form>
    </div>
  );
};

export default NewUserForm;