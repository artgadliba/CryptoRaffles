import React, { FC } from "react";
import useTimer from "../../../../hooks/useTimer";
import {
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
} from "./IndexSlideStyles";

interface IIndexSlide {
  index: number;
  item: {
    id: string;
    wallet: string;
    price: string;
    timerDate: string | number;
  };
}

const IndexSlide: FC<IIndexSlide> = ({ item, index }) => {
  const { seconds, days, hours, minuts, secondsNoun, daysNoun, hoursNoun, minutsNoun } = useTimer(item.timerDate ?? Date.now());
  return (
    <IndexSlideBlock>
      <IndexSlideHeader>
        <IndexSlideHeaderCounter>
          {index + 1} <span>/ 8</span>
        </IndexSlideHeaderCounter>
        <IndexSlideHeaderDocument>
          <IndexSlideHeaderDocumentImage alt="document" src="/images/document.svg" />
        </IndexSlideHeaderDocument>
      </IndexSlideHeader>
      <IndexSlideContent>
        <IndexSlideTitle>{item.id}</IndexSlideTitle>
        <IndexSlideUsername>{item.wallet}</IndexSlideUsername>
        <IndexSlideSum>{item.price}</IndexSlideSum>
        <IndexSlideLine />
        <IndexSlideSumTitle>Сумма розыгрыша</IndexSlideSumTitle>
      </IndexSlideContent>
      <IndexSlideFooter>
        <IndexSlideFooterColumn>
          <IndexSlideFooterColumnNumber>{days}</IndexSlideFooterColumnNumber>
          <IndexSlideFooterColumnText>{daysNoun}</IndexSlideFooterColumnText>
        </IndexSlideFooterColumn>
        <IndexSlideFooterDots>:</IndexSlideFooterDots>
        <IndexSlideFooterColumn>
          <IndexSlideFooterColumnNumber>{hours}</IndexSlideFooterColumnNumber>
          <IndexSlideFooterColumnText>{hoursNoun}</IndexSlideFooterColumnText>
        </IndexSlideFooterColumn>
        <IndexSlideFooterDots>:</IndexSlideFooterDots>
        <IndexSlideFooterColumn>
          <IndexSlideFooterColumnNumber>{minuts}</IndexSlideFooterColumnNumber>
          <IndexSlideFooterColumnText>{minutsNoun}</IndexSlideFooterColumnText>
        </IndexSlideFooterColumn>
        <IndexSlideFooterDots>:</IndexSlideFooterDots>
        <IndexSlideFooterColumn>
          <IndexSlideFooterColumnNumber>{seconds}</IndexSlideFooterColumnNumber>
          <IndexSlideFooterColumnText>{secondsNoun}</IndexSlideFooterColumnText>
        </IndexSlideFooterColumn>
      </IndexSlideFooter>
    </IndexSlideBlock>
  );
};

export default IndexSlide;
