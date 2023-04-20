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

interface ICollectionFakeWinners {
  items: {
    isGrand: boolean;
    wallet: string;
    tokens?: string;
    tokenId: number;
    prize: string;
  }[];
}

const CollectionWinners: FC<ICollectionFakeWinners> = ({ items}) => {

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
      <CollectionDoneButton>Получить приз</CollectionDoneButton>
    </CollectionDoneWinnersBlock>
  );
}


export default CollectionWinners;
