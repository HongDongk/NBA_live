import { ReactNode } from 'react';
import { auth } from '@/auth';
import style from '@/app/(afterLogin)/layout.module.css';
import Link from 'next/link';
import Image from 'next/image';
import MainLogo from '../../../public/icon.jpg';
import LogoutButton from '@/app/(afterlogin)/_component/LogoutButton';

type Props = { children: ReactNode; modal: ReactNode };

export default async function AfterLoginLayout({ children, modal }: Props) {
  const session = await auth();
  return (
    <div className={style.container}>
      <header className={style.leftSectionWrapper}>
        <section className={style.leftSection}>
          <div className={style.leftSectionFixed}>
            <Link className={style.logo} href={session?.user ? '/home' : '/'}>
              <div className={style.logoPill}>
                <Image src={MainLogo} alt="nbaLive.com 로고" width={40} height={40} />
              </div>
            </Link>
            {session?.user && (
              <>
                <LogoutButton />
              </>
            )}
          </div>
        </section>
      </header>
      {children}
    </div>
  );
}
