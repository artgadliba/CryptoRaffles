import styled from "styled-components";
import pxIntoRem from "../../../utils/pxIntoRem";
import { Link } from "react-router-dom";

const CollectionsItemBlock = styled.div`
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
    justify-content: flex-center;
    height: ${pxIntoRem(460)};
    margin-top: ${pxIntoRem(31)};
  }
`;

const CollectionsItemBackground = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CollectionsItemUsername = styled.div`
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

const CollectionsItemContent = styled.div`
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

const CollectionsItemId = styled.h3`
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
    margin-top: ${pxIntoRem(20)};
  }
`;

const CollectionsItemSumm = styled.div`
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

const CollectionsItemSummTitle = styled.span`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(24)};
  line-height: 111.5%;
  color: #ffffff;
`;

const CollectionsItemSummText = styled.span`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: ${pxIntoRem(13)};
  line-height: 111.5%;
  text-align: center;
  color: rgba(255, 255, 255, 0.74);
`;

const CollectionsItemTimer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 11.4%;
  left: 41%;

  @media (max-width: 500px) {
    flex-direction: row;
    align-items: center;
    position: static;
    margin-top: ${pxIntoRem(22)};
  }
`;

const CollectionsItemTimerColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CollectionsItemTimerNumber = styled.span`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(24)};
  line-height: 111.5%;
  color: #ffffff;
`;

const CollectionsItemTimerText = styled.span`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: ${pxIntoRem(13)};
  line-height: 111.5%;
  text-align: center;
  color: rgba(255, 255, 255, 0.74);
`;

interface ICollectionsItemTimerSplitter {
  marginRight: number;
  marginLeft: number;
}

const CollectionsItemTimerSplitter = styled.span<ICollectionsItemTimerSplitter>`
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

const CollectionsItemButtons = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  position: absolute;
  bottom: 10.7%;
  right: 4%;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
  @media (max-width: 500px) {
    position: absolute;
    left: 90%;
    width: 92%;
  }
`;

const CollectionsItemButtonMore = styled(Link)`
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
  outline-offset: ${pxIntoRem(1)};
  background-color: transparent;
  border-radius: ${pxIntoRem(2)};
  margin-right: ${pxIntoRem(12)};
  transition: 1s;

  &:hover {
    color: #08e2bd;
    transition: 0.2s;
    outline: 2px solid #3ff2d4;
    outline-offset: -2px;
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

const CollectionsItemButtonConnect = styled(Link)`
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
    background-color: #23f7d3;
    box-shadow: 0 0 10px #23f7d3;
  }
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const CollectionsFakeItemBlock = styled(CollectionsItemBlock)`
  cursor: default;
  padding: ${pxIntoRem(34)} ${pxIntoRem(34)} ${pxIntoRem(34)} ${pxIntoRem(34)};
`;

const CollectionsFakeItemBackground = styled.img`
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

const CollectionsFakeItemUsername = styled.div`
  padding: ${pxIntoRem(15)} ${pxIntoRem(23)};
  background: rgba(255, 255, 255, 0.06);
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

const CollectionsFakeItemClock = styled.img`
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

const CollectionsFakeItemContent = styled(CollectionsItemContent)`
  align-items: flex-start;
  @media (max-width: 1200px) {
    align-items: flex-end;
  }

  @media (max-width: 500px) {
    align-items: center;
    margin-top: ${pxIntoRem(86)};
  }
`;

const CollectionsFakeItemId = styled.div`
  width: ${pxIntoRem(213)};
  height: ${pxIntoRem(27)};
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(${pxIntoRem(45.5)});
  border-radius: ${pxIntoRem(2)};
  flex-shrink: 0;
  position: absolute;
  bottom: 19%;
  left: 3%;

  @media (max-width: 500px) {
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 108.42%);
      position: static;
      margin-top: ${pxIntoRem(-16)};
    }
  }
`;

const CollectionsFakeItemSumm = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${pxIntoRem(35)};
  flex-shrink: 0;
  position: absolute;
  bottom: 15.8%;
  left: 22.5%;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    position: static;
    margin-top: ${pxIntoRem(20)};
    margin-left: 0;
  }
`;

const CollectionsFakeItemSummTitle = styled.div`
  width: ${pxIntoRem(125)};
  height: ${pxIntoRem(27)};
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

const CollectionsFakeItemSummText = styled.div`
  width: ${pxIntoRem(150)};
  height: ${pxIntoRem(6)};
  margin-top: ${pxIntoRem(4)};
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

const CollectionsFakeItemTimer = styled.div`
  width: ${pxIntoRem(276)};
  height: ${pxIntoRem(53)};
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(${pxIntoRem(45.5)});
  border-radius: ${pxIntoRem(2)};
  flex-shrink: 0;
  position: absolute;
  bottom: 10.6%;
  left: 41%;

  @media (max-width: 1450px) {
    width: ${pxIntoRem(231)};
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

const CollectionsFakeItemButtons = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 10.6%;
  right: 4%;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
  @media (max-width: 500px) {
    flex-direction: row;
    margin-left: 0;
    margin-top: ${pxIntoRem(24)};
  }
`;

const CollectionsFakeItemButtonMore = styled.div`
  width: ${pxIntoRem(156)};
  height: ${pxIntoRem(53)};
  border-radius: ${pxIntoRem(2)};
  margin-right: ${pxIntoRem(13)};
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

const CollectionsFakeItemButtonConnect = styled.div`
  width: ${pxIntoRem(176)};
  height: ${pxIntoRem(53)};
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

const CollectionsFakeItemButtonsWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: row;
    margin-left: 0;
    margin-top: ${pxIntoRem(24)};
  }
`;

const CollectionsFakeItemFakeButton = styled.div`
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
  CollectionsItemBlock,
  CollectionsItemBackground,
  CollectionsItemContent,
  CollectionsItemId,
  CollectionsItemSumm,
  CollectionsItemSummText,
  CollectionsItemSummTitle,
  CollectionsItemTimer,
  CollectionsItemTimerColumn,
  CollectionsItemTimerNumber,
  CollectionsItemTimerSplitter,
  CollectionsItemTimerText,
  CollectionsItemUsername,
  CollectionsItemButtons,
  CollectionsItemButtonConnect,
  CollectionsItemButtonMore,
  CollectionsFakeItemBlock,
  CollectionsFakeItemBackground,
  CollectionsFakeItemButtonConnect,
  CollectionsFakeItemButtonMore,
  CollectionsFakeItemButtons,
  CollectionsFakeItemContent,
  CollectionsFakeItemId,
  CollectionsFakeItemSumm,
  CollectionsFakeItemSummText,
  CollectionsFakeItemSummTitle,
  CollectionsFakeItemUsername,
  CollectionsFakeItemTimer,
  CollectionsFakeItemClock,
  CollectionsFakeItemButtonsWrapper,
  CollectionsFakeItemFakeButton,
};
