import React, { useState, useEffect, useMemo } from "react";
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
import AccountFakeListItem from "./components/AccountListItem/AccountFakeListItem";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { getTokensMetadata } from "../../utils/getTokensMetadata";
import axios from "axios";
import { Network, Alchemy } from "alchemy-sdk";
import { ethers } from "ethers";
import { getETHPrice } from "../../utils/getETHPrice";
import { numberWithCommas } from "../../utils/numberWithCommas";
import {
  useConnectModal,
  useAccountModal,
  useChainModal,
} from "@rainbow-me/rainbowkit";

interface IAccountToken {
  tokenId: number;
  image: string;
}

interface IAccountGame {
  promo_name?: string;
  raffle_id?: string;
  giveaway_id?: string;
  image: string;
  owner: string;
  grand_prize: string;
  end_timestamp: number;
  status: number;
}

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_SEPOLIA_KEY,
  network: Network.ETH_SEPOLIA,
};

const alchemy = new Alchemy(settings);

function Account() {
  const { address, isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();
  const { openChainModal } = useChainModal();

  const [tokens, setTokens] = useState<Array<IAccountToken>>();
  const [balance, setBalance] = useState<number>();

  const [activeItems, setActiveItems] = useState([]);
  const [doneItems, setDoneItems] = useState([]);

  function getNoun(number: number, one: string, two: string, plural: string) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
      return plural;
    }
    n %= 10;
    if (n === 1) {
      return one;
    }
    if (n >= 2 && n <= 4) {
      return two;
    }
    return plural;
  }

  const formattedBalance = useMemo(() => {
    const balanceNoun = getNoun(balance, "токен", "токена", "токенов");
    return balanceNoun;
  }, [balance]);

  useEffect(() => {
    if (address != undefined) {
      let games: Array<string> = [];
      let accountActiveGames: Array<IAccountGame> = [];
      let accountDoneGames: Array<IAccountGame> = [];

      axios.get(`http://localhost:8000/api/games/${address}`)
      .then(res => {
        let data_array = res.data;
        let games = [];
        for (let i = 0; i < data_array.length; i++) {
          if (data_array[i].raffle_id != undefined) {
            let raffleAddress = data_array[i].raffle_id;
            games.push(raffleAddress);
            axios.get(`http://localhost:8000/api/raffles/${raffleAddress}`)
            .then(res => {
              let data = res.data[0];
              let grandPrize = 0;
              if (data.paytoken == "0x0000000000000000000000000000000000000000" && data.grand_prize != undefined) {
                getETHPrice()
                .then(ethRate => {
                  let formatedGrandPrize = ethers.utils.formatEther(String(data.grand_prize));
                  grandPrize = Math.round(Number(formatedGrandPrize) * ethRate);
                })
                .catch(err => {
                  console.log(err);
                })
              } else {
                grandPrize = Math.round(data.grand_prize / 10 ** 6);
              }
              let raffleData: IAccountGame = {
                promo_name: data.raffle_name,
                raffle_id: data.raffle_id,
                image: data.image,
                owner: data.owner,
                grand_prize: "$" + numberWithCommas(grandPrize),
                end_timestamp: data.end_timestamp,
                status: data.status
              }
              if (data.status == 0) {
                accountActiveGames.push(raffleData);
              } else {
                accountDoneGames.push(raffleData);
              }
            })
            .catch(err => {
              console.log(err);
            })
          } else if (data_array[i].giveaway_id != undefined) {
            let giveAddress = data_array[i].giveaway_id;
            games.push(giveAddress);
            axios.get(`http://localhost:8000/api/giveaways/${giveAddress}`)
            .then(res => {
              let data = res.data[0];
              let grandPrize = 0;
              if (data.paytoken == "0x0000000000000000000000000000000000000000" && data.grand_prize != undefined) {
                getETHPrice()
                .then(ethRate => {
                  let formatedGrandPrize = ethers.utils.formatEther(data.grand_prize);
                  grandPrize = Math.round(Number(formatedGrandPrize) * ethRate);
                })
                .catch(err => {
                  console.log(err);
                })
              } else {
                grandPrize = Math.round(data.grand_prize / 10 ** 6);
              }
              let giveData: IAccountGame = {
                promo_name: data.giveaway_name,
                giveaway_id: data.giveaway_id,
                image: data.image,
                owner: data.owner,
                grand_prize: "$" + numberWithCommas(grandPrize),
                end_timestamp: data.end_timestamp,
                status: data.status
              }
              if (data.status == 0) {
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
                tokenId: tokenId,
                image: imageUrl
              }
              accountTokens.push(nftData);
              setTokens(accountTokens);
              setBalance(nfts.length);
            }
          })
          .catch(err => {
            console.log(err);
          })
          setActiveItems(accountActiveGames);
          setDoneItems(accountDoneGames);
        }
      })
    }
  }, [address]);

  if (isConnected) {
    return (
      <Default>
        <AccountBlock>
          <AccountTitle>
            Баланс аккаунта:
            {balance != undefined ? (
              <AccountTitleTokens>
                {balance} <span>{formattedBalance}</span>
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
                <AccountFakeListItem key={idx} />
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
                <AccountFakeListItem key={idx} />
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
        <AccountNonConnectButton onClick={openConnectModal}>
          Подключить кошелек <AccountNonConnectButtonImage alt="nonaccount-button-image" src="/images/wallet-non-connect.svg" />
        </AccountNonConnectButton>
        <AccountNonConnectWhat target={"_blank"} to="https://ethereum.org/ru/wallets/">
          <AccountNonConnectWhatText>Что такое Ethereum-кошелек?</AccountNonConnectWhatText>
          <AccountNonConnectWhatArrow alt="arrow" src="/images/nonaccount-arrow.svg" />
        </AccountNonConnectWhat>
      </AccountNonConnectBlock>
    </Default>
  );
}

export default Account;
