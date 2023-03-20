import { FC, useState } from "react";
import Container from "../../../../components/Container/Container";
import DefaultHeaderBurger from "../../../../components/HeaderBurger/HeaderBurger";
import {
  DefaultHeaderBlock,
  DefaultHeaderBody,
  DefaultHeaderButton,
  DefaultHeaderButtonImage,
  DefaultHeaderIcon,
  DefaultHeaderIconBlock,
  DefaultHeaderIcons,
  DefaultHeaderLogo,
  DefaultHeaderLogoBlock,
  DefaultHeaderNavigation,
  DefaultHeaderNavigationLink,
  DefaultHeaderUser,
  DefaultHeaderUserHash,
  DefaultHeaderUserHashImage,
  DefaultHeaderUserHashText,
  DefaultHeaderUserName,
  DefaultHeaderUserNameImage,
  DefaultHeaderUserNameText,
} from "./DefaultHeaderStyles";

interface IDefaultHeader {
  isActive: boolean;
}

const DefaultHeader: FC<IDefaultHeader> = ({ isActive }) => {
  return (
    <DefaultHeaderBlock>
      <Container>
        <DefaultHeaderBody>
          <DefaultHeaderLogoBlock>
            <DefaultHeaderLogo alt="logo" src="/images/logo.png" />
          </DefaultHeaderLogoBlock>
          <DefaultHeaderNavigation>
            <DefaultHeaderNavigationLink to="/">Главная</DefaultHeaderNavigationLink>
            <DefaultHeaderNavigationLink to="/us">Как мы работаем</DefaultHeaderNavigationLink>
            <DefaultHeaderNavigationLink to="/faq">FAQ</DefaultHeaderNavigationLink>
          </DefaultHeaderNavigation>
          <DefaultHeaderIcons isActive={isActive}>
            <DefaultHeaderIconBlock to={"/"}>
              <DefaultHeaderIcon alt="telegram" src="/images/telegram.png" width={27} />
            </DefaultHeaderIconBlock>
            <DefaultHeaderIconBlock to={"/"}>
              <DefaultHeaderIcon alt="pipes" src="/images/pipes.svg" width={28} />
            </DefaultHeaderIconBlock>
            <DefaultHeaderIconBlock to={"/"}>
              <DefaultHeaderIcon alt="ship" src="/images/ship.svg" width={33} />
            </DefaultHeaderIconBlock>
          </DefaultHeaderIcons>
          {isActive ? (
            <DefaultHeaderUser>
              <DefaultHeaderUserName>
                <DefaultHeaderUserNameImage alt="etherium" src="/images/etherium.png" />
                <DefaultHeaderUserNameText>Goerli</DefaultHeaderUserNameText>
              </DefaultHeaderUserName>
              <DefaultHeaderUserHash>
                <DefaultHeaderUserHashImage alt="hash" src="/images/hash.png" />
                <DefaultHeaderUserHashText>0xBda1...</DefaultHeaderUserHashText>
              </DefaultHeaderUserHash>
            </DefaultHeaderUser>
          ) : (
            <DefaultHeaderButton>
              Подключить кошелек
              <DefaultHeaderButtonImage alt="menu" src="/images/wallet.svg" />
            </DefaultHeaderButton>
          )}
          <DefaultHeaderBurger />
        </DefaultHeaderBody>
      </Container>
    </DefaultHeaderBlock>
  );
};

export default DefaultHeader;
