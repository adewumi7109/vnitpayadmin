"use client";
import React, { useState } from "react";
import styles from "./merchant.module.css";

interface Merchant {
  MerchantId: string;
  CompanyName: string;
}

interface Props {
  onSelect: (merchant: Merchant) => void;
}

const MerchantForm: React.FC<Props> = ({ onSelect }) => {
  const companies: Merchant[] = [
 { MerchantId: "638725397990765491", CompanyName: "Time Logo" },
  { MerchantId: "638734137971037607", CompanyName: "Globex Inc" },
  { MerchantId: "638734137971037602", CompanyName: "Xcico" },
  { MerchantId: "638734137944037603", CompanyName: "Adewumi" },
  ];

  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = companies.find((c) => c.CompanyName === input);
    if (found) {
      onSelect(found);
    } else {
      alert("Merchant not found");
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Select a Merchant</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          list="company-list"
          placeholder="Select a merchant"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <datalist id="company-list">
          {companies.map((item, index) => (
  <option
    key={`${item.MerchantId}-${index}`}
    value={item.CompanyName}
  />
))}

        </datalist>

        <button type="submit" className={styles.submitButton}>
          Add Merchant
        </button>
      </form>
    </div>
  );
};

export default MerchantForm;
