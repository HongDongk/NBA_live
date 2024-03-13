// catch-all 라우트 => 모든 주소를 캐치한다
// app/shop/[…slug]/page.tsx와 같은 폴더 구조가 있다면 /shop/hello, /shop/hi, /shop/say/good/bye  모두 app/shop/[…slug]/page.tsx를 실행시킨다. 단 page.tsx에서 params는 각각 { slug: [’hello’] }, { slug: [’hi’] }, { slug: [’say’, ‘good’, ‘bye] }가 된다.
// app/api/auth/[…nextAuth]/route.ts를 만들어 auth.ts의 GET, POST를 import하면, /api/auth를 통해 들어오는 GET, POST 요청은 모두 next auth가 관리하게 된다.

export { GET, POST } from '@/auth';
