import React, { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCountdown } from "../../../hooks/useCountdown";
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
import axios from "axios";
import { ethers } from "ethers";
import { getETHPrice } from "../../../utils/getETHPrice";
import { numberWithCommas } from "../../../utils/numberWithCommas";

interface ICollectionsItem {
  item?: {
    raffle_id: string;
    end_timestamp: number;
    image: string;
    paytoken: string;
    entry_fee: number;
    grand_prize: number;
    grand_prize_token?: number;
    grand_prize_winner?: string;
    minor_prize: number;
    minor_prize_tokens?: Array<number>;
    minor_prize_winners?: Array<string>;
    owner: string;
    raffle_name: string;
    status: number;
    game_type: number;
    description: string;
  };
  isFake?: boolean;
}

const CollectionsItem: FC<ICollectionsItem> = ({ item, isFake }) => {
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
  }, [])

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
  if (ethRate != undefined  && item.grand_prize != null) {
    var grandPrize = item.grand_prize;
    if (item.paytoken == "0x0000000000000000000000000000000000000000") {
      let eth = ethers.utils.formatEther(String(item.grand_prize));
      grandPrize = Number(eth)  * Number(ethRate);
    } else {
      grandPrize = Math.round(item.grand_prize / 10 ** 6);
    }
    return (
      <CollectionsItemBlock>
        <CollectionsItemBackground alt="background" src={`${item.image}`} />
        <CollectionsItemUsername>{item.owner}</CollectionsItemUsername>
        <CollectionsItemContent>
          <CollectionsItemId>{item.raffle_name}</CollectionsItemId>
          <CollectionsItemSumm>
          {grandPrize > 5000 ? (
            <CollectionsItemSummTitle>{`$${numberWithCommas(grandPrize)}`}</CollectionsItemSummTitle>
          ) : (
            <CollectionsItemSummTitle>$$$$$$</CollectionsItemSummTitle>
          )}
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
              <CollectionsItemTimerNumber>{minutes}</CollectionsItemTimerNumber>
              <CollectionsItemTimerText>{minutesNoun}</CollectionsItemTimerText>
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
            <CollectionsItemButtonMore to={`/raffles/${item.raffle_id}`}>Подробнее</CollectionsItemButtonMore>
            <CollectionsItemButtonConnect to={`/raffles/${item.raffle_id}`} onClick={delayedConnectButton}>Подключиться</CollectionsItemButtonConnect>
          </CollectionsItemButtons>
        </CollectionsItemContent>
      </CollectionsItemBlock>
    );
  } else {
    return (
      <CollectionsItemBlock>
        <CollectionsItemBackground alt="background" src={`${item.image}`} />
        <CollectionsItemUsername>{item.owner}</CollectionsItemUsername>
        <CollectionsItemContent>
          <CollectionsItemId>{item.raffle_name}</CollectionsItemId>
          <CollectionsItemSumm>
            <CollectionsItemSummTitle>$$$$$$</CollectionsItemSummTitle>
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
              <CollectionsItemTimerNumber>{minutes}</CollectionsItemTimerNumber>
              <CollectionsItemTimerText>{minutesNoun}</CollectionsItemTimerText>
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
            <CollectionsItemButtonMore to={`/raffles/${item.raffle_id}`}>Подробнее</CollectionsItemButtonMore>
            <CollectionsItemButtonConnect to={`/raffles/${item.raffle_id}`} onClick={delayedConnectButton}>Подключиться</CollectionsItemButtonConnect>
          </CollectionsItemButtons>
        </CollectionsItemContent>
      </CollectionsItemBlock>
    );
  }
};

export default CollectionsItem;
