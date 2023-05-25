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
  CollectionsFakeItemButtonsWrapper,
  CollectionsFakeItemFakeButton
} from "./CollectionsItemStyles";
import axios from "axios";
import { ethers } from "ethers";
import { getETHPrice } from "../../../utils/getETHPrice";
import { numberWithCommas } from "../../../utils/numberWithCommas";
import {
  useConnectModal,
  useAccountModal,
  useChainModal,
} from "@rainbow-me/rainbowkit";

interface ICollectionsItem {
  item?: {
    raffle_id: string;
    end_timestamp: number;
    image: string;
    paytoken: string;
    grand_prize: number;
    owner: string;
    raffle_name: string;
  };
  isFake?: boolean;
}

const CollectionsItem: FC<ICollectionsItem> = ({ item, isFake }) => {
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();
  const { openChainModal } = useChainModal();

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

  function delayedConnectWallet() {
    setTimeout(openConnectModal, 1500);
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
  }, []);

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
            <CollectionsFakeItemButtonsWrapper>
              <CollectionsFakeItemFakeButton />
              <CollectionsFakeItemFakeButton />
              <CollectionsFakeItemFakeButton />
              <CollectionsFakeItemFakeButton />
            </CollectionsFakeItemButtonsWrapper>
          <CollectionsFakeItemButtons>
            <CollectionsFakeItemButtonMore />
            <CollectionsFakeItemButtonConnect />
          </CollectionsFakeItemButtons>
        </CollectionsFakeItemContent>
      </CollectionsFakeItemBlock>
    );
  }
  if (ethRate != undefined  && item.grand_prize != undefined) {
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
            <CollectionsItemSummTitle>$$$</CollectionsItemSummTitle>
          )}
            <CollectionsItemSummText>Сумма розыгрыша</CollectionsItemSummText>
          </CollectionsItemSumm>
          <CollectionsItemTimer>
            <CollectionsItemTimerColumn>
              <CollectionsItemTimerNumber>{days}</CollectionsItemTimerNumber>
              <CollectionsItemTimerText>{daysNoun}</CollectionsItemTimerText>
            </CollectionsItemTimerColumn>
            <CollectionsItemTimerSplitter marginLeft={25} marginRight={18}>
              :
            </CollectionsItemTimerSplitter>
            <CollectionsItemTimerColumn>
              <CollectionsItemTimerNumber>{hours}</CollectionsItemTimerNumber>
              <CollectionsItemTimerText>{hoursNoun}</CollectionsItemTimerText>
            </CollectionsItemTimerColumn>
            <CollectionsItemTimerSplitter marginLeft={18} marginRight={20}>
              :
            </CollectionsItemTimerSplitter>
            <CollectionsItemTimerColumn>
              <CollectionsItemTimerNumber>{minutes}</CollectionsItemTimerNumber>
              <CollectionsItemTimerText>{minutesNoun}</CollectionsItemTimerText>
            </CollectionsItemTimerColumn>
            <CollectionsItemTimerSplitter marginLeft={20} marginRight={12}>
              :
            </CollectionsItemTimerSplitter>
            <CollectionsItemTimerColumn>
              <CollectionsItemTimerNumber>{seconds}</CollectionsItemTimerNumber>
              <CollectionsItemTimerText>{secondsNoun}</CollectionsItemTimerText>
            </CollectionsItemTimerColumn>
          </CollectionsItemTimer>
          <CollectionsItemButtons>
            <CollectionsItemButtonMore to={`/raffles/${item.raffle_id}`}>Подробнее</CollectionsItemButtonMore>
            <CollectionsItemButtonConnect to={`/raffles/${item.raffle_id}`} onClick={delayedConnectWallet}>Подключиться</CollectionsItemButtonConnect>
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
            <CollectionsItemSummTitle>$$$</CollectionsItemSummTitle>
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
            <CollectionsItemButtonConnect to={`/raffles/${item.raffle_id}`} onClick={delayedConnectWallet}>Подключиться</CollectionsItemButtonConnect>
          </CollectionsItemButtons>
        </CollectionsItemContent>
      </CollectionsItemBlock>
    );
  }
}

export default CollectionsItem;
