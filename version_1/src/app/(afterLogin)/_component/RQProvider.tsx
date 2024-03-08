'use client';

import React, { useState } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

type Props = {
  children: React.ReactNode;
};

function RQProvider({ children }: Props) {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        // react-query 전역 설정
        queries: {
          refetchOnWindowFocus: false, // 탭전환시 데이터 새로가져오기 false
          retryOnMount: true, // 컴포넌트 다시 마운트됫을때 데이터 새로가져오기 true
          refetchOnReconnect: false, // 인터넷 연결이 끈켯을때 데이터 새로가져오기 false
          retry: false, // 데이터 가져오기 실패했을때 데이터 다시 가져오기 false
        },
      },
    })
  );

  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={process.env.NEXT_PUBLIC_MODE === 'local'} />
    </QueryClientProvider>
  );
}

export default RQProvider;
