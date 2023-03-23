import styled, { keyframes } from "styled-components";
import { SwiperSlide } from "swiper/react";
import pxIntoRem from "../../../../utils/pxIntoRem";

const IndexWinnersRowAnimation = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(calc(-100% - ${pxIntoRem(10)}));
  }
`;

const IndexWinnersLineBlock = styled.div`
  display: flex;
  align-items: center;
  gap: ${pxIntoRem(10)};
  width: 100%;
  position: relative;
`;

const IndexWinnersRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${pxIntoRem(40)};
  gap: ${pxIntoRem(10)};
  width: auto;
  flex-shrink: 0;
  animation: ${IndexWinnersRowAnimation} 25s linear infinite;
  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(30)};
  }
`;

const IndexWinnersRowItem = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(45, 11, 90, 0.1);
  border: ${pxIntoRem(1)} solid rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(${pxIntoRem(16.53)});
  border-radius: ${pxIntoRem(2)};
  padding: ${pxIntoRem(18)} ${pxIntoRem(20)} ${pxIntoRem(13)} ${pxIntoRem(27)};
  flex-shrink: 0;

  @media (max-width: 500px) {
    padding: ${pxIntoRem(14)} ${pxIntoRem(20)} ${pxIntoRem(13)} ${pxIntoRem(18)};
    width: ${pxIntoRem(256)};
  }
`;

const IndexWinnersRowItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const IndexWinnersRowItemTransaction = styled.span`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(16)};
  line-height: 172.52%;
  color: #8e52f1;
`;

const IndexWinnersRowItemEmoji = styled.img`
  width: ${pxIntoRem(88)};
  height: ${pxIntoRem(31)};
  @media (max-width: 500px) {
    width: ${pxIntoRem(74)};
    height: ${pxIntoRem(30)};
  }
`;

const IndexWinnersRowItemContent = styled.div`
  margin-top: ${pxIntoRem(12)};
  @media (max-width: 500px) {
    padding-right: ${pxIntoRem(20)};
    margin-top: ${pxIntoRem(6)};
  }
`;

const IndexWinnersRowItemText = styled.span`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: ${pxIntoRem(16)};
  line-height: 172.52%;
  color: #ffffff;
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(15)};
    letter-spacing: ${pxIntoRem(-0.2)};
    line-height: ${pxIntoRem(25)};
  }
`;

const IndexWinnersRowItemMoney = styled.span`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(16)};
  line-height: 172.52%;
  color: #ffffff;
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(15)};
    letter-spacing: ${pxIntoRem(-0.2)};
    line-height: ${pxIntoRem(25)};
  }
`;

const IndexWinnersRowItemTokens = styled.span`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(16)};
  line-height: 172.52%;
  color: #08e2bd;
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(15)};
    letter-spacing: ${pxIntoRem(-0.2)};
    line-height: ${pxIntoRem(25)};
  }
`;

const IndexWinnersFakeRowItem = styled.div`
  display: flex;
  flex-direction: column;
  width: ${pxIntoRem(330)};
  height: ${pxIntoRem(102.5)};
  background: rgba(45, 11, 90, 0.1);
  border: ${pxIntoRem(1)} solid rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(${pxIntoRem(16.53)});
  border-radius: ${pxIntoRem(2)};
  position: relative;
  padding: ${pxIntoRem(18)} ${pxIntoRem(20)} ${pxIntoRem(18)} ${pxIntoRem(27)};
  flex-shrink: 0;

  @media (max-width: 500px) {
    padding: ${pxIntoRem(14)} ${pxIntoRem(20)} ${pxIntoRem(13)} ${pxIntoRem(18)};
    width: ${pxIntoRem(256)};
    height: ${pxIntoRem(115)};
  }
`;

const IndexWinnersFakeRowItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IndexWinnersFakeRowItemTransaction = styled.div`
  background: linear-gradient(90deg, rgba(142, 82, 241, 0.39) 0%, rgba(142, 82, 241, 0) 108.8%);
  backdrop-filter: blur(${pxIntoRem(45.5)});
  border-radius: ${pxIntoRem(2)};
  width: ${pxIntoRem(125)};
  height: ${pxIntoRem(20)};
`;

const IndexWinnersFakeRowItemEmojiBlock = styled.div`
  display: flex;
  aligm-items: center;
`;

const IndexWinnersFakeRowItemEmoji = styled.div`
  width: ${pxIntoRem(20)};
  height: ${pxIntoRem(19)};
  background: linear-gradient(90deg, rgba(246, 187, 40, 0.25) 0%, rgba(246, 187, 40, 0) 130%);
  border-radius: ${pxIntoRem(40)};
  margin-left: ${pxIntoRem(7)};
  &:first-of-type {
    margin-left: 0px;
  }
`;

const IndexWinnersFakeRowItemText = styled.div`
  width: 100%;
  margin-top: auto;
  height: ${pxIntoRem(7)};
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 108.42%);
  backdrop-filter: blur(${pxIntoRem(45.5)});
  border-radius: ${pxIntoRem(2)};
`;

export {
  IndexWinnersLineBlock,
  IndexWinnersRow,
  IndexWinnersRowItem,
  IndexWinnersRowItemContent,
  IndexWinnersRowItemEmoji,
  IndexWinnersRowItemHeader,
  IndexWinnersRowItemMoney,
  IndexWinnersRowItemText,
  IndexWinnersRowItemTokens,
  IndexWinnersRowItemTransaction,
  IndexWinnersFakeRowItem,
  IndexWinnersFakeRowItemEmoji,
  IndexWinnersFakeRowItemEmojiBlock,
  IndexWinnersFakeRowItemText,
  IndexWinnersFakeRowItemTransaction,
  IndexWinnersFakeRowItemHeader,
};
