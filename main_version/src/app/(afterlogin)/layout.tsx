import { ReactNode } from 'react';
import { auth } from '@/auth';
import style from '@/app/(afterLogin)/layout.module.css';
import Link from 'next/link';
import Image from 'next/image';
import MainLogo from '../../../public/logo.png';
import LogoutButton from '@/app/(afterlogin)/_component/LogoutButton';
import NavMenu from './_component/NavMenu';

type Props = { children: ReactNode; modal: ReactNode };

export default async function AfterLoginLayout({ children, modal }: Props) {
  const session = await auth();
  return (
    <div className={style.container}>
      <header className={style.HeadSectionWrapper}>
        <nav>
          <ul>
            <NavMenu />
          </ul>
        </nav>
        <Link className={style.logo} href={session?.user ? '/home' : '/'}>
          <Image src={MainLogo} alt="nbaLive.com 로고" width={300} height={55} />
        </Link>
        <LogoutButton />
      </header>
      {children}
    </div>
  );
}
