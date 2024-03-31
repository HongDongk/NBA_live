'use client';

import { ReactNode } from 'react';
import style from './post.module.css';
import { useRouter } from 'next/navigation';

type Props = {
  children: ReactNode;
  post: {
    postId: number;
    content: string;
    User: {
      id: string;
      nickname: string;
      image: string;
    };
    createdAt: Date;
    Images: any[];
  };
};

export default function PostArticle({ children, post }: Props) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/${post.User.id}/status/${post.postId}`);
  };

  return (
    // onClick이 두개여서 겹칠 때 onClickCapture로 사용가능
    <article onClickCapture={onClick} className={style.post}>
      {children}
    </article>
  );
}
