'use client';

import React, { useState } from 'react';
import styles from './login.module.css';
import Button from '../button/Button';
import { useRouter } from 'next/navigation';
import EnvironmentToggle from './toggle/EnvironmentToggle';
import { useApiEnv } from '@/app/context/ApiEnvContext';
import { createApiClient, endpoints } from '@/app/utils/axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 const router = useRouter();
const { apiBaseUrl } = useApiEnv();
 const handleClick = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!email || !password) {
    alert('Please enter email and password.');
    return;
  }

  try {
    const api = createApiClient(apiBaseUrl);
    const res = await api.post(endpoints.auth.login, {
      email,
      password,
    });

    // Handle login success — save token, etc.
    console.log('Login success:', res.data);
    
    router.push('/dashboard');
  } catch (err: any) {
    console.error('Login error:', err.response?.data || err.message);
    alert('Login failed. Please check your credentials.');
  }
};


  return (
    <div className={styles.cont}>
      <div className={styles.formCont}>
        <h2 className={styles.heading}><img src="/logo/vnitpay-full.svg" alt="" /></h2>
        <form onSubmit={handleClick}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
          <EnvironmentToggle/>
          Hi
          <div className={styles.buttonWrapper}>
            <Button title="Login" onClick={handleClick} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
