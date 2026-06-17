'use client';
import React, { createContext, useContext, useState } from 'react';

type AppContextType = {
  isReady: boolean;
  setReady: (val: boolean) => void;
};

const AppContext = createContext<AppContextType>({
  isReady: false,
  setReady: () => {},
});

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [isReady, setReady] = useState(false);
  return (
    <AppContext.Provider value={{ isReady, setReady }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

export function useAppReady() {
  return useContext(AppContext).isReady;
}
