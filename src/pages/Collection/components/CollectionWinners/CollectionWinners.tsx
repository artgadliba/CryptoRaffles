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

interface ICollectionWinners {
  collectionOwner: string;
  text?: string;
  link: string;
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

const CollectionWinners: FC<ICollectionWinners> = ({ items, collectionOwner, text, link }) => {
  const { id } = useParams();
  const { address, isConnecting, isDisconnected } = useAccount();

  const [winner, setWinner] = useState<Array<IWinner>>([]);
  const [owner, setOwner] = useState<string>();
  const [hashState, setHashState] = useState<string>("");
  const [withdrawDisabled, setWithdrawDisabled] = useState<boolean>(false);
  const addRecentTransaction = useAddRecentTransaction();

  const mintAwaitModalText = `Транзакция успешно отправлена. Статус вы можете отслеживать по ссылке: <a href="https://sepolia.etherscan.io/tx/${hashState}" target="_blank"><span style="color: #40E0D0">${hashState.slice(0, 4)+'...'+hashState.slice(-4)}</span></a><br>Ожидайте подтверждения.`

  const playerWithdraw = async () => {
    if (address === winner[0].wallet) {
      let tokenIds = [];
      for (let i = 0; i < winner.length; i++) {
        tokenIds.push(winner[i].tokenId);
      }
      const config = await prepareWriteContract({
        address: id,
        abi: raffleAbi,
        chainId: 11155111, // VALUE MUST BE CHANGED TO ACTUAL IN PROD
        functionName: "withdrawPrize",
        args: [tokenIds],
      });
      const { hash } = await writeContract(config);
      setHashState(hash);
      closeWinnerModal();
      openMintAwaitModal();
      addRecentTransaction({
        hash: hash,
        description: `Withdrawing prize by owner of token id(s) ${tokenIds.toString()}.`,
      });
      setWithdrawDisabled(true);
    }
  }

  const ownerWithdraw = async () => {
    const config = await prepareWriteContract({
      address: id,
      abi: raffleAbi,
      chainId: 11155111, // VALUE MUST BE CHANGED TO ACTUAL IN PROD
      functionName: "ownerWithdraw",
    });
    const { hash } = await writeContract(config);
    setHashState(hash);
    openMintAwaitModal();
    addRecentTransaction({
      hash: hash,
      description: `Withdrawing treasury of finished raffle by owner.`,
    });
    setWithdrawDisabled(true);
  }

  const { closeModal: closeWinnerModal,
          openModal: openWinnerModal,
          modal: winnerModal
  } = useModal(WinnerModal, { playerWithdraw, winnerData: winner });
  const { closeModal: closeNoMoneyModal,
          openModal: openNoMoneyModal,
          modal: noMoneyModal
  } = useModal(NoMoneyPrizeModal, { modalText: text, modalLink: link });
  const {
    closeModal: closeMintAwaitModal,
    openModal: openMintAwaitModal,
    modal: mintAwaitModal
  } = useModal(MessageModal, { modalText: mintAwaitModalText, mintState: "mintAwaitState", success: false });

  useEffect(() => {
    axios.get(`http://localhost:8000/api/raffles-registry/${address}/${id}/`)
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
    if (collectionOwner != undefined) {
      setOwner(collectionOwner);
    }
  }, [items, address]);

  useEffect(() => {
    if (winner != undefined) {
      if (winner.length > 0) {
        let tokenIds = [];

        axios.get(`http://localhost:8000/api/raffles-withdrawed/${address}/${id}`)
        .then(res => {
          let data = res.data;
          for (let i = 0; i < data.length; i ++) {
            let withdrawedPrizeToken = data[i].token_id;
            tokenIds.push(withdrawedPrizeToken);
          }
          if (winner.length === tokenIds.length) {
            let winnerTokens = winner.map(w => Number(w.tokenId));
            if (JSON.stringify(winnerTokens.sort()) == JSON.stringify(tokenIds.sort())) {
              setWithdrawDisabled(true);
            }
          }
        })
        .catch(err => {
          console.log(err);
        })
      }
    }
  }, [winner]);

  useEffect(() => {
    if (address === owner) {
      axios.get(`http://localhost:8000/api/raffles/${id}`)
      .then(res => {
        let data = res.data[0];
        if (data.owner_withdrawed === true) {
          setWithdrawDisabled(true);
        } else {
          setWithdrawDisabled(false);
        }
      })
      .catch(err => {
        console.log(err);
      })
    }
  }, [owner]);

  const correctItems = useMemo(() => {
    const grandItems = items.filter(({ isGrand }) => isGrand);
    const simpleItems = items.filter(({ isGrand }) => !isGrand);

    return [...grandItems, ...simpleItems];
  }, [items]);

  return (
    <CollectionDoneWinnersBlock>
      <CollectionDoneWinnersHeader>
        <CollectionDoneWinnersHeaderItem>Победитель</CollectionDoneWinnersHeaderItem>
        <CollectionDoneWinnersHeaderItem>Токенов</CollectionDoneWinnersHeaderItem>
        <CollectionDoneWinnersHeaderItem>Выигрыш</CollectionDoneWinnersHeaderItem>
      </CollectionDoneWinnersHeader>
      {correctItems.map((item, idx) => {
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
              <CollectionDoneWinnersFakeRowMedal color="linear-gradient(90deg, #FFD00E 0%, rgba(255, 208, 14, 0) 130%)" />
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
        }

        if (items.length === 0 && idx === 1) {
          return (
            <CollectionDoneWinnersFakeRow key={idx}>
              <CollectionDoneWinnersFakeRowMedal color="linear-gradient(90deg, #B5B5B5 0%, rgba(187, 187, 187, 0) 130%)" />
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
        }

        if (items.length === 0 && idx === 2) {
          return (
            <CollectionDoneWinnersFakeRow key={idx}>
              <CollectionDoneWinnersFakeRowMedal color="linear-gradient(90deg, #B76327 0%, rgba(171, 88, 31, 0) 130%)" />
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
        }

        if (items.length === 1 && idx === 0) {
          return (
            <CollectionDoneWinnersFakeRow key={idx}>
              <CollectionDoneWinnersFakeRowMedal color="linear-gradient(90deg, #B5B5B5 0%, rgba(187, 187, 187, 0) 130%)" />
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
        }

        if (items.length === 1 && idx === 1) {
          return (
            <CollectionDoneWinnersFakeRow key={idx}>
              <CollectionDoneWinnersFakeRowMedal color="linear-gradient(90deg, #B76327 0%, rgba(171, 88, 31, 0) 130%)" />
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
        }

        if (items.length === 2 && idx === 0) {
          return (
            <CollectionDoneWinnersFakeRow key={idx}>
              <CollectionDoneWinnersFakeRowMedal color="linear-gradient(90deg, #B76327 0%, rgba(171, 88, 31, 0) 130%)" />
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
      {owner === address ? (
        <>
        {withdrawDisabled === true ? (
          <CollectionDoneButtonInactive>Вывести токены</CollectionDoneButtonInactive>
        ) : (
          <CollectionDoneButton onClick={ownerWithdraw}>Вывести токены</CollectionDoneButton>
        )}
        </>
      )  : (
        <>
        {withdrawDisabled === true ? (
          <CollectionDoneButtonInactive>Получить приз</CollectionDoneButtonInactive>
        ) : (
          <CollectionDoneButton onClick={openWinnerModal}>Получить приз</CollectionDoneButton>
        )}
        </>
      )}
      {winnerModal}
      {mintAwaitModal}
    </CollectionDoneWinnersBlock>
  );
}

export default CollectionWinners;
