import style from './home.module.css';
import Tab from '@/app/(afterLogin)/home/_component/Tab';
import TabProvider from '@/app/(afterLogin)/home/_component/TabProvider';
import PostForm from '@/app/(afterLogin)/home/_component/PostForm';
import Post from '@/app/(afterLogin)/_component/Post';
import { DehydratedState, HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { getPostRecommends } from './_lib/getPostRecommends';
import TabDecider from './_component/TabDecider';
import { Suspense } from 'react';
import Loading from '@/app/(afterLogin)/home/loading';

export default async function Home() {
  return (
    <div className={style.main}>
      <TabProvider>
        <Tab />
        <PostForm />
        <Suspense fallback={<Loading />}>
          <TabDecider />
        </Suspense>
      </TabProvider>
    </div>
  );
}
