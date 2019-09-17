import React, { Fragment } from "react";
import { Modal } from "@redq/reuse-modal";
import "@redq/reuse-modal/es/index.css";
import App, { Container } from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";

import initStore from "./../containers/redux/store";

class EnhancedApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}
    };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Fragment>
        <Container>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </Container>
      </Fragment>
    );
  }
}

export default withRedux(initStore)(EnhancedApp);
