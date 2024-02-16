'use client';

// Context API 상태관리
import { createContext, ReactNode, useState } from 'react';

export const TabContext = createContext({
  tab: 'recommend', // 기본값
  setTab: (value: 'recommend' | 'follow') => {},
});

export default function TabProvider({ children }: { children: ReactNode }) {
  const [tab, setTab] = useState('recommend');
  return <TabContext.Provider value={{ tab, setTab }}>{children}</TabContext.Provider>;
}
