import Head from 'next/head';
import HeaderResult from './components/HeaderResult';

export default function LayoutResult({ title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property='og:title' content={`next js ${title}`} key={title} />
      </Head>

      {/* header */}
      <HeaderResult />

      {/* children */}
      {children}

      {/* footer */}
    </>
  );
}
