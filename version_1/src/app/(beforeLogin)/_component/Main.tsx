import styles from './main.module.css';
import Image from 'next/image';
import main from '../../../../public/main.jpg';
import mainlogo from '../../../../public/mainlogo.webp';
import Link from 'next/link';

export default function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Image src={mainlogo} className={styles.mainlogoimg} alt="logo" />
      </div>
      <div className={styles.left}>
        <Image src={main} alt="logo" className={styles.mainimg} />
      </div>
      <div className={styles.right}>
        <h1>NBA 팬이라면</h1>
        <h2>지금 가입하세요.</h2>
        <div className={styles.loginbox}>
          <Link href="/account/login" className={styles.login}>
            로그인
          </Link>
          <Link href="/account/signup" className={styles.signup}>
            계정 만들기
          </Link>
        </div>
      </div>
    </div>
  );
}
