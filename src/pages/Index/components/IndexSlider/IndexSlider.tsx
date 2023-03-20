import React, { FC } from "react";
import { Autoplay, Navigation } from "swiper";
import { SwiperSlide } from "swiper/react";
import IndexSlide from "../IndexSlide/IndexSlide";
import { IndexSliderBlock, IndexSliderBorderLeft, IndexSliderBorderRight, IndexSliderLightning, IndexSliderLines, IndexSliderNext, IndexSliderNextTop, IndexSliderPrev, IndexSliderPrevTop, IndexSliderSlide, IndexSliderSlider } from "./IndexSliderStyles";

interface IIndexSlider {
  items: {
    id: string;
    wallet: string;
    price: string;
    timerDate: string | number;
  }[];
}

const IndexSlider: FC<IIndexSlider> = ({ items }) => {
  return (
    <IndexSliderBlock>
      <IndexSliderBorderLeft alt="border" src="/images/greeting-card-left-border.png" />
      <IndexSliderBorderRight alt="border" src="/images/greeting-card-right-border.png" />
      <IndexSliderLightning alt="lightning" src="/images/greeting-card-lightning.png" />
      <IndexSliderLines alt="lines" src="/images/greeting-card-lines.png" />
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
            <IndexSliderSlide>
              <IndexSlide item={item} index={idx} key={idx} />
            </IndexSliderSlide>
          );
        })}
      </IndexSliderSlider>
    </IndexSliderBlock>
  );
};

export default IndexSlider;
