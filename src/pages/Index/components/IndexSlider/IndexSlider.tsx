import React, { FC } from "react";
import { Autoplay, Navigation } from "swiper";
import IndexSlide from "../IndexSlide/IndexSlide";
import {
  IndexSliderBlock,
  IndexSliderBorderLeft,
  IndexSliderBorderRight,
  IndexSliderLightning,
  IndexSliderLines,
  IndexSliderNext,
  IndexSliderNextTop,
  IndexSliderPrev,
  IndexSliderPrevTop,
  IndexSliderSlide,
  IndexSliderSlider
} from "./IndexSliderStyles";

interface IIndexSlider {
  items: {
    raffleID?: string;
    giveawayID?: string;
    end_timestamp: number;
    grand_prize: number;
    paytoken: string;
    owner: string;
    promo_name: string;
  }[];
}

const IndexSlider: FC<IIndexSlider> = ({ items }) => {
  if (items !== undefined) {
    const sliderLenght = items.length;

    return (
      <IndexSliderBlock>
        <IndexSliderBorderLeft alt="border" src="/images/greeting-card-left-border.svg" />
        <IndexSliderBorderRight alt="border" src="/images/greeting-card-right-border.svg" />
        <IndexSliderLightning alt="lightning" src="/images/greeting-card-lightning.png" />
        <IndexSliderLines alt="lines" src="/images/greeting-card-lines.svg" />
        <IndexSliderPrev className="swiper-prev" />
        <IndexSliderNext className="swiper-next" />
        <IndexSliderPrevTop className="swiper-prev" />
        <IndexSliderNextTop className="swiper-next" />
        <IndexSliderSlider
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: ".swiper-prev",
            nextEl: ".swiper-next",
          }}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          direction={"horizontal"}
          allowTouchMove={false}
          loop={true}
        >
          {items.map((item, idx) => {
            return (
              <IndexSliderSlide key={idx}>
                <IndexSlide item={item} index={idx} length={sliderLenght}/>
              </IndexSliderSlide>
            );
          })}
        </IndexSliderSlider>
      </IndexSliderBlock>
    );
  }
}

export default IndexSlider;
