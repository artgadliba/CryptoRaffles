import React, { useState } from "react";
import Default from "../../layouts/Default/Default";
import AccountSlider from "./components/AccountSlider/AccountSlider";
import { AccountBlock, AccountItem, AccountItemList, AccountItems, AccountItemTitle, AccountTitle, AccountTitleTokens } from "./AccountStyles";
import AccountListItem from "./components/AccountListItem/AccountListItem";

function Account() {
  const [activeItems, setActiveItems] = useState([
    {
      id: "Raffle # 54c1ae03",
      wallet: "@ Nike",
      price: "$9,445",
      timerDate: Date.now(),
      isActive: true,
    },
    {
      id: "Raffle # 54c1ae03",
      wallet: "@ Nike",
      price: "$9,445",
      timerDate: Date.now(),
      isActive: true,
    },
  ]);

  const [doneItems, setDoneItems] = useState([
    {
      id: "Raffle # 54c1ae03",
      wallet: "@ Nike",
      price: "$9,445",
      timerDate: Date.now(),
      isActive: false,
    },
  ]);

  return (
    <Default isHeaderActive>
      <AccountBlock>
        <AccountTitle>
          Баланс аккаунта:
          <AccountTitleTokens>
            34 <span>токена</span>
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
}

export default Account;
