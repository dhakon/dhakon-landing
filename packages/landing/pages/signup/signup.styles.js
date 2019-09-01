import styled from 'styled-components';
import { themeGet } from 'styled-system';

const SignupWrapper = styled.div`
  position: relative;
  background-color: ${themeGet('colors.white', '#ffffff')};
  height: 100vh;
  @media (max-width: 1099px) {
    overflow: hidden;
  }
  .button__wrapper {
    @media only screen and (max-width: 480px) {
      text-align: center;
    }
  }
  .col {
    position: relative;
    &.imageCol {
      background-color: ${themeGet('colors.primary', '#F2B306')};
    }
    @media only screen and (max-width: 991px) {
      width: 100%;
      &.imageCol {
        background-color: ${themeGet('colors.primary', '#F2B306')};
        display: flex;
        flex: 1;
      }
    }
  }
`;



const InfoLabel = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 33px;
`;

export { InfoLabel };

export default SignupWrapper;
