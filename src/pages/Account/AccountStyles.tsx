import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import pxIntoRem from "../../utils/pxIntoRem";

const AccountBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: ${pxIntoRem(23)};
  @media (max-width: 500px) {
    padding-top: ${pxIntoRem(40)};
    padding-bottom: ${pxIntoRem(28)};
  }
`;

const AccountTitle = styled.h2`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(24)};
  line-height: 111.5%;
  color: #ffffff;
`;

const AccountTitleTokens = styled.span`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(26)};
  line-height: 111.5%;
  color: #ffffff;
  margin-left: ${pxIntoRem(38)};
  span {
    font-weight: 500;
    font-family: inherit;
    font-size: ${pxIntoRem(16)};
  }

  @media (max-width: 500px) {
    margin-left: ${pxIntoRem(15)};
  }
`;

const AccountItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: ${pxIntoRem(110)};
  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(64)};
  }
`;

const AccountItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: ${pxIntoRem(60)};
  &:first-of-type {
    margin-top: 0;
  }

  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(34)};
  }
`;

const AccountItemTitle = styled.div`
  font-family: "TT Firs Neue";
  font-style: normal;
  font-weight: 500;
  font-size: ${pxIntoRem(26)};
  line-height: 111.5%;
  color: #ffffff;
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(23)};
    margin-left: ${pxIntoRem(5)};
  }
`;

const AccountItemList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: ${pxIntoRem(33)};
  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(22)};
  }
`;

export { AccountBlock, AccountTitle, AccountItem, AccountItemTitle, AccountItems, AccountTitleTokens, AccountItemList };
