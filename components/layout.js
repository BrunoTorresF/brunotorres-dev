import Head from 'next/head';
import Header from './header';
import Footer from './footer';
import styles from './layout.module.scss';

export default ({ children, title = 'Bruno Torres | SWE' }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.png"></link>
    </Head>
    <Header />
    {children}
    <Footer />
  </>
);
