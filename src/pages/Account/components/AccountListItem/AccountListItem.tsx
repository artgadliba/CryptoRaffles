import React, { FC } from "react";
import useTimer from "../../../../hooks/useTimer";
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
} from "./AccountListItemStyles";

interface IAccountListItem {
  item: {
    id: string;
    wallet: string;
    price: string;
    timerDate: string | number;
    isActive: boolean;
  };
}

const AccountListItem: FC<IAccountListItem> = ({ item }) => {
  const { seconds, days, hours, minuts, secondsNoun, daysNoun, hoursNoun, minutsNoun } = useTimer(item.timerDate ?? Date.now());

  return (
    <AccountListItemBlock>
      <AccountListItemBackground alt="background" src="/images/account-first-item-background.png" />
      <AccountListItemUsername>{item.wallet}</AccountListItemUsername>
      <AccountListItemContent>
        <AccountListItemId>{item.id}</AccountListItemId>
        <AccountListItemSumm>
          <AccountListItemSummTitle>{item.price}</AccountListItemSummTitle>
          <AccountListItemSummText>Сумма розыгрыша</AccountListItemSummText>
        </AccountListItemSumm>
        <AccountListItemTimer>
          <AccountListItemTimerColumn>
            <AccountListItemTimerNumber>{days}</AccountListItemTimerNumber>
            <AccountListItemTimerText>{daysNoun}</AccountListItemTimerText>
          </AccountListItemTimerColumn>
          <AccountListItemTimerSplitter marginLeft={25} marginRight={19}>
            :
          </AccountListItemTimerSplitter>
          <AccountListItemTimerColumn>
            <AccountListItemTimerNumber>{hours}</AccountListItemTimerNumber>
            <AccountListItemTimerText>{hoursNoun}</AccountListItemTimerText>
          </AccountListItemTimerColumn>
          <AccountListItemTimerSplitter marginLeft={18} marginRight={22}>
            :
          </AccountListItemTimerSplitter>
          <AccountListItemTimerColumn>
            <AccountListItemTimerNumber>{minuts}</AccountListItemTimerNumber>
            <AccountListItemTimerText>{minutsNoun}</AccountListItemTimerText>
          </AccountListItemTimerColumn>
          <AccountListItemTimerSplitter marginLeft={22} marginRight={15}>
            :
          </AccountListItemTimerSplitter>
          <AccountListItemTimerColumn>
            <AccountListItemTimerNumber>{seconds}</AccountListItemTimerNumber>
            <AccountListItemTimerText>{secondsNoun}</AccountListItemTimerText>
          </AccountListItemTimerColumn>
        </AccountListItemTimer>
        {item.isActive ? (
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
              Разыграна
            </AccountListItemStatusIndicator>
          </AccountListItemStatus>
        )}
      </AccountListItemContent>
    </AccountListItemBlock>
  );
};

export default AccountListItem;
