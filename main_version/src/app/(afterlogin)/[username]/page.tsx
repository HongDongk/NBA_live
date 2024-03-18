'use client';

import style from './profile.module.css';
import { signOut, useSession } from 'next-auth/react';
import Post from '../_component/Post';
import BackButton from '../_component/BackButton';

type Props = {
  params: { username: string };
};

export default function Profile({ params }: Props) {
  const { data: me } = useSession();
  if (!me?.user) {
    return null;
  }
  return (
    <main className={style.main}>
      <div className={style.header}>
        <BackButton />
        <h3 className={style.headerTitle}>{me.user?.name}</h3>
      </div>
      <div className={style.userZone}>
        <div className={style.userImage}>
          <img src={me.user?.image as string} alt={me.user?.name as string} />
        </div>
        <div className={style.userName}>
          <div>{me.user?.name}</div>
          <div>@{me.user?.email}</div>
        </div>
        <button className={style.followButton}>팔로우</button>
      </div>
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  );
}
