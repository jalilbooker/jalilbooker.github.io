/* eslint-disable no-console */
/* eslint-disable react/no-danger */
import { AppProps } from 'next/app';
import '../styles/global.css';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Loader from '../shared/components/loader';
import CookieAlert from '../shared/components/cookie-alert';

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  });
  const spring = {
    type: 'spring',
    damping: 20,
    stiffness: 100,
    when: 'afterChildren'
  };
  return (
    <div>
      <Head>
        <title>Jalil Markel | Software Engineer</title>
        <meta name="title" content="Jalil Markel | Software Engineer" />
        <meta
          name="description"
          content="Jalil is a dedicated software engineer having nearly decade years of experience in developing cutting-edge engineering solutions with a wide range of technology features."
        />
        <meta
          name="keywords"
          content="Jalil Markel, Software Engineer , Web Development Freelancer, Web Engineer, Fullstack Engineer"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="10 days" />
        <meta name="author" content="Jalil Markel" />
        <meta name="copyright" content="All rights reserved,2021. Jalil Markel" />
        <meta httpEquiv="content-language" content="en" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jalil-markel.herokuapp.com/" />
        <meta property="og:title" content="Jalil Markel | Senior Fullstack Engineer" />
        <meta
          property="og:description"
          content="Jalil is a dedicated software engineer having nearly decade years of experience in developing cutting-edge engineering solutions with a wide range of technology features."
        />
        <meta
          property="og:image"
          content="https://billboard.srmkzilla.net/api/blog?title=Jalil%20Markel&subtitle=Senior%20Fullstack%20Engineer&fileType=jpeg&theme=dark&fontSize=180px"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://jalil-markel.herokuapp.com/" />
        <meta property="twitter:site" content="@jalilbooker" />
        <meta property="og:title" content="Jalil Markel | Senior Fullstack Engineer" />
        <meta
          property="twitter:description"
          content="Jalil is a dedicated software engineer having nearly decade years of experience in developing cutting-edge engineering solutions with a wide range of technology features."
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      {loading ? (
        <Loader />
      ) : (
        <AnimatePresence>
          <div className="page-transition-wrapper overflow-x-hidden min-h-screen">
            <motion.div
              transition={spring}
              key={router.pathname}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              id="page-transition-container">
              {/* <CustomCursor /> */}
              <Component {...pageProps} key={router.pathname} />
            </motion.div>
          </div>
          <CookieAlert />
        </AnimatePresence>
      )}
    </div>
  );
}

export default MyApp;
