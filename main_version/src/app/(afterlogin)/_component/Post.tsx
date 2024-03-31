import style from './post.module.css';
import Link from 'next/link';
import { useContext } from 'react';
import { TabContext } from '@/app/(afterlogin)/home/_component/TabProvider';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import ActionButtons from './ActionButtons';
import PostArticle from './PostArticle';
import { faker } from '@faker-js/faker';
import PostImages from './PostImages';

dayjs.locale('ko');
dayjs.extend(relativeTime);

type Props = {
  noImage?: boolean;
};

export default function Post({ noImage }: Props) {
  let tab = 'new';
  const target = {
    postId: 1,
    User: {
      id: 'dongkeun',
      nickname: 'DK',
      image: 'icon.jpg',
    },
    content: '임시 컨텐츠',
    createdAt: new Date(),
    Images: [] as any[],
  };
  if (Math.random() > 0.5 && !noImage) {
    target.Images.push(
      { imageId: 1, link: faker.image.urlLoremFlickr() },
      { imageId: 2, link: faker.image.urlLoremFlickr() },
      { imageId: 3, link: faker.image.urlLoremFlickr() },
      { imageId: 4, link: faker.image.urlLoremFlickr() }
    );
  }

  if (tab === 'new') {
    return (
      <PostArticle post={target}>
        <div className={style.postWrapper}>
          <div className={style.postUserSection}>
            <Link href={`/${target.User.id}`} className={style.postUserImage}>
              <img src={target.User.image} alt={target.User.nickname} />
              <div className={style.postShade} />
            </Link>
          </div>
          <div className={style.postBody}>
            <div className={style.postMeta}>
              <Link href={`/${target.User.id}`}>
                <span className={style.postUserName}>{target.User.nickname}</span>
                &nbsp;
                <span className={style.postUserId}>@{target.User.id}</span>
                &nbsp; · &nbsp;
              </Link>
              <span className={style.postDate}>{dayjs(target.createdAt).fromNow(true)}</span>
            </div>
            <div>{target.content}</div>
            <div>
              <PostImages post={target} />
            </div>
            <ActionButtons />
          </div>
        </div>
      </PostArticle>
    );
  }
  if (tab === 'recommend') {
    return <div className={style.temp}>추천게시글 {dayjs(target.createdAt).fromNow(true)}</div>;
  }
  if (tab === 'follow') {
    return <div className={style.temp}>팔로잉 게시글 {dayjs(target.createdAt).fromNow(true)}</div>;
  }
}
