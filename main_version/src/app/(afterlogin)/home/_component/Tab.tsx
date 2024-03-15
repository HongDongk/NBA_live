'use client';

import style from './tab.module.css';
import { useContext } from 'react';
import { TabContext } from '@/app/(afterlogin)/home/_component/TabProvider';

export default function Tab() {
  const { tab, setTab } = useContext(TabContext);

  const onClickNew = () => {
    setTab('new');
  };
  const onClickRec = () => {
    setTab('recommend');
  };
  const onClickFol = () => {
    setTab('follow');
  };

  return (
    <div className={style.homeFixed}>
      <div className={style.homeTab}>
        <div onClick={onClickNew}>
          최신<div className={style.tabIndicator} hidden={tab === 'recommend' || tab === 'follow'}></div>
        </div>
        <div onClick={onClickRec}>
          추천<div className={style.tabIndicator} hidden={tab === 'new' || tab === 'follow'}></div>
        </div>
        <div onClick={onClickFol}>
          팔로우 중<div className={style.tabIndicator} hidden={tab === 'new' || tab === 'recommend'}></div>
        </div>
      </div>
    </div>
  );
}
