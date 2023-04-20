import styled from "styled-components";
import pxIntoRem from "../../../utils/pxIntoRem";

const GiveCancelModalBlock = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(${pxIntoRem(2)});
  background-color: rgba(0, 0, 0, 0.6);
`;

const GiveCancelModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${pxIntoRem(612)};
  height: ${pxIntoRem(679)};
  padding: ${pxIntoRem(20)} ${pxIntoRem(16)};
  background-color: #391964;
  border-radius: ${pxIntoRem(15)};
  z-index: 9999;
  position: relative;
  overflow: hidden;

  @media (max-width: 500px) {
    width: ${pxIntoRem(320)};
    height: ${pxIntoRem(515)};
    padding: ${pxIntoRem(24)} ${pxIntoRem(16)};
  }
`;

const GiveCancelModalClose = styled.button`
  position: absolute;
  right: ${pxIntoRem(16)};
  top: ${pxIntoRem(20)};
  cursor: pointer;
  width: ${pxIntoRem(52.48)};
  height: ${pxIntoRem(52.48)};
  background-color: transparent;

  @media (max-width: 500px) {
    width: ${pxIntoRem(34.1)};
    height: ${pxIntoRem(34.1)};
  }
`;

const GiveCancelModalCloseImage = styled.img`
  width: 100%;
  height: 100%;
`;

const GiveCancelModalSumm = styled.h2`
  font-family: "TT Firs Neue";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(60)};
  line-height: 111.5%;
  text-transform: uppercase;
  color: #ffffff;
  text-shadow: 0px ${pxIntoRem(5.68)} ${pxIntoRem(8.52)} rgba(0, 0, 0, 0.07);
  margin-top: ${pxIntoRem(162)};
  z-index: 999;
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(44.58)};
    margin-top: ${pxIntoRem(151)};
  }
`;

const GiveCancelModalLine = styled.div`
  width: ${pxIntoRem(253)};
  height: ${pxIntoRem(2)};
  background-color: #ffffff;
  margin-top: ${pxIntoRem(8)};
  z-index: 999;
  flex-shrink: 0;
  @media (max-width: 500px) {
    width: ${pxIntoRem(190)};
  }
`;

const GiveCancelModalText = styled.p`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(20)};
  line-height: 111.5%;
  text-align: center;
  color: #ffffff;
  margin-top: ${pxIntoRem(54)};
  max-width: ${pxIntoRem(338)};
  z-index: 999;

  span {
    font-family: inherit;
    color: #08e2bd;
  }

  @media (max-width: 500px) {
    font-size: ${pxIntoRem(17.48)};
    margin-top: ${pxIntoRem(14)};
    max-width: ${pxIntoRem(230)};
  }
`;

const GiveCancelModalButton = styled.button`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(18)};
  line-height: ${pxIntoRem(22)};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2d0b5a;
  padding: ${pxIntoRem(24)} ${pxIntoRem(96)};
  background-color: #08e2bd;
  border-radius: ${pxIntoRem(2)};
  margin-top: ${pxIntoRem(35)};
  z-index: 999;
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(15.73)};
    line-height: ${pxIntoRem(19)};
    padding: ${pxIntoRem(21)} ${pxIntoRem(84)};
    margin-top: ${pxIntoRem(24)};
  }
`;

const GiveCancelModalLines = styled.img`
  width: ${pxIntoRem(470)};
  height: ${pxIntoRem(351)};
  position: absolute;
  bottom: 0px;
  left: ${pxIntoRem(75)};

  @media (max-width: 500px) {
    left: ${pxIntoRem(-32)};
    width: ${pxIntoRem(400)};
    height: ${pxIntoRem(351)};
    bottom: ${pxIntoRem(-118)};
  }
`;

const GiveCancelModalHoliday = styled.img`
  position: absolute;
  top: ${pxIntoRem(72)};
  right: ${pxIntoRem(37)};
  width: ${pxIntoRem(367)};
  height: ${pxIntoRem(348)};
  @media (max-width: 500px) {
    width: ${pxIntoRem(200)};
    height: ${pxIntoRem(190)};
    top: ${pxIntoRem(33)};
    right: ${pxIntoRem(35)};
  }
`;

export { GiveCancelModalBlock, GiveCancelModalClose, GiveCancelModalContent, GiveCancelModalCloseImage, GiveCancelModalButton, GiveCancelModalLine, GiveCancelModalSumm, GiveCancelModalText, GiveCancelModalLines, GiveCancelModalHoliday };
