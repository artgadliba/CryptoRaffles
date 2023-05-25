import React, { FC } from "react";
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
  AccountListFakeItemButtonsWrapper,
  AccountListFakeItemFakeButton
} from "./AccountListItemStyles";

const AccountFakeListItem: FC = () => {
  return (
    <AccountListFakeItemBlock to="#">
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
          <AccountListFakeItemButtonsWrapper>
            <AccountListFakeItemFakeButton />
            <AccountListFakeItemFakeButton />
            <AccountListFakeItemFakeButton />
            <AccountListFakeItemFakeButton />
          </AccountListFakeItemButtonsWrapper>
        <AccountListFakeItemTimer />
        <AccountListFakeItemStatus>
          <AccountListFakeItemStatusText />
          <AccountListFakeItemStatusButton />
        </AccountListFakeItemStatus>
      </AccountListFakeItemContent>
    </AccountListFakeItemBlock>
  );
}

export default AccountFakeListItem;
