// 클라이언트에서 로그인하기 (서버액션 X)
'use client';

import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { redirect, useRouter } from 'next/navigation';
import styles from './main.module.css';
import Image from 'next/image';
import mainimg from '../../../../public/mainimg.png';
import Link from 'next/link';
import { signIn } from 'next-auth/react'; // 클라이언트에서 처리할 때는 next-auth/react사용 (서버액션X)

export default function Main() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!id.trim() || !password.trim()) {
      setMessage('올바른 형식을 입력해주세요');
      return;
    }
    setMessage('');
    try {
      await signIn('credentials', {
        username: id,
        password,
        redirect: false, // 클라이언트로 할꺼니깐 서버 redirect X
      });
      router.replace('/home'); // router.replace : 뒤로가기 누르면 전전페이지로 돌아감(로그인시 유용)
    } catch (err) {
      console.error(err);
      setMessage('아이디와 비밀번호가 일치하지 않습니다.');
    }
  };

  const onChangeId: ChangeEventHandler<HTMLInputElement> = (e) => {
    setId(e.target.value);
  };
  const onChangePassword: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image src={mainimg} alt="logo" className={styles.mainimg} />
      </div>
      <div className={styles.right}>
        <h1>NBA 팬이라면</h1>
        <h2>지금 함께하세요.</h2>
        <form onSubmit={onSubmit}>
          <div className={styles.formContent}>
            <input id="id" className={styles.input} value={id} onChange={onChangeId} type="text" placeholder="아이디" required />
            <input
              id="password"
              className={styles.input}
              value={password}
              onChange={onChangePassword}
              type="password"
              placeholder="비밀번호"
              required
            />
            <div className={styles.errmessage}>{message}</div>
            <button className={styles.loginButton} disabled={!id && !password}>
              로그인
            </button>
          </div>
        </form>
        <div className={styles.signbox}>
          <span>아직 회원이 아닌신가요? &nbsp;&nbsp;&nbsp;</span>
          <Link href="/account/signup" className={styles.signupLink}>
            계정 만들기
          </Link>
        </div>
      </div>
    </div>
  );
}
