import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Logo from 'reusecore/src/elements/UI/Logo';
import Heading from 'reusecore/src/elements/Heading';
import Input from 'reusecore/src/elements/Input';
import Button from 'reusecore/src/elements/Button';
import Image from 'reusecore/src/elements/Image';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { appTheme } from 'common/src/theme/app';
import { ResetCSS } from 'common/src/assets/css/style';
import { GlobalStyle } from '../../containers/App/app.style';
import SignupWrapper, { InfoLabel } from './signup.styles';


import Illustration from 'common/src/assets/image/app/farmer.svg';
import LogoImage from 'common/src/assets/image/app/logo2.png';

const Signup = ({
  row,
  col,
  imageCol,
  btnStyle,
  logoStyle,
  image,
  imageArea,
  titleStyle,
  contentWrapper,
  descriptionStyle,
  textInfoTint,
  textInfoLink
}) => {
  const SignupButtonGroup = () => (
    <Box>
      <Link href="/home">
        <a>
          <Button {...btnStyle} title="Daftar Sekarang" />
        </a>
      </Link>

      <InfoLabel>
        <Text content="Saya sudah punya dhakon!" {...textInfoTint} />
        <Link href="/signin">
          <a>
            <Button title="Langsung Masuk" {...textInfoLink} />
            {/* <Text content="Langsung Masuk" {...textInfoLink} /> */}
          </a>
        </Link>
      </InfoLabel>
    </Box>
  );
  return (
    <ThemeProvider theme={appTheme}>

      <>
        <Head>
          <title>Dhakon | Mudahkan urusan lahan anda</title>
          <meta name="Description" content="Dhakon" />
          <meta name="theme-color" content="#F2B306" />
          <link href="https://fonts.googleapis.com/css?family=Muli&display=swap" rel="stylesheet" />
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <SignupWrapper>

          <Box className="row" {...row}>
            <Box className="col" {...col}>
              <Box {...contentWrapper}>
                <Heading content="Daftar" {...titleStyle} />
                <Text
                  content="Silahkan masukan data diri anda untuk mendapatkan pelayanan terbaik dari dhakon"
                  {...descriptionStyle}
                />
                <Input
                  inputType="text"
                  label="Nama Lengkap"
                  placeholder="Masukan nama lengkap Anda" />
                <Input
                  inputType="number"
                  label="Nomor Handphone/Whatsapp"
                  placeholder="Masukan Nomor HP/WA Anda" />
                <Input
                  inputType="email"
                  label="Email"
                  placeholder="Masukan email Anda jika memiliki" />
                <Input
                  inputType="password"
                  label="Kata Sandi"
                  placeholder="Buat kata sandi Anda"
                  passwordShowHide={true} />

                <div>
                  <SignupButtonGroup />
                </div>
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

        </SignupWrapper>
      </>

    </ThemeProvider>
  );
};

// Signup style props
Signup.propTypes = {
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
  textInfoLink: PropTypes.object,
};

// Signup default style
Signup.defaultProps = {
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

export default Signup;
