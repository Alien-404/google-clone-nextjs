import Head from 'next/head';
import Footer from './components/Footer';
import Header from './components/Header';

export default function Layout({ title, children }) {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Head>
        <title>{title}</title>
        <meta property='og:title' content={`next js ${title}`} key={title} />
      </Head>

      {/* header */}
      <Header />

      {/* children */}
      {children}

      {/* footer */}
      <Footer />
    </div>
  );
}
