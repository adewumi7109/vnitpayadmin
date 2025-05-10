import React from 'react'
import styles from './button.module.css'
interface ButtonProps {
    title: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  } 
function Button({title, onClick}:ButtonProps) {
  return (
    <button type="button" className={styles.button} onClick={onClick}>{title}</button>
  )
}

export default Button