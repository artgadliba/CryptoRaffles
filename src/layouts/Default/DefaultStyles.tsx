import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import pxIntoRem from "../../utils/pxIntoRem";

const DefaultBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
`;

const DefaultContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.06);
  border: ${pxIntoRem(1)} solid rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(${pxIntoRem(79.5)});
  border-radius: ${pxIntoRem(4)};
  margin-top: ${pxIntoRem(89)};
  margin-bottom: ${pxIntoRem(68)};
  position: relative;
  z-index: 99;
  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(50)};
    margin-bottom: 0;
    background-color: transparent;
    border: none;
    backdrop-filter: none;
  }
`;

const DefaultContentBody = styled.div`
  display: flex;
  flex-direction: column;
  // overflow: hidden;
  padding: ${pxIntoRem(75)} ${pxIntoRem(75)} ${pxIntoRem(75)} ${pxIntoRem(75)};
  width: 100%;
  height: 100%;
  @media (max-width: 500px) {
    padding: ${pxIntoRem(75)} 0px ${pxIntoRem(75)} 0px;
    padding: ${pxIntoRem(45)} 0px ${pxIntoRem(45)} 0px;
  }
`;

const DefaultNavigation = styled.nav`
  display: flex;
  align-items: center;
  width: fit-content;
  position: absolute;
  top: ${pxIntoRem(-38)};
  border: ${pxIntoRem(1)} solid rgba(255, 255, 255, 0.35);
  border-radius: ${pxIntoRem(2)};
  padding: ${pxIntoRem(4)};
  background: rgba(56, 24, 99, 0.99);
  backdrop-filter: blur(${pxIntoRem(16.53)});
  // &::after {
  //   content: "";
  //   position: absolute;
  //   left: 0;
  //   top: 0;
  //   width: 100%;
  //   height: 100%;
  //   background-color: #38186399;
  //   backdrop-filter: blur(${pxIntoRem(16.53)});
  //   z-index: -1;
  // }

  @media (max-width: 500px) {
    width: 100%;
    margin-top: ${pxIntoRem(4)};
  }
`;

const DefaultNavigationLinkText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${pxIntoRem(50)};
  border-right: ${pxIntoRem(1)} solid #766094;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(16)};
  line-height: ${pxIntoRem(20)};
  color: #ffffff;
  @media (max-width: 500px) {
    font-weight: 500;
    font-size: ${pxIntoRem(14)};
    line-height: 20px;
  }
`;

const DefaultNavigationLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pxIntoRem(302)};
  height: ${pxIntoRem(58)};
  border-radius: ${pxIntoRem(2)};

  &:last-of-type {
    ${DefaultNavigationLinkText} {
      border-right: none;
    }
  }

  &.active {
    background-color: #874dec;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export { DefaultBlock, DefaultContent, DefaultContentBody, DefaultNavigation, DefaultNavigationLink, DefaultNavigationLinkText };
