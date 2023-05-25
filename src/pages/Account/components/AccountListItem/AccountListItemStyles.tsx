import styled from "styled-components";
import pxIntoRem from "../../../../utils/pxIntoRem";
import { Link } from "react-router-dom";

const AccountListItemBlock = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: ${pxIntoRem(316)};
  width: 100%;
  padding: ${pxIntoRem(22)} ${pxIntoRem(34)} ${pxIntoRem(34)} ${pxIntoRem(40)};
  margin-top: ${pxIntoRem(35)};
  border: ${pxIntoRem(1)} solid #746091;
  border-radius: ${pxIntoRem(2)};
  cursor: pointer;

  &:first-of-type {
    margin-top: 0px;
  }
  @media (max-width: 500px) {
    padding: ${pxIntoRem(24)} ${pxIntoRem(20)} ${pxIntoRem(40)} ${pxIntoRem(20)};
    // padding: ${pxIntoRem(22)} ${pxIntoRem(28)} ${pxIntoRem(40)} ${pxIntoRem(30)};
    justify-content: flex-start;
    height: ${pxIntoRem(460)};
    margin-top: ${pxIntoRem(31)};
  }
`;

const AccountListItemBackground = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AccountListItemUsername = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(${pxIntoRem(16.5)});
  border-radius: ${pxIntoRem(59)};
  width: ${pxIntoRem(170)};
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: ${pxIntoRem(16)};
  line-height: 111.5%;
  color: #ffffff;
  padding: ${pxIntoRem(6)} ${pxIntoRem(17)};
  position: absolute;
  top: 7%;
  left: 3%;

  @media (max-width: 500px) {
    left: 7%;
  }
`;

const AccountListItemContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  z-index: 99;

  @media (max-width: 1200px) {
    align-items: flex-end;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    margin-top: ${pxIntoRem(60)};
  }
`;

const AccountListItemId = styled.h3`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(24)};
  line-height: 111.5%;
  color: #ffffff;
  position: absolute;
  bottom: 16%;
  left: 4%;

  @media (max-width: 500px) {
    position: static;
    margin-top: ${pxIntoRem(60)};
  }
`;

const AccountListItemSumm = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 11.4%;
  left: 25%;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    position: static;
    margin-top: ${pxIntoRem(20)};
    margin-left: 0;
  }
`;

const AccountListItemSummTitle = styled.span`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(24)};
  line-height: 111.5%;
  color: #ffffff;
`;

const AccountListItemSummText = styled.span`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: ${pxIntoRem(13)};
  line-height: 111.5%;
  text-align: center;
  color: rgba(255, 255, 255, 0.74);
`;

const AccountListItemTimer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 11.4%;
  left: 41%;

  @media (max-width: 500px) {
    flex-direction: row;
    align-items: center;
    position: static;
    margin-left: 0;
    margin-top: ${pxIntoRem(22)};
  }
`;

const AccountListItemTimerColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AccountListItemTimerNumber = styled.span`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(24)};
  line-height: 111.5%;
  color: #ffffff;
`;

const AccountListItemTimerText = styled.span`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: ${pxIntoRem(13)};
  line-height: 111.5%;
  text-align: center;
  color: rgba(255, 255, 255, 0.74);
`;

interface IAccountListItemTimerSplitter {
  marginRight: number;
  marginLeft: number;
}

const AccountListItemTimerSplitter = styled.span<IAccountListItemTimerSplitter>`
  position: relative;
  top: ${pxIntoRem(-7)};
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(24)};
  line-height: 111.5%;
  color: #ffffff;
  margin: ${({ marginRight, marginLeft }) => `0px ${pxIntoRem(marginRight)} 0px ${pxIntoRem(marginLeft)}`};

  @media (max-width: 1200px) {
    margin: ${({ marginRight, marginLeft }) => `0px ${pxIntoRem(marginRight * 0.6)} 0px ${pxIntoRem(marginLeft * 0.6)}`};
  }
  @media (max-width: 500px) {
    margin: ${({ marginRight, marginLeft }) => `0px ${pxIntoRem(marginRight * 0.5)} 0px ${pxIntoRem(marginLeft * 0.5)}`};
  }
`;

const AccountListItemStatus = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  position: absolute;
  bottom: 13%;
  right: 4%;

  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(55)};
    margin-left: 0px;
    scale: 0.8;
  }
`;

const AccountListItemStatusText = styled.span`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: ${pxIntoRem(16)};
  line-height: 111.5%;
  color: rgba(255, 255, 255, 0.74);
  @media (max-width: 1000px) {
    display: none;
  }
`;

interface IAccountListItemStatusIndicator {
  backgroundColor: string;
  textColor: string;
}

const AccountListItemStatusIndicator = styled.div<IAccountListItemStatusIndicator>`
  display: flex;
  width: ${pxIntoRem(118)};
  height: ${pxIntoRem(36)};
  margin-top: ${pxIntoRem(1)};
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${pxIntoRem(33)};
  margin-left: ${pxIntoRem(17)};
  padding: ${pxIntoRem(10)} ${pxIntoRem(29)};
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(16)};
  line-height: 111.5%;
  color: ${({ textColor }) => textColor};
  @media (max-width: 1000px) {
    margin-top: ${pxIntoRem(1)};
    margin-left: 0;
  }
`;

const AccountListFakeItemBlock = styled(AccountListItemBlock)`
  cursor: default;
  padding: ${pxIntoRem(34)} ${pxIntoRem(34)} ${pxIntoRem(34)} ${pxIntoRem(34)};
`;

const AccountListFakeItemBackground = styled(AccountListItemBackground)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AccountListFakeItemUsername = styled.div`
  padding: ${pxIntoRem(15)} ${pxIntoRem(23)};
  background: rgba(255, 255, 255, 0.06);
  // border: 1px solid rgba(255, 255, 255, 0.43);
  backdrop-filter: blur(${pxIntoRem(16.5)});
  border-radius: ${pxIntoRem(59)};
  width: ${pxIntoRem(170)};
  position: absolute;
  top: 7%;
  left: 3%;

  @media (max-width: 500px) {
    left: 7%;
  }
`;

const AccountListFakeItemClock = styled.img`
  width: ${pxIntoRem(49.47)};
  height: ${pxIntoRem(95.07)};
  margin: 0 auto auto auto;
  position: relative;
  left: ${pxIntoRem(-15)};
  z-index: 999;

  @media (max-width: 500px) {
    position: absolute;
    left: 0;
    right: 0;
    bottom: ${pxIntoRem(40)};
    margin: 0 auto;
  }
`;

const AccountListFakeItemContent = styled(AccountListItemContent)`
  align-items: flex-start;
  @media (max-width: 1200px) {
    align-items: flex-end;
  }

  @media (max-width: 500px) {
    align-items: center;
    margin-top: ${pxIntoRem(86)};
  }
`;

const AccountListFakeItemId = styled.div`
  width: ${pxIntoRem(213)};
  height: ${pxIntoRem(27)};
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(${pxIntoRem(45.5)});
  border-radius: ${pxIntoRem(2)};
  flex-shrink: 0;
  position: absolute;
  bottom: 15.7%;
  left: 4%;

  @media (max-width: 500px) {
    position: static;
    margin-top: ${pxIntoRem(24)};
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 108.42%);
  }
`;

const AccountListFakeItemSumm = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  position: absolute;
  bottom: 12.5%;
  left: 25%;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    position: static;
    margin-top: ${pxIntoRem(18)};
    margin-left: 0;
  }
`;

const AccountListFakeItemSummTitle = styled.div`
  width: ${pxIntoRem(125)};
  height: ${pxIntoRem(27)};
  margin-top: ${pxIntoRem(2)};
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(${pxIntoRem(45.5)});
  border-radius: ${pxIntoRem(2)};
  flex-shrink: 0;

  @media (max-width: 500px) {
    width: ${pxIntoRem(77)};
    height: ${pxIntoRem(22)};
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 108.42%);
  }
`;

const AccountListFakeItemSummText = styled.div`
  width: ${pxIntoRem(150)};
  height: ${pxIntoRem(6)};
  margin-top: ${pxIntoRem(4)};
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(${pxIntoRem(45.5)});
  border-radius: ${pxIntoRem(2)};
  flex-shrink: 0;

  @media (max-width: 500px) {
    width: ${pxIntoRem(115)};
    height: ${pxIntoRem(14)};
    margin-top: ${pxIntoRem(5)};
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 108.42%);
  }
`;

const AccountListFakeItemTimer = styled.div`
  width: ${pxIntoRem(282)};
  height: ${pxIntoRem(37)};
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(${pxIntoRem(45.5)});
  border-radius: ${pxIntoRem(2)};
  flex-shrink: 0;
  position: absolute;
  bottom: 12.5%;
  left: 41%;

  @media (max-width: 1450px) {
    width: ${pxIntoRem(235)};
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

const AccountListFakeItemStatus = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  position: absolute;
  bottom: 13%;
  right: 4%;

  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(55)};
    margin-left: 0px;
    scale: 0.8;
  }
`;

const AccountListFakeItemStatusText = styled.div`
  width: ${pxIntoRem(56)};
  height: ${pxIntoRem(15)};
  border-radius: ${pxIntoRem(2)};
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(${pxIntoRem(45.5)});
  flex-shrink: 0;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const AccountListFakeItemButton = styled.div`
  display: none;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 108.42%);
  backdrop-filter: blur(${pxIntoRem(45.5)});
  border-radius: ${pxIntoRem(2)};
  width: ${pxIntoRem(37)};
  height: ${pxIntoRem(44)};
  margin-right: ${pxIntoRem(23)};

  @media (max-width: 500px) {
    display: block;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

const AccountListFakeItemButtons = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  @media (max-width: 1200px) {
    flex-direction: column;
  }

  @media (max-width: 500px) {
    flex-direction: row;
    margin-left: 0;
    margin-top: ${pxIntoRem(24)};
  }
`;

const AccountListFakeItemButtonMore = styled.div`
  width: ${pxIntoRem(155)};
  height: ${pxIntoRem(51)};
  border-radius: ${pxIntoRem(2)};
  margin-right: ${pxIntoRem(12)};
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(${pxIntoRem(45.5)});
  border-radius: ${pxIntoRem(2)};
  flex-shrink: 0;

  @media (max-width: 1200px) {
    width: 100%;
    min-width: ${pxIntoRem(155)};
    margin-right: 0px;
    margin-bottom: ${pxIntoRem(12)};
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

const AccountListFakeItemStatusButton = styled.div`
  width: ${pxIntoRem(118)};
  height: ${pxIntoRem(36)};
  border-radius: ${pxIntoRem(2)};
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(${pxIntoRem(45.5)});
  flex-shrink: 0;
  border-radius: ${pxIntoRem(33)};
  margin-left: ${pxIntoRem(17)};

  @media (max-width: 500px) {
    margin-left: 0px;
  }
`;

const AccountListFakeItemButtonsWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: row;
    margin-left: 0;
    margin-top: ${pxIntoRem(24)};
  }
`;

const AccountListFakeItemFakeButton = styled.div`
  display: none;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 108.42%);
  backdrop-filter: blur(${pxIntoRem(45.5)});
  border-radius: ${pxIntoRem(2)};
  width: ${pxIntoRem(37)};
  height: ${pxIntoRem(41)};
  margin-right: ${pxIntoRem(23)};

  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(-2)};
    display: block;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

export {
  AccountListItemBlock,
  AccountListItemBackground,
  AccountListItemUsername,
  AccountListItemContent,
  AccountListItemId,
  AccountListItemSumm,
  AccountListItemSummText,
  AccountListItemSummTitle,
  AccountListItemTimer,
  AccountListItemTimerColumn,
  AccountListItemTimerSplitter,
  AccountListItemTimerText,
  AccountListItemTimerNumber,
  AccountListItemStatus,
  AccountListItemStatusText,
  AccountListItemStatusIndicator,
  AccountListFakeItemBackground,
  AccountListFakeItemBlock,
  AccountListFakeItemClock,
  AccountListFakeItemContent,
  AccountListFakeItemId,
  AccountListFakeItemSumm,
  AccountListFakeItemSummText,
  AccountListFakeItemSummTitle,
  AccountListFakeItemTimer,
  AccountListFakeItemUsername,
  AccountListFakeItemStatus,
  AccountListFakeItemStatusButton,
  AccountListFakeItemStatusText,
  AccountListFakeItemButtonsWrapper,
  AccountListFakeItemFakeButton
};
