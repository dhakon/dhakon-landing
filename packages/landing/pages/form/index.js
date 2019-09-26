import React, { Component } from "react";
import { connect } from "react-redux";
import Router from "next/router";
import * as routes from "./../../../reusecore/src/constants/routes";
import { AppWrapper } from "../../containers/App/app.style";
import { AppWithAuthentication } from "./../../containers/App";
import typeformEmbed from '@typeform/embed';
import axios from "axios";

// const form_id = 'A7bW0z';
// const token = 'DLrXyVaPwwS7VhFoL84VwKvcqc5rP8x9fEARcVJRt5Sg';

class Form extends Component {
  componentDidMount() {
    typeformEmbed.makeWidget(
      embedElement,
      "https://dhakon.typeform.com/to/A7bW0z",
      {
        hideHeaders: true,
        hideFooter: true,
        opacity: 75,
        onSubmit: function() {
          Router.push(routes.LANDING);

          axios
            .get(`/forms/A7bW0z/responses`, {
              headers: {
                Authorization: `Bearer DLrXyVaPwwS7VhFoL84VwKvcqc5rP8x9fEARcVJRt5Sg`
              }
            })
            .then(function(response) {
              // handle success

              const res = response.data.items[0];

              const name = res.answers[0].text;
              const phone = res.answers[1].phone_number;
              const type_work = res.answers[2].choice.label;
              const number_workers = res.answers[3].number;
              const duration = res.answers[4].choice.label;
              const address = res.answers[5].text;

              axios
                .post("/message", {
                  body: `Assalamu'alaikum Bapak/Ibu ${name}. \n Anda baru saja mencari buruh untuk ${type_work} sebanyak ${number_workers} orang dengan durasi ${duration} disawah ${address}. \n Sabar ya... setelah ini Anda akan dihubungi tim Dhakon.`,
                  to: phone,
                  from: "+17609933055"
                })
                .then(function(response) {
                  // console.log('response success', response);
                })
                .catch(function(error) {
                  // console.log('response error', error);
                });
            })
            .catch(function(error) {
              // handle error
              console.log("response error : ", error);
            });
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
