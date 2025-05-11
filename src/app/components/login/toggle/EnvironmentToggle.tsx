'use client';

import React, { useState } from 'react';
import styles from './environmenttoggle.module.css';
import { useApiEnv } from '@/app/context/ApiEnvContext';

const EnvironmentToggle = () => {
  const { apiEnv, setApiEnv } = useApiEnv();
  const [active, setActive] = useState<'test' | 'live'>(apiEnv);

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
          onClick={() => {
            setActive('test');
            setApiEnv('test');
          }}
        >
          Test
        </button>
        <button
          type="button"
          className={`${styles.option} ${active === 'live' ? styles.active : ''}`}
          onClick={() => {
            setActive('live');
            setApiEnv('live');
          }}
        >
          Live
        </button>
      </div>
    </div>
  );
};

export default EnvironmentToggle;
