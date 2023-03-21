import React, { FC } from "react";
import useTimer from "../../../hooks/useTimer";
import {
  GivesItemBlock,
  GivesItemBackground,
  GivesItemContent,
  GivesItemId,
  GivesItemSumm,
  GivesItemSummText,
  GivesItemSummTitle,
  GivesItemTimer,
  GivesItemTimerColumn,
  GivesItemTimerNumber,
  GivesItemTimerSplitter,
  GivesItemTimerText,
  GivesItemUsername,
  GivesItemButtons,
  GivesItemButtonConnect,
  GivesItemButtonMore,
  GivesFakeItemBlock,
  GivesFakeItemBackground,
  GivesFakeItemButtonConnect,
  GivesFakeItemButtonMore,
  GivesFakeItemButtons,
  GivesFakeItemContent,
  GivesFakeItemId,
  GivesFakeItemSumm,
  GivesFakeItemSummText,
  GivesFakeItemSummTitle,
  GivesFakeItemUsername,
  GivesFakeItemTimer,
  GivesFakeItemClock,
  GivesFakeItemFakeButton,
} from "./GivesItemStyles";

interface IGivesItem {
  item?: {
    id: string;
    wallet: string;
    price: string;
    timerDate: string | number;
  };
  isFake?: boolean;
}

const GivesItem: FC<IGivesItem> = ({ item, isFake }) => {
  const { seconds, days, hours, minuts, secondsNoun, daysNoun, hoursNoun, minutsNoun } = useTimer(item?.timerDate ?? Date.now());

  if (isFake || !item) {
    return (
      <GivesFakeItemBlock>
        <GivesFakeItemBackground alt="background" src="/images/give-loading-background.png" />
        <GivesFakeItemUsername>
          <div />
        </GivesFakeItemUsername>
        <GivesFakeItemClock alt="clock" src="/images/clock.svg" />
        <GivesFakeItemContent>
          <GivesFakeItemId />
          <GivesFakeItemSumm>
            <GivesFakeItemSummTitle />
            <GivesFakeItemSummText />
          </GivesFakeItemSumm>
          <GivesFakeItemTimer />
          <GivesFakeItemButtons>
            <GivesFakeItemButtonMore />
            <GivesFakeItemButtonConnect />
            <GivesFakeItemFakeButton />
            <GivesFakeItemFakeButton />
            <GivesFakeItemFakeButton />
            <GivesFakeItemFakeButton />
          </GivesFakeItemButtons>
        </GivesFakeItemContent>
      </GivesFakeItemBlock>
    );
  }

  return (
    <GivesItemBlock>
      <GivesItemBackground alt="background" src="/images/account-first-item-background.png" />
      <GivesItemUsername>{item.wallet}</GivesItemUsername>
      <GivesItemContent>
        <GivesItemId>{item.id}</GivesItemId>
        <GivesItemSumm>
          <GivesItemSummTitle>{item.price}</GivesItemSummTitle>
          <GivesItemSummText>Сумма розыгрыша</GivesItemSummText>
        </GivesItemSumm>
        <GivesItemTimer>
          <GivesItemTimerColumn>
            <GivesItemTimerNumber>{days}</GivesItemTimerNumber>
            <GivesItemTimerText>{daysNoun}</GivesItemTimerText>
          </GivesItemTimerColumn>
          <GivesItemTimerSplitter marginLeft={25} marginRight={19}>
            :
          </GivesItemTimerSplitter>
          <GivesItemTimerColumn>
            <GivesItemTimerNumber>{hours}</GivesItemTimerNumber>
            <GivesItemTimerText>{hoursNoun}</GivesItemTimerText>
          </GivesItemTimerColumn>
          <GivesItemTimerSplitter marginLeft={18} marginRight={22}>
            :
          </GivesItemTimerSplitter>
          <GivesItemTimerColumn>
            <GivesItemTimerNumber>{minuts}</GivesItemTimerNumber>
            <GivesItemTimerText>{minutsNoun}</GivesItemTimerText>
          </GivesItemTimerColumn>
          <GivesItemTimerSplitter marginLeft={22} marginRight={15}>
            :
          </GivesItemTimerSplitter>
          <GivesItemTimerColumn>
            <GivesItemTimerNumber>{seconds}</GivesItemTimerNumber>
            <GivesItemTimerText>{secondsNoun}</GivesItemTimerText>
          </GivesItemTimerColumn>
        </GivesItemTimer>
        <GivesItemButtons>
          <GivesItemButtonMore>Подробнее</GivesItemButtonMore>
          <GivesItemButtonConnect>Подключиться</GivesItemButtonConnect>
        </GivesItemButtons>
      </GivesItemContent>
    </GivesItemBlock>
  );
};

export default GivesItem;
