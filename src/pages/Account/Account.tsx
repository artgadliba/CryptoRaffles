import React, { useState, useEffect } from "react";
import Default from "../../layouts/Default/Default";
import AccountSlider from "./components/AccountSlider/AccountSlider";
import { AccountBlock, AccountItem, AccountItemList, AccountItems, AccountItemTitle, AccountTitle, AccountTitleTokens } from "./AccountStyles";
import { AccountNonConnectBlock, AccountNonConnectButton, AccountNonConnectButtonImage, AccountNonConnectImage, AccountNonConnectText, AccountNonConnectTitle, AccountNonConnectWhat, AccountNonConnectWhatArrow, AccountNonConnectWhatText } from "./AccountNonConnectStyles";
import AccountListItem from "./components/AccountListItem/AccountListItem";
import { useAccount, useConnect, useDisconnect } from 'wagmi'

function Account() {

  const { address, isConnected } = useAccount();

  const [activeItems, setActiveItems] = useState([
    {
      id: "Raffle # 7fh12ba",
      wallet: "@ Baxter",
      price: "$100,087",
      timerDate: Date.now(),
      isActive: true,
    }
  ]);

  const [doneItems, setDoneItems] = useState([
    {
      id: "Raffle # 3da71c5",
      wallet: "@ Jango",
      price: "$49,615",
      timerDate: Date.now(),
      isActive: false,
    }
  ]);

  if(isConnected)
    return (
      <Default>
        <AccountBlock>
          <AccountTitle>
            Баланс аккаунта:
            <AccountTitleTokens>
              5 <span>токенов</span>
            </AccountTitleTokens>
          </AccountTitle>
          <AccountSlider
            items={[
              { image: "/images/account-image-first.webp" },
              { image: "/images/account-image-second.webp" },
              { image: "/images/account-image-first.webp" },
              { image: "/images/account-image-second.webp" },
              { image: "/images/account-image-first.webp" },
              { image: "/images/account-image-second.webp" },
              { image: "/images/account-image-first.webp" },
              { image: "/images/account-image-second.webp" },
              { image: "/images/account-image-first.webp" },
              { image: "/images/account-image-second.webp" },
              { image: "/images/account-image-first.webp" },
              { image: "/images/account-image-second.webp" },
              { image: "/images/account-image-first.webp" },
              { image: "/images/account-image-second.webp" },
              { image: "/images/account-image-first.webp" },
              { image: "/images/account-image-second.webp" },
            ]}
          />
          <AccountItems>
            <AccountItem>
              <AccountItemTitle>Активные раффлы / гивы:</AccountItemTitle>
              <AccountItemList>
                {activeItems.map((item, idx) => {
                  return <AccountListItem item={item} key={idx} />;
                })}
              </AccountItemList>
            </AccountItem>
            <AccountItem>
              <AccountItemTitle>Завершенные раффлы / гивы:</AccountItemTitle>
              <AccountItemList>
                {doneItems.map((item, idx) => {
                  return <AccountListItem item={item} key={idx} />;
                })}
              </AccountItemList>
            </AccountItem>
          </AccountItems>
        </AccountBlock>
      </Default>
    );
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

export default Account;
