import React from "react";
import Router from "next/router";

import { firebase } from "./../firebase";
import * as routes from "./../../../reusecore/src/constants/routes";

const withAuthorization = needsAuthorization => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        if (!authUser && needsAuthorization) {
          Router.push(routes.SIGN_IN);
        }
      });
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  return WithAuthorization;
};

export default withAuthorization;
