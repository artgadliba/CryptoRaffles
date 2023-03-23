import { FC, PropsWithChildren, SyntheticEvent } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import pxIntoRem from "../../../utils/pxIntoRem";

const LandingHeaderBlock = styled.header`
  width: 100%;
  z-index: 999999999;
`;

const LandingHeaderBody = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: ${pxIntoRem(28)};
  @media (max-width: 500px) {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto auto;
    grid-template-areas:
      "logo burger"
      "button button";
    padding-top: ${pxIntoRem(16)};
    gap: ${pxIntoRem(20)};
  }
`;

const LandingHeaderLogoBlock = styled.div`
  width: ${pxIntoRem(197)};
  height: ${pxIntoRem(75)};
  grid-area: logo;
`;

const LandingHeaderLogo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const LandingHeaderNavigation = styled.nav`
  display: flex;
  align-items: center;
  margin-left: ${pxIntoRem(158)};
  margin-right: auto;
  @media (max-width: 1240px) {
    margin-left: ${pxIntoRem(158 * 0.6)};
  }

  @media (max-width: 1000px) {
    margin-left: ${pxIntoRem(158 * 0.5)};
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

const LandingHeaderNavigationLink = styled(NavLink)`
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

  &:first-of-type {
    margin-left: 0px;
  }

  &:hover {
    color: #08e2bd;
    transition: 0.5s;
  }
`;

const LandingHeaderIcons = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${pxIntoRem(65)};
  margin-left: auto;
  @media (max-width: 1240px) {
    margin-right: ${pxIntoRem(65 * 0.6)};
  }

  @media (max-width: 1000px) {
    margin-right: ${pxIntoRem(65 * 0.5)};
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

const LandingHeaderIconBlock = styled(Link)`
  margin-left: ${pxIntoRem(27)};
  width: auto;
  height: auto;
  &:first-of-type {
    margin-left: 0px;
  }

  @media (max-width: 1000px) {
    margin-left: ${pxIntoRem(27 * 0.5)};
  }
`;

interface ILandingHeaderIcon {
  width: number;
}

const LandingHeaderIcon = styled.svg`
  width: ${pxIntoRem(27)};
  fill: white;

  @media (max-width: 1000px) {
    width: ${pxIntoRem(27 * 0.5)};
  }

  &:hover {
    fill: #08e2bd;
    transition: 0.5s;
  }
`;

const LandingHeaderButton = styled(NavLink)`
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
  transition: 1s;

  @media (max-width: 500px) {
    justify-content: center;
    width: 100%;
  }
`;

const LandingHeaderButtonImage = styled.svg`
  width: ${pxIntoRem(18)};
  height: ${pxIntoRem(18)};
  margin-left: ${pxIntoRem(13)};
  fill: white;
  transition: 1s;
`;

const LandingHeaderWrapper = styled.div`
  &:hover ${LandingHeaderButton} {
    color: #08e2bd;
    transition: 0.2s;
    outline: 2px solid #3ff2d4;
    outline-offset: -2px;
    border-color: #08e2bd;
  }

  &:hover ${LandingHeaderButtonImage} {
    fill: #08e2bd;
    transition: 0.5s;
  }
`;

export { LandingHeaderBlock, LandingHeaderBody, LandingHeaderLogo, LandingHeaderLogoBlock, LandingHeaderNavigation, LandingHeaderNavigationLink, LandingHeaderIcons, LandingHeaderIconBlock, LandingHeaderIcon, LandingHeaderButton, LandingHeaderButtonImage, LandingHeaderWrapper };
