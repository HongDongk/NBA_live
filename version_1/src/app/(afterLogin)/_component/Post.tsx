'use client';

import style from './post.module.css';
import Link from 'next/link';
// import 'dayjs/locale/ko';
import { useContext } from 'react';
import { TabContext } from '@/app/(afterLogin)/home/_component/TabProvider';

export default function Post() {
  const level = useContext(TabContext);
  console.log(level);

  return <div>게시글{level.tab}</div>;
}
