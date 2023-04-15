import styled from "styled-components";
import pxIntoRem from "../../../utils/pxIntoRem";

const RegisterModalBlock = styled.div`
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

const RegisterModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${pxIntoRem(612)};
  height: ${pxIntoRem(571)};
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

const RegisterModalClose = styled.button`
  cursor: pointer;
  width: ${pxIntoRem(52.48)};
  height: ${pxIntoRem(52.48)};
  margin-left: auto;
  background-color: transparent;

  @media (max-width: 500px) {
    width: ${pxIntoRem(34.1)};
    height: ${pxIntoRem(34.1)};
  }
`;

const RegisterModalCloseImage = styled.img`
  width: 100%;
  height: 100%;
`;

const RegisterModalTitle = styled.h2`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(31)};
  line-height: 111.5%;
  text-align: center;
  color: #ffffff;
  z-index: 999;
  margin-top: ${pxIntoRem(50)};

  @media (max-width: 500px) {
    font-size: ${pxIntoRem(28)};
    margin-top: ${pxIntoRem(11)};
  }
`;

const RegisterModalHashInputBlock = styled.div`
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

const RegisterModalHashInput = styled.input`
  background-color: rgba(142, 82, 241, 0.22);
  border: ${pxIntoRem(1)} solid rgba(255, 255, 255, 0.24);
  backdrop-filter: blur(${pxIntoRem(16.53)});
  border-radius: ${pxIntoRem(2)};
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(16)};
  line-height: 172.52%;
  color: #8e52f1;
  width: 100%;
  padding: ${pxIntoRem(20)} ${pxIntoRem(60)} ${pxIntoRem(20)} ${pxIntoRem(27)};
  text-overflow: ellipsis;
  overflow: hidden;
`;

const RegisterModalHashInputEtherium = styled.img`
  position: absolute;
  right: ${pxIntoRem(24)};
  width: ${pxIntoRem(28.54)};
  height: ${pxIntoRem(28.54)};
  @media (max-width: 500px) {
    right: ${pxIntoRem(18)};
  }
`;

const RegisterModalReferenceInput = styled.input`
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

const RegisterModalButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #08e2bd;
  border-radius: ${pxIntoRem(2)};
  width: 100%;
  height: ${pxIntoRem(69)};
  max-width: ${pxIntoRem(437)};
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(18)};
  line-height: ${pxIntoRem(22)};
  color: #2d0b5a;
  margin-top: ${pxIntoRem(30)};
  transition: 1s;

  &:hover {
    background-color: #23f7d3;
    box-shadow: 0 0 15px #23f7d3;
  }
  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(15)};
    max-width: ${pxIntoRem(277)};
    height: ${pxIntoRem(60)};
  }
`;

export { RegisterModalBlock, RegisterModalClose, RegisterModalCloseImage, RegisterModalContent, RegisterModalTitle, RegisterModalHashInput, RegisterModalReferenceInput, RegisterModalHashInputBlock, RegisterModalHashInputEtherium, RegisterModalButton };
