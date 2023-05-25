import styled from "styled-components";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import pxIntoRem from "../../utils/pxIntoRem";

const AccountNonConnectBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: ${pxIntoRem(55)};
  padding-bottom: ${pxIntoRem(60)};
  @media (max-width: 500px) {
    padding-top: ${pxIntoRem(30)};
  }
`;

const AccountNonConnectTitle = styled.h2`
  font-family: "TT Firs Neue";
  font-style: normal;
  font-weight: 500;
  font-size: ${pxIntoRem(26)};
  line-height: 111.5%;
  color: #ffffff;
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(24)};
    text-align: center;
    color: #ffffff;
  }
`;

const AccountNonConnectText = styled.span`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: ${pxIntoRem(18)};
  line-height: 172.52%;
  text-align: center;
  color: #ffffff;
  margin-top: ${pxIntoRem(17)};
  @media (max-width: 500px) {
    max-width: ${pxIntoRem(300)};
    margin-top: ${pxIntoRem(18)};
  }
`;

const AccountNonConnectImage = styled.img`
  width: ${pxIntoRem(482.07)};
  height: ${pxIntoRem(389.91)};
  object-fit: cover;
  margin-top: ${pxIntoRem(17)};
  position: relative;
  right: ${pxIntoRem(30)};
  pointer-events: none;

  @media (max-width: 500px) {
    width: ${pxIntoRem(445.93)};
    height: ${pxIntoRem(360.68)};
    margin-top: 0px;
    right: ${pxIntoRem(18)};
    top: ${pxIntoRem(-25)};
  }
`;

const AccountNonConnectButton = styled.button`
  width: ${pxIntoRem(400)};
  height: ${pxIntoRem(68)};
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(18)};
  line-height: ${pxIntoRem(22)};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2d0b5a;
  background: #08e2bd;
  border-radius: ${pxIntoRem(2)};
  margin-top: ${pxIntoRem(28)};
  transition: 1s;
  
  &:hover {
    background-color: #23f7d3;
    box-shadow: 0 0 10px #23f7d3;
  }
  @media (max-width: 500px) {
    width: 100%;
    height: ${pxIntoRem(68)};
    margin-top: 0px;

    &:active {
      background-color: #23f7d3;
      box-shadow: 0 0 10px #23f7d3;
    }
  }
`;

const AccountNonConnectButtonImage = styled.img`
  width: ${pxIntoRem(18)};
  height: ${pxIntoRem(16)};
  margin-left: ${pxIntoRem(10)};
`;

const AccountNonConnectWhat = styled(Link)`
  display: flex;
  align-items: center;
  background-color: transparent;
  margin-top: ${pxIntoRem(40)};
  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(28)};
  }
`;

const AccountNonConnectWhatText = styled.span`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: ${pxIntoRem(18)};
  line-height: 172.52%;
  text-align: center;
  color: #ffffff;
`;

const AccountNonConnectWhatArrow = styled.img`
  width: ${pxIntoRem(24)};
  height: ${pxIntoRem(24)};
  border-radius: 100%;
  margin-left: ${pxIntoRem(13)};
`;

export { AccountNonConnectTitle, AccountNonConnectBlock, AccountNonConnectButton, AccountNonConnectButtonImage, AccountNonConnectImage, AccountNonConnectText, AccountNonConnectWhat, AccountNonConnectWhatArrow, AccountNonConnectWhatText };
