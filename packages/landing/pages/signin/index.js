import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Logo from 'reusecore/src/elements/UI/Logo';
import Heading from 'reusecore/src/elements/Heading';
import Router from "next/router";
import Input from 'reusecore/src/elements/Input';
import Button from 'reusecore/src/elements/Button';
import Image from 'reusecore/src/elements/Image';
import SigninWrapper, { InfoLabel } from './signin.styles';

import { AppWithAuthentication } from "./../../containers/App";
import { auth } from "./../../containers/firebase";
import * as routes from "./../../../reusecore/src/constants/routes";


import Illustration from './../../../common/src/assets/image/app/farmer.svg';
import LogoImage from './../../../common/src/assets/image/app/logo2.png';

const SignInPage = () => (
  <AppWithAuthentication>
    <SignInForm />
  </AppWithAuthentication>
);

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class SignInForm extends Component {

  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        Router.push(routes.HOME);
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

    const { email, password, error } = this.state;

    return (
      <SigninWrapper>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <Box {...contentWrapper}>
              <Heading content="Selamat Datang" {...titleStyle} />
              <Text
                content="Selamat datang kembali di dhakon, silahkan masuk dengan akun anda."
                {...descriptionStyle}
              />
              <form onSubmit={this.onSubmit}>
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
                      <Button type="submit" {...btnStyle} title="Ayo! Mulai" />
                    </Link>

                    {error && (
                      <InfoLabel>
                        <Text content={error.message} {...textInfoTintError} />
                      </InfoLabel>
                    )}

                    <InfoLabel>
                      <Text content="Saya belum punya dhakon!" {...textInfoTint} />
                      <Link href="/signup">
                        <Text content="Daftar Dulu" {...textInfoLink} />
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
                logoStyle={logoStyle} />
            </Box>
            <Box {...imageArea}>
              <Image src={Illustration} alt="Dhakon Image" />
            </Box>
          </Box>
        </Box>
      </SigninWrapper>
    );
  };
};

// Signin style props
SignInForm.propTypes = {
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
  textInfoLink: PropTypes.object,
};

// Signin default style
SignInForm.defaultProps = {
  // Team member row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
  },
  // Team member col default style
  col: {
    width: [1, 1 / 2],
    justifyContent: 'center'
  },
  // Default logo size
  logoStyle: {
    width: '230px',
    height: 'auto',
    ml: '40px',
    mt: '30px'
  },
  imageCol: {
  },
  imageArea: {
    pt: ['32px', '56px'],
    pl: ['20px', '32px', '50px', '50px', '100px'],
    pr: ['20px', '32px', '50px', '50px', '100px'],
    pb: ['32px', '56px']
  },
  image: {
    width: ['0%', '0%', '70%', '70%', '70%'],
    backgroundColor: 'tomato'
  },
  // Title default style
  titleStyle: {
    fontSize: ['20px', '24px', '40px', '40px', '40px'],
    fontWeight: '900',
    letterSpacing: '-0.01px',
    color: '#2B2B2B',
    mt: '35px',
    mb: '10px',
  },
  // Description default style
  descriptionStyle: {
    fontSize: ['10px', '14px', '16px', '16px', '16px'],
    color: '#2B2B2B',
    mb: '30px',
  },
  // Content wrapper style
  contentWrapper: {
    pt: ['32px', '56px'],
    pl: ['20px', '32px', '50px', '50px', '150px'],
    pr: ['20px', '32px', '50px', '50px', '150px'],
    pb: ['32px', '56px'],
    backgroundColor: '#fff',
    height: '100vh'
  },
  // Default button style
  btnStyle: {
    minWidth: '100%',
    fontSize: '14px',
    fontWeight: '900',
    pl: '22px',
    pr: '22px',
    mt: '20px',
    colors: 'primaryWithBg'
  },
  // Outline button outline style
  outlineBtnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: 'rgb(26, 115, 232)',
  },
  textInfoTint: {
    textAlign: 'center',
    fontSize: ['12px', '14px', '15px', '15px', '15px'],
    fontWeight: '500',
    color: '#778CA3',
    mr: 1
  },
  textInfoTintError: {
    textAlign: 'center',
    fontSize: ['12px', '14px', '15px', '15px', '15px'],
    fontWeight: '500',
    color: '#eb3b5a',
    mr: 1
  },
  textInfoLink: {
    textAlign: 'center',
    fontSize: ['12px', '14px', '15px', '15px', '15px'],
    fontWeight: '900',
    color: '#2B2B2B',
    type: 'button',
    minHeight: 0,
    p: '0',
    bg: 'transparent'
  }
};


export default SignInPage;
export { SignInForm };
