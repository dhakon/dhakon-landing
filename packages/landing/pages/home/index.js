import React, { Component } from "react";
import { connect } from "react-redux";
import { AppWrapper } from "../../containers/App/app.style";
import BannerHome from "../../containers/App/BannerHome";
import { AppWithAuthorization } from "./../../containers/App";
import Text from 'reusecore/src/elements/Text';
class Home extends Component {
  render() {
    
    return (
      <AppWithAuthorization>
        <AppWrapper>
          <BannerHome />
        </AppWrapper>
      </AppWithAuthorization>
    );
  }
}



const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});

export default connect(mapStateToProps)(Home);
