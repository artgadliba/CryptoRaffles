import React, { FC } from "react";
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
  CollectionDoneWinnersBlock,
} from "./CollectionWinnersStyles";

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

const CollectionWinners: FC<ICollectionWinners> = ({ items }) => {
  return (
    <CollectionDoneWinnersBlock>
      <CollectionDoneWinnersHeader>
        <CollectionDoneWinnersHeaderItem>Победитель</CollectionDoneWinnersHeaderItem>
        <CollectionDoneWinnersHeaderItem>Токенов</CollectionDoneWinnersHeaderItem>
        <CollectionDoneWinnersHeaderItem>Выигрыш</CollectionDoneWinnersHeaderItem>
      </CollectionDoneWinnersHeader>
      {items.map((item) => {
        return (
          <CollectionDoneWinnersRow>
            <CollectionDoneWinnersRowItem>
              {item.isFirst && <CollectionDoneWinnersRowItemImage alt="medal" src="/images/first-medal.png" />}
              {item.isSecond && <CollectionDoneWinnersRowItemImage alt="medal" src="/images/second-medal.png" />}
              {item.isThird && <CollectionDoneWinnersRowItemImage alt="medal" src="/images/third-medal.png" />}
              <CollectionDoneWinnersRowItemHash>{item.winner}</CollectionDoneWinnersRowItemHash>
            </CollectionDoneWinnersRowItem>
            <CollectionDoneWinnersRowItem>
              <CollectionDoneWinnersRowItemText>{item.tokens}</CollectionDoneWinnersRowItemText>
            </CollectionDoneWinnersRowItem>
            <CollectionDoneWinnersRowItem>
              <CollectionDoneWinnersRowItemText>{item.price} </CollectionDoneWinnersRowItemText>
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
      <CollectionDoneButton>Получить приз</CollectionDoneButton>
    </CollectionDoneWinnersBlock>
  );
};

export default CollectionWinners;
