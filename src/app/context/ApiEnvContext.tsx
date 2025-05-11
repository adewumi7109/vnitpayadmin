'use client';
import React, { createContext, useContext, useState } from 'react';

type ApiEnv = 'test' | 'live';

interface ApiEnvContextType {
  apiEnv: ApiEnv;
  apiBaseUrl: string;
  setApiEnv: (env: ApiEnv) => void;
}

const ApiEnvContext = createContext<ApiEnvContextType | undefined>(undefined);

export const ApiEnvProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [apiEnv, setApiEnv] = useState<ApiEnv>('test');

  const apiBaseUrl = apiEnv === 'test'
    ? process.env.NEXT_PUBLIC_API_TEST!
    : process.env.NEXT_PUBLIC_API_LIVE!;

  return (
    <ApiEnvContext.Provider value={{ apiEnv, setApiEnv, apiBaseUrl }}>
      {children}
    </ApiEnvContext.Provider>
  );
};

export const useApiEnv = (): ApiEnvContextType => {
  const context = useContext(ApiEnvContext);
  if (!context) throw new Error('useApiEnv must be used within ApiEnvProvider');
  return context;
};
