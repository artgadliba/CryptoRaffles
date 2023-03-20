import { FC, SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../Container/Container";
import MoneyBoxes from "../MoneyBoxes/MoneyBoxes";
import { FooterBlock, FooterBlurredCircle, FooterBody, FooterBottom, FooterButton, FooterButtonImage, FooterIcon, FooterIconBlock, FooterIcons, FooterLink, FooterLogo, FooterLogoBlock, FooterNavigation, FooterNavigationLink, FooterTop } from "./FooterStyles";

const Footer: FC = () => {
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

    setTimeout(() => {
      const faq = document.querySelector("#faq");
      if (!faq) {
        return;
      }

      faq.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  }

  function toHow(e: SyntheticEvent) {
    e.preventDefault();

    navigate("/");

    setTimeout(() => {
      const how = document.querySelector("#how");
      if (!how) {
        return;
      }

      how.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  }

  return (
    <FooterBlock>
      <Container>
        <FooterBody>
          <FooterTop>
            <FooterLogoBlock>
              <FooterLogo alt="logo" src="/images/logo.png" />
            </FooterLogoBlock>
            <FooterNavigation>
              <FooterNavigationLink to="/" onClick={toMain}>
                Главная
              </FooterNavigationLink>
              <FooterNavigationLink to="/us" onClick={toHow}>
                Как мы работаем
              </FooterNavigationLink>
              <FooterNavigationLink to="/faq" onClick={toFAQ}>
                FAQ
              </FooterNavigationLink>
            </FooterNavigation>
            <FooterIcons>
              <FooterIconBlock to={"/"}>
                <FooterIcon alt="telegram" src="/images/telegram.png" width={27} />
              </FooterIconBlock>
              <FooterIconBlock to={"/"}>
                <FooterIcon alt="pipes" src="/images/pipes.svg" width={28} />
              </FooterIconBlock>
              <FooterIconBlock to={"/"}>
                <FooterIcon alt="ship" src="/images/ship.svg" width={33} />
              </FooterIconBlock>
            </FooterIcons>
            <FooterButton>
              Приложение
              <FooterButtonImage alt="menu" src="/images/menu.svg" />
            </FooterButton>
          </FooterTop>
          <FooterBottom>
            <FooterLink>Условия пользования</FooterLink>
            <FooterLink>Смарт контракт - Раффлы</FooterLink>
            <FooterLink>Смарт контракт - Гивы</FooterLink>
          </FooterBottom>
        </FooterBody>
        <FooterBlurredCircle />
      </Container>
    </FooterBlock>
  );
};

export default Footer;
