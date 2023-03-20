import React, { FC } from "react";
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

interface ICollectionWinners {
  items: {
    isFirst?: boolean;
    isSecond?: boolean;
    isThird?: boolean;
    winner: string;
    tokens: string;
    price: string;
  }[];
}

const GiveWinners: FC<ICollectionWinners> = ({ items }) => {
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
              {item.isFirst && <GiveDoneWinnersRowItemImage alt="medal" src="/images/first-medal.png" />}
              {item.isSecond && <GiveDoneWinnersRowItemImage alt="medal" src="/images/second-medal.png" />}
              {item.isThird && <GiveDoneWinnersRowItemImage alt="medal" src="/images/third-medal.png" />}
              <GiveDoneWinnersRowItemHash>{item.winner}</GiveDoneWinnersRowItemHash>
            </GiveDoneWinnersRowItem>
            <GiveDoneWinnersRowItem>
              <GiveDoneWinnersRowItemText>{item.tokens}</GiveDoneWinnersRowItemText>
            </GiveDoneWinnersRowItem>
            <GiveDoneWinnersRowItem>
              <GiveDoneWinnersRowItemText>{item.price} </GiveDoneWinnersRowItemText>
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
      <GiveDoneButton>Получить приз</GiveDoneButton>
    </GiveDoneWinnersBlock>
  );
};

export default GiveWinners;
