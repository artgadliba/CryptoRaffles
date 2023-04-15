import styled, { keyframes } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink, Link } from "react-router-dom";
import pxIntoRem from "../../utils/pxIntoRem";
import "swiper/css";

const IndexBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const IndexGreeting = styled.section`
  width: 100%;
`;

const IndexGreetingBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding-top: ${pxIntoRem(115)};
  position: relative;
  @media (max-width: 500px) {
    flex-direction: column;
    padding-top: ${pxIntoRem(35)};
  }
`;

const IndexGreetingMoneyBox = styled.img`
  position: absolute;
  left: ${pxIntoRem(45)};
  top: ${pxIntoRem(150)};
  width: ${pxIntoRem(84)};
  &:nth-child(1) {
    left: ${pxIntoRem(680)};
    top: ${pxIntoRem(90)};
  }

  &:nth-child(2) {
    left: ${pxIntoRem(590)};
    top: ${pxIntoRem(230)};
  }

  &:nth-child(3) {
    left: ${pxIntoRem(670)};
    top: ${pxIntoRem(405)};
  }

  &:nth-child(4) {
    left: ${pxIntoRem(535)};
    top: ${pxIntoRem(550)};
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

const IndexGreetingBackground = styled.img`
  position: absolute;
  left: ${pxIntoRem(-45)};
  bottom: ${pxIntoRem(-150)};
  opacity: 0.3;
`;

const IndexGreetingContent = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 99;
`;

const IndexGreetingTitle = styled.h1`
  font-family: "TT Firs Neue";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(50)};
  line-height: 111.5%;
  color: #ffffff;
  span {
    font-size: ${pxIntoRem(84)};
    line-height: 111.5%;
    background: linear-gradient(90deg, #894eee 2.44%, #ffee77 97.44%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    font-family: inherit;
    line-height: ${pxIntoRem(70)};
  }

  @media (max-width: 500px) {
    font-size: ${pxIntoRem(33)};
    span {
      font-family: inherit;
      font-size: ${pxIntoRem(56)};
      line-height: ${pxIntoRem(45)};
    }
  }
`;

const IndexGreetingText = styled.p`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: ${pxIntoRem(17)};
  line-height: 172.52%;
  color: #ffffff;
  margin-top: ${pxIntoRem(45)};
  padding-left: ${pxIntoRem(4)};
  max-width: ${pxIntoRem(545)};

  @media (max-width: 500px) {
    font-size: ${pxIntoRem(15)};
    padding-left: 0;
    margin-top: ${pxIntoRem(20)};
  }
`;

const IndexGreetingBottomText = styled.p`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: ${pxIntoRem(15)};
  line-height: 172.52%;
  color: #ffffff;
  margin-top: ${pxIntoRem(15)};
  padding-left: ${pxIntoRem(4)};
  max-width: ${pxIntoRem(545)};

  @media (max-width: 500px) {
    font-size: ${pxIntoRem(15)};
    padding-left: 0;
    margin-top: ${pxIntoRem(12)};
  }
`;

const IndexGreetingConnect = styled(NavLink)`
  width: ${pxIntoRem(307)};
  height: ${pxIntoRem(69)};
  background-color: #08e2bd;
  border-radius: ${pxIntoRem(2)};
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(18)};
  line-height: ${pxIntoRem(22)};
  color: #2d0b5a;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${pxIntoRem(5)};
  margin-top: ${pxIntoRem(38)};
  cursor: pointer;
  outline: 2px solid transparent;
  transition: 1s;

  &:hover {
    background-color: #23f7d3;
    box-shadow: 0 0 15px #23f7d3;
  }
  @media (max-width: 500px) {
    margin-left: ${pxIntoRem(0)};
    margin-top: ${pxIntoRem(32)};
    width: 100%;
  }
`;

const IndexBrands = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: center;
  width: 100%;
  padding-top: ${pxIntoRem(87)};
  @media (max-width: 500px) {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    grid-template-areas:
      "firstbrand firstbrand"
      "secondbrand thirdbrand";
    padding-top: ${pxIntoRem(20)};
    gap: ${pxIntoRem(10)} ${pxIntoRem(30)};
  }
`;

const IndexBrandsFirst = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: firstbrand;
`;

const IndexBrandsFirstText = styled.span`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(17)};
  line-height: 172.52%;
  text-align: center;
  letter-spacing: 0.245em;
  color: #375bd2;
`;

const IndexBrandsSecond = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: ${pxIntoRem(57)};
  grid-area: secondbrand;
  @media (max-width: 500px) {
    margin-left: 0;
  }
`;

const IndexBrandsSecondLogo = styled.img`
  width: ${pxIntoRem(44)};
  height: ${pxIntoRem(71)};
  @media (max-width: 500px) {
    width: ${pxIntoRem(26.35)};
    height: ${pxIntoRem(42.52)};
  }
`;

const IndexBrandsSecondText = styled.span`
  font-family: "TT Firs Neue";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(35)};
  line-height: 111.5%;
  color: #375bd2;
  margin-left: ${pxIntoRem(29)};
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(20.96)};
    margin-left: ${pxIntoRem(17.37)};
  }
`;

const IndexBrandsThird = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${pxIntoRem(72)};
  grid-area: thirdbrand;
  @media (max-width: 500px) {
    margin-left: 0;
  }
`;

const IndexBrandsThirdLogo = styled.img`
  width: ${pxIntoRem(59.58)};
  height: ${pxIntoRem(69.02)};
  @media (max-width: 500px) {
    width: ${pxIntoRem(35.68)};
    height: ${pxIntoRem(41.34)};
  }
`;

const IndexBrandsThirdText = styled.span`
  font-family: "TT Firs Neue";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(35)};
  line-height: 111.5%;
  color: #375bd2;
  margin-left: ${pxIntoRem(29.42)};
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(20.96)};
    margin-left: ${pxIntoRem(17.62)};
  }
`;

const IndexWinners = styled.section`
  width: 100%;
  padding-top: ${pxIntoRem(78)};
  @media (max-width: 500px) {
    padding-top: ${pxIntoRem(40)};
  }
`;

const IndexWinnersBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const IndexWinnersTitle = styled.h2`
  font-family: "TT Firs Neue";
  font-style: normal;
  font-weight: 500;
  font-size: ${pxIntoRem(26)};
  line-height: 111.5%;
  color: #ffffff;

  @media (max-width: 500px) {
    font-size: ${pxIntoRem(24)};
    text-align: center;
  }
`;

const IndexHow = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: ${pxIntoRem(100)};
  @media (max-width: 500px) {
    padding-top: ${pxIntoRem(45)};
  }
`;

const IndexHowBody = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 999;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const IndexHowTitle = styled.h2`
  font-family: "TT Firs Neue";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(45)};
  line-height: 111.5%;
  color: #ffffff;
  text-align: center;
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(23)};
  }
`;

const IndexHowText = styled.p`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 300;
  font-size: ${pxIntoRem(15)};
  line-height: 172.52%;
  color: #ffffff;
  margin-top: ${pxIntoRem(20)};
  max-width: ${pxIntoRem(720)};
  &:first-of-type {
    margin-top: ${pxIntoRem(65)};
  }

  @media (max-width: 940px) {
    max-width: ${pxIntoRem(620)};
    &:first-of-type {
      margin-top: ${pxIntoRem(22)};
    }
  }

  span {
    font-family: inherit;
    font-weight: 500;
  }
`;

const IndexHowLogo = styled.img`
  position: absolute;
  right: ${pxIntoRem(120)};
  top: ${pxIntoRem(57)};
  width: ${pxIntoRem(330)};
  pointer-events: none;
  @media (max-width: 500px) {
    position: static;
    width: ${pxIntoRem(220)};
    margin-top: ${pxIntoRem(40)};
    z-index: 999;
  }
`;

const IndexHowBlurredCircle = styled.div`
  position: absolute;
  width: ${pxIntoRem(563)};
  height: ${pxIntoRem(563)};
  left: ${pxIntoRem(-238)};
  top: ${pxIntoRem(1053)};
  background-color: rgb(143, 82, 242, 0.6);
  filter: blur(${pxIntoRem(250)});
  pointer-events: none;
  @media (max-width: 500px) {
    display: none;
  }
`;

const IndexHowBackground = styled.img`
  position: absolute;
  left: ${pxIntoRem(220)};
  top: ${pxIntoRem(10)};
  opacity: 0.3;
  @media (max-width: 500px) {
    width: ${pxIntoRem(900)};
    top: ${pxIntoRem(114)};
    left: ${pxIntoRem(-230)};
  }
`;

const IndexHowNeeds = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: ${pxIntoRem(80)};
  @media (max-width: 500px) {
    padding-top: ${pxIntoRem(70)};
  }
`;

const IndexHowNeedsTitle = styled.h3`
  font-family: "TT Firs Neue";
  font-style: normal;
  font-weight: 500;
  font-size: ${pxIntoRem(26)};
  line-height: 111.5%;
  color: #ffffff;
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(24)};
    text-align: center;
  }
`;

const IndexHowNeedsRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: ${pxIntoRem(40)};
  position: relative;
  @media (max-width: 1180px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    padding-top: ${pxIntoRem(58)};

    &::after {
      content: "";
      display: block;
      position: absolute;
      left: ${pxIntoRem(13)};
      top: ${pxIntoRem(82)};
      background-color: rgba(135, 77, 236, 0.66);
      width: ${pxIntoRem(1)};
      height: ${pxIntoRem(1015)};
    }
  }
`;

const IndexHowNeedsItemHeader = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 500px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
`;

const IndexHowNeedsItemNumber = styled.span`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(185)};
  line-height: ${pxIntoRem(180)};
  color: #ffffff;
  text-align: center;
  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    width: ${pxIntoRem(27)};
    height: ${pxIntoRem(27)};
    background: #874dec;
    font-size: ${pxIntoRem(18)};
    z-index: 999;
  }
`;

const IndexHowNeedsItemTitle = styled.span`
  font-family: "TT Firs Neue";
  font-style: normal;
  font-weight: 500;
  font-size: ${pxIntoRem(21)};
  line-height: 111.5%;
  color: #ffffff;
  text-align: center;

  @media (max-width: 500px) {
    margin-left: ${pxIntoRem(20)};
  }
`;

const IndexHowNeedsItemImageBlock = styled.div`
  position: relative;
  width: ${pxIntoRem(300)};
  height: ${pxIntoRem(186)};
  margin-top: ${pxIntoRem(35)};
  background-color: rgba(255, 255, 255, 0.1);
  border: ${pxIntoRem(1)} solid rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(${pxIntoRem(16.53)});

  @media (max-width: 500px) {
    margin-left: ${pxIntoRem(45)};
    width: ${pxIntoRem(282)};
    margin-top: ${pxIntoRem(16)};
  }
`;

const IndexHowNeedsItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${pxIntoRem(300)};

  &:last-of-type {
    ${IndexHowNeedsItemImageBlock} {
      background-color: #874dec;
    }
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-top: ${pxIntoRem(18)};
    &:first-of-type {
      margin-top: 0px;
    }
  }
`;

const IndexHowNeedsItemImageFirst = styled.img`
  position: absolute;
  top: ${pxIntoRem(10)};
  left: ${pxIntoRem(50)};
  width: ${pxIntoRem(196)};
  height: ${pxIntoRem(156)};

  @media (max-width: 500px) {
    width: ${pxIntoRem(196)};
    height: ${pxIntoRem(149)};
    top: ${pxIntoRem(15)};
    left: ${pxIntoRem(42)};
  }
`;

const IndexHowNeedsItemImageSecond = styled.img`
  position: absolute;
  left: ${pxIntoRem(21)};
  top: ${pxIntoRem(26)};
  width: ${pxIntoRem(252)};
  height: ${pxIntoRem(113)};

  @media (max-width: 500px) {
    width: ${pxIntoRem(252)};
    height: ${pxIntoRem(112)};
    top: ${pxIntoRem(35)};
    left: ${pxIntoRem(14)};
  }
`;

const IndexHowNeedsItemImageThird = styled.img`
  position: absolute;
  left: ${pxIntoRem(17)};
  top: ${pxIntoRem(35)};
  width: ${pxIntoRem(273)};
  height: ${pxIntoRem(84)};

  @media (max-width: 500px) {
    width: ${pxIntoRem(248)};
    height: ${pxIntoRem(77)};
    left: ${pxIntoRem(14)};
    top: ${pxIntoRem(38)};
  }
`;

const IndexHowNeedsItemImageThirdWatch = styled.img`
  position: absolute;
  left: ${pxIntoRem(55)};
  top: ${pxIntoRem(20)};
  width: ${pxIntoRem(30)};
  height: ${pxIntoRem(37)};
  @media (max-width: 500px) {
    width: ${pxIntoRem(32)};
    height: ${pxIntoRem(39)};
    left: ${pxIntoRem(58)};
    top: ${pxIntoRem(18)};
  }
`;

const IndexHowNeedsItemImageForth = styled.img`
  position: absolute;
  right: ${pxIntoRem(-5)};
  top: ${pxIntoRem(3)};
  width: ${pxIntoRem(279)};
  height: ${pxIntoRem(179)};
  @media (max-width: 500px) {
    width: ${pxIntoRem(279)};
    height: ${pxIntoRem(178)};
    right: ${pxIntoRem(-15)};
    top: ${pxIntoRem(3)};
  }
`;

const IndexHowNeedsItemContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${pxIntoRem(27)} 0px 0px ${pxIntoRem(18)};
  width: ${pxIntoRem(300)};
  @media (max-width: 500px) {
    margin-left: ${pxIntoRem(45)};
    // padding: 0px 0px 0px ${pxIntoRem(18)};
    padding: 0;
    margin-top: ${pxIntoRem(16)};
  }
`;

const IndexHowNeedsItemText = styled.p`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: ${pxIntoRem(15)};
  line-height: 172.52%;
  color: #ffffff;
`;

const IndexHowNeedsItemLink = styled(Link)`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(18)};
  line-height: 172.52%;
  color: #874dec;
  margin-top: ${pxIntoRem(8)};
  animation: blink-text 1.9s linear infinite;

  @keyframes blink-text {
   0% {
    opacity: 0.3;
   }
   50% {
    opacity: 1;
   }
   100% {
    opacity: 0.3;
   }
`;

const IndexQuestions = styled.section`
  width: 100%;
  padding-top: ${pxIntoRem(155)};
  padding-bottom: ${pxIntoRem(100)};
  @media (max-width: 500px) {
    padding-top: ${pxIntoRem(58)};
    padding-bottom: ${pxIntoRem(40)};
  }
`;

const IndexQuestionsMoneyBox = styled.img`
  position: absolute;
  width: ${pxIntoRem(84)};
  top: ${pxIntoRem(-45)};
  right: ${pxIntoRem(142)};
  @media (max-width: 500px) {
    display: none;
  }
`;

const IndexQuestionsBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
`;

const IndexQuestionsTitle = styled.h2`
  font-family: "TT Firs Neue";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(45)};
  line-height: 111.5%;
  text-align: center;
  color: #ffffff;
  @media (max-width: 500px) {
    font-weight: 500;
    font-size: ${pxIntoRem(24)};
    max-width: ${pxIntoRem(320)};
    text-align: center;
  }
`;

export {
  IndexBlock,
  IndexGreetingBody,
  IndexGreeting,
  IndexGreetingConnect,
  IndexGreetingContent,
  IndexGreetingText,
  IndexGreetingTitle,
  IndexGreetingBottomText,
  IndexGreetingMoneyBox,
  IndexGreetingBackground,
  IndexBrands,
  IndexBrandsFirst,
  IndexBrandsFirstText,
  IndexBrandsSecond,
  IndexBrandsSecondLogo,
  IndexBrandsSecondText,
  IndexBrandsThird,
  IndexBrandsThirdLogo,
  IndexBrandsThirdText,
  IndexWinners,
  IndexWinnersBody,
  IndexWinnersTitle,
  IndexHow,
  IndexHowTitle,
  IndexHowText,
  IndexHowBackground,
  IndexHowBody,
  IndexHowLogo,
  IndexHowBlurredCircle,
  IndexHowNeeds,
  IndexHowNeedsItem,
  IndexHowNeedsTitle,
  IndexHowNeedsRow,
  IndexHowNeedsItemImageFirst,
  IndexHowNeedsItemImageForth,
  IndexHowNeedsItemImageSecond,
  IndexHowNeedsItemImageThird,
  IndexHowNeedsItemLink,
  IndexHowNeedsItemHeader,
  IndexHowNeedsItemNumber,
  IndexHowNeedsItemContent,
  IndexHowNeedsItemText,
  IndexHowNeedsItemTitle,
  IndexHowNeedsItemImageBlock,
  IndexHowNeedsItemImageThirdWatch,
  IndexQuestions,
  IndexQuestionsBody,
  IndexQuestionsMoneyBox,
  IndexQuestionsTitle,
};
