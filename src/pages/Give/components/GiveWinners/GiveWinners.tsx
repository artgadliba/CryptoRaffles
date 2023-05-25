import React, { FC, useState, useEffect, useMemo } from "react";
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
import { giveAbi } from "../../../../utils/abiStorage";
import { prepareWriteContract, writeContract } from "@wagmi/core";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import axios from "axios";
import WinnerModal from "../../../../components/Modals/WinnerModal/WinnerModal";
import NoMoneyPrizeModal from "../../../../components/Modals/NoMoneyPrizeModal/NoMoneyPrizeModal";
import useModal from "../../../../hooks/useModal";

interface IGiveWinners {
  text?: string;
  link: string;
  status: number;
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

const GiveWinners: FC<IGiveWinners> = ({ items, text, link, status }) => {
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
        chainId: 11155111, // VALUE MUST BE CHANGED TO ACTUAL IN PROD
        functionName: "withdrawPrize",
        args: [currentWinner.tokenId, proof],
      });
      const { hash } = await writeContract(config);
      addRecentTransaction({
        hash: hash,
        description: `Prize withdrawal by participant # ${currentWinner.tokenId.toString()}.`,
      });
      setWithdrawDisabled(true);
      closeWinnerModal();
      closeNoMoneyModal();
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
    let winnerData: Array<IWinner> = [];
    if (items.length > 0) {
      let data = items.filter(i => i.wallet === address);

      for (let i = 0; i < data.length; i ++) {
        winnerData.push(data[i]);
      }
      setWinner(winnerData);
    }
  }, [items, address]);

  useEffect(() => {
    setWithdrawDisabled(false);
    if (winner.length > 0) {
      axios.get(`http://localhost:8000/api/giveaways-withdrawed/${address}/${id}`)
      .then(res => {
        if (res.data.length > 0) {
          let data = res.data[0];
          let withdrawedWallet = data.wallet;

          if (winner[0].wallet === withdrawedWallet) {
            setWithdrawDisabled(true);
          }
        }
      })
      .catch(err => {
        console.log(err);
      })
      if (status == 1) {
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
    } else {
      setWithdrawDisabled(true);
    }
  }, [address, winner]);

  const correctItems = useMemo(() => {
    const grandItems = items.filter(({ isGrand }) => isGrand);
    const simpleItems = items.filter(({ isGrand }) => !isGrand);

    return [...grandItems, ...simpleItems];
  }, [items]);

  return (
    <GiveDoneWinnersBlock>
      <GiveDoneWinnersHeader>
        <GiveDoneWinnersHeaderItem>Победитель</GiveDoneWinnersHeaderItem>
        <GiveDoneWinnersHeaderItem>Токенов</GiveDoneWinnersHeaderItem>
        <GiveDoneWinnersHeaderItem>Выигрыш</GiveDoneWinnersHeaderItem>
      </GiveDoneWinnersHeader>
      {correctItems.map((item, idx) => {
        return (
          <GiveDoneWinnersRow key={idx}>
            <GiveDoneWinnersRowItem>
              {item.isGrand && <GiveDoneWinnersRowItemImage alt="medal" src="/images/1st-place-medal.png" />}
              {!item.isGrand && <GiveDoneWinnersRowItemImage alt="medal" src="/images/2nd-place-medal.png" />}
              {/*{item.isThird && <GiveDoneWinnersRowItemImage alt="medal" src="/images/3rd-place-medal.png" />}*/}
              <GiveDoneWinnersRowItemHash>{truncateEthAddress(item.wallet)}</GiveDoneWinnersRowItemHash>
            </GiveDoneWinnersRowItem>
              <GiveDoneWinnersRowItem>
                <GiveDoneWinnersFakeRowTokens />
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
              <GiveDoneWinnersRowItem>
                <GiveDoneWinnersFakeRowWinner />
              </GiveDoneWinnersRowItem>
              <GiveDoneWinnersRowItem>
                <GiveDoneWinnersFakeRowTokens />
              </GiveDoneWinnersRowItem>
              <GiveDoneWinnersRowItem>
                <GiveDoneWinnersFakeRowPrize />
              </GiveDoneWinnersRowItem>
              <GiveDoneWinnersFakeRowMedal color="linear-gradient(90deg, #FFD00E 0%, rgba(255, 208, 14, 0) 130%)" />
            </GiveDoneWinnersFakeRow>
          );
        }

        if (items.length === 0 && idx === 1) {
          return (
            <GiveDoneWinnersFakeRow key={idx}>
              <GiveDoneWinnersRowItem>
                <GiveDoneWinnersFakeRowWinner />
              </GiveDoneWinnersRowItem>
              <GiveDoneWinnersRowItem>
                <GiveDoneWinnersFakeRowTokens />
              </GiveDoneWinnersRowItem>
              <GiveDoneWinnersRowItem>
                <GiveDoneWinnersFakeRowPrize />
              </GiveDoneWinnersRowItem>
              <GiveDoneWinnersFakeRowMedal color="linear-gradient(90deg, #B5B5B5 0%, rgba(187, 187, 187, 0) 130%)" />
            </GiveDoneWinnersFakeRow>
          );
        }

        if (items.length === 0 && idx === 2) {
          return (
            <GiveDoneWinnersFakeRow key={idx}>
              <GiveDoneWinnersRowItem>
                <GiveDoneWinnersFakeRowWinner />
              </GiveDoneWinnersRowItem>
              <GiveDoneWinnersRowItem>
                <GiveDoneWinnersFakeRowTokens />
              </GiveDoneWinnersRowItem>
              <GiveDoneWinnersRowItem>
                <GiveDoneWinnersFakeRowPrize />
              </GiveDoneWinnersRowItem>
              <GiveDoneWinnersFakeRowMedal color="linear-gradient(90deg, #B76327 0%, rgba(171, 88, 31, 0) 130%)" />
            </GiveDoneWinnersFakeRow>
          );
        }

        if (items.length === 1 && idx === 0) {
          return (
            <GiveDoneWinnersFakeRow key={idx}>
              <GiveDoneWinnersRowItem>
                <GiveDoneWinnersFakeRowWinner />
              </GiveDoneWinnersRowItem>
              <GiveDoneWinnersRowItem>
                <GiveDoneWinnersFakeRowTokens />
              </GiveDoneWinnersRowItem>
              <GiveDoneWinnersRowItem>
                <GiveDoneWinnersFakeRowPrize />
              </GiveDoneWinnersRowItem>
              <GiveDoneWinnersFakeRowMedal color="linear-gradient(90deg, #B5B5B5 0%, rgba(187, 187, 187, 0) 130%)" />
            </GiveDoneWinnersFakeRow>
          );
        }

        if (items.length === 1 && idx === 1) {
          return (
            <GiveDoneWinnersFakeRow key={idx}>
              <GiveDoneWinnersRowItem>
                <GiveDoneWinnersFakeRowWinner />
              </GiveDoneWinnersRowItem>
              <GiveDoneWinnersRowItem>
                <GiveDoneWinnersFakeRowTokens />
              </GiveDoneWinnersRowItem>
              <GiveDoneWinnersRowItem>
                <GiveDoneWinnersFakeRowPrize />
              </GiveDoneWinnersRowItem>
              <GiveDoneWinnersFakeRowMedal color="linear-gradient(90deg, #B76327 0%, rgba(171, 88, 31, 0) 130%)" />
            </GiveDoneWinnersFakeRow>
          );
        }

        if (items.length === 2 && idx === 0) {
          return (
            <GiveDoneWinnersFakeRow key={idx}>
              <GiveDoneWinnersRowItem>
                <GiveDoneWinnersFakeRowWinner />
              </GiveDoneWinnersRowItem>
              <GiveDoneWinnersRowItem>
                <GiveDoneWinnersFakeRowTokens />
              </GiveDoneWinnersRowItem>
              <GiveDoneWinnersRowItem>
                <GiveDoneWinnersFakeRowPrize />
              </GiveDoneWinnersRowItem>
              <GiveDoneWinnersFakeRowMedal color="linear-gradient(90deg, #B76327 0%, rgba(171, 88, 31, 0) 130%)" />
            </GiveDoneWinnersFakeRow>
          );
        }

        return (
          <GiveDoneWinnersFakeRow key={idx}>
            <GiveDoneWinnersRowItem>
              <GiveDoneWinnersFakeRowWinner />
            </GiveDoneWinnersRowItem>
            <GiveDoneWinnersRowItem>
              <GiveDoneWinnersFakeRowTokens />
            </GiveDoneWinnersRowItem>
            <GiveDoneWinnersRowItem>
              <GiveDoneWinnersFakeRowPrize />
            </GiveDoneWinnersRowItem>
          </GiveDoneWinnersFakeRow>
        );
      })}
      {withdrawDisabled == true ? (
        <GiveDoneButtonInactive>Получить приз</GiveDoneButtonInactive>
      ) : (
        <GiveDoneButton onClick={openWinnerModal}>Получить приз</GiveDoneButton>
      )}
      {winnerModal}
      {noMoneyModal}
    </GiveDoneWinnersBlock>
  );
}

export default GiveWinners;
