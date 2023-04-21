import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import pxIntoRem from "../../../../utils/pxIntoRem";
import "swiper/css";

const AccountSliderBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: ${pxIntoRem(58)};
  width: 100%;

  @media (max-width: 500px) {
    display: none;
  }
`;

const AccountSliderPrevButton = styled.button`
  position: absolute;
  left: ${pxIntoRem(-50)};
  width: ${pxIntoRem(34)};
  height: ${pxIntoRem(34)};
  background-color: transparent;
  z-index: 99;
`;

const AccountSliderPrevButtonImage = styled.img`
  width: 100%;
  height: 100%;
`;

const AccountSliderNextButton = styled.button`
  position: absolute;
  right: ${pxIntoRem(-50)};
  width: ${pxIntoRem(34)};
  height: ${pxIntoRem(34)};
  background-color: transparent;
  z-index: 99;
`;

const AccountSliderNextButtonImage = styled.img`
  width: 100%;
  height: 100%;
`;

const AccountSliderBlockSlider = styled(Swiper)`
  width: 100%;
`;

const AccountSliderSlideContent = styled.div`
  width: ${pxIntoRem(194.34)} !important;
  height: ${pxIntoRem(194.34)} !important;
  flex-shrink: 0;
  background-color: transparent;
  filter: drop-shadow(0px ${pxIntoRem(10)} ${pxIntoRem(9)} rgba(0, 0, 0, 0.16));
  flex-shrink: 0;
  border: ${pxIntoRem(1)} solid #746091;
  border-radius: ${pxIntoRem(2)};
  &:hover {
    scale: 1.1;
    transition: 0.1s;
  }

  @media (max-width: 1420px) {
    width: ${pxIntoRem(194.34 * 0.95)} !important;
    height: ${pxIntoRem(194.34 * 0.95)} !important;
  }

  @media (max-width: 1380px) {
    width: ${pxIntoRem(194.34 * 0.92)} !important;
    height: ${pxIntoRem(194.34 * 0.92)} !important;
  }

  @media (max-width: 600px) {
    width: ${pxIntoRem(194.34 * 0.9)} !important;
    height: ${pxIntoRem(194.34 * 0.9)} !important;
  }
`;

const AccountSliderSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  background-color: transparent;
`;

const AccountSliderGroup = styled(SwiperSlide)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AccountFakeSliderSlide = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  width: ${pxIntoRem(194.34)} !important;
  height: ${pxIntoRem(194.34)} !important;
  margin-left: ${pxIntoRem(25)};
  background-color: transparent;
  filter: drop-shadow(0px ${pxIntoRem(10)} ${pxIntoRem(9)} rgba(0, 0, 0, 0.16));
  flex-shrink: 0;
  border: ${pxIntoRem(1)} solid #746091;
  border-radius: ${pxIntoRem(2)};
  flex-shrink: 0;
  &:first-of-type {
    margin-left: 0px;
  }

  @media (max-width: 1420px) {
   width: ${pxIntoRem(194.34 * 0.95)} !important;
   height: ${pxIntoRem(194.34 * 0.95)} !important;
  }

  @media (max-width: 1380px) {
   width: ${pxIntoRem(194.34 * 0.92)} !important;
   height: ${pxIntoRem(194.34 * 0.92)} !important;
  }

  @media (max-width: 600px) {
   width: ${pxIntoRem(194.34 * 0.9)} !important;
   height: ${pxIntoRem(194.34 * 0.9)} !important;
  }
`;

const AccountFakeSliderBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  margin-top: ${pxIntoRem(58)};
  @media (max-width: 500px) {
    display: none;
  }
`;

// const AccountFakeSliderSlide = styled.button`
//   width: ${pxIntoRem(194.34)} !important;
//   height: ${pxIntoRem(194.34)} !important;
//   background: red;
//   filter: drop-shadow(0px ${pxIntoRem(10)} ${pxIntoRem(9)} rgba(0, 0, 0, 0.16));
//   flex-shrink: 0;
//   border: ${pxIntoRem(1)} solid #746091;
//   border-radius: ${pxIntoRem(2)};

//   @media (max-width: 1445px) {
//     width: ${pxIntoRem(194.34 * 0.9)} !important;
//     height: ${pxIntoRem(194.34 * 0.9)} !important;
//   }

//   @media (max-width: 955px) {
//     width: ${pxIntoRem(194.34 * 0.85)} !important;
//     height: ${pxIntoRem(194.34 * 0.85)} !important;
//   }
// `;

const AccountMobileSlider = styled(Swiper)`
  display: none;
  width: 100%;
  margin-top: ${pxIntoRem(50)};
  overflow: initial !important;
  @media (max-width: 500px) {
    display: flex;
  }
`;

const AccountMobileSliderSlide = styled(SwiperSlide)`
  align-items: center;
  justify-content: space-between;
  width: ${pxIntoRem(194.34)} !important;
  height: ${pxIntoRem(194.34)} !important;
  background-color: transparent;
  filter: drop-shadow(0px ${pxIntoRem(10)} ${pxIntoRem(9)} rgba(0, 0, 0, 0.16));
  flex-shrink: 0;
  border: ${pxIntoRem(1)} solid #746091;
  border-radius: ${pxIntoRem(2)};
  margin-right: ${pxIntoRem(25)};
  cursor: pointer;
  &:last-of-type {
    margin-right: 0;
  }
`;

const AccountSliderSlideImage = styled.img`
width: ${pxIntoRem(194.34)} !important;
height: ${pxIntoRem(194.34)} !important;
object-fit: cover;
outline: 4px solid #746091;
outline-offset: -4px;
box-shadow: 12px 12px 14px 1px rgba(0, 0, 0, 0.23);
`;

export {
  AccountSliderBlock,
  AccountSliderNextButton,
  AccountSliderNextButtonImage,
  AccountSliderPrevButton,
  AccountSliderPrevButtonImage,
  AccountSliderBlockSlider,
  AccountSliderSlide,
  AccountSliderSlideContent,
  AccountSliderGroup,
  AccountFakeSliderBlock,
  AccountFakeSliderSlide,
  AccountMobileSlider,
  AccountMobileSliderSlide,
  AccountSliderSlideImage,
};
