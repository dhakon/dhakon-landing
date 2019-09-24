import React, { useState, useEffect } from "react";
import Head from "next/head";
import { compose } from "recompose";
import { ThemeProvider } from "styled-components";
import { appTheme } from "common/src/theme/app";
import { GlobalStyle } from "../App/app.style";
import { ResetCSS } from "common/src/assets/css/style";

import withAuthentication from "./../Session/withAuthentication";
import withAuthorization from "./../Session/withAuthorization";

const App = ({ children }) => (
  <ThemeProvider theme={appTheme}>
    <>
      <Head>
        <title>Dhakon | Mudahkan urusan lahan anda</title>
        <meta name="Description" content="Dhakon" />
        <meta name="theme-color" content="#F2B306" />
        <link
          href="https://fonts.googleapis.com/css?family=Muli&display=swap"
          rel="stylesheet"
        />
      </Head>

      <ResetCSS />
      <GlobalStyle />

      {children}
    </>
  </ThemeProvider>
);

const AppWithAuthentication = compose(
  withAuthentication,
  withAuthorization(false)
)(App);
const AppWithAuthorization = compose(
  withAuthentication,
  withAuthorization(true)
)(App);

export { AppWithAuthentication, AppWithAuthorization };
