import React, { Component } from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { appTheme } from "common/src/theme/app";
import { GlobalStyle, AppWrapper } from "../../containers/App/app.style";
import { ResetCSS } from "common/src/assets/css/style";
import BannerHome from "../../containers/App/BannerHome";
class Home extends Component {
  render() {
    return (
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

          <AppWrapper>
            <BannerHome />
          </AppWrapper>
        </>
      </ThemeProvider>
    );
  }
}

export default Home;
