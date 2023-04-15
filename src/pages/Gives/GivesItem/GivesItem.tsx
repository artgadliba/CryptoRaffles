import React, { FC } from "react";
import { useCountdown } from "../../../hooks/useCountdown";
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
import axios from "axios";
import { getETHPrice } from "../../../utils/getETHPrice";
import { ethers } from "ethers";

type JSONValue =
    | string
    | number
    | boolean
    | { [x: string]: JSONValue }
    | Array<JSONValue>;

interface ITerm {
  condition: string,
}

interface IGivesItem {
  item?: {
    giveaway_id: string;
    end_timestamp: number;
    image: string;
    paytoken: string;
    grand_prize: number;
    grand_prize_winner?: string;
    minor_prize: number;
    minor_prize_winners?: Array<string>;
    owner: string;
    giveaway_name: string;
    status: number;
    description: string;
    terms: Array<ITerm>;
    merkleTree?: JSONValue;
  };
  isFake?: boolean;
}

const GivesItem: FC<IGivesItem> = ({ item, isFake }) => {
  var ethRate = getETHPrice();

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

  function handleConnectButtonClick() {
    const element = document.getElementsByClassName(
      "iekbcc0 iekbcc9 ju367v71 ju367v7m ju367v9c ju367vn ju367vec ju367vex ju367v11 ju367v1a ju367v27 ju367v8o _12cbo8i3 ju367v8m _12cbo8i4 _12cbo8i6"
    );
    const connectButtonRef: HTMLElement = element[0] as HTMLElement;
    connectButtonRef.click();
  };

  function delayedConnectButton() {
    setTimeout(handleConnectButtonClick, 1500);
  }

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
  if (ethRate != undefined) {
    var grandPrize = item.grand_prize;
    if (item.paytoken == "0x0000000000000000000000000000000000000000") {
      let eth = ethers.utils.formatEther(item.grand_prize);
      grandPrize = Number(eth)  * Number(ethRate);
    }
    return (
      <GivesItemBlock>
        <GivesItemBackground alt="background" src={`${item.image}`} />
        <GivesItemUsername>{item.owner}</GivesItemUsername>
        <GivesItemContent>
          <GivesItemId>{item.giveaway_name}</GivesItemId>
          <GivesItemSumm>
          {grandPrize > 5000 ? (
            <GivesItemSummTitle>{grandPrize}</GivesItemSummTitle>
          ) : (
            <GivesItemSummTitle>$$$$$$</GivesItemSummTitle>
          )}
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
              <GivesItemTimerNumber>{minutes}</GivesItemTimerNumber>
              <GivesItemTimerText>{minutesNoun}</GivesItemTimerText>
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
            <GivesItemButtonMore to={`/giveaways/${item.giveaway_id}`}>Подробнее</GivesItemButtonMore>
            <GivesItemButtonConnect to={`/giveaways/${item.giveaway_id}`} onClick={delayedConnectButton}>Подключиться</GivesItemButtonConnect>
          </GivesItemButtons>
        </GivesItemContent>
      </GivesItemBlock>
    );
  } else {
    return (
      <GivesItemBlock>
        <GivesItemBackground alt="background" src={`${item.image}`} />
        <GivesItemUsername>{item.owner}</GivesItemUsername>
        <GivesItemContent>
          <GivesItemId>{item.giveaway_name}</GivesItemId>
          <GivesItemSumm>
            <GivesItemSummTitle>$$$$$$</GivesItemSummTitle>
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
              <GivesItemTimerNumber>{minutes}</GivesItemTimerNumber>
              <GivesItemTimerText>{minutesNoun}</GivesItemTimerText>
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
            <GivesItemButtonMore to={`/giveaways/${item.giveaway_id}`}>Подробнее</GivesItemButtonMore>
            <GivesItemButtonConnect to={`/giveaways/${item.giveaway_id}`} onClick={delayedConnectButton}>Подключиться</GivesItemButtonConnect>
          </GivesItemButtons>
        </GivesItemContent>
      </GivesItemBlock>
    );
  }
};

export default GivesItem;
