import LayoutResult from '../src/LayoutResult';
import Response from '../src/utils/Response';
import { useRouter } from 'next/router';
import SearchResults from '../src/components/SearchResults';

export default function Search({ results }) {
  console.log(results);
  const router = useRouter();
  return (
    <LayoutResult title={`${router.query.term} - Google Search`}>
      <SearchResults results={results} />
    </LayoutResult>
  );
}

export async function getServerSideProps({ query }) {
  const term = query.term;
  const startIndex = query.start || '0';
  const useDummyData = true;
  // env
  const API_KEY = process.env.API_KEY;
  const CONTEXT_KEY = process.env.CONTEXT_KEY;

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}&start=${startIndex}`
      ).then((res) => res.json());

  return {
    props: {
      results: data,
    },
  };
}
