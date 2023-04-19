import React, { FC } from "react";
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
  isFake?: boolean;
  item: {
    raffleID?: string;
    giveawayID?: string;
    end_timestamp: number;
    grand_prize: string; //change to number
    paytoken: string;
    owner: string;
    promo_name: string;
    status: boolean;
  };
}

const AccountListItem: FC<IAccountListItem> = ({ item, isFake }) => {
  var { seconds, minutes, hours, days, secondsNoun, minutesNoun, hoursNoun, daysNoun } = useCountdown(item?.end_timestamp ?? Date.now());

  if (isFake || !item) {
    return (
      <AccountListFakeItemBlock>
        <AccountListFakeItemBackground alt="background" src="/images/give-loading-background.png" />
        <AccountListFakeItemUsername>
          <div />
        </AccountListFakeItemUsername>
        <AccountListFakeItemClock alt="clock" src="/images/clock.svg" />
        <AccountListFakeItemContent>
          <AccountListFakeItemId />
          <AccountListFakeItemSumm>
            <AccountListFakeItemSummTitle />
            <AccountListFakeItemSummText />
          </AccountListFakeItemSumm>
          <AccountListFakeItemTimer />
          <AccountListFakeItemStatus>
            <AccountListFakeItemStatusText />
            <AccountListFakeItemStatusButton />
          </AccountListFakeItemStatus>
        </AccountListFakeItemContent>
      </AccountListFakeItemBlock>
    );
  }

  return (
    <AccountListItemBlock>
      <AccountListItemBackground alt="background" src="/images/account-first-item-background.png" />
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
            <AccountListItemTimerNumber>{minutes}</AccountListItemTimerNumber>
            <AccountListItemTimerText>{minutesNoun}</AccountListItemTimerText>
          </AccountListItemTimerColumn>
          <AccountListItemTimerSplitter marginLeft={22} marginRight={15}>
            :
          </AccountListItemTimerSplitter>
          <AccountListItemTimerColumn>
            <AccountListItemTimerNumber>{seconds}</AccountListItemTimerNumber>
            <AccountListItemTimerText>{secondsNoun}</AccountListItemTimerText>
          </AccountListItemTimerColumn>
        </AccountListItemTimer>
        {item.status ? (
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
