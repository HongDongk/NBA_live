'use client';

import style from './profile.module.css';
import { signOut, useSession } from 'next-auth/react';

type Props = {
  params: { username: string };
};

export default function Profile({ params }: Props) {
  const { data: me } = useSession();
  if (!me?.user) {
    return null;
  }
  return (
    <>
      <div>닉네임 : {me.user?.name}</div>
      <div>/아이디: @{me.user?.email}</div>
    </>
  );
}
