'use client';

import style from './logoutButton.module.css';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LogoutButton() {
  const router = useRouter();
  const { data: me } = useSession(); // 로그인 했을 경우 내정보 불러오기(클라이언트에서만!)

  const onLogout = () => {
    signOut({ redirect: false }).then(() => {
      router.replace('/');
    });
  };

  if (!me?.user) {
    return (
      <button className={style.logOutButton} onClick={onLogout}>
        <span>
          <Link href={'/'}>로그인 하러가기</Link>
        </span>
      </button>
    );
  }

  return (
    <button className={style.logOutButton} onClick={onLogout}>
      <div className={style.logOutUserImage}>
        <img src={me.user?.image as string} alt={me.user?.email as string} />
      </div>
      <div className={style.logOutUserName}>
        <div>{me.user?.name}</div>
        <div>@{me.user?.email}</div>
      </div>
    </button>
  );
}
