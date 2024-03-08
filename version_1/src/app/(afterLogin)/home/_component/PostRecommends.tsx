'use client';

import { InfiniteData, useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { getPostRecommends } from '@/app/(afterLogin)/home/_lib/getPostRecommends';
import Post from '@/app/(afterLogin)/_component/Post';
import { Post as IPost } from '@/model/Post';
import { Fragment, useEffect } from 'react';
// mport { useInView } from 'react-intersection-observer';
import styles from '@/app/(afterLogin)/home/home.module.css';

export default function PostRecommends() {
  const { data } = useQuery<IPost[]>({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends,
    staleTime: 60 * 1000, // 1분동안은 fresh상태(새로고침해도 캐쉬에 저장한걸로 데이터 불러옴)로 유지
    gcTime: 80 * 1000, // 컴포넌트가 안보이는경우 캐쉬에 저장된 컴포넌트와 관련한 데이터가 사라지는 시간(gcTime은 staleTime보다 커야됌)
  });

  return data?.map((post) => <Post key={post.postId} post={post} />);
}
