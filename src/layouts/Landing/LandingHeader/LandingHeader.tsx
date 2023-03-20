import { FC, SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../../components/Container/Container";
import HeaderBurger from "../../../components/HeaderBurger/HeaderBurger";
import {
  LandingHeaderBlock,
  LandingHeaderBody,
  LandingHeaderButton,
  LandingHeaderButtonImage,
  LandingHeaderIcon,
  LandingHeaderIconBlock,
  LandingHeaderIcons,
  LandingHeaderLogo,
  LandingHeaderLogoBlock,
  LandingHeaderNavigation,
  LandingHeaderNavigationLink,
} from "./LandingHeaderStyles";

const LandingHeader: FC = () => {
  const navigate = useNavigate();

  function toMain(e: SyntheticEvent) {
    e.preventDefault();

    navigate("/");
    window.scrollTo({
      top: 0,
    });
  }

  function toFAQ(e: SyntheticEvent) {
    e.preventDefault();

    navigate("/");
    const faq = document.querySelector("#faq");
    if (!faq) {
      return;
    }

    const yOffset = 85;
    const startAxis = faq.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({
      top: startAxis,
      behavior: "smooth",
    });
  }

  function toHow(e: SyntheticEvent) {
    e.preventDefault();

    navigate("/");
    const how = document.querySelector("#how");
    if (!how) {
      return;
    }

    const yOffset = 85;
    const startAxis = how.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({
      top: startAxis,
      behavior: "smooth",
    });
  }
  return (
    <LandingHeaderBlock>
      <Container>
        <LandingHeaderBody>
          <LandingHeaderLogoBlock>
            <LandingHeaderLogo alt="logo" src="/images/logo.png" />
          </LandingHeaderLogoBlock>
          <LandingHeaderNavigation>
            <LandingHeaderNavigationLink to="/" onClick={toMain}>
              Главная
            </LandingHeaderNavigationLink>
            <LandingHeaderNavigationLink to="/us" onClick={toHow}>
              Как мы работаем
            </LandingHeaderNavigationLink>
            <LandingHeaderNavigationLink to="/faq" onClick={toFAQ}>
              FAQ
            </LandingHeaderNavigationLink>
          </LandingHeaderNavigation>
          <LandingHeaderIcons>
            <LandingHeaderIconBlock to={"/"}>
              <LandingHeaderIcon alt="telegram" src="/images/telegram.png" width={27} />
            </LandingHeaderIconBlock>
            <LandingHeaderIconBlock to={"/"}>
              <LandingHeaderIcon alt="pipes" src="/images/pipes.svg" width={28} />
            </LandingHeaderIconBlock>
            <LandingHeaderIconBlock to={"/"}>
              <LandingHeaderIcon alt="ship" src="/images/ship.svg" width={33} />
            </LandingHeaderIconBlock>
          </LandingHeaderIcons>
          <LandingHeaderButton to={"/account"}>
            Приложение
            <LandingHeaderButtonImage alt="menu" src="/images/menu.svg" />
          </LandingHeaderButton>
          <HeaderBurger />
        </LandingHeaderBody>
      </Container>
    </LandingHeaderBlock>
  );
};

export default LandingHeader;
