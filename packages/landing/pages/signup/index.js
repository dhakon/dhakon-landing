import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Router from "next/router";
import Box from "reusecore/src/elements/Box";
import Text from "reusecore/src/elements/Text";
import Logo from "reusecore/src/elements/UI/Logo";
import Heading from "reusecore/src/elements/Heading";
import Input from "reusecore/src/elements/Input";
import Button from 'reusecore/src/elements/Button';
import Image from "reusecore/src/elements/Image";
import SignupWrapper, { InfoLabel } from "./signup.styles";

import { AppWithAuthentication } from "./../../containers/App";
import { auth, db } from "./../../containers/firebase";
import * as routes from "./../../../reusecore/src/constants/routes";

import Illustration from "./../../../common/src/assets/image/app/farmer.svg";
import LogoImage from "./../../../common/src/assets/image/app/logo2.png";

const SignUpPage = () => (
  <AppWithAuthentication>
    <SignUpForm />
  </AppWithAuthentication>
);

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  fullname: "",
  number_phone: null,
  email: "",
  password: "",
  error: null
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { fullname, email, password } = this.state

    auth
      .doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.user.uid, fullname, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            Router.push(routes.HOME);
          })
          .catch(error => {
            this.setState(updateByPropertyName("error", error));
          });
      })
      .catch(error => {
        this.setState(updateByPropertyName("error", error));
      });

    event.preventDefault();
  };

  handleChange(name, value) {
    let state = this.state;
    state[name] = value;
    this.setState({ state });
  }

  render() {
    const {
      row,
      col,
      imageCol,
      btnStyle,
      logoStyle,
      imageArea,
      titleStyle,
      contentWrapper,
      descriptionStyle,
      textInfoTint,
      textInfoTintError,
      textInfoLink
    } = this.props;

    const { fullname, number_phone, email, password, error } = this.state;

    const isInvalid = fullname === "" || number_phone === "" || email === "" || password === "";

    return (
      <SignupWrapper>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <Box {...contentWrapper}>
              <Heading content="Daftar" {...titleStyle} />
              <Text
                content="Silahkan masukan data diri anda untuk mendapatkan pelayanan terbaik dari dhakon"
                {...descriptionStyle}
              />
              <form onSubmit={this.onSubmit}>
                <Input
                  name="fullname"
                  value={fullname}
                  onChange={this.handleChange.bind(this, "fullname")}
                  inputType="text"
                  label="Nama Lengkap"
                  placeholder="Masukan nama lengkap Anda"
                />
                <Input
                  name="number_phone"
                  value={number_phone}
                  onChange={this.handleChange.bind(this, "number_phone")}
                  inputType="number"
                  label="Nomor Handphone/Whatsapp"
                  placeholder="Masukan Nomor HP/WA Anda"
                />
                <Input
                  name="email"
                  value={email}
                  onChange={this.handleChange.bind(this, "email")}
                  inputType="email"
                  label="Email"
                  placeholder="Masukan email Anda jika memiliki"
                />
                <Input
                  name="password"
                  value={password}
                  onChange={this.handleChange.bind(this, "password")}
                  inputType="password"
                  label="Kata Sandi"
                  placeholder="Buat kata sandi Anda"
                  autoComplete="off"
                  passwordShowHide={true} />

                <div>
                  <Box>
                    <Link>
                      <Button type="submit" disabled={isInvalid} {...btnStyle} title="Daftar Sekarang" />
                    </Link>

                    {error && (
                      <InfoLabel>
                        <Text content={error.message} {...textInfoTintError} />
                      </InfoLabel>
                    )}

                    <InfoLabel>
                      <Text content="Saya sudah punya dhakon!" {...textInfoTint} />
                      <Link href="/signin">
                        <Text content="Langsung Masuk" {...textInfoLink} />
                      </Link>
                    </InfoLabel>
                  </Box>
                </div>
              </form>
            </Box>
          </Box>
          <Box className="col imageCol" {...col}>
            <Box {...imageCol}>
              <Logo
                href="#"
                logoSrc={LogoImage}
                title="Dhakon"
                logoStyle={logoStyle}
              />
            </Box>
            <Box {...imageArea}>
              <Image src={Illustration} alt="Dhakon Image" />
            </Box>
          </Box>
        </Box>
      </SignupWrapper>
    );
  }
}

// Signup style props
SignUpForm.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  imageCol: PropTypes.object,
  logoStyle: PropTypes.object,
  imageArea: PropTypes.object,
  image: PropTypes.object,
  titleStyle: PropTypes.object,
  hintTextStyle: PropTypes.object,
  contentWrapper: PropTypes.object,
  descriptionStyle: PropTypes.object,
  textInfoTint: PropTypes.object,
  textInfoTintError: PropTypes.object,
  textInfoLink: PropTypes.object
};

// Signup default style
SignUpForm.defaultProps = {
  // Team member row default style
  row: {
    flexBox: true,
    flexWrap: "wrap"
  },
  // Team member col default style
  col: {
    width: [1, 1 / 2],
    justifyContent: "center"
  },
  // Default logo size
  logoStyle: {
    width: "230px",
    height: "auto",
    ml: "40px",
    mt: "30px"
  },
  imageCol: {},
  imageArea: {
    pt: ["32px", "56px"],
    pl: ["20px", "32px", "50px", "50px", "100px"],
    pr: ["20px", "32px", "50px", "50px", "100px"],
    pb: ["32px", "56px"]
  },
  image: {
    width: ["0%", "0%", "70%", "70%", "70%"],
    backgroundColor: "tomato"
  },
  // Title default style
  titleStyle: {
    fontSize: ["20px", "24px", "40px", "40px", "40px"],
    fontWeight: "900",
    letterSpacing: "-0.01px",
    color: "#2B2B2B",
    mt: "35px",
    mb: "10px"
  },
  // Description default style
  descriptionStyle: {
    fontSize: ["10px", "14px", "16px", "16px", "16px"],
    color: "#2B2B2B",
    mb: "30px"
  },
  // Content wrapper style
  contentWrapper: {
    pt: ["32px", "56px"],
    pl: ["20px", "32px", "50px", "50px", "150px"],
    pr: ["20px", "32px", "50px", "50px", "150px"],
    pb: ["32px", "56px"],
    backgroundColor: "#fff",
    height: "100vh"
  },
  // Default button style
  btnStyle: {
    minWidth: "100%",
    fontSize: "14px",
    fontWeight: "900",
    pl: "22px",
    pr: "22px",
    mt: "20px",
    colors: "primaryWithBg"
  },
  // Outline button outline style
  outlineBtnStyle: {
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500",
    color: "rgb(26, 115, 232)"
  },
  textInfoTint: {
    textAlign: "center",
    fontSize: ["12px", "14px", "15px", "15px", "15px"],
    fontWeight: "500",
    color: "#778CA3",
    mr: 1
  },
  textInfoTintError: {
    textAlign: "center",
    fontSize: ["12px", "14px", "15px", "15px", "15px"],
    fontWeight: "500",
    color: "#eb3b5a",
    mr: 1
  },
  textInfoLink: {
    textAlign: "center",
    fontSize: ["12px", "14px", "15px", "15px", "15px"],
    fontWeight: "900",
    color: "#2B2B2B",
    type: "button",
    minHeight: 0,
    p: "0",
    bg: "transparent"
  }
};

export default SignUpPage;
export { SignUpForm };
