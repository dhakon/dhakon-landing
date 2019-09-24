import React, { Component } from "react";
import { connect } from "react-redux";
import Router from "next/router";
import * as routes from "./../../../reusecore/src/constants/routes";
import { AppWrapper } from "../../containers/App/app.style";
import { AppWithAuthentication } from "./../../containers/App";
import { ReactTypeformEmbed } from 'react-typeform-embed';

class Form extends Component {

  handleSubmit = () => {
    Router.push(routes.LANDING)
  }

  render() {
    return (
      <AppWithAuthentication>
        <AppWrapper>
          <ReactTypeformEmbed
            hideFooter={true}
            onSubmit={this.handleSubmit}
            url="https://dhakon.typeform.com/to/A7bW0z" />
        </AppWrapper>
      </AppWithAuthentication>
    );
  }
}

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});

export default connect(mapStateToProps)(Form);
