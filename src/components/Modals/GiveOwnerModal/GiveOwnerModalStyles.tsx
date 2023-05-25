import styled from "styled-components";
import pxIntoRem from "../../../utils/pxIntoRem";

const GiveOwnerModalBlock = styled.div`
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

const GiveOwnerModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${pxIntoRem(512)};
  height: ${pxIntoRem(659)};
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

const GiveOwnerModalClose = styled.button`
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

const GiveOwnerModalCloseImage = styled.img`
  width: 70%;
  height: 70%;
`;

const GiveOwnerModalSumm = styled.h2`
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

const GiveOwnerModalText = styled.p`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(17)};
  line-height: 111.5%;
  text-align: center;
  color: #ffffff;
  margin-top: ${pxIntoRem(15)};
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

const GiveOwnerModalButton = styled.button`
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
  margin-top: ${pxIntoRem(20)};
  margin-bottom: ${pxIntoRem(20)};
  z-index: 999;
  transition: 1s;

  &:hover {
    background-color: #23f7d3;
    box-shadow: 0 0 10px #23f7d3;
  }
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(15.73)};
    line-height: ${pxIntoRem(19)};
    padding: ${pxIntoRem(21)} ${pxIntoRem(84)};
    margin-top: ${pxIntoRem(24)};
  }
`;

const GiveOwnerModalLines = styled.img`
  width: ${pxIntoRem(270)};
  height: ${pxIntoRem(210)};
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

const GiveOwnerModalHoliday = styled.img`
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

const GiveOwnerModalHashInputBlock = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: ${pxIntoRem(34)};
  width: 100%;
  max-width: ${pxIntoRem(437)};
  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(49)};
    max-width: ${pxIntoRem(277)};
  }
`;

const GiveOwnerModalReferenceInput = styled.input`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 300;
  font-size: ${pxIntoRem(16)};
  line-height: 172.52%;
  color: rgba(255, 255, 255, 0.66);
  padding: ${pxIntoRem(20)} ${pxIntoRem(10)} ${pxIntoRem(20)} ${pxIntoRem(27)};
  margin-top: ${pxIntoRem(23)};
  background-color: transparent;
  width: 100%;
  max-width: ${pxIntoRem(437)};
  border: ${pxIntoRem(1)} solid rgba(255, 255, 255, 0.24);
  backdrop-filter: blur(${pxIntoRem(16.53)});
  border-radius: ${pxIntoRem(2)};
  text-overflow: ellipsis;
  overflow: hidden;
  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(15)};
    max-width: ${pxIntoRem(277)};
    padding: ${pxIntoRem(20)} ${pxIntoRem(45)} ${pxIntoRem(20)} ${pxIntoRem(27)};
  }
`;

export { GiveOwnerModalBlock, GiveOwnerModalClose, GiveOwnerModalContent, GiveOwnerModalCloseImage, GiveOwnerModalButton, GiveOwnerModalSumm, GiveOwnerModalText, GiveOwnerModalLines, GiveOwnerModalHoliday, GiveOwnerModalReferenceInput };
