import React, { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  CollectionDoneWinnersHeader,
  CollectionDoneWinnersHeaderItem,
  CollectionDoneWinnersRow,
  CollectionDoneWinnersRowItem,
  CollectionDoneWinnersRowItemHash,
  CollectionDoneWinnersRowItemImage,
  CollectionDoneWinnersRowItemText,
  CollectionDoneWinnersFakeRowMedal,
  CollectionDoneWinnersFakeRowPrize,
  CollectionDoneWinnersFakeRowTokens,
  CollectionDoneWinnersFakeRowWinner,
  CollectionDoneWinnersFakeRow,
  CollectionDoneButton,
  CollectionDoneButtonInactive,
  CollectionDoneWinnersBlock,
} from "./CollectionWinnersStyles";
import truncateEthAddress from "truncate-eth-address";
import { raffleAbi } from "../../../../utils/getAccountBalance";
import { useAccount } from "wagmi";
import { prepareWriteContract, writeContract } from "@wagmi/core";
import { useAddRecentTransaction } from '@rainbow-me/rainbowkit';
import axios from "axios";
import { readContract } from "@wagmi/core";

interface ICollectionWinners {
  items: {
    isGrand: boolean;
    wallet: string;
    tokens?: string;
    prize: string;
  }[];
}

interface IWinner {
  isGrand: boolean;
  wallet: string;
  tokenId: number;
}

const CollectionWinners: FC<ICollectionWinners> = ({ items }) => {
  const { id } = useParams();
  const { address, isConnecting, isDisconnected } = useAccount();

  const [winner, setWinner] = useState<Array<IWinner>>();
  const [owner, setOwner] = useState<string>();
  const [seed, setSeed] = useState(1);
  const [withdrawDisabled, setWithdrawDisabled] = useState<boolean>(false);
  const addRecentTransaction = useAddRecentTransaction();

  const playerWithdraw = async () => {
    let tokenIds = [];
    for (let i = 0; i < winner.length; i++) {
      tokenIds.push(winner[i].tokenId);
    }
    if (winner) {
      const config = await prepareWriteContract({
        address: id,
        abi: raffleAbi,
        chainId: 11155111,
        functionName: "withdrawPrize",
        args: [tokenIds],
      });
      const { hash } = await writeContract(config);
      addRecentTransaction({
        hash: hash,
        description: `Prize withdrawal by owner of token id(s) ${tokenIds.toString()}.`,
      });
      setWithdrawDisabled(true);
    }
  }

  const ownerWithdraw = async () => {
    const config = await prepareWriteContract({
      address: id,
      abi: raffleAbi,
      chainId: 11155111,
      functionName: "ownerWithdraw",
    });
    const { hash } = await writeContract(config);
    addRecentTransaction({
      hash: hash,
      description: `Owner withdrawal of raffle treasury.`,
    });
    setWithdrawDisabled(true);
  }

  useEffect(() => {
    setWithdrawDisabled(false);
    axios.get(`http://localhost:8000/api/raffles/${id}`)
    .then(res => {
      let data = res.data[0];
      let grandWinner = data.grand_prize_winner;
      let grandPrizeToken = data.grand_prize_token;
      let minorWinners = data.minor_prize_winners;
      let minorPrizeTokens = data.minor_prize_tokens;
      let ownerWallet = data.owner_wallet;
      let winnerData: Array<IWinner> = [];
      if (address === grandWinner) {
        winnerData.push({
          isGrand: true,
          wallet: address,
          tokenId: grandPrizeToken,
        })
      }
      for (let i = 0; i < minorWinners.length; i ++) {
        if (address === minorWinners[i]) {
          winnerData.push({
            isGrand: false,
            wallet: address,
            tokenId: minorPrizeTokens[i],
          })
        }
      }
      setOwner(ownerWallet);
      setWinner(winnerData);
    })
    .catch(err => {
      console.log(err);
    })
  }, [address])

  useEffect(() => {
    if (winner !== undefined) {
      if (winner.length > 0) {
        let tokenIds = [];
        for (let i = 0; i < winner.length; i ++) {
          axios.get(`http://localhost:8000/api/withdrawed/${address}/${id}`)
          .then(res => {
            let data = res.data[0];
            let withdrawedPrizeToken = data.token_id;
            tokenIds.push(withdrawedPrizeToken);

            if (winner.length === tokenIds.length) {
              let winnerTokens = winner.map(w => w.tokenId);
              if (JSON.stringify(winnerTokens.sort()) === JSON.stringify(tokenIds.sort())) {
                setWithdrawDisabled(true);
              }
            }
          })
          .catch(err => {
            console.log(err);
          })
        }
      }
    }
  }, [winner])

  useEffect(() => {
    if (address === owner) {
      axios.get(`http://localhost:8000/api/raffles/${id}`)
      .then(res => {
        let data = res.data[0];
        if (data.owner_withdrawed === true) {
          setWithdrawDisabled(true);
        }
      })
      .catch(err => {
        console.log(err);
      })
    } else {
      axios.get(`http://localhost:8000/api/wallet-games/${address}/${id}/`)
      .catch(err => {
        setWithdrawDisabled(true);
      })
    }
  }, [owner, address])

  return (
    <CollectionDoneWinnersBlock>
      <CollectionDoneWinnersHeader>
        <CollectionDoneWinnersHeaderItem>Победитель</CollectionDoneWinnersHeaderItem>
        <CollectionDoneWinnersHeaderItem>Токенов</CollectionDoneWinnersHeaderItem>
        <CollectionDoneWinnersHeaderItem>Выигрыш</CollectionDoneWinnersHeaderItem>
      </CollectionDoneWinnersHeader>
      {items.map((item, idx) => {
          return (
            <CollectionDoneWinnersRow key={idx * 10}>
              <CollectionDoneWinnersRowItem>
                {item.isGrand && <CollectionDoneWinnersRowItemImage alt="medal" src="/images/1st-place-medal.png" />}
                {!item.isGrand && <CollectionDoneWinnersRowItemImage alt="medal" src="/images/2nd-place-medal.png" />}
                {/*{item.isThird && <CollectionDoneWinnersRowItemImage alt="medal" src="/images/3rd-place-medal.png" />}*/}
                <CollectionDoneWinnersRowItemHash>{truncateEthAddress(item.wallet)}</CollectionDoneWinnersRowItemHash>
              </CollectionDoneWinnersRowItem>
              <CollectionDoneWinnersRowItem>
                <CollectionDoneWinnersRowItemText>{item.tokens}</CollectionDoneWinnersRowItemText>
              </CollectionDoneWinnersRowItem>
              <CollectionDoneWinnersRowItem>
                <CollectionDoneWinnersRowItemText>{item.prize} </CollectionDoneWinnersRowItemText>
              </CollectionDoneWinnersRowItem>
            </CollectionDoneWinnersRow>
          );
        })}
        {[...new Array(8 - items.length)].map((_, idx) => {
          if (items.length === 0 && idx === 0) {
            return (
              <CollectionDoneWinnersFakeRow key={idx}>
                <CollectionDoneWinnersFakeRowMedal color="linear-gradient(90deg, #FFD00E 0%, rgba(255, 208, 14, 0) 130%)" />
                <CollectionDoneWinnersFakeRowWinner />
                <CollectionDoneWinnersFakeRowTokens />
                <CollectionDoneWinnersFakeRowPrize />
              </CollectionDoneWinnersFakeRow>
            );
          }

          if (items.length === 0 && idx === 1) {
            return (
              <CollectionDoneWinnersFakeRow key={idx}>
                <CollectionDoneWinnersFakeRowMedal color="linear-gradient(90deg, #B5B5B5 0%, rgba(187, 187, 187, 0) 130%)" />
                <CollectionDoneWinnersFakeRowWinner />
                <CollectionDoneWinnersFakeRowTokens />
                <CollectionDoneWinnersFakeRowPrize />
              </CollectionDoneWinnersFakeRow>
            );
          }

          if (items.length === 0 && idx === 2) {
            return (
              <CollectionDoneWinnersFakeRow key={idx}>
                <CollectionDoneWinnersFakeRowMedal color="linear-gradient(90deg, #B76327 0%, rgba(171, 88, 31, 0) 130%)" />
                <CollectionDoneWinnersFakeRowWinner />
                <CollectionDoneWinnersFakeRowTokens />
                <CollectionDoneWinnersFakeRowPrize />
              </CollectionDoneWinnersFakeRow>
            );
          }

          if (items.length === 1 && idx === 0) {
            return (
              <CollectionDoneWinnersFakeRow key={idx}>
                <CollectionDoneWinnersFakeRowMedal color="linear-gradient(90deg, #B5B5B5 0%, rgba(187, 187, 187, 0) 130%)" />
                <CollectionDoneWinnersFakeRowWinner />
                <CollectionDoneWinnersFakeRowTokens />
                <CollectionDoneWinnersFakeRowPrize />
              </CollectionDoneWinnersFakeRow>
            );
          }

          if (items.length === 1 && idx === 1) {
            return (
              <CollectionDoneWinnersFakeRow key={idx}>
                <CollectionDoneWinnersFakeRowMedal color="linear-gradient(90deg, #B76327 0%, rgba(171, 88, 31, 0) 130%)" />
                <CollectionDoneWinnersFakeRowWinner />
                <CollectionDoneWinnersFakeRowTokens />
                <CollectionDoneWinnersFakeRowPrize />
              </CollectionDoneWinnersFakeRow>
            );
          }

          if (items.length === 2 && idx === 0) {
            return (
              <CollectionDoneWinnersFakeRow key={idx}>
                <CollectionDoneWinnersFakeRowMedal color="linear-gradient(90deg, #B76327 0%, rgba(171, 88, 31, 0) 130%)" />
                <CollectionDoneWinnersFakeRowWinner />
                <CollectionDoneWinnersFakeRowTokens />
                <CollectionDoneWinnersFakeRowPrize />
              </CollectionDoneWinnersFakeRow>
            );
          }

          return (
            <CollectionDoneWinnersFakeRow key={idx}>
              <CollectionDoneWinnersFakeRowWinner />
              <CollectionDoneWinnersFakeRowTokens />
              <CollectionDoneWinnersFakeRowPrize />
            </CollectionDoneWinnersFakeRow>
          );
        })}
        {withdrawDisabled == true? (
          <CollectionDoneButtonInactive>Получить приз</CollectionDoneButtonInactive>
        ) : (
          <>
          {owner == address ? (
            <CollectionDoneButton onClick={ownerWithdraw}>Получить приз</CollectionDoneButton>
          ) : (
            <CollectionDoneButton onClick={playerWithdraw}>Получить приз</CollectionDoneButton>
          )}
          </>
        )}
      </CollectionDoneWinnersBlock>
    );
  };

export default CollectionWinners;
