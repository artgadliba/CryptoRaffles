import styled from "styled-components";
import pxIntoRem from "../../../utils/pxIntoRem";

const GivesItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: ${pxIntoRem(316)};
  width: 100%;
  padding: ${pxIntoRem(22)} ${pxIntoRem(34)} ${pxIntoRem(34)} ${pxIntoRem(40)};
  margin-top: ${pxIntoRem(35)};
  overflow: hidden;
  border: ${pxIntoRem(1)} solid #746091;
  border-radius: ${pxIntoRem(2)};

  &:first-of-type {
    margin-top: 0px;
  }

  @media (max-width: 500px) {
    padding: ${pxIntoRem(24)} ${pxIntoRem(20)} ${pxIntoRem(40)} ${pxIntoRem(20)};
    justify-content: flex-start;
    height: ${pxIntoRem(429)};
    margin-top: ${pxIntoRem(31)};
  }
`;

const GivesItemBackground = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const GivesItemUsername = styled.div`
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

  @media (max-width: 500px) {
    margin-left: ${pxIntoRem(13)};
    padding: ${pxIntoRem(5)} ${pxIntoRem(17)};
  }
`;

const GivesItemContent = styled.div`
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

const GivesItemId = styled.h3`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(24)};
  line-height: 111.5%;
  color: #ffffff;
  top: ${pxIntoRem(-7)};
  position: relative;
  @media (max-width: 1200px) {
    top: ${pxIntoRem(-15)};
  }

  @media (max-width: 500px) {
    position: static;
  }
`;

const GivesItemSumm = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${pxIntoRem(65)};

  @media (max-width: 1450px) {
    margin-left: ${pxIntoRem(65 * 0.6)};
  }

  @media (max-width: 1000px) {
    margin-left: ${pxIntoRem(65 * 0.3)};
  }

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    margin-top: ${pxIntoRem(20)};
    margin-left: 0;
  }
`;

const GivesItemSummTitle = styled.span`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(24)};
  line-height: 111.5%;
  color: #ffffff;
`;

const GivesItemSummText = styled.span`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: ${pxIntoRem(13)};
  line-height: 111.5%;
  text-align: center;
  color: rgba(255, 255, 255, 0.74);
`;

const GivesItemTimer = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${pxIntoRem(130)};
  @media (max-width: 1450px) {
    margin-left: ${pxIntoRem(130 * 0.6)};
  }

  @media (max-width: 1000px) {
    margin-left: ${pxIntoRem(130 * 0.3)};
  }

  @media (max-width: 500px) {
    margin-left: 0;
    margin-top: ${pxIntoRem(22)};
  }
`;

const GivesItemTimerColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GivesItemTimerNumber = styled.span`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(24)};
  line-height: 111.5%;
  color: #ffffff;
`;

const GivesItemTimerText = styled.span`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: ${pxIntoRem(13)};
  line-height: 111.5%;
  text-align: center;
  color: rgba(255, 255, 255, 0.74);
`;

interface IGivesItemTimerSplitter {
  marginRight: number;
  marginLeft: number;
}

const GivesItemTimerSplitter = styled.span<IGivesItemTimerSplitter>`
  position: relative;
  top: ${pxIntoRem(-7)};
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(24)};
  line-height: 111.5%;
  color: #ffffff;
  margin: ${({ marginRight, marginLeft }) => `0px ${pxIntoRem(marginRight)} 0px ${pxIntoRem(marginLeft)}`};

  @media (max-width: 1450px) {
    margin: ${({ marginRight, marginLeft }) => `0px ${pxIntoRem(marginRight * 0.6)} 0px ${pxIntoRem(marginLeft * 0.6)}`};
  }

  @media (max-width: 500px) {
    margin: ${({ marginRight, marginLeft }) => `0px ${pxIntoRem(marginRight * 0.5)} 0px ${pxIntoRem(marginLeft * 0.5)}`};
  }
`;

const GivesItemButtons = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  @media (max-width: 1200px) {
    flex-direction: column;
  }

  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(27)};
    margin-left: 0;
    width: 100%;
  }
`;

const GivesItemButtonMore = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(15)};
  line-height: ${pxIntoRem(18)};
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  padding: ${pxIntoRem(17)} ${pxIntoRem(37)};
  border: ${pxIntoRem(1)} solid #ffffff;
  background-color: transparent;
  border-radius: ${pxIntoRem(2)};
  margin-right: ${pxIntoRem(12)};
  transition: 1s;

  &:hover {
    color: #08e2bd;
    transition: 0.2s;
    outline: 1.5px solid #3ff2d4;
    border-color: #08e2bd;
  }

  @media (max-width: 1200px) {
    width: 100%;
    margin-right: 0px;
    margin-bottom: ${pxIntoRem(12)};
  }

  @media (max-width: 500px) {
    margin-bottom: ${pxIntoRem(7)};
  }
`;

const GivesItemButtonConnect = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(15)};
  line-height: ${pxIntoRem(18)};
  display: flex;
  align-items: center;
  text-align: center;
  color: #2d0b5a;
  padding: ${pxIntoRem(17)} ${pxIntoRem(37)};
  border: ${pxIntoRem(1)} solid #08e2bd;
  background-color: #08e2bd;
  border-radius: ${pxIntoRem(2)};
  transition: 1s;

  &:hover {
    transition: 0.3s;
    outline: 1.5px solid #3ff2d4;
    outline-offset: 2.5px;
    transform: scale(0.95);
  }

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const GivesFakeItemBlock = styled(GivesItemBlock)`
  cursor: default;
  padding: ${pxIntoRem(24)} ${pxIntoRem(34)} ${pxIntoRem(40)} ${pxIntoRem(28)};
`;

const GivesFakeItemBackground = styled(GivesItemBackground)``;

const GivesFakeItemUsername = styled.div`
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

const GivesFakeItemClock = styled.img`
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

const GivesFakeItemContent = styled(GivesItemContent)`
  align-items: flex-start;
  @media (max-width: 1200px) {
    align-items: flex-end;
  }

  @media (max-width: 500px) {
    align-items: center;
    margin-top: ${pxIntoRem(86)};
  }
`;

const GivesFakeItemId = styled.div`
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

const GivesFakeItemSumm = styled.div`
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

const GivesFakeItemSummTitle = styled.div`
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

const GivesFakeItemSummText = styled.div`
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

const GivesFakeItemTimer = styled.div`
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

const GivesFakeItemButtons = styled.div`
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

const GivesFakeItemButtonMore = styled.div`
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

const GivesFakeItemButtonConnect = styled.div`
  width: ${pxIntoRem(176)};
  height: ${pxIntoRem(51)};
  border-radius: ${pxIntoRem(2)};
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(${pxIntoRem(45.5)});
  border-radius: ${pxIntoRem(2)};
  flex-shrink: 0;

  @media (max-width: 1200px) {
    min-width: ${pxIntoRem(176)};
    width: 100%;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

const GivesFakeItemFakeButton = styled.div`
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

export {
  GivesItemBlock,
  GivesItemBackground,
  GivesItemContent,
  GivesItemId,
  GivesItemSumm,
  GivesItemSummText,
  GivesItemSummTitle,
  GivesItemTimer,
  GivesItemTimerColumn,
  GivesItemTimerNumber,
  GivesItemTimerSplitter,
  GivesItemTimerText,
  GivesItemUsername,
  GivesItemButtons,
  GivesItemButtonConnect,
  GivesItemButtonMore,
  GivesFakeItemBlock,
  GivesFakeItemBackground,
  GivesFakeItemButtonConnect,
  GivesFakeItemButtonMore,
  GivesFakeItemButtons,
  GivesFakeItemContent,
  GivesFakeItemId,
  GivesFakeItemSumm,
  GivesFakeItemSummText,
  GivesFakeItemSummTitle,
  GivesFakeItemUsername,
  GivesFakeItemTimer,
  GivesFakeItemClock,
  GivesFakeItemFakeButton,
};
