import React, { FC, useState, useEffect } from "react";
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
  GiveFakeItemButtonsWrapper,
  GivesFakeItemFakeButton,
} from "./GivesItemStyles";
import axios from "axios";
import { getETHPrice } from "../../../utils/getETHPrice";
import { numberWithCommas } from "../../../utils/numberWithCommas";
import { ethers } from "ethers";
import {
  useConnectModal,
  useAccountModal,
  useChainModal,
} from "@rainbow-me/rainbowkit";

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
    owner: string;
    giveaway_name: string;
  };
  isFake?: boolean;
}

const GivesItem: FC<IGivesItem> = ({ item, isFake }) => {
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
            <GiveFakeItemButtonsWrapper>
              <GivesFakeItemFakeButton />
              <GivesFakeItemFakeButton />
              <GivesFakeItemFakeButton />
              <GivesFakeItemFakeButton />
            </GiveFakeItemButtonsWrapper>
          <GivesFakeItemButtons>
            <GivesFakeItemButtonMore />
            <GivesFakeItemButtonConnect />
          </GivesFakeItemButtons>
        </GivesFakeItemContent>
      </GivesFakeItemBlock>
    );
  }
  if (ethRate != undefined && item.grand_prize != undefined) {
    var grandPrize = item.grand_prize;
    if (item.paytoken == "0x0000000000000000000000000000000000000000") {
      let eth = ethers.utils.formatEther(String(item.grand_prize));
      grandPrize = Math.floor(Number(eth)  * ethRate);
    } else {
      grandPrize = Math.round(item.grand_prize / 10 ** 6);
    }
    return (
      <GivesItemBlock>
        <GivesItemBackground alt="background" src={`${item.image}`} />
        <GivesItemUsername>{item.owner}</GivesItemUsername>
        <GivesItemContent>
          <GivesItemId>{item.giveaway_name}</GivesItemId>
          <GivesItemSumm>
          {grandPrize > 100 ? (
            <GivesItemSummTitle>{`$ ${numberWithCommas(grandPrize)}`}</GivesItemSummTitle>
          ) : (
            <GivesItemSummTitle>$$$</GivesItemSummTitle>
          )}
            <GivesItemSummText>Сумма розыгрыша</GivesItemSummText>
          </GivesItemSumm>
          <GivesItemTimer>
            <GivesItemTimerColumn>
              <GivesItemTimerNumber>{days}</GivesItemTimerNumber>
              <GivesItemTimerText>{daysNoun}</GivesItemTimerText>
            </GivesItemTimerColumn>
            <GivesItemTimerSplitter marginLeft={25} marginRight={18}>
              :
            </GivesItemTimerSplitter>
            <GivesItemTimerColumn>
              <GivesItemTimerNumber>{hours}</GivesItemTimerNumber>
              <GivesItemTimerText>{hoursNoun}</GivesItemTimerText>
            </GivesItemTimerColumn>
            <GivesItemTimerSplitter marginLeft={18} marginRight={20}>
              :
            </GivesItemTimerSplitter>
            <GivesItemTimerColumn>
              <GivesItemTimerNumber>{minutes}</GivesItemTimerNumber>
              <GivesItemTimerText>{minutesNoun}</GivesItemTimerText>
            </GivesItemTimerColumn>
            <GivesItemTimerSplitter marginLeft={20} marginRight={12}>
              :
            </GivesItemTimerSplitter>
            <GivesItemTimerColumn>
              <GivesItemTimerNumber>{seconds}</GivesItemTimerNumber>
              <GivesItemTimerText>{secondsNoun}</GivesItemTimerText>
            </GivesItemTimerColumn>
          </GivesItemTimer>
          <GivesItemButtons>
            <GivesItemButtonMore to={`/giveaways/${item.giveaway_id}`}>Подробнее</GivesItemButtonMore>
            <GivesItemButtonConnect to={`/giveaways/${item.giveaway_id}`} onClick={delayedConnectWallet}>Подключиться</GivesItemButtonConnect>
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
            <GivesItemSummTitle>$$$</GivesItemSummTitle>
            <GivesItemSummText>Сумма розыгрыша</GivesItemSummText>
          </GivesItemSumm>
          <GivesItemTimer>
            <GivesItemTimerColumn>
              <GivesItemTimerNumber>{days}</GivesItemTimerNumber>
              <GivesItemTimerText>{daysNoun}</GivesItemTimerText>
            </GivesItemTimerColumn>
            <GivesItemTimerSplitter marginLeft={25} marginRight={18}>
              :
            </GivesItemTimerSplitter>
            <GivesItemTimerColumn>
              <GivesItemTimerNumber>{hours}</GivesItemTimerNumber>
              <GivesItemTimerText>{hoursNoun}</GivesItemTimerText>
            </GivesItemTimerColumn>
            <GivesItemTimerSplitter marginLeft={18} marginRight={20}>
              :
            </GivesItemTimerSplitter>
            <GivesItemTimerColumn>
              <GivesItemTimerNumber>{minutes}</GivesItemTimerNumber>
              <GivesItemTimerText>{minutesNoun}</GivesItemTimerText>
            </GivesItemTimerColumn>
            <GivesItemTimerSplitter marginLeft={20} marginRight={12}>
              :
            </GivesItemTimerSplitter>
            <GivesItemTimerColumn>
              <GivesItemTimerNumber>{seconds}</GivesItemTimerNumber>
              <GivesItemTimerText>{secondsNoun}</GivesItemTimerText>
            </GivesItemTimerColumn>
          </GivesItemTimer>
          <GivesItemButtons>
            <GivesItemButtonMore to={`/giveaways/${item.giveaway_id}`}>Подробнее</GivesItemButtonMore>
            <GivesItemButtonConnect to={`/giveaways/${item.giveaway_id}`} onClick={delayedConnectWallet}>Подключиться</GivesItemButtonConnect>
          </GivesItemButtons>
        </GivesItemContent>
      </GivesItemBlock>
    );
  }
}

export default GivesItem;
