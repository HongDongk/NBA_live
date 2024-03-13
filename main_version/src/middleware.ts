import { auth } from './auth';
import { NextResponse } from 'next/server';

export async function middleware() {
  const session = await auth();
  if (!session) {
    return NextResponse.redirect('http://localhost:3000');
  }
}

// 로그인을 해야만 접근가능한 페이지 설정
export const config = {
  matcher: ['/home'],
};
