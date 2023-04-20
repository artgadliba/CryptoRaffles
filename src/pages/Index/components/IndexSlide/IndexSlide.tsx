import React, { FC, useState, useEffect } from "react";
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
  IndexSlideHeaderDocumentImageLink,
  IndexSlideLine,
  IndexSlideBlock,
  IndexSlideSum,
  IndexSlideSumTitle,
  IndexSlideTitle,
  IndexSlideUsername,
} from "./IndexSlideStyles";
import { getETHPrice } from "../../../../utils/getETHPrice";
import { useCountdown } from "../../../../hooks/useCountdown";
import { ethers } from "ethers";

interface IIndexSlide {
  index: number;
  length: number;
  item: {
    raffle_id?: string;
    giveaway_id?: string;
    end_timestamp: number;
    grand_prize: number;
    paytoken: string;
    owner: string;
    promo_name: string;
  };
}

const IndexSlide: FC<IIndexSlide> = ({ item, index, length }) => {
  const [ethRate, setEthRate] = useState<number>();

  var {
    seconds,
    minutes,
    hours,
    days,
    secondsNoun,
    minutesNoun,
    hoursNoun,
    daysNoun
  } = useCountdown(item?.end_timestamp ?? Date.now());

  if (ethRate !== undefined) {
    if (item.grand_prize != undefined) {
      var grandPrize = item.grand_prize;
      if (item.paytoken === "0x0000000000000000000000000000000000000000") {
        let eth = ethers.utils.formatEther(String(item.grand_prize));
        grandPrize = Number(eth) * Number(ethRate);
      } else {
        grandPrize = Math.round(item.grand_prize / 10 ** 6);
      }
    }
  }

  useEffect(() => {
    if (!ethRate) {
      getETHPrice()
      .then(res => {
        setEthRate(res);
      })
      .catch(err =>{
        console.log(err);
      })
    }
  }, [ethRate]);

  return (
    <IndexSlideBlock>
      <IndexSlideHeader>
        <IndexSlideHeaderCounter>
          {index + 1} <span>/ {length}</span>
        </IndexSlideHeaderCounter>
        <IndexSlideHeaderDocument>
        {item.raffle_id ? (
          <IndexSlideHeaderDocumentImageLink to={`/raffles/${item.raffle_id}`}>
            <IndexSlideHeaderDocumentImage alt="document" src="/images/document.svg" />
          </IndexSlideHeaderDocumentImageLink>
        ) : (
          <IndexSlideHeaderDocumentImageLink to={`/giveaways/${item.giveaway_id}`}>
            <IndexSlideHeaderDocumentImage alt="document" src="/images/document.svg" />
          </IndexSlideHeaderDocumentImageLink>
        )}
        </IndexSlideHeaderDocument>
      </IndexSlideHeader>
      <IndexSlideContent>
        <IndexSlideTitle>{item.promo_name}</IndexSlideTitle>
        <IndexSlideUsername>{item.owner}</IndexSlideUsername>
          {item.raffle_id ? (
            <IndexSlideSum to={`/raffles/${item.raffle_id}`}>{grandPrize < 5000 || ethRate == undefined || grandPrize == undefined ? "$$$$$$" : `${grandPrize}`}</IndexSlideSum>
          ) : (
            <IndexSlideSum to={`/giveaways/${item.giveaway_id}`}>{grandPrize < 5000 || ethRate == undefined || grandPrize == undefined ? "$$$$$$" : `${grandPrize}`}</IndexSlideSum>
          )}
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
          <IndexSlideFooterColumnNumber>{minutes}</IndexSlideFooterColumnNumber>
          <IndexSlideFooterColumnText>{minutesNoun}</IndexSlideFooterColumnText>
        </IndexSlideFooterColumn>
        <IndexSlideFooterDots>:</IndexSlideFooterDots>
        <IndexSlideFooterColumn>
          <IndexSlideFooterColumnNumber>{seconds}</IndexSlideFooterColumnNumber>
          <IndexSlideFooterColumnText>{secondsNoun}</IndexSlideFooterColumnText>
        </IndexSlideFooterColumn>
      </IndexSlideFooter>
    </IndexSlideBlock>
  );
}

export default IndexSlide;
