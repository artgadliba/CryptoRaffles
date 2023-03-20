import styled from "styled-components";
import pxIntoRem from "../../../../utils/pxIntoRem";

const IndexListBlock = styled.ul`
  list-style: none;
  width: 100%;
  margin-top: ${pxIntoRem(42)};

  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(25)};
  }
`;

interface IIndexListItemBlock {
  isOpen: boolean;
}

const IndexListItemBlock = styled.li<IIndexListItemBlock>`
  overflow: hidden;
  margin-top: ${pxIntoRem(15)};
  backdrop-filter: blur(${pxIntoRem(16.53)});
  border-radius: ${pxIntoRem(2)};
  padding: ${({ isOpen }) => (!isOpen ? `${pxIntoRem(28)} ${pxIntoRem(28)} ${pxIntoRem(9)} ${pxIntoRem(60)}` : `${pxIntoRem(28)} ${pxIntoRem(28)} ${pxIntoRem(56)} ${pxIntoRem(60)}`)};
  transition-duration: 0.45s;
  background-color: ${({ isOpen }) => (isOpen ? "rgba(255, 255, 255, 0.1)" : "rgba(45, 11, 90, 0.3)")};
  border: ${({ isOpen }) => (isOpen ? `${pxIntoRem(2)} solid rgba(255, 255, 255, 0.35)` : `${pxIntoRem(1)} solid rgba(255, 255, 255, 0.46)`)};
  height: ${({ isOpen }) => (isOpen ? pxIntoRem(202) : pxIntoRem(103))};
  cursor: pointer;
  &:first-of-type {
    margin-top: 0px;
  }

  @media (max-width: 500px) {
    font-weight: 500;
    font-size: ${pxIntoRem(17)};
    margin-top: ${pxIntoRem(5)};
    height: ${({ isOpen }) => (isOpen ? pxIntoRem(315) : pxIntoRem(103))};
    padding: ${pxIntoRem(0)} ${pxIntoRem(15)} ${pxIntoRem(0)} ${pxIntoRem(18)};
  }
`;

interface IIndexListItemHeader {
  isOpen: boolean;
}

const IndexListItemHeader = styled.div<IIndexListItemHeader>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 500px) {
    display: flex;
    align-items: center;
    height: ${pxIntoRem(103)};
  }
`;

const IndexListItemTitle = styled.h3`
  font-family: "TT Firs Neue";
  font-style: normal;
  font-weight: 500;
  font-size: ${pxIntoRem(22)};
  line-height: 111.5%;
  color: #ffffff;
  @media (max-width: 500px) {
    font-weight: 500;
    font-size: ${pxIntoRem(17)};
    padding-right: ${pxIntoRem(30)};
  }
`;

interface IIndexListItemArrow {
  isOpen: boolean;
}

const IndexListItemArrow = styled.div<IIndexListItemArrow>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pxIntoRem(46)};
  height: ${pxIntoRem(46)};
  background-color: ${({ isOpen }) => (isOpen ? "#874dec" : "transparent")};
  border-radius: 100%;
  ${({ isOpen }) => !isOpen && `border: ${pxIntoRem(2)} solid #8D7BA6;`}
  flex-shrink: 0;

  @media (max-width: 500px) {
    width: ${pxIntoRem(34)};
    height: ${pxIntoRem(34)};
  }
`;

const IndexListItemArrowHorizontalLine = styled.img`
  position: absolute;
  width: ${pxIntoRem(20)};
`;

const IndexListItemArrowVerticalLine = styled.img`
  position: absolute;
  height: ${pxIntoRem(20)};
`;

const IndexListItemContent = styled.div`
  width: 100%;
  margin-top: ${pxIntoRem(18)};
  padding-right: ${pxIntoRem(105)};
  overflow: hidden;
  @media (max-width: 500px) {
    padding-right: 0;
    top: ${pxIntoRem(-10)};
    margin-top: 0;
    position: relative;
  }
`;

const IndexListItemText = styled.p`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: ${pxIntoRem(15)};
  line-height: 172.52%;
  color: #ffffff;
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(15)};
    line-height: ${pxIntoRem(25.5)};
  }
`;

export { IndexListBlock, IndexListItemBlock, IndexListItemArrow, IndexListItemArrowHorizontalLine, IndexListItemArrowVerticalLine, IndexListItemContent, IndexListItemHeader, IndexListItemText, IndexListItemTitle };
