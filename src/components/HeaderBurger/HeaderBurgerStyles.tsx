import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import pxIntoRem from "../../utils/pxIntoRem";

const HeaderBurgerBlock = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${pxIntoRem(60)};
  height: ${pxIntoRem(60)};
  background: linear-gradient(334.95deg, #6232d0 -22.97%, #9859f9 93.03%);
  border-radius: ${pxIntoRem(5)};
  cursor: pointer;
  grid-area: burger;

  @media (max-width: 500px) {
    display: flex;
    margin-left: auto;
    width: ${pxIntoRem(52)};
    height: ${pxIntoRem(52)};
  }
`;

const HeaderBurgerLine = styled.div`
  width: ${pxIntoRem(22)};
  height: ${pxIntoRem(2)};
  background-color: white;
  margin-top: ${pxIntoRem(5)};
  &:first-of-type {
    margin-top: 0px;
  }
`;

const HeaderBurgerContent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #2d0b5a;
  padding: ${pxIntoRem(16)} ${pxIntoRem(15)} ${pxIntoRem(123)};
  gap: ${pxIntoRem(20)};
  z-index: 999999999999999;
  @media (max-width: 500px) {
    display: flex;
  }
`;

const HeaderBurgerContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const HeaderBurgerContentLogoBlock = styled.div`
  width: ${pxIntoRem(197)};
  height: ${pxIntoRem(75)};
`;

const HeaderBurgerContentLogo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeaderBurgerContentClose = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pxIntoRem(52)};
  height: ${pxIntoRem(52)};
  background: linear-gradient(334.95deg, #6232d0 -22.97%, #9859f9 93.03%);
  border-radius: ${pxIntoRem(5)};
  cursor: pointer;
`;

const HeaderBurgerContentCloseImage = styled.img`
  width: ${pxIntoRem(15.88)}
  height: ${pxIntoRem(15.68)};
`;

const HeaderBurgerContentButtonImage = styled.svg`
  width: ${pxIntoRem(18)};
  height: ${pxIntoRem(18)};
  margin-left: ${pxIntoRem(13)};
  fill: white;
`;

const HeaderBurgerContentButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${pxIntoRem(1)} solid rgba(255, 255, 255, 0.69);
  border-radius: ${pxIntoRem(5)};
  background-color: transparent;
  padding: ${pxIntoRem(19)} ${pxIntoRem(35)};
  width: 100%;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(16)};
  line-height: ${pxIntoRem(20)};
  color: #ffffff;
  cursor: pointer;

  &:hover {
    color: #08e2bd;
    transition: 0.2s;
    outline: 2px solid #3ff2d4;
    outline-offset: -2px;
    border-color: #08e2bd;
  }
  &:hover ${HeaderBurgerContentButtonImage} {
    fill: #08e2bd;
    transition: 0.2s;
  }
  &:active {
    color: #08e2bd;
    transition: 0.2s;
    outline: 2px solid #3ff2d4;
    outline-offset: -2px;
    border-color: #08e2bd;
  }
  &:active ${HeaderBurgerContentButtonImage} {
    fill: #08e2bd;
    transition: 0.2s;
  }
`;

const HeaderBurgerContentNavigation = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: ${pxIntoRem(27)};
`;

const HeaderBurgerContentNavigationLink = styled(NavLink)`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: ${pxIntoRem(16)};
  line-height: 172.52%;
  color: #ffffff;
  margin-top: ${pxIntoRem(9)};

  &:first-of-type {
    margin-top: 0px;
  }
  &:hover {
    color: #08e2bd;
    transition: 0.5s;
  }
  &:active {
    fill: #08e2bd;
    transition: 0.2s;
  }
`;

const HeaderBurgerContentIcons = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${pxIntoRem(6)};
`;

const HeaderBurgerContentIconBlock = styled(Link)`
  margin-left: ${pxIntoRem(27)};
  width: auto;
  height: auto;
  &:first-of-type {
    margin-left: 0px;
  }
`;

const HeaderBurgerContentIcon = styled.svg`
  width: ${pxIntoRem(27)};
  fill: white;
  &:hover {
    fill: #08e2bd;
    transition: 0.5s;
  }
  &:active {
    fill: #08e2bd;
    transition: 0.2s;
  }
`;

const HeaderBurgerContentLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: ${pxIntoRem(20)};
`;

const HeaderBurgerContentLink = styled.a`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: ${pxIntoRem(18)};
  line-height: 172.52%;
  color: #874dec;
  margin-top: ${pxIntoRem(5)};
  &:first-of-type {
    margin-top: 0px;
  }
`;

export {
  HeaderBurgerBlock,
  HeaderBurgerLine,
  HeaderBurgerContent,
  HeaderBurgerContentClose,
  HeaderBurgerContentHeader,
  HeaderBurgerContentCloseImage,
  HeaderBurgerContentLogo,
  HeaderBurgerContentLogoBlock,
  HeaderBurgerContentButton,
  HeaderBurgerContentButtonImage,
  HeaderBurgerContentIcon,
  HeaderBurgerContentIconBlock,
  HeaderBurgerContentIcons,
  HeaderBurgerContentNavigation,
  HeaderBurgerContentNavigationLink,
  HeaderBurgerContentLinks,
  HeaderBurgerContentLink,
};
