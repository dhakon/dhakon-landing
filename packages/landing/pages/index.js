// import React, { Component } from "react";
// import { connect } from "react-redux";
// import Router from "next/router";
// import Banner from "../containers/App/Banner";
// import { AppWrapper } from "./../containers/App/app.style";

// import { AppWithAuthentication } from "./../containers/App";

// class App extends Component {

//   state = {
//     user: null
//   };

//   componentDidMount = () => {
//   };

//   render() {
//     return (
//       <AppWithAuthentication>
//         <AppWrapper>
//           <Banner />
//         </AppWrapper>
//       </AppWithAuthentication>
//     );
//   }
// };

// const mapStateToProps = state => ({
//   authUser: state.sessionState.authUser
// });

// export default connect(mapStateToProps)(App);

import React, { Component } from "react";
import { connect } from "react-redux";
import { AppWrapper } from "../containers/App/app.style";
import BannerHome from "../containers/App/BannerHome";
import { AppWithAuthentication } from "./../containers/App";
class App extends Component {
  render() {
    return (
      <AppWithAuthentication>
        <AppWrapper>
          <BannerHome />
        </AppWrapper>
      </AppWithAuthentication>
    );
  }
}

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});

export default connect(mapStateToProps)(App);
