import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import pxIntoRem from "../../../../utils/pxIntoRem";

const IndexSlideBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const IndexSlideHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${pxIntoRem(24)} ${pxIntoRem(27)} 0px ${pxIntoRem(32)};

  @media (max-width: 500px) {
    padding: ${pxIntoRem(12)} ${pxIntoRem(17)} ${pxIntoRem(12)} ${pxIntoRem(26)};
  }
`;

const IndexSlideHeaderCounter = styled.span`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: ${pxIntoRem(30)};
  line-height: ${pxIntoRem(51.76)};
  color: #ffffff;
  span {
    font-family: inherit;
    font-weight: 400;
    font-size: ${pxIntoRem(17)};
    color: #ffffff63;
    line-height: ${pxIntoRem(29.33)};
  }
`;

const IndexSlideHeaderDocument = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pxIntoRem(53)};
  height: ${pxIntoRem(52)};
  background: #6f3cda;
  border-radius: ${pxIntoRem(3)};
  cursor: pointer;
`;

const IndexSlideHeaderDocumentImage = styled.img`
  width: ${pxIntoRem(20)};
  height: ${pxIntoRem(23.33)};
`;

const IndexSlideContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  padding-top: ${pxIntoRem(10)};
`;

const IndexSlideTitle = styled.h2`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(24)};
  line-height: 111.5%;
  text-align: center;
  color: #ffffff;
`;

const IndexSlideUsername = styled.span`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: ${pxIntoRem(19)};
  line-height: 111.5%;
  text-align: center;
  color: #ffffff;
  margin-top: ${pxIntoRem(8)};
`;

const IndexSlideSum = styled.span`
  font-family: "TT Firs Neue";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(60)};
  line-height: 111.5%;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  text-shadow: 0px ${pxIntoRem(5.68)} ${pxIntoRem(8.52)} rgba(0, 0, 0, 0.07);
  margin-top: ${pxIntoRem(28)};
`;

const IndexSlideLine = styled.div`
  background-color: #ffffff;
  width: ${pxIntoRem(321)};
  height: ${pxIntoRem(2)};
  margin-top: ${pxIntoRem(28)};
  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(6)};
    width: ${pxIntoRem(300)};
  }
`;

const IndexSlideSumTitle = styled.span`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: ${pxIntoRem(18)};
  line-height: 111.5%;
  text-align: center;
  color: #ffffff;
  margin-top: ${pxIntoRem(15)};
`;

const IndexSlideFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  background: #2d0b5a;
  border: ${pxIntoRem(0.87)} solid rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(${pxIntoRem(16.5)});
  padding: ${pxIntoRem(11)} ${pxIntoRem(53)} ${pxIntoRem(20)};
  margin-top: auto;
  @media (max-width: 500px) {
    padding: ${pxIntoRem(11)} ${pxIntoRem(35)} ${pxIntoRem(20)} ${pxIntoRem(30)};
  }
`;

const IndexSlideFooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IndexSlideFooterColumnNumber = styled.span`
  font-family: "TT Firs Neue";
  font-style: normal;
  font-weight: 500;
  font-size: ${pxIntoRem(39.2)};
  line-height: 111.5%;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  text-shadow: 0px ${pxIntoRem(4.24)} ${pxIntoRem(6.36)} rgba(0, 0, 0, 0.07);
  margin-bottom: ${pxIntoRem(3)};
`;

const IndexSlideFooterColumnText = styled.span`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: ${pxIntoRem(13)};
  line-height: 111.5%;
  text-align: center;
  color: rgba(255, 255, 255, 0.74);
`;

const IndexSlideFooterDots = styled.span`
  font-family: "TT Firs Neue";
  font-style: normal;
  font-weight: 500;
  font-size: ${pxIntoRem(39.23)};
  line-height: 111.5%;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0px ${pxIntoRem(17)};
  position: relative;
  top: ${pxIntoRem(-12)};
  @media (max-width: 500px) {
    margin: 0px ${pxIntoRem(9)};
  }
`;

export {
  IndexSlideContent,
  IndexSlideFooter,
  IndexSlideFooterColumn,
  IndexSlideFooterColumnNumber,
  IndexSlideFooterColumnText,
  IndexSlideFooterDots,
  IndexSlideHeader,
  IndexSlideHeaderCounter,
  IndexSlideHeaderDocument,
  IndexSlideHeaderDocumentImage,
  IndexSlideLine,
  IndexSlideBlock,
  IndexSlideSum,
  IndexSlideSumTitle,
  IndexSlideTitle,
  IndexSlideUsername,
};
