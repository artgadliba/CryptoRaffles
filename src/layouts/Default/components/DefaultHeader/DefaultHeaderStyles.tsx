import { FC, PropsWithChildren } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import pxIntoRem from "../../../../utils/pxIntoRem";

const DefaultHeaderBlock = styled.header`
  width: 100%;
  z-index: 999;
`;

const DefaultHeaderBody = styled.div`
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

const DefaultHeaderLogoBlock = styled.div`
  width: ${pxIntoRem(197)};
  height: ${pxIntoRem(75)};
  grid-area: logo;
`;

const DefaultHeaderLogo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DefaultHeaderNavigation = styled.nav`
  display: flex;
  align-items: center;
  margin-left: ${pxIntoRem(92)};
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

const DefaultHeaderNavigationLink = styled(NavLink)`
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

interface IDefaultHeaderIcons {
  isActive: boolean;
}

const DefaultHeaderIcons = styled.div<IDefaultHeaderIcons>`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: ${({ isActive }) => (isActive ? pxIntoRem(73) : pxIntoRem(65))};

  @media (max-width: 1240px) {
    margin-right: ${({ isActive }) => (isActive ? pxIntoRem(73 * 0.6) : pxIntoRem(65 * 0.6))};
  }

  @media (max-width: 1000px) {
    margin-right: ${({ isActive }) => (isActive ? pxIntoRem(73 * 0.5) : pxIntoRem(65 * 0.5))};
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

const DefaultHeaderIconBlock = styled(Link)`
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

interface IDefaultHeaderIcon {
  width: number;
}

const DefaultHeaderIcon = styled.svg`
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

const DefaultHeaderButton = styled.button`
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

  @media (max-width: 500px) {
    justify-content: center;
    width: 100%;
  }
`;

const DefaultHeaderButtonImage = styled.img`
  width: ${pxIntoRem(18)};
  height: ${pxIntoRem(18)};
  margin-left: ${pxIntoRem(13)};
`;

const DefaultHeaderUser = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 500px) {
    width: 100%;
    grid-area: button;
    justify-content: center;
    border: ${pxIntoRem(1)} solid rgba(255, 255, 255, 0.69);
    border-radius: ${pxIntoRem(5)};
    padding: ${pxIntoRem(14)} 0px;
  }
`;

const DefaultHeaderUserName = styled.span`
  display: flex;
  align-items: center;
  margin-right: ${pxIntoRem(28)};
  cursor: pointer;
`;

const DefaultHeaderUserNameImage = styled.img`
  margin-right: ${pxIntoRem(12.46)};
  width: ${pxIntoRem(28.54)};
  height: ${pxIntoRem(28.54)};
  object-fit: cover;
  border-radius: 100%;
`;

const DefaultHeaderUserNameText = styled.span`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(18)};
  line-height: 172.52%;
  color: #08e2bd;
`;

const DefaultHeaderUserHash = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const DefaultHeaderUserHashImage = styled.img`
  margin-right: ${pxIntoRem(12)};
  width: ${pxIntoRem(28)};
  height: ${pxIntoRem(28)};
  object-fit: cover;
  border-radius: 100%;
`;

const DefaultHeaderUserHashText = styled.span`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(18)};
  line-height: 172.52%;
  color: #8e52f1;
`;

export {
  DefaultHeaderBlock,
  DefaultHeaderBody,
  DefaultHeaderLogo,
  DefaultHeaderLogoBlock,
  DefaultHeaderNavigation,
  DefaultHeaderNavigationLink,
  DefaultHeaderIcons,
  DefaultHeaderIconBlock,
  DefaultHeaderIcon,
  DefaultHeaderButton,
  DefaultHeaderButtonImage,
  DefaultHeaderUser,
  DefaultHeaderUserHash,
  DefaultHeaderUserHashImage,
  DefaultHeaderUserName,
  DefaultHeaderUserNameImage,
  DefaultHeaderUserNameText,
  DefaultHeaderUserHashText,
};
