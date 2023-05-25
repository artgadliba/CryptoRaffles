import React, { FC, useState, useEffect, useMemo } from "react";
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
import { raffleAbi } from "../../../../utils/abiStorage";
import { useAccount } from "wagmi";
import { prepareWriteContract, writeContract } from "@wagmi/core";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import axios from "axios";
import { readContract } from "@wagmi/core";
import WinnerModal from "../../../../components/Modals/WinnerModal/WinnerModal";
import MessageModal from "../../../../components/Modals/MessageModal/MessageModal";
import NoMoneyPrizeModal from "../../../../components/Modals/NoMoneyPrizeModal/NoMoneyPrizeModal";
import useModal from "../../../../hooks/useModal";

interface ICollectionFakeWinners {
  status: number;
  items: {
    isGrand: boolean;
    wallet: string;
    tokens?: string;
    tokenId: number;
    prize: string;
  }[];
}

const CollectionWinners: FC<ICollectionFakeWinners> = ({ items, status }) => {
  const { id } = useParams();
  const { address, isConnecting, isDisconnected } = useAccount();

  const [owner, setOwner] = useState<string>();
  const [hashState, setHashState] = useState<string>("");
  const [withdrawDisabled, setWithdrawDisabled] = useState<boolean>(false);
  const addRecentTransaction = useAddRecentTransaction();

  const mintAwaitModalText = `Транзакция успешно отправлена. Статус вы можете отслеживать по ссылке: <a href="https://sepolia.etherscan.io/tx/${hashState}" target="_blank"><span style="color: #40E0D0">${hashState.slice(0, 4)+'...'+hashState.slice(-4)}</span></a><br>Ожидайте подтверждения.`

  const emergencyWithdraw = async () => {
    const numOfTokens = await readContract({
      address: id,
      abi: raffleAbi,
      functionName: 'balanceOf',
      args: [address],
    });
    const config = await prepareWriteContract({
      address: id,
      abi: raffleAbi,
      chainId: 11155111, // VALUE MUST BE CHANGED TO ACTUAL IN PROD
      functionName: "emergencyWithdraw",
      args: [numOfTokens],
    });
    const { hash } = await writeContract(config);
    setHashState(hash);
    openMintAwaitModal();
    addRecentTransaction({
      hash: hash,
      description: "Withdrawing funds from emergency canceled raffle by player.",
    });
    setWithdrawDisabled(true);
  };

  const {
    closeModal: closeMintAwaitModal,
    openModal: openMintAwaitModal,
    modal: mintAwaitModal
  } = useModal(MessageModal, { modalText: mintAwaitModalText, mintState: "mintAwaitState", success: false });

  useEffect(() => {
    setWithdrawDisabled(false);
    axios.get(`http://localhost:8000/api/raffles-withdrawed/${address}/${id}`)
    .then(res => {
      if (res.data.length > 0) {
        setWithdrawDisabled(true);
      }
    })
    .catch(err => {
      console.log(err);
    })
  }, [address]);

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
            <CollectionDoneWinnersRowItem>{item.tokens ? <CollectionDoneWinnersRowItemText>{item.tokens}</CollectionDoneWinnersRowItemText> : <CollectionDoneWinnersFakeRowTokens />}</CollectionDoneWinnersRowItem>
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
              <CollectionDoneWinnersRowItem>
                <CollectionDoneWinnersFakeRowWinner />
              </CollectionDoneWinnersRowItem>
              <CollectionDoneWinnersRowItem>
                <CollectionDoneWinnersFakeRowTokens />
              </CollectionDoneWinnersRowItem>
              <CollectionDoneWinnersRowItem>
                <CollectionDoneWinnersFakeRowPrize />
              </CollectionDoneWinnersRowItem>
              <CollectionDoneWinnersFakeRowMedal color="linear-gradient(90deg, #FFD00E 0%, rgba(255, 208, 14, 0) 130%)" />
            </CollectionDoneWinnersFakeRow>
          );
        }

        if (items.length === 0 && idx === 1) {
          return (
            <CollectionDoneWinnersFakeRow key={idx}>
              <CollectionDoneWinnersRowItem>
                <CollectionDoneWinnersFakeRowWinner />
              </CollectionDoneWinnersRowItem>
              <CollectionDoneWinnersRowItem>
                <CollectionDoneWinnersFakeRowTokens />
              </CollectionDoneWinnersRowItem>
              <CollectionDoneWinnersRowItem>
                <CollectionDoneWinnersFakeRowPrize />
              </CollectionDoneWinnersRowItem>
              <CollectionDoneWinnersFakeRowMedal color="linear-gradient(90deg, #B5B5B5 0%, rgba(187, 187, 187, 0) 130%)" />
            </CollectionDoneWinnersFakeRow>
          );
        }

        if (items.length === 0 && idx === 2) {
          return (
            <CollectionDoneWinnersFakeRow key={idx}>
              <CollectionDoneWinnersRowItem>
                <CollectionDoneWinnersFakeRowWinner />
              </CollectionDoneWinnersRowItem>
              <CollectionDoneWinnersRowItem>
                <CollectionDoneWinnersFakeRowTokens />
              </CollectionDoneWinnersRowItem>
              <CollectionDoneWinnersRowItem>
                <CollectionDoneWinnersFakeRowPrize />
              </CollectionDoneWinnersRowItem>
              <CollectionDoneWinnersFakeRowMedal color="linear-gradient(90deg, #B76327 0%, rgba(171, 88, 31, 0) 130%)" />
            </CollectionDoneWinnersFakeRow>
          );
        }

        if (items.length === 1 && idx === 0) {
          return (
            <CollectionDoneWinnersFakeRow key={idx}>
              <CollectionDoneWinnersRowItem>
                <CollectionDoneWinnersFakeRowWinner />
              </CollectionDoneWinnersRowItem>
              <CollectionDoneWinnersRowItem>
                <CollectionDoneWinnersFakeRowTokens />
              </CollectionDoneWinnersRowItem>
              <CollectionDoneWinnersRowItem>
                <CollectionDoneWinnersFakeRowPrize />
              </CollectionDoneWinnersRowItem>
              <CollectionDoneWinnersFakeRowMedal color="linear-gradient(90deg, #B5B5B5 0%, rgba(187, 187, 187, 0) 130%)" />
            </CollectionDoneWinnersFakeRow>
          );
        }

        if (items.length === 1 && idx === 1) {
          return (
            <CollectionDoneWinnersFakeRow key={idx}>
              <CollectionDoneWinnersRowItem>
                <CollectionDoneWinnersFakeRowWinner />
              </CollectionDoneWinnersRowItem>
              <CollectionDoneWinnersRowItem>
                <CollectionDoneWinnersFakeRowTokens />
              </CollectionDoneWinnersRowItem>
              <CollectionDoneWinnersRowItem>
                <CollectionDoneWinnersFakeRowPrize />
              </CollectionDoneWinnersRowItem>
              <CollectionDoneWinnersFakeRowMedal color="linear-gradient(90deg, #B76327 0%, rgba(171, 88, 31, 0) 130%)" />
            </CollectionDoneWinnersFakeRow>
          );
        }

        if (items.length === 2 && idx === 0) {
          return (
            <CollectionDoneWinnersFakeRow key={idx}>
              <CollectionDoneWinnersRowItem>
                <CollectionDoneWinnersFakeRowWinner />
              </CollectionDoneWinnersRowItem>
              <CollectionDoneWinnersRowItem>
                <CollectionDoneWinnersFakeRowTokens />
              </CollectionDoneWinnersRowItem>
              <CollectionDoneWinnersRowItem>
                <CollectionDoneWinnersFakeRowPrize />
              </CollectionDoneWinnersRowItem>
              <CollectionDoneWinnersFakeRowMedal color="linear-gradient(90deg, #B76327 0%, rgba(171, 88, 31, 0) 130%)" />
            </CollectionDoneWinnersFakeRow>
          );
        }

        return (
          <CollectionDoneWinnersFakeRow key={idx}>
            <CollectionDoneWinnersRowItem>
              <CollectionDoneWinnersFakeRowWinner />
            </CollectionDoneWinnersRowItem>
            <CollectionDoneWinnersRowItem>
              <CollectionDoneWinnersFakeRowTokens />
            </CollectionDoneWinnersRowItem>
            <CollectionDoneWinnersRowItem>
              <CollectionDoneWinnersFakeRowPrize />
            </CollectionDoneWinnersRowItem>
          </CollectionDoneWinnersFakeRow>
        );
      })}
      {mintAwaitModal}
      <>
      {withdrawDisabled === true ? (
        <CollectionDoneButtonInactive>Вывести токены</CollectionDoneButtonInactive>
      ) : (
        <CollectionDoneButton onClick={emergencyWithdraw}>Вывести токены</CollectionDoneButton>
      )}
      </>
    </CollectionDoneWinnersBlock>
  );
}

export default CollectionWinners;
