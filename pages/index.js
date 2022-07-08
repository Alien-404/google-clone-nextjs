import { useRef } from 'react';
import SearchBox from '../src/components/SearchBox';
import Layout from '../src/Layout';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };
  return (
    <Layout title='Google Next js'>
      <SearchBox search={search} searchInputRef={searchInputRef} />
    </Layout>
  );
}
