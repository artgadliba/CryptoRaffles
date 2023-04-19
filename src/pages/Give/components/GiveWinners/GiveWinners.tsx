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
} from "./GiveWinnersStyles";
import { giveAbi } from "../../../../utils/getAccountBalance";
import { prepareWriteContract, writeContract } from "@wagmi/core";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { ethers } from "ethers";
import { MerkleTree } from "merkletreejs";
import keccak256 from "keccak256";
import axios from "axios";

type JSONValue = string | number | boolean | { [x: string]: JSONValue } | Array<JSONValue>;

interface IGiveawayWinners {
  items: {
    isGrand: boolean;
    wallet: string;
    tokens?: number;
    prize: string;
  }[];
}

interface IWinner {
  isGrand: boolean;
  wallet: string;
  tokenId: number;
}

const GiveWinners: FC<IGiveawayWinners> = ({ items }) => {
  const { id } = useParams();
  const { address, isConnecting, isDisconnected } = useAccount();

  const [winner, setWinner] = useState<IWinner>();
  const [withdrawDisabled, setWithdrawDisabled] = useState<boolean>(false);
  const addRecentTransaction = useAddRecentTransaction();
  const [merkle, setMerkle] = useState<JSONValue>();

  const playerWithdraw = async (address, tokenId) => {
    if (winner && merkle) {
      const leaf = ethers.utils.solidityKeccak256(["address", "uint256"], [address, tokenId]);
      // const proof = merkle.getHexProof(leaf);

      const config = await prepareWriteContract({
        address: id,
        abi: giveAbi,
        chainId: 11155111, // Sepolia network
        functionName: "withdrawPrize",
        args: [winner.tokenId],
      });
      const { hash } = await writeContract(config);
      addRecentTransaction({
        hash: hash,
        description: `Prize withdrawal by participant # ${winner.tokenId.toString()}.`,
      });
      setWithdrawDisabled(true);
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/merkles/${id}`)
      .then((res) => {
        let data = res.data[0];
        let merkleTree = data.merkle_tree;
        setMerkle(merkleTree);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/wallet-games/${address}/${id}/`)
      .then((res) => {
        setWithdrawDisabled(false);
      })
      .catch((err) => {
        setWithdrawDisabled(true);
      });
    axios
      .get(`http://localhost:8000/api/giveaways/${id}`)
      .then((res) => {
        let data = res.data[0];
        let grandWinner = data.grand_prize_winner;
        let grandPrizeToken = data.grand_prize_token;
        let minorWinners = data.minor_prize_winners;
        let minorPrizeTokens = data.minor_prize_tokens;
        let winnerData = {} as IWinner;
        if (address === grandWinner) {
          winnerData = {
            isGrand: true,
            wallet: address,
            tokenId: grandPrizeToken,
          };
        }
        for (let i = 0; i < minorWinners.length; i++) {
          if (address === minorWinners[i]) {
            winnerData = {
              isGrand: false,
              wallet: address,
              tokenId: minorPrizeTokens[i],
            };
          }
        }
        setWinner(winnerData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [address]);

  useEffect(() => {
    if (winner !== undefined) {
      axios
        .get(`http://localhost:8000/api/giveaways-withdrawed/${address}/${id}`)
        .then((res) => {
          let data = res.data[0];
          let withdrawedPrizeToken = data.token_id;

          if (winner.tokenId === withdrawedPrizeToken) {
            setWithdrawDisabled(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [winner]);

  const correctItems = useMemo(() => {
    const grandItems = items.filter(({ isGrand }) => isGrand);
    const simpleItems = items.filter(({ isGrand }) => !isGrand);

    const correctGrandItems = grandItems.map((item) => {
      return {
        isFirst: true,
        isSecond: false,
        isThird: false,
        ...item,
      };
    });

    const correctSimpleItems = simpleItems.map((item, idx) => {
      if (!grandItems.length && idx === 0) {
        return {
          isFirst: true,
          isSecond: false,
          isThird: false,
          ...item,
        };
      }

      if (!grandItems.length && idx === 1) {
        return {
          isFirst: false,
          isSecond: true,
          isThird: false,
          ...item,
        };
      }

      if (!grandItems.length && idx === 2) {
        return {
          isFirst: false,
          isSecond: false,
          isThird: true,
          ...item,
        };
      }

      if (idx === 0) {
        return {
          isFirst: false,
          isSecond: true,
          isThird: false,
          ...item,
        };
      }

      if (idx === 1) {
        return {
          isFirst: false,
          isSecond: false,
          isThird: true,
          ...item,
        };
      }

      return {
        isFirst: false,
        isSecond: false,
        isThird: false,
        ...item,
      };
    });
    return [...correctGrandItems, ...correctSimpleItems];
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
              {item.isFirst && <GiveDoneWinnersRowItemImage alt="medal" src="/images/1st-place-medal.png" />}
              {item.isSecond && <GiveDoneWinnersRowItemImage alt="medal" src="/images/2nd-place-medal.png" />}
              {item.isThird && <GiveDoneWinnersRowItemImage alt="medal" src="/images/3rd-place-medal.png" />}
              <GiveDoneWinnersRowItemHash>{item.wallet}</GiveDoneWinnersRowItemHash>
            </GiveDoneWinnersRowItem>
            <GiveDoneWinnersRowItem>{item.tokens ? <GiveDoneWinnersRowItemText>{item.tokens}</GiveDoneWinnersRowItemText> : <GiveDoneWinnersFakeRowTokens />}</GiveDoneWinnersRowItem>
            <GiveDoneWinnersRowItem>
              <GiveDoneWinnersRowItemText>{item.prize} </GiveDoneWinnersRowItemText>
            </GiveDoneWinnersRowItem>
          </GiveDoneWinnersRow>
        );
      })}
      {[...new Array(8 - correctItems.length)].map((_, idx) => {
        if (correctItems.length === 0 && idx === 0) {
          return (
            <GiveDoneWinnersFakeRow key={idx}>
              <GiveDoneWinnersFakeRowMedal color="linear-gradient(90deg, #FFD00E 0%, rgba(255, 208, 14, 0) 130%)" />
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
        }

        if (correctItems.length === 0 && idx === 1) {
          return (
            <GiveDoneWinnersFakeRow key={idx}>
              <GiveDoneWinnersFakeRowMedal color="linear-gradient(90deg, #B5B5B5 0%, rgba(187, 187, 187, 0) 130%)" />
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
        }

        if (correctItems.length === 0 && idx === 2) {
          return (
            <GiveDoneWinnersFakeRow key={idx}>
              <GiveDoneWinnersFakeRowMedal color="linear-gradient(90deg, #B76327 0%, rgba(171, 88, 31, 0) 130%)" />
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
        }

        if (correctItems.length === 1 && idx === 0) {
          return (
            <GiveDoneWinnersFakeRow key={idx}>
              <GiveDoneWinnersFakeRowMedal color="linear-gradient(90deg, #B5B5B5 0%, rgba(187, 187, 187, 0) 130%)" />
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
        }

        if (correctItems.length === 1 && idx === 1) {
          return (
            <GiveDoneWinnersFakeRow key={idx}>
              <GiveDoneWinnersFakeRowMedal color="linear-gradient(90deg, #B76327 0%, rgba(171, 88, 31, 0) 130%)" />
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
        }

        if (correctItems.length === 2 && idx === 0) {
          return (
            <GiveDoneWinnersFakeRow key={idx}>
              <GiveDoneWinnersFakeRowMedal color="linear-gradient(90deg, #B76327 0%, rgba(171, 88, 31, 0) 130%)" />
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
      <GiveDoneButton>Получить приз</GiveDoneButton>
    </GiveDoneWinnersBlock>
  );
};

export default GiveWinners;
