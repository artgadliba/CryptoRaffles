import React, { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  GiveDoneWinnersHeader,
  GiveDoneWinnersHeaderItem,
  GiveDoneWinnersRow,
  GiveDoneWinnersRowItem,
  GiveDoneWinnersRowItemHash,
  GiveDoneWinnersRowItemImage,
  GiveDoneWinnersRowItemText,
  GiveDoneWinnersFakeRowMedal,
  GiveDoneWinnersFakeRowPrize,
  GiveDoneWinnersFakeRowTokens,
  GiveDoneWinnersFakeRowWinner,
  GiveDoneWinnersFakeRow,
  GiveDoneWinnersBlock,
  GiveDoneButton,
  GiveDoneButtonInactive,
} from "./GiveWinnersStyles";
import truncateEthAddress from "truncate-eth-address";
import { giveAbi } from "../../../../utils/getAccountBalance";
import { prepareWriteContract, writeContract } from "@wagmi/core";
import { useAddRecentTransaction } from '@rainbow-me/rainbowkit';
import { useAccount } from "wagmi";
import axios from "axios";
import WinnerModal from "../../../../components/Modals/WinnerModal/WinnerModal";
import NoMoneyPrizeModal from "../../../../components/Modals/NoMoneyPrizeModal/NoMoneyPrizeModal";
import useModal from "../../../../hooks/useModal";

interface IGiveWinners {
  text?: string;
  link: string;
  items: {
    isGrand: boolean;
    wallet: string;
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

const GiveWinners: FC<IGiveWinners> = ({ items, text, link }) => {
  const { id } = useParams();
  const { address, isConnecting, isDisconnected } = useAccount();

  const [winner, setWinner] = useState<Array<IWinner>>([]);
  const [withdrawDisabled, setWithdrawDisabled] = useState<boolean>(false);
  const addRecentTransaction = useAddRecentTransaction();
  const [proof, setProof] = useState<string>();

  const playerWithdraw = async () => {
    if (winner != undefined && proof != undefined) {
      let currentWinner = winner[0];
      const config = await prepareWriteContract({
        address: id,
        abi: giveAbi,
        chainId: 11155111, // Sepolia network
        functionName: "withdrawPrize",
        args: [currentWinner.tokenId, proof],
      });
      const { hash } = await writeContract(config);
      addRecentTransaction({
        hash: hash,
        description: `Prize withdrawal by participant # ${currentWinner.tokenId.toString()}.`,
      });
      setWithdrawDisabled(true);
    }
  }

  const {
    closeModal: closeWinnerModal,
    openModal: openWinnerModal,
    modal: winnerModal
  } = useModal(WinnerModal, { playerWithdraw, winnerData: winner });
  const {
    closeModal: closeNoMoneyModal,
    openModal: openNoMoneyModal,
    modal: noMoneyModal
  } = useModal(NoMoneyPrizeModal, {modalText: text, modalLink: link });

  useEffect(() => {
    axios.get(`http://localhost:8000/api/giveaways-registry/${address}/${id}/`)
    .then(res => {
      setWithdrawDisabled(false);
    })
    .catch(err => {
      setWithdrawDisabled(true);
    })
  }, [address]);

  useEffect(() => {
    let winnerData: Array<IWinner> = [];
    if (items.length > 0) {
      let data = items.filter(i => i.wallet == address);

      for (let i = 0; i < data.length; i ++) {
        winnerData.push(data[i]);
      }
      setWinner(winnerData);
    }
  }, [items, address]);

  useEffect(() => {
    if (winner.length > 0) {
      axios.get(`http://localhost:8000/api/giveaways-withdrawed/${address}/${id}`)
      .then(res => {
        let data = res.data[0];
        let withdrawedPrizeToken = data.token_id;

        if (winner[0].tokenId === withdrawedPrizeToken) {
          setWithdrawDisabled(true);
        }
      })
      .catch(err => {
        console.log(err);
      })
      axios.get(`http://localhost:8000/api/merkles/${address}/${id}`)
      .then(res => {
        let data = res.data[0];
        let merkleProof = data.proof;
        setProof(merkleProof);
      })
      .catch(err => {
        console.log(err);
      })
    }
  }, [winner]);

  return (
    <GiveDoneWinnersBlock>
      <GiveDoneWinnersHeader>
        <GiveDoneWinnersHeaderItem>Победитель</GiveDoneWinnersHeaderItem>
        <GiveDoneWinnersHeaderItem>Токенов</GiveDoneWinnersHeaderItem>
        <GiveDoneWinnersHeaderItem>Выигрыш</GiveDoneWinnersHeaderItem>
      </GiveDoneWinnersHeader>
      {items.map((item, idx) => {
        return (
          <GiveDoneWinnersRow key={idx}>
            <GiveDoneWinnersRowItem>
              {item.isGrand && <GiveDoneWinnersRowItemImage alt="medal" src="/images/1st-place-medal.png" />}
              {!item.isGrand && <GiveDoneWinnersRowItemImage alt="medal" src="/images/2nd-place-medal.png" />}
              {/*{item.isThird && <GiveDoneWinnersRowItemImage alt="medal" src="/images/3rd-place-medal.png" />}*/}
              <GiveDoneWinnersRowItemHash>{truncateEthAddress(item.wallet)}</GiveDoneWinnersRowItemHash>
            </GiveDoneWinnersRowItem>
            <GiveDoneWinnersRowItem>
              <GiveDoneWinnersRowItemText />
            </GiveDoneWinnersRowItem>
            <GiveDoneWinnersRowItem>
              <GiveDoneWinnersRowItemText>{item.prize} </GiveDoneWinnersRowItemText>
            </GiveDoneWinnersRowItem>
          </GiveDoneWinnersRow>
        );
      })}
      {[...new Array(8 - items.length)].map((_, idx) => {
        if (items.length === 0 && idx === 0) {
          return (
            <GiveDoneWinnersFakeRow key={idx}>
              <GiveDoneWinnersFakeRowMedal color="linear-gradient(90deg, #FFD00E 0%, rgba(255, 208, 14, 0) 130%)" />
              <GiveDoneWinnersFakeRowWinner />
              <GiveDoneWinnersFakeRowTokens />
              <GiveDoneWinnersFakeRowPrize />
            </GiveDoneWinnersFakeRow>
          );
        }

        if (items.length === 0 && idx === 1) {
          return (
            <GiveDoneWinnersFakeRow key={idx}>
              <GiveDoneWinnersFakeRowMedal color="linear-gradient(90deg, #B5B5B5 0%, rgba(187, 187, 187, 0) 130%)" />
              <GiveDoneWinnersFakeRowWinner />
              <GiveDoneWinnersFakeRowTokens />
              <GiveDoneWinnersFakeRowPrize />
            </GiveDoneWinnersFakeRow>
          );
        }

        if (items.length === 0 && idx === 2) {
          return (
            <GiveDoneWinnersFakeRow key={idx}>
              <GiveDoneWinnersFakeRowMedal color="linear-gradient(90deg, #B76327 0%, rgba(171, 88, 31, 0) 130%)" />
              <GiveDoneWinnersFakeRowWinner />
              <GiveDoneWinnersFakeRowTokens />
              <GiveDoneWinnersFakeRowPrize />
            </GiveDoneWinnersFakeRow>
          );
        }

        if (items.length === 1 && idx === 0) {
          return (
            <GiveDoneWinnersFakeRow key={idx}>
              <GiveDoneWinnersFakeRowMedal color="linear-gradient(90deg, #B5B5B5 0%, rgba(187, 187, 187, 0) 130%)" />
              <GiveDoneWinnersFakeRowWinner />
              <GiveDoneWinnersFakeRowTokens />
              <GiveDoneWinnersFakeRowPrize />
            </GiveDoneWinnersFakeRow>
          );
        }

        if (items.length === 1 && idx === 1) {
          return (
            <GiveDoneWinnersFakeRow key={idx}>
              <GiveDoneWinnersFakeRowMedal color="linear-gradient(90deg, #B76327 0%, rgba(171, 88, 31, 0) 130%)" />
              <GiveDoneWinnersFakeRowWinner />
              <GiveDoneWinnersFakeRowTokens />
              <GiveDoneWinnersFakeRowPrize />
            </GiveDoneWinnersFakeRow>
          );
        }

        if (items.length === 2 && idx === 0) {
          return (
            <GiveDoneWinnersFakeRow key={idx}>
              <GiveDoneWinnersFakeRowMedal color="linear-gradient(90deg, #B76327 0%, rgba(171, 88, 31, 0) 130%)" />
              <GiveDoneWinnersFakeRowWinner />
              <GiveDoneWinnersFakeRowTokens />
              <GiveDoneWinnersFakeRowPrize />
            </GiveDoneWinnersFakeRow>
          );
        }

        return (
          <GiveDoneWinnersFakeRow key={idx}>
            {/* <GiveDoneWinnersFakeRowMedal color="linear-gradient(90deg, #FFD00E 0%, rgba(255, 208, 14, 0) 130%)" /> */}
            <GiveDoneWinnersFakeRowWinner />
            <GiveDoneWinnersFakeRowTokens />
            <GiveDoneWinnersFakeRowPrize />
          </GiveDoneWinnersFakeRow>
        );
      })}
      {withdrawDisabled == true ? (
        <GiveDoneButtonInactive>Получить приз</GiveDoneButtonInactive>
      ) : (
        <>
        {winner.length > 0 ? (
          <GiveDoneButton onClick={openWinnerModal}>Получить приз</GiveDoneButton>
        ) : (
          <GiveDoneButton onClick={openNoMoneyModal}>Получить приз</GiveDoneButton>
        )}
        </>
      )}
      {winnerModal}
      {noMoneyModal}
    </GiveDoneWinnersBlock>
  );
}

export default GiveWinners;
