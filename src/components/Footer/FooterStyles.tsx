import { FC, PropsWithChildren } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import pxIntoRem from "../../utils/pxIntoRem";

const FooterBlock = styled.footer`
  width: 100%;
  position: relative;
  z-index: 999;
`;

const FooterBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FooterTop = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: ${pxIntoRem(30)};
  @media (max-width: 500px) {
    flex-direction: column;
    padding-bottom: ${pxIntoRem(0)};
  }
`;

const FooterLogoBlock = styled.div`
  width: ${pxIntoRem(197)};
  height: ${pxIntoRem(75)};
`;

const FooterLogo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FooterNavigation = styled.nav`
  display: flex;
  align-items: center;
  margin-left: auto;
  padding-left: ${pxIntoRem(90)};

  @media (max-width: 1240px) {
    padding-left: ${pxIntoRem(90 * 0.6)};
  }

  @media (max-width: 1000px) {
    padding-left: ${pxIntoRem(90 * 0.5)};
  }

  @media (max-width: 500px) {
    flex-direction: column;
    margin-left: 0;
    margin-top: ${pxIntoRem(27)};
    padding-left: 0;
  }
`;

const FooterNavigationLink = styled(NavLink)`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: ${pxIntoRem(16)};
  line-height: 172.52%;
  color: #ffffff;
  margin-left: ${pxIntoRem(92)};

  @media (max-width: 1240px) {
    margin-left: ${pxIntoRem(92 * 0.6)};
  }

  @media (max-width: 1000px) {
    margin-left: ${pxIntoRem(92 * 0.5)};
  }

  @media (max-width: 750px) {
    margin-left: ${pxIntoRem(92 * 0.3)};
  }

  @media (max-width: 500px) {
    margin-left: 0px;
    margin-top: ${pxIntoRem(9)};
  }

  &:first-of-type {
    margin-left: 0px;
    margin-top: 0px;
  }

  &:hover {
    color: #08e2bd;
    transition: 0.5s;
  }
`;

const FooterIcons = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  margin-left: ${pxIntoRem(124)};
  @media (max-width: 1240px) {
    margin-left: ${pxIntoRem(124 * 0.6)};
  }

  @media (max-width: 1000px) {
    margin-left: ${pxIntoRem(124 * 0.5)};
  }

  @media (max-width: 500px) {
    margin-left: 0px;
    margin-right: 0px;
    margin-top: ${pxIntoRem(27)};
  }
`;

interface IFooterIcon {
  width: number;
}

const FooterIconBlock = styled(Link)`
  margin-left: ${pxIntoRem(27)};
  width: auto;
  height: auto;
  &:first-of-type {
    margin-left: 0px;
  }

  @media (max-width: 1000px) {
    margin-left: ${pxIntoRem(27 * 0.5)};
  }

  @media (max-width: 500px) {
    margin-left: ${pxIntoRem(27)};
  }
`;

const FooterIcon = styled.svg`
  width: ${pxIntoRem(27)};
  fill: #ffffff;

  @media (max-width: 1000px) {
    width: ${pxIntoRem(27 * 0.5)};
  }

  @media (max-width: 500px) {
    width: ${pxIntoRem(27)};
  }

  &:hover {
    color: #08e2bd;
    transition: 0.5s;
  }
`;

const FooterButtonImage = styled.svg`
  width: ${pxIntoRem(18)};
  height: ${pxIntoRem(18)};
  margin-left: ${pxIntoRem(13)};
  fill: white;
`;

const FooterButton = styled(NavLink)`
  display: flex;
  align-items: center;
  border: ${pxIntoRem(1)} solid rgba(255, 255, 255, 0.69);
  border-radius: ${pxIntoRem(5)};
  background-color: transparent;
  padding: ${pxIntoRem(19)} ${pxIntoRem(35)};
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(16)};
  line-height: ${pxIntoRem(20)};
  color: #ffffff;
  cursor: pointer;
  grid-area: button;

  &:hover {
    color: #08e2bd;
    transition: 0.2s;
    outline: 2px solid #3ff2d4;
    outline-offset: -2px;
    border-color: #08e2bd;
  }

  &:hover ${FooterButtonImage} {
    fill: #08e2bd;
    transition: 0.5s;
  }

  @media (max-width: 500px) {
    justify-content: center;
    margin-left: 0;
    margin-top: ${pxIntoRem(27)};
    width: 100%;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: ${pxIntoRem(1)} solid rgba(255, 255, 255, 0.46);
  padding-top: ${pxIntoRem(30)};
  padding-bottom: ${pxIntoRem(65)};
  @media (max-width: 500px) {
    flex-direction: column;
    border-top: none;
    padding-top: ${pxIntoRem(21)};
  }
`;

const FooterLink = styled.a`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: ${pxIntoRem(18)};
  line-height: 172.52%;
  color: #874dec;
  margin-left: ${pxIntoRem(40)};
  &:first-of-type {
    margin-left: 0px;
    margin-top: 0px;
  }

  @media (max-width: 500px) {
    margin-left: 0px;
    margin-top: ${pxIntoRem(17)};
  }
`;

const FooterBlurredCircle = styled.div`
  position: absolute;
  width: ${pxIntoRem(563)};
  height: ${pxIntoRem(563)};
  right: ${pxIntoRem(-300)};
  bottom: ${pxIntoRem(0)};
  background-color: rgb(143, 82, 242, 0.6);
  filter: blur(${pxIntoRem(250)});
  pointer-events: none;
  @media (max-width: 500px) {
    display: none;
  }
`;

export { FooterBlock, FooterTop, FooterBody, FooterButton, FooterButtonImage, FooterIconBlock, FooterIcon, FooterIcons, FooterLogo, FooterLogoBlock, FooterNavigation, FooterNavigationLink, FooterBottom, FooterLink, FooterBlurredCircle };
