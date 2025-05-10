import React from "react";
import styles from "./card.module.css";

interface CardProps {
  title: string;
  amount: string;
  icon: React.ReactNode;
}

function Card({ title, amount, icon }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <div className={styles.shadow}>
        {icon}
        </div>
      </div>
      <div className={styles.cardCont}>
        <div className={styles.title}>{title}</div>
        <div className={styles.amount}>{amount}</div>
      </div>
    </div>
  );
}

export default Card;
