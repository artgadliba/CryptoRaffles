import styled from "styled-components";
import pxIntoRem from "../../../../utils/pxIntoRem";

const AccountListItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: ${pxIntoRem(316)};
  width: 100%;
  padding: ${pxIntoRem(22)} ${pxIntoRem(34)} ${pxIntoRem(40)} ${pxIntoRem(42)};
  margin-top: ${pxIntoRem(35)};
  border: ${pxIntoRem(1)} solid #746091;
  border-radius: ${pxIntoRem(2)};
  cursor: pointer;

  &:first-of-type {
    margin-top: 0px;
  }

  @media (max-width: 500px) {
    padding: ${pxIntoRem(22)} ${pxIntoRem(28)} ${pxIntoRem(40)} ${pxIntoRem(30)};
    justify-content: flex-start;
    height: ${pxIntoRem(429)};
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
  border: ${pxIntoRem(1)} solid rgba(255, 255, 255, 0.43);
  backdrop-filter: blur(${pxIntoRem(16.5)});
  border-radius: ${pxIntoRem(59)};
  width: fit-content;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: ${pxIntoRem(16)};
  line-height: 111.5%;
  color: #ffffff;
  padding: ${pxIntoRem(6)} ${pxIntoRem(17)};
`;

const AccountListItemContent = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  z-index: 99;
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
`;

const AccountListItemSumm = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${pxIntoRem(65)};

  @media (max-width: 1200px) {
    margin-left: ${pxIntoRem(65 * 0.6)};
  }

  @media (max-width: 1000px) {
    margin-left: ${pxIntoRem(65 * 0.3)};
  }

  @media (max-width: 500px) {
    align-items: center;
    margin-top: ${pxIntoRem(20)};
    margin-left: 0px;
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
  margin-left: ${pxIntoRem(130)};
  @media (max-width: 1200px) {
    margin-left: ${pxIntoRem(130 * 0.6)};
  }

  @media (max-width: 1000px) {
    margin-left: ${pxIntoRem(130 * 0.3)};
  }

  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(22)};
    margin-left: 0px;
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
  position: relative;
  bottom: ${pxIntoRem(-11)};
  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(55)};
    margin-left: 0px;
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
    margin-left: 0;
  }
`;

const AccountListFakeItemBlock = styled(AccountListItemBlock)`
  cursor: default;
  padding: ${pxIntoRem(24)} ${pxIntoRem(34)} ${pxIntoRem(40)} ${pxIntoRem(28)};
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
  padding: ${pxIntoRem(14.5)} ${pxIntoRem(23)};
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.43);
  backdrop-filter: blur(${pxIntoRem(16.5)});
  border-radius: ${pxIntoRem(59)};
  width: fit-content;
  & > div {
    background-color: rgba(217, 217, 217, 0.51);
    width: ${pxIntoRem(37)};
    height: ${pxIntoRem(2)};
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
  height: ${pxIntoRem(20)};
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(${pxIntoRem(45.5)});
  border-radius: ${pxIntoRem(2)};
  flex-shrink: 0;
  @media (max-width: 1200px) {
    position: relative;
    top: ${pxIntoRem(-15)};
  }

  @media (max-width: 500px) {
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 108.42%);
  }
`;

const AccountListFakeItemSumm = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${pxIntoRem(35)};
  flex-shrink: 0;

  @media (max-width: 1450px) {
    margin-left: ${pxIntoRem(35 * 0.3)};
  }

  @media (max-width: 500px) {
    margin-left: 0px;
    align-items: center;
  }
`;

const AccountListFakeItemSummTitle = styled.div`
  width: ${pxIntoRem(125)};
  height: ${pxIntoRem(20)};
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(${pxIntoRem(45.5)});
  border-radius: ${pxIntoRem(2)};
  flex-shrink: 0;

  @media (max-width: 500px) {
    width: ${pxIntoRem(77)};
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 108.42%);
  }
`;

const AccountListFakeItemSummText = styled.div`
  width: ${pxIntoRem(170)};
  height: ${pxIntoRem(7)};
  margin-top: ${pxIntoRem(8)};
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(${pxIntoRem(45.5)});
  border-radius: ${pxIntoRem(2)};
  flex-shrink: 0;

  @media (max-width: 500px) {
    width: ${pxIntoRem(123)};
    height: ${pxIntoRem(14)};
    margin-top: ${pxIntoRem(5)};
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 108.42%);
  }
`;

const AccountListFakeItemTimer = styled.div`
  width: ${pxIntoRem(312)};
  height: ${pxIntoRem(51)};
  margin-left: ${pxIntoRem(77)};
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(${pxIntoRem(45.5)});
  border-radius: ${pxIntoRem(2)};
  flex-shrink: 0;

  @media (max-width: 1450px) {
    margin-left: ${pxIntoRem(77 * 0.3)};
    width: ${pxIntoRem(312 * 0.9)};
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

const AccountListFakeItemStatus = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
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

const AccountListFakeItemStatusButton = styled.div`
  width: ${pxIntoRem(142)};
  height: ${pxIntoRem(38)};
  border-radius: ${pxIntoRem(2)};
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(${pxIntoRem(45.5)});
  flex-shrink: 0;
  border-radius: ${pxIntoRem(33)};
  margin-left: ${pxIntoRem(17)};
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
};
