import React, { FC, PropsWithChildren } from "react";
import Container from "../../components/Container/Container";
import Footer from "../../components/Footer/Footer";
import MoneyBoxes from "../../components/MoneyBoxes/MoneyBoxes";
import DefaultHeader from "./components/DefaultHeader/DefaultHeader";
import { DefaultBlock, DefaultContent, DefaultContentBody, DefaultNavigation, DefaultNavigationLink, DefaultNavigationLinkText } from "./DefaultStyles";

interface IDefault {
  isHeaderActive?: boolean;
}

const Default: FC<PropsWithChildren<IDefault>> = ({ children, isHeaderActive = false }) => {
  return (
    <DefaultBlock>
      <DefaultHeader isActive={isHeaderActive} />
      <Container maxWidth={1442}>
        <DefaultContent>
          <DefaultNavigation>
            <DefaultNavigationLink to={"/raffles"}>
              <DefaultNavigationLinkText>Раффлы</DefaultNavigationLinkText>
            </DefaultNavigationLink>
            <DefaultNavigationLink to={"/giveaways"}>
              <DefaultNavigationLinkText>Гивы</DefaultNavigationLinkText>
            </DefaultNavigationLink>
            <DefaultNavigationLink to={"/account"}>
              <DefaultNavigationLinkText>Аккаунт</DefaultNavigationLinkText>
            </DefaultNavigationLink>
          </DefaultNavigation>
          <DefaultContentBody>{children}</DefaultContentBody>
        </DefaultContent>
      </Container>
      <Footer />
      {/* <MoneyBoxes /> */}
    </DefaultBlock>
  );
}

export default Default;
