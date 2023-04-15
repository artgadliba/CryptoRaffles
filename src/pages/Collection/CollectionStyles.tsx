import styled from "styled-components";
import pxIntoRem from "../../utils/pxIntoRem";

const CollectionBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const CollectionImage = styled.img`
  width: 100%;
  height: ${pxIntoRem(316)};
  object-fit: cover;
  margin-top: ${pxIntoRem(10)};
  border: ${pxIntoRem(1)} solid #746091;
  border-radius: ${pxIntoRem(2)};

  @media (max-width: 500px) {
    height: ${pxIntoRem(388)};
    margin-top: 0px;
  }
`;

const CollectionInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${pxIntoRem(53)} ${pxIntoRem(74)} ${pxIntoRem(58)} ${pxIntoRem(70)};
  border-bottom: ${pxIntoRem(1)} solid rgba(255, 255, 255, 0.46);
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    padding: ${pxIntoRem(40)} ${pxIntoRem(74)} ${pxIntoRem(40)} ${pxIntoRem(16)};
  }
`;

const CollectionInfoItems = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

const CollectionInfoItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: ${pxIntoRem(19)};
  &:first-of-type {
    margin-top: 0;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: ${pxIntoRem(24)};
  }
`;

const CollectionInfoItemTitle = styled.span`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: ${pxIntoRem(16)};
  line-height: 111.5%;
  width: ${pxIntoRem(160)};
  color: rgba(255, 255, 255, 0.74);
  &:first-of-type {
    margin-top: 0;
  }

  @media (max-width: 500px) {
    width: auto;
  }
`;

interface ICollectionInfoItemValue {
  color?: string;
}

const CollectionInfoItemValue = styled.span<ICollectionInfoItemValue>`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(20)};
  line-height: 111.5%;
  color: ${({ color }) => color ?? "#ffffff"};
  margin-left: ${pxIntoRem(58)};
  &:first-of-type {
    margin-top: 0;
  }

  @media (max-width: 1450px) {
    margin-left: ${pxIntoRem(58 * 0.4)};
  }

  @media (max-width: 500px) {
    margin-left: 0;
    margin-top: ${pxIntoRem(5)};
  }
`;

const CollectionInfoSumm = styled.div`
  margin-left: ${pxIntoRem(44)};
  padding-bottom: ${pxIntoRem(18)};
  @media (max-width: 1450px) {
    margin-left: ${pxIntoRem(44 * 0.4)};
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    margin-left: 0;
    margin-top: ${pxIntoRem(24)};
    padding-bottom: 0;
  }
`;

const CollectionInfoSummTitle = styled.span`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: ${pxIntoRem(16)};
  line-height: 111.5%;
  color: rgba(255, 255, 255, 0.74);
`;

const CollectionInfoSummValue = styled.span`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(20)};
  line-height: 111.5%;
  color: #ffffff;
  margin-left: ${pxIntoRem(60)};
  @media (max-width: 1450px) {
    margin-left: ${pxIntoRem(60 * 0.4)};
  }

  @media (max-width: 500px) {
    margin-left: 0;
    margin-top: ${pxIntoRem(2)};
  }
`;

const CollectionInfoSummValueImage = styled.img`
  width: ${pxIntoRem(26.77)};
  height: ${pxIntoRem(32.37)};
  margin-right: ${pxIntoRem(6)};
  position: relative;
  top: ${pxIntoRem(4)};
`;

const CollectionInfoTimer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-bottom: auto;
  @media (max-width: 500px) {
    margin-left: 0;
    margin-top: ${pxIntoRem(47)};
  }
`;

const CollectionInfoTimerColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CollectionInfoTimerNumber = styled.span`
  font-family: "TT Firs Neue";
  font-style: normal;
  font-weight: 500;
  font-size: ${pxIntoRem(39.23)};
  line-height: 111.5%;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  text-shadow: 0px ${pxIntoRem(4.24)} ${pxIntoRem(6.36)} rgba(0, 0, 0, 0.07);
`;

const CollectionInfoTimerText = styled.span`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: ${pxIntoRem(13)};
  line-height: ${pxIntoRem(20)};
  text-align: center;
  color: rgba(255, 255, 255, 0.74);
`;

interface ICollectionInfoTimerSplitter {
  marginRight: number;
  marginLeft: number;
}

const CollectionInfoTimerSplitter = styled.span<ICollectionInfoTimerSplitter>`
  font-family: "TT Firs Neue";
  font-style: normal;
  font-weight: 500;
  font-size: ${pxIntoRem(39.2)};
  line-height: 111.5%;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  position: relative;
  top: ${pxIntoRem(-15)};
  margin: ${({ marginRight, marginLeft }) => `0px ${pxIntoRem(marginRight)} 0px ${pxIntoRem(marginLeft)}`};

  @media (max-width: 1450px) {
    margin: ${({ marginRight, marginLeft }) => `0px ${pxIntoRem(marginRight * 0.5)} 0px ${pxIntoRem(marginLeft * 0.5)}`};
  }

  @media (max-width: 500px) {
    margin: ${({ marginRight, marginLeft }) => `0px ${pxIntoRem(marginRight)} 0px ${pxIntoRem(marginLeft)}`};
  }
`;

const CollectionActive = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CollectionDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${pxIntoRem(40)} ${pxIntoRem(67)} ${pxIntoRem(10)} ${pxIntoRem(67)};
  @media (max-width: 500px) {
    padding: ${pxIntoRem(34)} ${pxIntoRem(0)} ${pxIntoRem(10)} ${pxIntoRem(2)};
  }
`;

const CollectionDescriptionTitle = styled.h2`
  font-family: "TT Firs Neue";
  font-style: normal;
  font-weight: 500;
  font-size: ${pxIntoRem(21)};
  line-height: 111.5%;
  color: #ffffff;
`;

const CollectionDescriptionText = styled.p`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 300;
  font-size: ${pxIntoRem(15)};
  line-height: ${pxIntoRem(24.5)};
  color: #ffffff;
  margin-top: ${pxIntoRem(24)};
  span {
    font-family: inherit;
    font-weight: 500;
  }

  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(16)};
    line-height: ${pxIntoRem(25.5)};
  }
`;

const CollectionConditions = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${pxIntoRem(48)} ${pxIntoRem(67)} ${pxIntoRem(10)} ${pxIntoRem(67)};
  @media (max-width: 500px) {
    padding: ${pxIntoRem(24)} ${pxIntoRem(0)} ${pxIntoRem(10)} ${pxIntoRem(2)};
  }
`;

const CollectionConditionsTitle = styled.h2`
  font-family: "TT Firs Neue";
  font-style: normal;
  font-weight: 500;
  font-size: ${pxIntoRem(21)};
  line-height: 111.5%;
  color: #ffffff;
`;

const CollectionConditionsList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-top: ${pxIntoRem(37)};
  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(20)};
  }
`;

const CollectionConditionsListItem = styled.li`
  display: flex;
  align-items: center;
  margin-top: ${pxIntoRem(13)};
  &:first-of-type {
    margin-top: 0px;
  }

  @media (max-width: 500px) {
    align-items: flex-start;
  }
`;

const CollectionConditionsListItemDot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pxIntoRem(26)};
  height: ${pxIntoRem(27)};
  background-color: #874dec;
  border-radius: 100%;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: ${pxIntoRem(15)};
  line-height: 172.52%;
  text-align: center;
  color: #ffffff;
  flex-shrink: 0;
`;

const CollectionConditionsListItemText = styled.span`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: ${pxIntoRem(15)};
  line-height: 172.52%;
  color: #ffffff;
  margin-left: ${pxIntoRem(16)};

  @media (max-width: 500px) {
    line-height: ${pxIntoRem(24)};
  }
`;

const CollectionBuyTokens = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${pxIntoRem(40)} ${pxIntoRem(67)} ${pxIntoRem(10)} ${pxIntoRem(66)};
  @media (max-width: 500px) {
    align-items: center;
    padding: ${pxIntoRem(20)} ${pxIntoRem(4)} ${pxIntoRem(30)} ${pxIntoRem(4)};
  }
`;

const CollectionBuyTokensTitle = styled.h2`
  font-family: "TT Firs Neue";
  font-style: normal;
  font-weight: 500;
  font-size: ${pxIntoRem(21)};
  line-height: 111.5%;
  color: #ffffff;
`;

const CollectionBuyTokensButtons = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${pxIntoRem(21)};
  width: 100%;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const CollectionBuyTokensControls = styled.div`
  display: flex;
  align-items: center;
`;

const CollectionBuyTokensControl = styled.button`
  border: ${pxIntoRem(1)} solid rgba(255, 255, 255, 0.54);
  border-radius: ${pxIntoRem(2.91)};
  padding: 0px ${pxIntoRem(12.37)};

  display: flex;
  align-items: center;
  justify-content: center;
  height: ${pxIntoRem(50)};
  background-color: transparent;
`;

const CollectionBuyTokensControlImage = styled.svg`
  width: ${pxIntoRem(17.47)};
  height: ${pxIntoRem(17.47)};
  fill: white;
`;

const CollectionBuyTokensControllWrapper = styled.div`
  &:hover ${CollectionBuyTokensControl} {
    color: #08e2bd;
    transition: 0.2s;
    outline: 1.4px solid #3ff2d4;
    outline-offset: -1.4px;
    border-color: #08e2bd;
  }
  &:hover ${CollectionBuyTokensControlImage} {
    transform: scale(1.35);
    fill: #08e2bd;
    transition: 0.2s;
  }
`;

const CollectionBuyTokensCounter = styled.span`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: ${pxIntoRem(18)};
  line-height: 172.52%;
  text-align: center;
  color: #ffffff;
  margin: 0px ${pxIntoRem(21)} 0px ${pxIntoRem(20)};
`;

const CollectionBuyTokensButton = styled.button`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(15)};
  line-height: ${pxIntoRem(18)};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2d0b5a;
  padding: ${pxIntoRem(16)} ${pxIntoRem(37)};
  background-color: #08e2bd;
  border-radius: ${pxIntoRem(2)};
  width: fit-content;
  margin-left: ${pxIntoRem(30)};
  cursor: pointer;
  transition: 1s;

  &:hover {
    background-color: #23f7d3;
    box-shadow: 0 0 10px #23f7d3;
  }
  @media (max-width: 500px) {
    width: 100%;
    margin-left: 0;
    margin-top: ${pxIntoRem(30)};
  }
`;

const CollectionBuyTokensButtonInactive = styled.button`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(15)};
  line-height: ${pxIntoRem(18)};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2d0b5a;
  padding: ${pxIntoRem(16)} ${pxIntoRem(37)};
  background-color: #a7a8a8;
  border-radius: ${pxIntoRem(2)};
  width: fit-content;
  margin-left: ${pxIntoRem(30)};
  cursor: pointer;

  @media (max-width: 500px) {
    width: 100%;
    margin-left: 0;
    margin-top: ${pxIntoRem(30)};
  }
`;

const CollectionDone = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${pxIntoRem(55)} ${pxIntoRem(200)} ${pxIntoRem(10)} ${pxIntoRem(69)};
  @media (max-width: 1200px) {
    padding: ${pxIntoRem(55)} ${pxIntoRem(100)} ${pxIntoRem(10)} ${pxIntoRem(69)};
  }

  @media (max-width: 500px) {
    align-items: center;
    padding: ${pxIntoRem(30)} ${pxIntoRem(15)} ${pxIntoRem(0)} ${pxIntoRem(15)};
  }
`;

const CollectionDoneTitle = styled.h2`
  font-family: "TT Firs Neue";
  font-style: normal;
  font-weight: 500;
  font-size: ${pxIntoRem(21)};
  line-height: 111.5%;
  color: #ffffff;
`;

const CollectionDoneContent = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const CollectionDoneWinners = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${pxIntoRem(30)};
`;

const CollectionDoneWinnersHeader = styled.div`
  display: flex;
`;

const CollectionDoneWinnersHeaderItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: ${pxIntoRem(16)};
  line-height: 111.5%;
  color: rgba(255, 255, 255, 0.74);
  &:nth-child(1) {
    padding-left: ${pxIntoRem(67)};
  }

  &:nth-child(2) {
    padding-left: ${pxIntoRem(92)};
  }

  &:nth-child(3) {
    padding-left: ${pxIntoRem(50)};
  }

  @media (max-width: 500px) {
    &:nth-child(1) {
      padding-left: ${pxIntoRem(50)};
    }

    &:nth-child(2) {
      padding-left: ${pxIntoRem(42)};
    }

    &:nth-child(3) {
      padding-left: ${pxIntoRem(12)};
    }
  }
`;

const CollectionDoneWinnersRow = styled.div`
  display: flex;
  background: rgba(45, 11, 90, 0.3);
  border: ${pxIntoRem(1)} solid rgba(255, 255, 255, 0.24);
  backdrop-filter: blur(16.5399px);
  border-radius: ${pxIntoRem(2)};
  margin-top: ${pxIntoRem(10)};
  padding: ${pxIntoRem(9)} 0px;
`;

const CollectionDoneWinnersRowItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &:nth-child(1) {
    padding-left: ${pxIntoRem(63)};
  }

  &:nth-child(2) {
    padding-left: ${pxIntoRem(113)};
    justify-content: center;
    width: ${pxIntoRem(30)};
  }

  &:nth-child(3) {
    padding-left: ${pxIntoRem(90)};
    padding-right: ${pxIntoRem(47)};
    justify-content: flex-start;
  }

  @media (max-width: 500px) {
    &:nth-child(1) {
      padding-left: ${pxIntoRem(49)};
    }

    &:nth-child(2) {
      padding-left: ${pxIntoRem(63)};
    }

    &:nth-child(3) {
      padding-left: ${pxIntoRem(54)};
      padding-right: ${pxIntoRem(15)};
    }
  }
`;

const CollectionDoneWinnersRowItemImage = styled.img`
  position: absolute;
  left: ${pxIntoRem(22)};
  width: ${pxIntoRem(24)};

  @media (max-width: 500px) {
    left: ${pxIntoRem(12)};
  }
`;

const CollectionDoneWinnersRowItemHash = styled.span`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(16)};
  line-height: 172.52%;
  color: #8e52f1;
`;

const CollectionDoneWinnersRowItemText = styled.span`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(16)};
  line-height: 172.52%;
  color: #ffffff;
`;

const CollectionDoneWinnersFakeRow = styled.div`
  display: flex;
  align-items: center;
  width: ${pxIntoRem(465)};
  height: ${pxIntoRem(45)};
  background: rgba(45, 11, 90, 0.3);
  border: ${pxIntoRem(1)} solid rgba(255, 255, 255, 0.24);
  backdrop-filter: blur(${pxIntoRem(16.53)});
  border-radius: ${pxIntoRem(2)};
  margin-top: ${pxIntoRem(10)};
  @media (max-width: 500px) {
    width: ${pxIntoRem(332)};
  }
`;

interface ICollectionDoneWinnersFakeRowMedal {
  color: string;
}

const CollectionDoneWinnersFakeRowMedal = styled.div<ICollectionDoneWinnersFakeRowMedal>`
  width: ${pxIntoRem(20)};
  height: ${pxIntoRem(19)};
  background: ${({ color }) => color};
  opacity: 0.25;
  border-radius: ${pxIntoRem(40)};
  left: ${pxIntoRem(25)};
  position: absolute;
  @media (max-width: 500px) {
    left: ${pxIntoRem(12)};
  }
`;

const CollectionDoneWinnersFakeRowWinner = styled.div`
  background: linear-gradient(90deg, rgba(142, 82, 241, 0.39) 0%, rgba(142, 82, 241, 0) 108.8%);
  backdrop-filter: blur(${pxIntoRem(45.5)});
  border-radius: ${pxIntoRem(2)};
  width: ${pxIntoRem(114)};
  height: ${pxIntoRem(16)};
  position: absolute;
  left: ${pxIntoRem(62)};
  @media (max-width: 500px) {
    left: ${pxIntoRem(48)};
  }
`;

const CollectionDoneWinnersFakeRowTokens = styled.div`
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 108.42%);
  backdrop-filter: blur(${pxIntoRem(45.5)});
  border-radius: ${pxIntoRem(2)};
  width: ${pxIntoRem(36)};
  height: ${pxIntoRem(16)};
  position: absolute;
  left: ${pxIntoRem(255)};
  @media (max-width: 500px) {
    left: ${pxIntoRem(190)};
  }
`;

const CollectionDoneWinnersFakeRowPrize = styled.div`
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 108.42%);
  backdrop-filter: blur(${pxIntoRem(45.5)});
  border-radius: ${pxIntoRem(2)};
  width: ${pxIntoRem(56)};
  height: ${pxIntoRem(16)};
  position: absolute;
  left: ${pxIntoRem(360)};
  @media (max-width: 500px) {
    left: ${pxIntoRem(260)};
  }
`;

const CollectionDoneButton = styled.button`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(18)};
  line-height: ${pxIntoRem(22)};
  display: flex;
  align-items: center;
  text-align: center;
  color: #2d0b5a;
  padding: ${pxIntoRem(23)} ${pxIntoRem(95)};
  background-color: #08e2bd;
  border-radius: ${pxIntoRem(2)};
  width: fit-content;
  margin-top: ${pxIntoRem(30)};
  cursor: pointer;

  @media (max-width: 500px) {
    width: 100%;
    margin-top: ${pxIntoRem(10)};
  }
`;

const CollectionDoneLogoBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  @media (max-width: 500px) {
    margin-left: 0;
    margin-top: ${pxIntoRem(50)};
  }
`;

const CollectionDoneLogo = styled.img`
  width: ${pxIntoRem(330)};
  top: ${pxIntoRem(-36)};
  left: ${pxIntoRem(10)};
  position: relative;
  z-index: 999;

  @media (max-width: 500px) {
    width: ${pxIntoRem(262)};
    height: ${pxIntoRem(282)};
    top: 0;
    left: 0;
  }
`;

const CollectionDoneLogoBackground = styled.img`
  position: absolute;
  left: ${pxIntoRem(285)};
  top: ${pxIntoRem(335)};
  opacity: 0.3;
  width: ${pxIntoRem(1259)};
  height: ${pxIntoRem(1170)};
  pointer-events: none;
  @media (max-width: 500px) {
    top: ${pxIntoRem(800)};
    left: ${pxIntoRem(-600)};
  }
`;

export {
  CollectionBlock,
  CollectionImage,
  CollectionInfo,
  CollectionInfoItems,
  CollectionInfoItemTitle,
  CollectionInfoItemValue,
  CollectionInfoItem,
  CollectionInfoSumm,
  CollectionInfoSummTitle,
  CollectionInfoSummValue,
  CollectionInfoSummValueImage,
  CollectionInfoTimer,
  CollectionInfoTimerColumn,
  CollectionInfoTimerNumber,
  CollectionInfoTimerSplitter,
  CollectionInfoTimerText,
  CollectionDescription,
  CollectionDescriptionText,
  CollectionDescriptionTitle,
  CollectionConditions,
  CollectionConditionsTitle,
  CollectionConditionsList,
  CollectionConditionsListItem,
  CollectionConditionsListItemDot,
  CollectionConditionsListItemText,
  CollectionBuyTokens,
  CollectionBuyTokensButtons,
  CollectionBuyTokensControls,
  CollectionBuyTokensControl,
  CollectionBuyTokensControllWrapper,
  CollectionBuyTokensControlImage,
  CollectionBuyTokensCounter,
  CollectionBuyTokensTitle,
  CollectionBuyTokensButton,
  CollectionBuyTokensButtonInactive,
  CollectionActive,
  CollectionDone,
  CollectionDoneContent,
  CollectionDoneTitle,
  CollectionDoneWinners,
  CollectionDoneWinnersHeader,
  CollectionDoneWinnersHeaderItem,
  CollectionDoneWinnersRow,
  CollectionDoneWinnersRowItem,
  CollectionDoneWinnersRowItemHash,
  CollectionDoneWinnersRowItemImage,
  CollectionDoneWinnersRowItemText,
  CollectionDoneWinnersFakeRowMedal,
  CollectionDoneWinnersFakeRowPrize,
  CollectionDoneWinnersFakeRowTokens,
  CollectionDoneWinnersFakeRowWinner,
  CollectionDoneWinnersFakeRow,
  CollectionDoneButton,
  CollectionDoneLogo,
  CollectionDoneLogoBackground,
  CollectionDoneLogoBlock,
};
