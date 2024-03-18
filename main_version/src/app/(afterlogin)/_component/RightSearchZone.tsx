'use client';

import style from './rightSearchZone.module.css';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import React from 'react';
import SearchForm from './SearchForm';

export default function RightSearchZone() {
  const router = useRouter();
  const pathname = usePathname(); // / 전까지 url주소 확인
  const searchParams = useSearchParams(); // 쿼리스트링 값 가져오기

  const onChangeFollow = () => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('follow', 'on');
    router.replace(`/search?${newSearchParams.toString()}`);
  };
  const onChangeAll = () => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete('follow');
    router.replace(`/search?${newSearchParams.toString()}`);
  };

  if (pathname === '/explore') {
    return null;
  }
  if (pathname === '/search') {
    return (
      <div>
        <h5 className={style.filterTitle}>검색 필터</h5>
        <div className={style.filterSection}>
          <div>
            <label>사용자</label>
            <div className={style.radio}>
              <div>모든 사용자</div>
              <input type="radio" name="pf" defaultChecked onChange={onChangeAll} />
            </div>
            <div className={style.radio}>
              <div>내가 팔로우하는 사람들</div>
              <input type="radio" name="pf" value="on" onChange={onChangeFollow} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div style={{ marginBottom: 60, width: 'inherit' }}>
      <SearchForm />
    </div>
  );
}
