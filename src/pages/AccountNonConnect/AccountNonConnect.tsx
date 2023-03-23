import React, { useState } from "react";
import Default from "../../layouts/Default/Default";
import { AccountNonConnectBlock, AccountNonConnectButton, AccountNonConnectButtonImage, AccountNonConnectImage, AccountNonConnectText, AccountNonConnectTitle, AccountNonConnectWhat, AccountNonConnectWhatArrow, AccountNonConnectWhatText } from "./AccountNonConnectStyles";

function AccountNotConnect() {
  return (
    <Default isHeaderActive>
      <AccountNonConnectBlock>
        <AccountNonConnectTitle>Участвуйте в самых прозрачных розыгрышах</AccountNonConnectTitle>
        <AccountNonConnectText>С нами вы можете быть уверены, что каждый приз найдет своего законного получателя</AccountNonConnectText>
        <AccountNonConnectImage alt="nonaccount-image" src="/images/nonaccount-background.svg" />
        <AccountNonConnectButton>
          Подключить кошелек <AccountNonConnectButtonImage alt="nonaccount-button-image" src="/images/wallet-non-connect.svg" />
        </AccountNonConnectButton>
        <AccountNonConnectWhat>
          <AccountNonConnectWhatText>Что такое Ethereum-кошелек?</AccountNonConnectWhatText>
          <AccountNonConnectWhatArrow alt="arrow" src="/images/nonaccount-arrow.svg" />
        </AccountNonConnectWhat>
      </AccountNonConnectBlock>
    </Default>
  );
}

export default AccountNotConnect;
