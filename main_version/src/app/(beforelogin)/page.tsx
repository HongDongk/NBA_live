import Main from '@/app/(beforelogin)/_component/Main';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await auth();
  // 로그인했으면 home으로 보냄
  if (session?.user) {
    redirect('/home');
  }
  return <Main />;
}
