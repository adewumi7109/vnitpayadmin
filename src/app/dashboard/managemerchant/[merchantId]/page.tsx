"use client";
import React from "react";
import { useParams } from "next/navigation";
import styles from "./merchant.module.css";
import Button from "@/app/components/button/Button";

function page() {
  const params = useParams();
  const merchantId = params.merchantId;
  return (
    <div>
      <h2>Merchant Details</h2>
      <div className={styles.cont}>
        <div className={styles.left}>
          <div className={styles.col}>
            <div>Merchant ID:</div>
            <div>{merchantId}</div>
          </div>
          <div className={styles.col}>
            <div>Company Name:</div>
            <div>vnitpay Corp</div>
          </div>
          <div className={styles.col}>
            <div>Location:</div>
            <div>Magboro</div>
          </div>
          <div className={styles.col}>
            <div>IsActive:</div>
            <div>Yes</div>
          </div>
          <div className={styles.col}>
            <div>Contact Email:</div>
            <div>vnicomhub@gmail.com</div>
          </div>
          <div className={styles.col}>
            <div>Contact Phone:</div>
            <div>09157800332</div>
          </div>
        </div>
        <div className={styles.right}>
          <form>
            <div className={styles.formgroup}>
                <label htmlFor="location">Change Merchant Location</label>
                <select name="location">
                    <option value="">Select Location</option>
                    <option value="Vnicom">Vnicom</option>
                    <option value="Wise buyer">Wise buyer</option>
                    <option value="Wise buyer">Mountain top university</option>
                    <option value="Wise buyer">Convenant university</option>
                    <option value="Wise buyer">Gas Line</option>
                </select>
            </div>
            <Button title="Submit" onClick={()=> alert("hi")}/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default page;
