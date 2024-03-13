import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials'; // 기본 로그인 방식(네이버,카카오등은 import해주면됌)
import { NextResponse } from 'next/server';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
} = NextAuth({
  pages: {
    signIn: '/', // 로그인 창은 직접만든 로그인화면으로 설정
    newUser: '/account/signup', // 회원가입 창은 직접만든 회원가입화면으로 설정
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        // 로그인시 호출
        const authResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: credentials.username,
            password: credentials.password,
          }),
        });

        if (!authResponse.ok) {
          return '에러';
        }

        const user = await authResponse.json();
        console.log('user', user); // 로그인한 사람 정보가져오기
        return {
          email: user.id,
          name: user.nickname,
          image: user.image,
          ...user,
        };
      },
    }),
    // 추후 소셜로그인 provider추가...
  ],
});
