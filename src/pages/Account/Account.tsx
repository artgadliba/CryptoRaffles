import React, { useState, useEffect } from "react";
import Default from "../../layouts/Default/Default";
import AccountSlider from "./components/AccountSlider/AccountSlider";
import {
  AccountBlock,
  AccountItem,
  AccountItemList,
  AccountItems,
  AccountItemTitle,
  AccountTitle,
  AccountTitleTokens
} from "./AccountStyles";
import {
  AccountNonConnectBlock,
  AccountNonConnectButton,
  AccountNonConnectButtonImage,
  AccountNonConnectImage,
  AccountNonConnectText,
  AccountNonConnectTitle,
  AccountNonConnectWhat,
  AccountNonConnectWhatArrow,
  AccountNonConnectWhatText

} from "./AccountNonConnectStyles";
import AccountListItem from "./components/AccountListItem/AccountListItem";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { getTokensMetadata } from "../../utils/getTokensMetadata";
import axios from "axios";
import { Network, Alchemy } from "alchemy-sdk";

interface IAccountToken {
  tokenId: number;
  image: string;
}

interface IAccountGame {
  raffle_name?: string;
  raffle_id?: string;
  giveaway_name?: string;
  giveaway_id?: string;
  owner: string;
  grand_prize: number;
  end_timestamp: number;
  status: number;
}

const accountActiveGames: Array<IAccountGame> = [];
const accountDoneGames: Array<IAccountGame> = [];

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_SEPOLIA_KEY, // Replace with your Alchemy API Key.
  network: Network.ETH_SEPOLIA, // Replace with your network.
};

const alchemy = new Alchemy(settings);

function Account() {
  const { address, isConnected } = useAccount();
  const [tokens, setTokens] = useState<Array<IAccountToken>>();
  const [balance, setBalance] = useState<number>();

  const [activeItems, setActiveItems] = useState([]);
  const [doneItems, setDoneItems] = useState([]);

  function handleConnectButtonClick() {
    const element = document.getElementsByClassName(
      "iekbcc0 iekbcc9 ju367v71 ju367v7m ju367v9c ju367vn ju367vec ju367vex ju367v11 ju367v1a ju367v27 ju367v8o _12cbo8i3 ju367v8m _12cbo8i4 _12cbo8i6");
    const connectButtonRef: HTMLElement = element[0] as HTMLElement;
    connectButtonRef.click();
  };

  useEffect(() => {
    let games = [];
    axios.get(`http://localhost:8000/api/games/${address}`)
    .then(res => {
      let data_array = res.data;
      let games = [];
      for (let i = 0; i < data_array.length; i++) {
        if (data_array[i].raffle_id) {
          let raffleAddress = data_array[i].raffle_id;
          games.push(raffleAddress);
          axios.get(`http://localhost:8000/api/raffles/${raffleAddress}`)
          .then(res => {
            let data = res.data[0];
            let raffleName = data.raffle_name;
            let raffleId = data.raffle_id;
            let raffleOwner = data.owner;
            let raffleGrandPrize = data.grand_prize;
            let raffleEndTimestamp = data.end_timestamp;
            let raffleStatus = data.status;

            let raffleData: IAccountGame = {
              raffle_name: raffleName,
              raffle_id: raffleId,
              owner: raffleOwner,
              grand_prize: raffleGrandPrize,
              end_timestamp: raffleEndTimestamp,
              status: raffleStatus
            }
            if (raffleStatus == 0) {
              accountActiveGames.push(raffleData);
            } else {
              accountDoneGames.push(raffleData);
            }
          })
          .catch(err => {
            console.log(err);
          })
        } else if (data_array[i].giveaway_id) {
          let giveAddress = data_array[i].giveaway_id;
          games.push(giveAddress);
          axios.get(`http://localhost:8000/api/raffles/${giveAddress}`)
          .then(res => {
            let data = res.data[0];
            let giveName = data.giveaway_name;
            let giveId = data.giveaway_id;
            let giveOwner = data.owner;
            let giveGrandPrize = data.grand_prize;
            let giveEndTimestamp = data.end_timestamp;
            let giveStatus = data.status;

            let giveData: IAccountGame = {
              giveaway_name: giveName,
              giveaway_id: giveId,
              owner: giveOwner,
              grand_prize: giveGrandPrize,
              end_timestamp: giveEndTimestamp,
              status: giveStatus
            }
            if (giveStatus == 0) {
              accountActiveGames.push(giveData);
            } else {
              accountDoneGames.push(giveData);
            }
          })
          .catch(err => {
            console.log(err);
          })
        }
      }
      if (games.length == data_array.length) {
        const accountTokens: Array<IAccountToken> = [];

        alchemy.nft.getNftsForOwner(address, {
          contractAddresses: games,
        })
        .then(res => {
          let nfts = res.ownedNfts;
          for (let n = 0; n < nfts.length; n++) {
            let tokenId = Number(nfts[n].tokenId);
            let media_array = nfts[n].media;
            let media = media_array[0];
            let imageUrl = media["gateway"];

            let nftData: IAccountToken = {
              tokenId:tokenId,
              image: imageUrl
            }
            accountTokens.push(nftData);
            setTokens(accountTokens);
            setBalance(nfts.length);
            console.log(nfts.length)
          }
        })
        .catch(err => {
          console.log(err);
        })
      }
    })
  }, [address]);

  if (isConnected) {
    return (
      <Default>
        <AccountBlock>
          <AccountTitle>
            Баланс аккаунта:
            {balance != undefined ? (
              <AccountTitleTokens>
                {balance} <span>токенов</span>
              </AccountTitleTokens>
            ) : (
              <AccountTitleTokens>
                {0} <span>токенов</span>
              </AccountTitleTokens>
            )}
          </AccountTitle>
          <AccountSlider
            items={tokens}
          />
          <AccountItems>
            <AccountItem>
              <AccountItemTitle>Активные раффлы / гивы:</AccountItemTitle>
              <AccountItemList>
              {activeItems.length > 0 ? (
                <>
                {activeItems.map((item, idx) => {
                  return <AccountListItem item={item} key={idx} />;
                })}
                </>
              ) : (
                <>
                {[...new Array(1)].map((_, idx) => (
                <AccountListItem isFake={true} key={idx} />
                ))}
                </>
              )}
              </AccountItemList>
            </AccountItem>
            <AccountItem>
              <AccountItemTitle>Завершенные раффлы / гивы:</AccountItemTitle>
              <AccountItemList>
              {doneItems.length > 0 ? (
                <>
                {doneItems.map((item, idx) => {
                  return <AccountListItem item={item} key={idx} />;
                })}
                </>
              ) : (
                <>
                {[...new Array(1)].map((_, idx) => (
                <AccountListItem isFake={true} key={idx} />
                ))}
                </>
              )}
              </AccountItemList>
            </AccountItem>
          </AccountItems>
        </AccountBlock>
      </Default>
    );
  }
  return (
    <Default isHeaderActive>
      <AccountNonConnectBlock>
        <AccountNonConnectTitle>Участвуйте в самых прозрачных розыгрышах</AccountNonConnectTitle>
        <AccountNonConnectText>С нами вы можете быть уверены, что каждый приз найдет своего законного получателя</AccountNonConnectText>
        <AccountNonConnectImage alt="nonaccount-image" src="/images/nonaccount-background.svg" />
        <AccountNonConnectButton onClick={handleConnectButtonClick}>
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
