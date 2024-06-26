import style from './singlePost.module.css';
import CommentForm from './_component/CommentForm';
import Post from '@/app/(afterlogin)/_component/Post';
import BackButton from '@/app/(afterlogin)/_component/BackButton';

export default function SinglePost() {
  return (
    <div className={style.main}>
      <div className={style.header}>
        <BackButton />
        <h3 className={style.headerTitle}>게시하기</h3>
      </div>
      <Post />
      <CommentForm />
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
