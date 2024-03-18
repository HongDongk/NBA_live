import style from './search.module.css';
import Post from '../_component/Post';
import Tab from './_component/Tab';
import BackButton from '../_component/BackButton';
import SearchForm from '../_component/SearchForm';

type Props = {
  searchParams: { q: string; f?: string; follow?: string };
};

export default function Search({ searchParams }: Props) {
  return (
    <main className={style.main}>
      <div className={style.searchTop}>
        <div className={style.searchZone}>
          <div className={style.buttonZone}>
            <BackButton />
          </div>
          <div className={style.formZone}>
            <SearchForm q={searchParams.q} />
          </div>
        </div>
        <Tab />
      </div>
      <div className={style.list}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  );
}
