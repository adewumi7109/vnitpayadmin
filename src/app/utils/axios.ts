// lib/axios.ts
import axios from 'axios';

export const endpoints = {
  auth: {
    login: '/auth/login',
  },
};

export const createApiClient = (baseURL: string) => {
  const instance = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true, 
  });

  
  instance.interceptors.response.use(
    response => response,
    error => {
      return Promise.reject(error);
    }
  );

  return instance;
};
