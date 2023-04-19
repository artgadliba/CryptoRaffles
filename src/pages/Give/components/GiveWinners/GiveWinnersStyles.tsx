import styled from "styled-components";
import pxIntoRem from "../../../../utils/pxIntoRem";

const GiveDoneWinnersBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${pxIntoRem(30)};
`;

const GiveDoneWinnersHeader = styled.div`
  display: flex;
`;

const GiveDoneWinnersHeaderItem = styled.div`
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

const GiveDoneWinnersRow = styled.div`
  display: flex;
  background: rgba(45, 11, 90, 0.3);
  border: ${pxIntoRem(1)} solid rgba(255, 255, 255, 0.24);
  backdrop-filter: blur(16.5399px);
  border-radius: ${pxIntoRem(2)};
  margin-top: ${pxIntoRem(10)};
  padding: ${pxIntoRem(9)} 0px;
`;

const GiveDoneWinnersRowItem = styled.div`
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

const GiveDoneWinnersRowItemImage = styled.img`
  position: absolute;
  left: ${pxIntoRem(22)};
  width: ${pxIntoRem(24)};

  @media (max-width: 500px) {
    left: ${pxIntoRem(12)};
  }ы
`;

const GiveDoneWinnersRowItemHash = styled.span`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(16)};
  line-height: 172.52%;
  color: #8e52f1;
`;

const GiveDoneWinnersRowItemText = styled.span`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(16)};
  line-height: 172.52%;
  color: #ffffff;
`;

const GiveDoneWinnersFakeRow = styled.div`
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

interface IGiveDoneWinnersFakeRowMedal {
  color: string;
}

const GiveDoneWinnersFakeRowMedal = styled.div<IGiveDoneWinnersFakeRowMedal>`
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

const GiveDoneWinnersFakeRowWinner = styled.div`
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

const GiveDoneWinnersFakeRowTokens = styled.div`
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

const GiveDoneWinnersFakeRowPrize = styled.div`
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

const GiveDoneButton = styled.button`
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

const GiveDoneButtonInactive = styled.button`
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
  GiveDoneWinnersBlock,
  GiveDoneWinnersHeader,
  GiveDoneWinnersHeaderItem,
  GiveDoneWinnersRow,
  GiveDoneWinnersRowItem,
  GiveDoneWinnersRowItemHash,
  GiveDoneWinnersRowItemImage,
  GiveDoneWinnersRowItemText,
  GiveDoneWinnersFakeRowMedal,
  GiveDoneWinnersFakeRowPrize,
  GiveDoneWinnersFakeRowTokens,
  GiveDoneWinnersFakeRowWinner,
  GiveDoneWinnersFakeRow,
  GiveDoneButton,
  GiveDoneButtonInactive,
};
