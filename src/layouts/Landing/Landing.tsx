import React, { FC, PropsWithChildren } from "react";
import Container from "../../components/Container/Container";
import Footer from "../../components/Footer/Footer";
import MoneyBoxes from "../../components/MoneyBoxes/MoneyBoxes";
import LandingHeader from "./LandingHeader/LandingHeader";
import { LandingBlock, LandingContent } from "./LandingStyles";

const Landing: FC<PropsWithChildren> = ({ children }) => {
  return (
    <LandingBlock>
      <LandingHeader />
      <LandingContent>{children}</LandingContent>
      <Footer />
      {/* <MoneyBoxes /> */}
    </LandingBlock>
  );
};

export default Landing;
