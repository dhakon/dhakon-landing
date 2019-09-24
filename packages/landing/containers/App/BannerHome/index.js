import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Logo from 'reusecore/src/elements/UI/Logo';
import Button from 'reusecore/src/elements/Button';
import Image from 'reusecore/src/elements/Image';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Container from 'common/src/components/UI/Container';
import { ButtonWrapper } from './banner.style';

import Illustration from 'common/src/assets/image/app/farmer.svg';
import LogoImage from 'common/src/assets/image/app/logo2.png';

const Banner = ({
  SectionWrapper,
  row,
  col,
  title,
  description,
  button,
  image,
  imageArea,
  imageAreaMobile,
  imageFarmer,
  btnStyleTwo,
  logoStyle
}) => {
  return (
    <Box {...SectionWrapper}>
      <Container>
        <Box {...row}>
          <Box {...col}>
            <Box>
              <Logo
                href="#"
                logoSrc={LogoImage}
                title="Dhakon"
                logoStyle={logoStyle} />
            </Box>
            <Box {...col}  {...imageAreaMobile}>
              <Image src={Illustration} alt="Farmer Image" {...imageFarmer} />
            </Box>
            <FeatureBlock
              title={<Heading {...title} />}
              description={<Text {...description} />} />
            <ButtonWrapper>
              <Link href="/form">
                <Button {...button} />
              </Link>
            </ButtonWrapper>
          </Box>
          <Box {...col} {...imageArea}>
            <Image src={Illustration} alt="Dhakon Image" {...image} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

Banner.propTypes = {
  SectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  btnStyleTwo: PropTypes.object,
  logoStyle: PropTypes.object,
};

Banner.defaultProps = {
  SectionWrapper: {
    as: 'main',
    pt: '80px',
    pb: '80px',
    overflow: 'hidden'
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px'
  },
  logoStyle: {
    width: ['140px', '280px'],
    mt: '50px'
  },
  col: {
    pr: '10px',
    pl: '10px',
    width: ['100%', '100%', '50%', '44%', '44%'],
    mt: '-80px',
    alignSelf: 'center'
  },
  imageArea: {
    width: ['0%', '0%', '50%', '50%', '50%'],
    ml: 'auto',
  },
  imageAreaMobile: {
    width: ['100%', '100%', '0%', '0%', '0%'],
  },
  title: {
    content: 'Temukan teman kerja dengan cepat dan mudah',
    fontSize: ['20px', '24px', '40px', '40px', '40px'],
    fontWeight: '900',
    color: '#ffffff',
    letterSpacing: '-0.01px',
    mb: '10px',
    mt: ['40px', '40px', '-150px', '-160px', '-160px'],
  },
  description: {
    content: 'Bersama dhakon mudahkan pencarian teman kerja yang terbaik dan berkualitas',
    fontSize: ['10px', '14px', '16px', '16px', '20px'],
    color: '#ffffff',
    mb: ['40px', '40px', '60px', '60px', '60px'],
  },
  button: {
    title: 'Cari Teman Kerja',
    fontSize: '14px',
    fontWeight: '900',
    pl: '22px',
    pr: '22px',
    colors: 'secondaryWithBg'
  },
  image: {
    ml: 'auto',
    mt: '70px',
  },
  imageFarmer: {
    width: '198.17px',
    height: '192.78px',
    alignSelf: 'center',
    mt: '130px',
  },
  textArea: {
    width: ['100%', '100%', '50%', '55%', '55%'],
  },
  discountAmount: {
    content: 'update',
    fontSize: '14px',
    fontWeight: '600',
    color: '#fff',
    mb: 0,
    as: 'span',
    mr: '0.4em',
    bg: 'rgb(26, 115, 232)',
  },
  discountText: {
    content: 'Version 2.5.0 has just released .',
    fontSize: '13px',
    fontWeight: '400',
    color: '#0f2137',
    mb: 0,
    as: 'span',
    ml: '10px',
  },
};

export default Banner;
