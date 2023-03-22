import React, { FC } from "react";
import useTimer from "../../../hooks/useTimer";
import {
  CollectionsItemBlock,
  CollectionsItemBackground,
  CollectionsItemContent,
  CollectionsItemId,
  CollectionsItemSumm,
  CollectionsItemSummText,
  CollectionsItemSummTitle,
  CollectionsItemTimer,
  CollectionsItemTimerColumn,
  CollectionsItemTimerNumber,
  CollectionsItemTimerSplitter,
  CollectionsItemTimerText,
  CollectionsItemUsername,
  CollectionsItemButtons,
  CollectionsItemButtonConnect,
  CollectionsItemButtonMore,
  CollectionsFakeItemBlock,
  CollectionsFakeItemBackground,
  CollectionsFakeItemButtonConnect,
  CollectionsFakeItemButtonMore,
  CollectionsFakeItemButtons,
  CollectionsFakeItemContent,
  CollectionsFakeItemId,
  CollectionsFakeItemSumm,
  CollectionsFakeItemSummText,
  CollectionsFakeItemSummTitle,
  CollectionsFakeItemUsername,
  CollectionsFakeItemTimer,
  CollectionsFakeItemClock,
  CollectionsFakeItemFakeButton,
} from "./CollectionsItemStyles";

interface ICollectionsItem {
  item?: {
    id: string;
    wallet: string;
    price: string;
    timerDate: string | number;
  };
  isFake?: boolean;
}

const CollectionsItem: FC<ICollectionsItem> = ({ item, isFake }) => {
  const { seconds, days, hours, minuts, secondsNoun, daysNoun, hoursNoun, minutsNoun } = useTimer(item?.timerDate ?? Date.now());

  if (isFake || !item) {
    return (
      <CollectionsFakeItemBlock>
        <CollectionsFakeItemBackground alt="background" src="/images/give-loading-background.png" />
        <CollectionsFakeItemUsername>
          <div />
        </CollectionsFakeItemUsername>
        <CollectionsFakeItemClock alt="clock" src="/images/clock.svg" />
        <CollectionsFakeItemContent>
          <CollectionsFakeItemId />
          <CollectionsFakeItemSumm>
            <CollectionsFakeItemSummTitle />
            <CollectionsFakeItemSummText />
          </CollectionsFakeItemSumm>
          <CollectionsFakeItemTimer />
          <CollectionsFakeItemButtons>
            <CollectionsFakeItemButtonMore />
            <CollectionsFakeItemButtonConnect />
            <CollectionsFakeItemFakeButton />
            <CollectionsFakeItemFakeButton />
            <CollectionsFakeItemFakeButton />
            <CollectionsFakeItemFakeButton />
          </CollectionsFakeItemButtons>
        </CollectionsFakeItemContent>
      </CollectionsFakeItemBlock>
    );
  }

  return (
    <CollectionsItemBlock>
      <CollectionsItemBackground alt="background" src="/images/collection_second_background.png" />
      <CollectionsItemUsername>{item.wallet}</CollectionsItemUsername>
      <CollectionsItemContent>
        <CollectionsItemId>{item.id}</CollectionsItemId>
        <CollectionsItemSumm>
          <CollectionsItemSummTitle>{item.price}</CollectionsItemSummTitle>
          <CollectionsItemSummText>Сумма розыгрыша</CollectionsItemSummText>
        </CollectionsItemSumm>
        <CollectionsItemTimer>
          <CollectionsItemTimerColumn>
            <CollectionsItemTimerNumber>{days}</CollectionsItemTimerNumber>
            <CollectionsItemTimerText>{daysNoun}</CollectionsItemTimerText>
          </CollectionsItemTimerColumn>
          <CollectionsItemTimerSplitter marginLeft={25} marginRight={19}>
            :
          </CollectionsItemTimerSplitter>
          <CollectionsItemTimerColumn>
            <CollectionsItemTimerNumber>{hours}</CollectionsItemTimerNumber>
            <CollectionsItemTimerText>{hoursNoun}</CollectionsItemTimerText>
          </CollectionsItemTimerColumn>
          <CollectionsItemTimerSplitter marginLeft={18} marginRight={22}>
            :
          </CollectionsItemTimerSplitter>
          <CollectionsItemTimerColumn>
            <CollectionsItemTimerNumber>{minuts}</CollectionsItemTimerNumber>
            <CollectionsItemTimerText>{minutsNoun}</CollectionsItemTimerText>
          </CollectionsItemTimerColumn>
          <CollectionsItemTimerSplitter marginLeft={22} marginRight={15}>
            :
          </CollectionsItemTimerSplitter>
          <CollectionsItemTimerColumn>
            <CollectionsItemTimerNumber>{seconds}</CollectionsItemTimerNumber>
            <CollectionsItemTimerText>{secondsNoun}</CollectionsItemTimerText>
          </CollectionsItemTimerColumn>
        </CollectionsItemTimer>
        <CollectionsItemButtons>
          <CollectionsItemButtonMore>Подробнее</CollectionsItemButtonMore>
          <CollectionsItemButtonConnect>Подключиться</CollectionsItemButtonConnect>
        </CollectionsItemButtons>
      </CollectionsItemContent>
    </CollectionsItemBlock>
  );
};

export default CollectionsItem;
