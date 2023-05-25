import styled from "styled-components";
import pxIntoRem from "../../../../utils/pxIntoRem";

const CollectionDoneWinnersBlock = styled.div`
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
    @media (max-width: 500px) {
      padding-left: ${pxIntoRem(65)};
    }
  }

  &:nth-child(2) {
    padding-left: ${pxIntoRem(92)};
    @media (max-width: 500px) {
      width: ${pxIntoRem(64)};
    }
  }

  &:nth-child(3) {
    padding-left: ${pxIntoRem(50)};
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
  flex-shrink: 0;
  white-space: nowrap;

  &:nth-child(1) {
    padding-left: ${pxIntoRem(63)};
    width: ${pxIntoRem(160)};
  }

  &:nth-child(2) {
    padding-left: ${pxIntoRem(80)};
    width: ${pxIntoRem(160)};
    @media (max-width: 500px) {
      padding-left: ${pxIntoRem(50)};
      width: ${pxIntoRem(120)};
    }
  }

  &:nth-child(3) {
    width: ${pxIntoRem(140)};
    @media (max-width: 500px) {
      width: ${pxIntoRem(100)};
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
  position: relative;
  top: 1.5px;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(16)};
  line-height: 172.52%;
  color: #8e52f1;
`;

const CollectionDoneWinnersRowItemText = styled.span`
  position: relative;
  top: 1.5px;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(16)};
  line-height: 172.52%;
  margin-right: ${pxIntoRem(3)};
  color: #ffffff;
`;

const CollectionDoneWinnersFakeRow = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: ${pxIntoRem(45)};
  background: rgba(45, 11, 90, 0.3);
  border: ${pxIntoRem(1)} solid rgba(255, 255, 255, 0.24);
  backdrop-filter: blur(${pxIntoRem(16.53)});
  border-radius: ${pxIntoRem(2)};
  margin-top: ${pxIntoRem(10)};
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
  position: absolute;
  left: ${pxIntoRem(25)};

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
`;

const CollectionDoneWinnersFakeRowTokens = styled.div`
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 108.42%);
  backdrop-filter: blur(${pxIntoRem(45.5)});
  border-radius: ${pxIntoRem(2)};
  width: ${pxIntoRem(36)};
  height: ${pxIntoRem(16)};
`;

const CollectionDoneWinnersFakeRowPrize = styled.div`
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 108.42%);
  backdrop-filter: blur(${pxIntoRem(45.5)});
  border-radius: ${pxIntoRem(2)};
  width: ${pxIntoRem(56)};
  height: ${pxIntoRem(16)};
`;

const CollectionDoneButton = styled.button`
  display: flex;
  justify-content: center;
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
  transition: 1s;

  &:hover {
    background-color: #23f7d3;
    box-shadow: 0 0 15px #23f7d3;
  }
  @media (max-width: 500px) {
    width: 100%;
    margin-top: ${pxIntoRem(10)};
  }
`;

const CollectionDoneButtonInactive = styled.button`
  display: flex;
  justify-content: center;
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
  background-color: #a7a8a8;
  border-radius: ${pxIntoRem(2)};
  width: fit-content;
  margin-top: ${pxIntoRem(30)};
  cursor: pointer;

  @media (max-width: 500px) {
    width: 100%;
    margin-top: ${pxIntoRem(10)};
  }
`;

export {
  CollectionDoneWinnersBlock,
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
  CollectionDoneButtonInactive,
};
