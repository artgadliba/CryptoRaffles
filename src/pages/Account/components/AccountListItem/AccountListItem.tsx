import React, { FC, useEffect, useState } from "react";
import { useCountdown } from "../../../../hooks/useCountdown";
import {
  AccountListItemBlock,
  AccountListItemBackground,
  AccountListItemUsername,
  AccountListItemContent,
  AccountListItemId,
  AccountListItemSumm,
  AccountListItemSummText,
  AccountListItemSummTitle,
  AccountListItemTimer,
  AccountListItemTimerColumn,
  AccountListItemTimerSplitter,
  AccountListItemTimerText,
  AccountListItemTimerNumber,
  AccountListItemStatus,
  AccountListItemStatusText,
  AccountListItemStatusIndicator,
  AccountListFakeItemBlock,
  AccountListFakeItemBackground,
  AccountListFakeItemId,
  AccountListFakeItemClock,
  AccountListFakeItemContent,
  AccountListFakeItemSumm,
  AccountListFakeItemSummText,
  AccountListFakeItemSummTitle,
  AccountListFakeItemUsername,
  AccountListFakeItemTimer,
  AccountListFakeItemStatus,
  AccountListFakeItemStatusText,
  AccountListFakeItemStatusButton,
} from "./AccountListItemStyles";

interface IAccountListItem {
  isFake?: boolean
  item: {
    raffle_id?: string;
    giveaway_id?: string;
    image: string;
    end_timestamp: number;
    grand_prize: string;
    paytoken: string;
    owner: string;
    promo_name: string;
    status: number;
  };
}

const AccountListItem: FC<IAccountListItem> = ({ item, isFake }) => {
  const [game, setGame] = useState<string>();
  var {
    seconds,
    minutes,
    hours,
    days,
    secondsNoun,
    minutesNoun,
    hoursNoun,
    daysNoun
  } = useCountdown(item.end_timestamp ?? Date.now());

  useEffect(() => {
    if (item.raffle_id != undefined) {
      setGame(`/raffles/${item.raffle_id}`);
    } else if (item.giveaway_id != undefined) {
      setGame(`/giveaways/${item.giveaway_id}`);
    }
  }, [item]);

  if (game != undefined) {
    return (
      <AccountListItemBlock to={game}>
        <AccountListItemBackground alt="background" src={item.image} />
        <AccountListItemUsername>{item.owner}</AccountListItemUsername>
        <AccountListItemContent>
          <AccountListItemId>{item.promo_name}</AccountListItemId>
          <AccountListItemSumm>
            <AccountListItemSummTitle>{item.grand_prize}</AccountListItemSummTitle>
            <AccountListItemSummText>Сумма розыгрыша</AccountListItemSummText>
          </AccountListItemSumm>
          <AccountListItemTimer>
            <AccountListItemTimerColumn>
              <AccountListItemTimerNumber>{days}</AccountListItemTimerNumber>
              <AccountListItemTimerText>{daysNoun}</AccountListItemTimerText>
            </AccountListItemTimerColumn>
            <AccountListItemTimerSplitter marginLeft={25} marginRight={18}>
              :
            </AccountListItemTimerSplitter>
            <AccountListItemTimerColumn>
              <AccountListItemTimerNumber>{hours}</AccountListItemTimerNumber>
              <AccountListItemTimerText>{hoursNoun}</AccountListItemTimerText>
            </AccountListItemTimerColumn>
            <AccountListItemTimerSplitter marginLeft={18} marginRight={20}>
              :
            </AccountListItemTimerSplitter>
            <AccountListItemTimerColumn>
              <AccountListItemTimerNumber>{minutes}</AccountListItemTimerNumber>
              <AccountListItemTimerText>{minutesNoun}</AccountListItemTimerText>
            </AccountListItemTimerColumn>
            <AccountListItemTimerSplitter marginLeft={20} marginRight={12}>
              :
            </AccountListItemTimerSplitter>
            <AccountListItemTimerColumn>
              <AccountListItemTimerNumber>{seconds}</AccountListItemTimerNumber>
              <AccountListItemTimerText>{secondsNoun}</AccountListItemTimerText>
            </AccountListItemTimerColumn>
          </AccountListItemTimer>
          {item.status < 1 ? (
            <AccountListItemStatus>
              <AccountListItemStatusText>Статус:</AccountListItemStatusText>
              <AccountListItemStatusIndicator backgroundColor="#874dec" textColor="#ffffff">
                Открыт
              </AccountListItemStatusIndicator>
            </AccountListItemStatus>
          ) : (
            <AccountListItemStatus>
              <AccountListItemStatusText>Статус:</AccountListItemStatusText>
              <AccountListItemStatusIndicator backgroundColor="#BDBDBD" textColor="#4F4F4F">
                Разыгран
              </AccountListItemStatusIndicator>
            </AccountListItemStatus>
          )}
        </AccountListItemContent>
      </AccountListItemBlock>
    );
  }
}

export default AccountListItem;
