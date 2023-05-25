import React, { FC, useState, useRef, useEffect, SyntheticEvent } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as ReactDOM from 'react-dom';
import Container from "../../../../components/Container/Container";
import DefaultHeaderBurger from "../../../../components/HeaderBurger/HeaderBurger";
import {
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
  DefaultHeaderUserHashText
} from "./DefaultHeaderStyles";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  useConnectModal,
  useAccountModal,
  useChainModal,
} from "@rainbow-me/rainbowkit";

interface IDefaultHeader {
  isActive: boolean;
}

const RainbowButton: FC = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {

        const ready = mounted !== false;
        const connected =
          ready &&
          account &&
          chain;

        return (
          <>
            {(() => {
              if (!connected) {
                return (
                  <DefaultHeaderButton onClick={openConnectModal} type={"button"}>
                    Подключиться
                    <DefaultHeaderButtonImage width="18" height="18" viewBox="0 0 18 18">
                      <path fillRule="evenodd" clipRule="evenodd" d="M1.5 2.25C1.5 1.83579 1.83579 1.5 2.25 1.5H7.5C7.91421 1.5 8.25 1.83579 8.25 2.25V7.5C8.25 7.91421 7.91421 8.25 7.5 8.25H2.25C1.83579 8.25 1.5 7.91421 1.5 7.5V2.25ZM3 3V6.75H6.75V3H3Z" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M9.75 2.25C9.75 1.83579 10.0858 1.5 10.5 1.5H15.75C16.1642 1.5 16.5 1.83579 16.5 2.25V7.5C16.5 7.91421 16.1642 8.25 15.75 8.25H10.5C10.0858 8.25 9.75 7.91421 9.75 7.5V2.25ZM11.25 3V6.75H15V3H11.25Z" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M9.75 10.5C9.75 10.0858 10.0858 9.75 10.5 9.75H15.75C16.1642 9.75 16.5 10.0858 16.5 10.5V15.75C16.5 16.1642 16.1642 16.5 15.75 16.5H10.5C10.0858 16.5 9.75 16.1642 9.75 15.75V10.5ZM11.25 11.25V15H15V11.25H11.25Z" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M1.5 10.5C1.5 10.0858 1.83579 9.75 2.25 9.75H7.5C7.91421 9.75 8.25 10.0858 8.25 10.5V15.75C8.25 16.1642 7.91421 16.5 7.5 16.5H2.25C1.83579 16.5 1.5 16.1642 1.5 15.75V10.5ZM3 11.25V15H6.75V11.25H3Z" />
                    </DefaultHeaderButtonImage>
                  </DefaultHeaderButton>
                );
              }

              if (chain.unsupported) {
                return (
                  <DefaultHeaderUserName onClick={openChainModal}>
                    <DefaultHeaderUserNameImage alt={chain.name ?? "Chain icon"} src="/images/chain_icon.svg" />
                    <DefaultHeaderUserNameText>Смените сеть</DefaultHeaderUserNameText>
                  </DefaultHeaderUserName>
                );
              }

              return (
                <DefaultHeaderUser>
                  <DefaultHeaderUserName onClick={openChainModal}>
                    <DefaultHeaderUserNameImage alt={chain.name ?? "Chain icon"} src="/images/chain_icon.svg" />
                    <DefaultHeaderUserNameText>{chain.name}</DefaultHeaderUserNameText>
                  </DefaultHeaderUserName>

                  <DefaultHeaderUserHash onClick={openAccountModal}>
                    <DefaultHeaderUserHashImage alt="Web3 wallet" src="/images/wallet_icon.svg" />
                    <DefaultHeaderUserHashText> {account.displayName}</DefaultHeaderUserHashText>
                  </DefaultHeaderUserHash>
                </DefaultHeaderUser>
              );
            })()}
          </>
        );
      }}
    </ConnectButton.Custom>
  );
};

const DefaultHeader: FC<IDefaultHeader> = ({ isActive }) => {
  const location = useLocation();
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();
  const { openChainModal } = useChainModal();

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [location]);

  return (
    <DefaultHeaderBlock>
      <Container>
        <DefaultHeaderBody>
          <DefaultHeaderLogoBlock>
            <DefaultHeaderLogo alt="logo" src="/images/logo.svg" />
          </DefaultHeaderLogoBlock>
          <DefaultHeaderNavigation>
            <DefaultHeaderNavigationLink to={"/"}>Главная</DefaultHeaderNavigationLink>
            <DefaultHeaderNavigationLink to={"/#how"}>Как мы работаем</DefaultHeaderNavigationLink>
            <DefaultHeaderNavigationLink to={"/#faq"}>FAQ</DefaultHeaderNavigationLink>
          </DefaultHeaderNavigation>
          <DefaultHeaderIcons isActive={isActive}>
            <DefaultHeaderIconBlock to={"/"}>
              <DefaultHeaderIcon width="27" height="22" viewBox="0 0 27 22">
                <path d="M25.1775 0.144655L1.26073 9.1051C-0.371491 9.74205 -0.362048 10.6267 0.961268 11.0212L7.10167 12.8822L21.3088 4.17338C21.9805 3.77628 22.5943 3.9899 22.0898 4.42501L10.5793 14.5178H10.5766L10.5793 14.5191L10.1557 20.6684C10.7762 20.6684 11.05 20.3918 11.3981 20.0655L14.3806 17.2477L20.5844 21.6998C21.7283 22.3118 22.5498 21.9973 22.8344 20.671L26.9069 2.02403C27.3237 0.400219 26.2688 -0.335018 25.1775 0.144655V0.144655Z" />
              </DefaultHeaderIcon>
            </DefaultHeaderIconBlock>
            <DefaultHeaderIconBlock to={"/"}>
              <DefaultHeaderIcon width="28" height="28" viewBox="0 0 28 28">
                <path d="M5.81929 13.3086C5.81931 13.152 5.85021 12.997 5.9102 12.8525C5.97019 12.7079 6.05809 12.5766 6.16886 12.4662C6.27965 12.3558 6.41109 12.2683 6.55568 12.2089C6.70028 12.1495 6.85516 12.1193 7.01145 12.12L8.98803 12.1265C9.30315 12.1265 9.60539 12.2519 9.82822 12.4752C10.0511 12.6984 10.1763 13.0012 10.1763 13.3169V20.8042C10.3988 20.7381 10.6846 20.6675 10.9973 20.5938C11.2145 20.5427 11.4081 20.4195 11.5466 20.2443C11.6852 20.0691 11.7606 19.8521 11.7605  19.6286V10.3409C11.7605 10.0251 11.8857 9.72233 12.1085 9.49904C12.3314 9.27576 12.6336 9.15031 12.9488 9.15024H14.9293C15.2444 9.15031 15.5467 9.27576 15.7695 9.49904C15.9923 9.72233 16.1175 10.0251 16.1175 10.3409V18.9608C16.1175 18.9608 16.6134 18.7597 17.0964 18.5555C17.2758 18.4795 17.4289 18.3522 17.5366 18.1896C17.6443 18.027 17.7018 17.8362 17.702 17.641V7.36486C17.702 7.04918 17.8272 6.74642 18.0499 6.52318C18.2727 6.29994 18.5749 6.17452 18.89 6.17445H20.8705C21.1857   6.17445 21.4879 6.29985 21.7107 6.52311C21.9336 6.74635 22.0588 7.04914 22.0588 7.36486V15.8271C23.7758 14.5804 25.5158 13.0811 26.8967 11.2782C27.0971 11.0165 27.2296 10.7092 27.2825 10.3837C27.3355 10.0582 27.3072 9.72468 27.2002 9.41281C26.5609 7.57044 25.545 5.88201 24.2171 4.45559C22.8892 3.0292 21.2787 1.8962 19.4886 1.12914C17.6986 0.362072 15.7684 -0.0221741 13.8216 0.000988194C11.8748 0.0241502 9.95425 0.454212 8.1829 1.26365C6.41152 2.07308 4.82833 3.24407 3.53462  4.70167C2.24092 6.15926 1.2652 7.87138 0.669899 9.72846C0.0746008 11.5855 -0.127166 13.5466 0.0775102 15.4863C0.282186 17.426 0.8888 19.3015 1.85853 20.9928C2.02746 21.2845 2.27599 21.522 2.57491 21.6771C2.87384 21.8323 3.21076 21.8988 3.54611 21.8688C3.92071 21.8358 4.38713 21.789 4.94168 21.7238C5.18308 21.6963 5.40595 21.5809 5.56783 21.3994C5.72973 21.2179 5.81931 20.9831 5.81952 20.7397L5.81929 13.3086Z" />
                <path d="M5.77605 25.3176C7.86361 26.8391 10.3307 27.7524 12.9042 27.9564C15.4777 28.1602 18.0574 27.647 20.3579 26.4732C22.6583 25.2994 24.5897 23.511 25.9385 21.3058C27.2871 19.1006 28.0007 16.5645 28 13.9782C28 13.6555 27.985 13.3362 27.9636 13.0188C22.851 20.6578 13.4111 24.2291 5.77649 25.3165" />
              </DefaultHeaderIcon>
            </DefaultHeaderIconBlock>
            <DefaultHeaderIconBlock to={"/"}>
              <DefaultHeaderIcon width="33" height="29" viewBox="0 0 33 29">
                <path d="M1.96352 16.5595L2.07899 16.3822L9.04201 5.7462C9.14377 5.59048 9.38301 5.60658 9.45999 5.77573C10.6233 8.32128 11.627 11.4871 11.1568 13.4581C10.956 14.269 10.406 15.3672 9.78724 16.3822C9.70753 16.5299 9.61952 16.6749 9.526 16.8145C9.48199 16.879 9.40774 16.9166 9.32798 16.9166H2.167C1.97449 16.9166 1.86175 16.7125 1.96352 16.5595Z" />
                <path d="M33 18.5358V20.2194C33 20.3161 32.9395 20.402 32.8515 20.4396C32.3125 20.6652 30.4673 21.4922 29.7 22.5341C27.742 25.1951 26.246 29 22.902 29H8.95123C4.00677 29 0 25.0743 0 20.2302V20.0744C0 19.9455 0.107226 19.8408 0.239238 19.8408H8.01628C8.17024 19.8408 8.28298 19.9805 8.26927 20.1281C8.21424 20.6222 8.30776 21.127 8.547 21.5862C9.00899 22.5019 9.966 23.0738 11 23.0738H14.85V20.1389H11.044C10.8488 20.1389 10.7333 19.9187 10.846 19.763C10.8872 19.7012 10.934 19.6368 10.9835 19.5643C11.3438 19.0648 11.858 18.2888 12.3695 17.4054C12.7188 16.8093 13.057 16.1729 13.3293 15.5338C13.3843 15.4184 13.4282 15.3002 13.4722 15.1847C13.5465 14.9806 13.6235 14.79 13.6785 14.5994C13.7335 14.4382 13.7775 14.2691 13.8215 14.1106C13.9508 13.5682 14.0057 12.9936 14.0057 12.3975C14.0057 12.1639 13.9948 11.9195 13.9728 11.6859C13.9617 11.4309 13.9288 11.1757 13.8957 10.9206C13.8737 10.6951 13.8325 10.4722 13.7885 10.2386C13.7335 9.89758 13.6565 9.55928 13.5685 9.21821L13.5382 9.08937C13.4722 8.85572 13.4173 8.63288 13.3403 8.39928C13.123 7.66618 12.8728 6.95195 12.6088 6.28335C12.5125 6.0175 12.4025 5.76242 12.2925 5.50733C12.1303 5.12335 11.9652 4.77428 11.814 4.44398C11.737 4.2936 11.671 4.15665 11.605 4.01703C11.5308 3.8586 11.4538 3.70017 11.3767 3.54983C11.3218 3.43437 11.2585 3.32695 11.2145 3.21953L10.7443 2.37102C10.6783 2.25555 10.7883 2.1186 10.9175 2.15352L13.86 2.9322H13.8683C13.8737 2.9322 13.8765 2.93492 13.8792 2.93492L14.267 3.03962L14.6933 3.1578L14.85 3.20072V1.49297C14.85 0.668599 15.5265 0 16.3625 0C16.7805 0 17.16 0.166483 17.4323 0.437665C17.7045 0.7089 17.875 1.07945 17.875 1.49297V4.0278L18.1885 4.11368C18.2133 4.12178 18.238 4.1325 18.26 4.1486C18.337 4.205 18.447 4.28822 18.5872 4.3903C18.6973 4.47618 18.8155 4.58093 18.9585 4.68835C19.2417 4.91118 19.58 5.19852 19.9513 5.52882C20.0502 5.61203 20.1465 5.69797 20.2345 5.7839C20.713 6.2189 21.2493 6.72907 21.7608 7.29297C21.9038 7.4514 22.044 7.6125 22.187 7.78165C22.33 7.95352 22.4813 8.12267 22.6132 8.29187C22.7865 8.51742 22.9735 8.75102 23.1358 8.99538C23.2128 9.11085 23.3008 9.22898 23.375 9.34445C23.584 9.65321 23.7683 9.9728 23.9443 10.2923C24.0185 10.44 24.0955 10.6011 24.1615 10.7595C24.3568 11.1865 24.5108 11.6215 24.6097 12.0565C24.64 12.1505 24.662 12.2525 24.673 12.3438V12.3653C24.706 12.4941 24.717 12.6311 24.728 12.7707C24.772 13.2165 24.75 13.6622 24.651 14.1106C24.6097 14.3013 24.5548 14.4812 24.4888 14.6719C24.4228 14.8545 24.3567 15.0451 24.2715 15.225C24.1065 15.5982 23.9112 15.9715 23.6803 16.3205C23.606 16.4494 23.518 16.5864 23.43 16.7153C23.3337 16.8522 23.2348 16.9811 23.1467 17.1073C23.0258 17.2684 22.8965 17.4376 22.7645 17.588C22.6463 17.7464 22.5253 17.9048 22.3933 18.0444C22.209 18.2566 22.033 18.458 21.8487 18.6513C21.7388 18.7775 21.6205 18.9064 21.4995 19.0219C21.3813 19.1507 21.2602 19.2662 21.1502 19.3736C20.966 19.5535 20.812 19.6931 20.6827 19.8086L20.3803 20.0798C20.3363 20.1174 20.2785 20.1389 20.218 20.1389H17.875V23.0738H20.823C21.483 23.0738 22.11 22.8455 22.616 22.4266C22.7893 22.279 23.5455 21.6399 24.4392 20.6759C24.4695 20.6437 24.508 20.6195 24.552 20.6088L32.6948 18.3103C32.846 18.2673 33 18.3801 33 18.5358Z" />
              </DefaultHeaderIcon>
            </DefaultHeaderIconBlock>
          </DefaultHeaderIcons>
          <DefaultHeaderBurger />
            <RainbowButton />
        </DefaultHeaderBody>
      </Container>
    </DefaultHeaderBlock>
  );
}

export default DefaultHeader;
