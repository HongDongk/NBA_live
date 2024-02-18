import style from './post.module.css';
import Link from 'next/link';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import ActionButtons from '@/app/(afterLogin)/_component/ActionButtons';
// import PostArticle from "@/app/(afterLogin)/_component/PostArticle";
// import PostImages from "@/app/(afterLogin)/_component/PostImages";
// import {Post} from "@/model/Post";

dayjs.locale('ko');
dayjs.extend(relativeTime);

const me = {
  // 임시로 내 정보 있는것처럼
  id: 'hongdongk',
  nickname: 'Jisoo',
  image: '/icon.jpg',
};

export default function Post() {
  return (
    <div>
      <div className={style.postWrapper}>
        <div className={style.postUserSection}>
          <Link href={`/`} className={style.postUserImage}>
            <img src={me.image} alt={me.nickname} />
            <div className={style.postShade} />
          </Link>
        </div>
        <div className={style.postBody}>
          <div className={style.postMeta}>
            <Link href={`/`}>
              <span className={style.postUserName}>{me.nickname}</span>
              &nbsp;
              <span className={style.postUserId}>@{me.id}</span>
              &nbsp; · &nbsp;
            </Link>
            <span className={style.postDate}>{dayjs().fromNow(true)}</span>
          </div>
          {/* <div>{target.content}</div>
          {!noImage && <div>
            <PostImages post={target} />
          </div> */}
          <ActionButtons />
        </div>
      </div>
    </div>
  );
}
