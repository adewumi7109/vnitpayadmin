'use client';

import React, { useState } from 'react';
import styles from './environmenttoggle.module.css';

const EnvironmentToggle = () => {
  const [active, setActive] = useState<'test' | 'live'>('test');

  return (
    <div className={styles.toggleWrapper}>
      <div className={styles.toggleContainer}>
        <div
          className={`${styles.toggleButton} ${
            active === 'test' ? styles.left : styles.right
          }`}
          
        />
        <button
        type="button" 
          className={`${styles.option} ${active === 'test' ? styles.active : ''}`}
          onClick={() => setActive('test')}
        >
          Test
        </button>
        <button
        type="button" 
          className={`${styles.option} ${active === 'live' ? styles.active : ''}`}
          onClick={() => setActive('live')}
        >
          Live
        </button>
      </div>
    </div>
  );
};

export default EnvironmentToggle;
