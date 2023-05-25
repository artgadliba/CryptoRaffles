import styled from "styled-components";
import { SwiperSlide, Swiper } from "swiper/react";
import pxIntoRem from "../../../../utils/pxIntoRem";

const IndexSliderBlock = styled.div`
  width: ${pxIntoRem(413)};
  height: ${pxIntoRem(554)};
  position: relative;
  background: linear-gradient(334.95deg, #6232d0 -22.97%, #9859f9 93.03%);
  display: flex;
  flex-direction: column;
  @media (max-width: 500px) {
    justify-content: center;
    width: 100%;
    margin-top: ${pxIntoRem(50)};
  }
`; // greeting-card-left-border.png

const IndexSliderBorderLeft = styled.img`
  position: absolute;
  left: ${pxIntoRem(-12)};
  top: ${pxIntoRem(-12)};
  pointer-events: none;
  width: ${pxIntoRem(105)};
  z-index: 999;
`;

const IndexSliderBorderRight = styled.img`
  position: absolute;
  right: ${pxIntoRem(-12)};
  bottom: ${pxIntoRem(-12)};
  pointer-events: none;
  width: ${pxIntoRem(105)};
  z-index: 999;
`;

const IndexSliderLightning = styled.img`
  position: absolute;
  top: ${pxIntoRem(-95)};
  left: ${pxIntoRem(115)};
  pointer-events: none;
  width: ${pxIntoRem(126)};
  z-index: 99;
  @media (max-width: 500px) {
    width: ${pxIntoRem(78)};
    top: ${pxIntoRem(-42)};
    left: ${pxIntoRem(105)};
  }
`;

const IndexSliderLines = styled.img`
  position: absolute;
  bottom: ${pxIntoRem(92)};
  left: 0px;
  pointer-events: none;
  width: 100%;
  @media (max-width: 500px) {
    bottom: ${pxIntoRem(18)};
  }
`;

const IndexSliderSlider = styled(Swiper)`
  width: 100%;
  height: 100%;
  position: relative;
`;

const IndexSliderSlide = styled(SwiperSlide)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const IndexSliderPrev = styled.button`
  position: absolute;
  width: 15%;
  height: 86%;
  bottom: 0;
  left: 0;
  cursor: pointer;
  background-color: transparent;
  z-index: 999;
`;

const IndexSliderNext = styled.button`
  position: absolute;
  width: 15%;
  height: 86%;
  bottom: 0;
  right: 0;
  cursor: pointer;
  background-color: transparent;
  z-index: 999;
`;

const IndexSliderPrevTop = styled.button`
  position: absolute;
  width: 15%;
  height: 4%;
  top: 0;
  left: 0;
  cursor: pointer;
  background-color: transparent;
  z-index: 999;
`;

const IndexSliderNextTop = styled.button`
  position: absolute;
  width: 15%;
  height: 4%;
  top: 0;
  right: 0;
  cursor: pointer;
  background-color: transparent;
  z-index: 999;
`;

export { IndexSliderBlock, IndexSliderBorderLeft, IndexSliderBorderRight, IndexSliderLightning, IndexSliderNext, IndexSliderNextTop, IndexSliderPrev, IndexSliderPrevTop, IndexSliderSlider, IndexSliderSlide, IndexSliderLines };
