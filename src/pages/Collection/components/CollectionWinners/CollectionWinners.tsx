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
import WinnerModal from "../../../../components/Modals/WinnerModal/WinnerModal";
import LoserModal from "../../../../components/Modals/LoserModal/LoserModal";
import useModal from "../../../../hooks/useModal";

interface ICollectionWinners {
  collectionOwner: string;
  items: {
    isGrand: boolean;
    wallet: string;
    tokens?: string;
    tokenId: number;
    prize: string;
  }[];
}

interface IWinner {
  isGrand: boolean;
  wallet: string;
  tokenId: number;
  prize: string;
}

const CollectionWinners: FC<ICollectionWinners> = ({ items, collectionOwner }) => {
  const { id } = useParams();
  const { address, isConnecting, isDisconnected } = useAccount();

  const [winner, setWinner] = useState<Array<IWinner>>([]);
  const [owner, setOwner] = useState<string>();
  const [data, setData] = useState<Array<IWinner>>();
  const [withdrawDisabled, setWithdrawDisabled] = useState<boolean>(false);
  const addRecentTransaction = useAddRecentTransaction();

  const playerWithdraw = async () => {
    if (address === winner[0].wallet) {
      let tokenIds = [];
      for (let i = 0; i < winner.length; i++) {
        tokenIds.push(winner[i].tokenId);
      }
      const config = await prepareWriteContract({
        address: id,
        abi: raffleAbi,
        chainId: 11155111, // Sepolia network
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

  const { closeModal: closeWinnerModal, openModal: openWinnerModal, modal: winnerModal } = useModal(WinnerModal, { playerWithdraw, winnerData: winner });
  const { closeModal: closeLoserModal, openModal: openLoserModal, modal: loserModal } = useModal(LoserModal, {});

  useEffect(() => {
    axios.get(`http://localhost:8000/api/wallet-games/${address}/${id}/`)
    .then(res => {
      setWithdrawDisabled(false);
    })
    .catch(err => {
      setWithdrawDisabled(true);
    })
  }, [address])

  useEffect(() => {
    let winnerData: Array<IWinner> = [];
      if (items.length > 0) {
        let data = items.filter(i => i.wallet == address);

        for (let i = 0; i < data.length; i ++) {
          winnerData.push(data[i]);
        }
        setWinner(winnerData);
      }
    if (collectionOwner != undefined) {
      setOwner(collectionOwner);
    }
  }, [items, address])

  useEffect(() => {
    if (winner != undefined) {
      if (winner.length > 0) {
        let tokenIds = [];
        for (let i = 0; i < winner.length; i ++) {
          axios.get(`http://localhost:8000/api/raffles-withdrawed/${address}/${id}`)
          .then(res => {
            let data = res.data[0];
            let withdrawedPrizeToken = data.token_id;
            tokenIds.push(withdrawedPrizeToken);

            if (winner.length === tokenIds.length) {
              let winnerTokens = winner.map(w => w.tokenId);
              if (JSON.stringify(winnerTokens.sort()) === JSON.stringify(tokenIds.sort())) {
                // setWithdrawDisabled(true);
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
    }
  }, [owner])

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
            <>
            {winner.length > 0 ? (
              <CollectionDoneButton onClick={openWinnerModal}>Получить приз</CollectionDoneButton>
            ) : (
              <CollectionDoneButton onClick={openLoserModal}>Получить приз</CollectionDoneButton>
            )}
            </>
          )}
          </>
        )}
        {winnerModal}
        {loserModal}
      </CollectionDoneWinnersBlock>
    );
  };


export default CollectionWinners;
