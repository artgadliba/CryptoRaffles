import React, { FC, useEffect, useState } from "react";
import { Navigation } from "swiper";
import { SwiperSlide } from "swiper/react";
import useModal from "../../../../hooks/useModal";
import useWindowWidth from "../../../../hooks/useWindowWidth";
import AccountPopUp from "../AccountPopUp/AccountPopUp";
import {
  AccountFakeSliderBlock,
  AccountFakeSliderSlide,
  AccountMobileSlider,
  AccountMobileSliderSlide,
  AccountSliderBlock,
  AccountSliderBlockSlider,
  AccountSliderSlideContent,
  AccountSliderNextButton,
  AccountSliderNextButtonImage,
  AccountSliderPrevButton,
  AccountSliderPrevButtonImage,
  AccountSliderSlide,
  AccountSliderSlideImage,
} from "./AccountSliderStyles";

interface IAccountToken {
  tokenId: number;
  image: string;
}

interface IAccountSlider {
  items: IAccountToken[];
}

// Function split array into parts containing 6 or less elements: [1, 2, 3, 4, 5, 6, 7, 8] => [[1, 2, 3, 4, 5, 6], [7, 8]]
function splitArray(array: any[], arraysLength: number) {
  const result = [];

  let index = 0;

  for (let i = 0; i < array.length; i++) {
    if (!result[index]) {
      result[index] = [array[i]];
    } else {
      result[index].push(array[i]);
    }

    if ((i + 1) % arraysLength === 0) {
      index += 1;
    }
  }

  return result;
}

const AccountSlider: FC<IAccountSlider> = ({ items }) => {
  const [modalImage, setImageLink] = useState("");
  const { modal, openModal } = useModal(AccountPopUp, {
    image: modalImage,
  });

  const windowWidth = useWindowWidth();

  function openPopUp(image: string) {
    setImageLink(image);
    openModal();
  }

  if (items == undefined) {
    return <></>;
  }

  // Mobile slider
  if (windowWidth < 500) {
    return (
      <AccountMobileSlider slidesPerView={"auto"} loop>
        {modal}
        {items.map((item, idx) => {
          return (
            <AccountMobileSliderSlide onClick={() => openPopUp(item.image)} key={idx}>
              <AccountSliderSlideImage alt="slide" src={item.image} />
            </AccountMobileSliderSlide>
          );
        })}
      </AccountMobileSlider>
    );
  }

  // Desktop slider
  if (items.length <= 6) {
    return (
      <AccountFakeSliderBlock>
        {modal}
        {items.map((item, idx) => {
          return (
            <AccountFakeSliderSlide onClick={() => openPopUp(item.image)} key={idx}>
              <AccountSliderSlideImage alt="slide" src={item.image} />
            </AccountFakeSliderSlide>
          );
        })}
      </AccountFakeSliderBlock>
    );
  }

  // Desktop slider
  return (
    <AccountSliderBlock>
      <AccountSliderPrevButton className="account-slider-prev">
        <AccountSliderPrevButtonImage alt="prev" src="/images/arrow-left.png" />
      </AccountSliderPrevButton>

      <AccountSliderNextButton className="account-slider-next">
        <AccountSliderNextButtonImage alt="next" src="/images/arrow-right.png" />
      </AccountSliderNextButton>
      {modal}
      <AccountSliderBlockSlider
        modules={[Navigation]}
        allowTouchMove={false}
        slidesPerView={6}
        // spaceBetween={25}
        loop
        navigation={{
          prevEl: ".account-slider-prev",
          nextEl: ".account-slider-next",
        }}
      >
        {[...items, ...items, ...items, ...items].map((item: IAccountToken, idx) => {
          return (
            <AccountSliderSlide key={idx} onClick={() => openPopUp(item.image)}>
              <AccountSliderSlideContent>
                <AccountSliderSlideImage alt="slide" src={item.image} />
              </AccountSliderSlideContent>
            </AccountSliderSlide>
          );
        })}
      </AccountSliderBlockSlider>
    </AccountSliderBlock>
  );
}

export default AccountSlider;
