// Context API(클라이언트 상태관리) 파일
'use client';

import { createContext, ReactNode, useState } from 'react';

export const TabContext = createContext({
  tab: 'new', // 기본 값
  setTab: (value: 'new' | 'recommend' | 'follow') => {},
});

type Props = { children: ReactNode };

export default function TabProvider({ children }: Props) {
  const [tab, setTab] = useState('new');

  return <TabContext.Provider value={{ tab, setTab }}>{children}</TabContext.Provider>;
}
