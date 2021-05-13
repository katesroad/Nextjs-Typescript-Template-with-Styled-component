import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';
import * as React from 'react';
import Footer from 'components/common/Footer';

export default function MyApp({ pageProps, Component }: AppProps) {
  return (
    <>
      <Head>
        <title>Title</title>
        {/* import your google font here */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Commissioner"
        />
      </Head>
      <main style={{ flexGrow: 1 }}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
