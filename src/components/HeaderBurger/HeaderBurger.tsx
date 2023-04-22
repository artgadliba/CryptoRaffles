import { FC, useState } from "react";
import {
  HeaderBurgerBlock,
  HeaderBurgerContent,
  HeaderBurgerContentButton,
  HeaderBurgerContentButtonImage,
  HeaderBurgerContentClose,
  HeaderBurgerContentCloseImage,
  HeaderBurgerContentHeader,
  HeaderBurgerContentIcon,
  HeaderBurgerContentIconBlock,
  HeaderBurgerContentIcons,
  HeaderBurgerContentLink,
  HeaderBurgerContentLinks,
  HeaderBurgerContentLogo,
  HeaderBurgerContentLogoBlock,
  HeaderBurgerContentNavigation,
  HeaderBurgerContentNavigationLink,
  HeaderBurgerLine,
} from "./HeaderBurgerStyles";

const HeaderBurger: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HeaderBurgerBlock onClick={() => setIsOpen(true)}>
        <HeaderBurgerLine />
        <HeaderBurgerLine />
        <HeaderBurgerLine />
      </HeaderBurgerBlock>
      {isOpen && (
        <HeaderBurgerContent>
          <HeaderBurgerContentHeader>
            <HeaderBurgerContentLogoBlock>
              <HeaderBurgerContentLogo alt="logo" src="/images/logo.png" />
            </HeaderBurgerContentLogoBlock>
            <HeaderBurgerContentClose onClick={() => setIsOpen(false)}>
              <HeaderBurgerContentCloseImage alt="close" src="/images/close.svg" />
            </HeaderBurgerContentClose>
          </HeaderBurgerContentHeader>
          <HeaderBurgerContentButton>
            Приложение <HeaderBurgerContentButtonImage alt="menu" src="/images/menu.svg" />
          </HeaderBurgerContentButton>
          <HeaderBurgerContentNavigation>
            <HeaderBurgerContentNavigationLink to="/">Главная</HeaderBurgerContentNavigationLink>
            <HeaderBurgerContentNavigationLink to="/us">Как мы работаем</HeaderBurgerContentNavigationLink>
            <HeaderBurgerContentNavigationLink to="/faq">FAQ</HeaderBurgerContentNavigationLink>
          </HeaderBurgerContentNavigation>
          <HeaderBurgerContentIcons>
            <HeaderBurgerContentIconBlock to={"/"}>
              <HeaderBurgerContentIcon alt="telegram" src="/images/telegram.png" width={27} />
            </HeaderBurgerContentIconBlock>
            <HeaderBurgerContentIconBlock to={"/"}>
              <HeaderBurgerContentIcon alt="pipes" src="/images/pipes.svg" width={28} />
            </HeaderBurgerContentIconBlock>
            <HeaderBurgerContentIconBlock to={"/"}>
              <HeaderBurgerContentIcon alt="ship" src="/images/ship.svg" width={33} />
            </HeaderBurgerContentIconBlock>
          </HeaderBurgerContentIcons>
          <HeaderBurgerContentLinks>
            <HeaderBurgerContentLink>Условия пользования</HeaderBurgerContentLink>
            <HeaderBurgerContentLink>Смарт контракт - Раффлы</HeaderBurgerContentLink>
            <HeaderBurgerContentLink>Смарт контракт - Гивы</HeaderBurgerContentLink>
          </HeaderBurgerContentLinks>
        </HeaderBurgerContent>
      )}
    </>
  );
}

export default HeaderBurger;
