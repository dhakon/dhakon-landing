import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { appTheme } from 'common/src/theme/app';
import {
  GlobalStyle,
  AppWrapper,
} from '../containers/App/app.style';
import { ResetCSS } from 'common/src/assets/css/style';
import Banner from '../containers/App/Banner';

function getSize() {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
  };
}

function useWindowSize() {
  let [windowSize, setWindowSize] = useState(getSize());

  function handleResize() {
    setWindowSize(getSize());
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}

export default () => {
  const size = process.browser && useWindowSize();
  return (
    <ThemeProvider theme={appTheme}>
      <>
        <Head>
          <title>Dhakon | Mudahkan urusan lahan anda</title>
          <meta name="Description" content="Dhakon" />
          <meta name="theme-color" content="#F2B306" />
          <link href="https://fonts.googleapis.com/css?family=Muli&display=swap" rel="stylesheet" />
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <AppWrapper>
          <Banner />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};
