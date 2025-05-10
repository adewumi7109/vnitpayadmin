"use client"
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useModal } from '@/app/context/ModalContext';
import styles from './GlobalModal.module.css';

const GlobalModal = () => {
  const { modalContent, isVisible, hideModal } = useModal();
  const modalRef = useRef<HTMLDivElement>(null);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShowAnimation(true);
      document.body.style.overflow = 'hidden';
    } else {
      setShowAnimation(false);
      document.body.style.overflow = '';
    }
  }, [isVisible]);

  // Detect click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        hideModal();
      }
    };

    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible, hideModal]);

  if (!isVisible) return null;

  return createPortal(
    <div className={`${styles.overlay} ${showAnimation ? styles.show : ''}`}>
      <div className={`${styles.modal} ${showAnimation ? styles.show : ''}`} ref={modalRef}>
        <button onClick={hideModal} className={styles.close}>&times;</button>
        {modalContent}
      </div>
    </div>,
    document.body
  );
};

export default GlobalModal;
