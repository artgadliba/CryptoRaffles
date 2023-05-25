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

interface IGiveFakeWinners {
  items: {
    isGrand: boolean;
    wallet: string;
    tokenId: number;
    prize: string;
  }[];
}

const GiveWinners: FC<IGiveFakeWinners> = ({ items }) => {

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
      <GiveDoneButton>Получить приз</GiveDoneButton>
    </GiveDoneWinnersBlock>
  );
}

export default GiveWinners;
