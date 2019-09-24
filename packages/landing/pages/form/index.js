import React, { Component } from "react";
import { connect } from "react-redux";
import Router from "next/router";
import * as routes from "./../../../reusecore/src/constants/routes";
import { AppWrapper } from "../../containers/App/app.style";
import { AppWithAuthentication } from "./../../containers/App";
import { ReactTypeformEmbed } from "react-typeform-embed";
import * as typeformEmbed from "@typeform/embed";

class Form extends Component {
  componentDidMount() {
    typeformEmbed.makeWidget(
      embedElement,
      "https://dhakon.typeform.com/to/A7bW0z",
      {
        hideHeaders: true,
        hideFooter: true,
        opacity: 75,
        buttonText: "Take the survey!",
        onSubmit: function() {
          Router.push(routes.LANDING);
        }
      }
    );
  }

  handleSubmit = () => {
    Router.push(routes.LANDING);
  };

  render() {
    return (
      <AppWithAuthentication>
        <AppWrapper id="embedElement" />
      </AppWithAuthentication>
    );
  }
}

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});

export default connect(mapStateToProps)(Form);
