import React, { FC } from "react";
import {
  IndexWinnersFakeRowItem,
  IndexWinnersFakeRowItemEmoji,
  IndexWinnersFakeRowItemEmojiBlock,
  IndexWinnersFakeRowItemHeader,
  IndexWinnersFakeRowItemText,
  IndexWinnersFakeRowItemTransaction,
  IndexWinnersLineBlock,
  IndexWinnersRow,
  IndexWinnersRowItem,
  IndexWinnersRowItemContent,
  IndexWinnersRowItemEmoji,
  IndexWinnersRowItemHeader,
  IndexWinnersRowItemMoney,
  IndexWinnersRowItemText,
  IndexWinnersRowItemTokens,
  IndexWinnersRowItemTransaction,
} from "./IndexWinnersLineStyles";

interface IIndexWinners {
  items: {
    tokens: string | number;
    wallet: string;
    price: string;
    timerDate: string | number;
  }[];
}

const ROW_LENGTH = 6;

const IndexWinnersLine: FC<IIndexWinners> = ({ items }) => {
  return (
    <IndexWinnersLineBlock>
      <IndexWinnersRow>
        {items.length < ROW_LENGTH ? (
          <>
            {items.map((item, idx) => {
              return (
                <IndexWinnersRowItem key={idx}>
                  <IndexWinnersRowItemHeader>
                    <IndexWinnersRowItemTransaction>{item.wallet}</IndexWinnersRowItemTransaction>
                    <IndexWinnersRowItemEmoji alt="emoji" src="/images/emoji-line.png" />
                  </IndexWinnersRowItemHeader>
                  <IndexWinnersRowItemContent>
                    <IndexWinnersRowItemText>
                      выиграл <IndexWinnersRowItemMoney>{item.price}</IndexWinnersRowItemMoney> купив всего <IndexWinnersRowItemTokens>{item.tokens} токена</IndexWinnersRowItemTokens>
                    </IndexWinnersRowItemText>
                  </IndexWinnersRowItemContent>
                </IndexWinnersRowItem>
              );
            })}

            {[...new Array(ROW_LENGTH - items.length)].map((_, idx) => {
              return (
                <IndexWinnersFakeRowItem key={idx}>
                  <IndexWinnersFakeRowItemHeader>
                    <IndexWinnersFakeRowItemTransaction />
                    <IndexWinnersFakeRowItemEmojiBlock>
                      <IndexWinnersFakeRowItemEmoji />
                      <IndexWinnersFakeRowItemEmoji />
                      <IndexWinnersFakeRowItemEmoji />
                    </IndexWinnersFakeRowItemEmojiBlock>
                  </IndexWinnersFakeRowItemHeader>
                  <IndexWinnersFakeRowItemText />
                </IndexWinnersFakeRowItem>
              );
            })}
          </>
        ) : (
          items.map((item, idx) => {
            return (
              <IndexWinnersRowItem key={idx}>
                <IndexWinnersRowItemHeader>
                  <IndexWinnersRowItemTransaction>{item.wallet}</IndexWinnersRowItemTransaction>
                  <IndexWinnersRowItemEmoji alt="emoji" src="/images/emoji-line.png" />
                </IndexWinnersRowItemHeader>
                <IndexWinnersRowItemContent>
                  <IndexWinnersRowItemText>
                    выиграл <IndexWinnersRowItemMoney>{item.price}</IndexWinnersRowItemMoney> купив всего <IndexWinnersRowItemTokens>{item.tokens} токена</IndexWinnersRowItemTokens>
                  </IndexWinnersRowItemText>
                </IndexWinnersRowItemContent>
              </IndexWinnersRowItem>
            );
          })
        )}
      </IndexWinnersRow>
      <IndexWinnersRow>
        {items.length < ROW_LENGTH ? (
          <>
            {items.map((item, idx) => {
              return (
                <IndexWinnersRowItem key={idx}>
                  <IndexWinnersRowItemHeader>
                    <IndexWinnersRowItemTransaction>{item.wallet}</IndexWinnersRowItemTransaction>
                    <IndexWinnersRowItemEmoji alt="emoji" src="/images/emoji-line.png" />
                  </IndexWinnersRowItemHeader>
                  <IndexWinnersRowItemContent>
                    <IndexWinnersRowItemText>
                      выиграл <IndexWinnersRowItemMoney>{item.price}</IndexWinnersRowItemMoney> купив всего <IndexWinnersRowItemTokens>{item.tokens} токена</IndexWinnersRowItemTokens>
                    </IndexWinnersRowItemText>
                  </IndexWinnersRowItemContent>
                </IndexWinnersRowItem>
              );
            })}

            {[...new Array(ROW_LENGTH - items.length)].map((_, idx) => {
              return (
                <IndexWinnersFakeRowItem key={idx}>
                  <IndexWinnersFakeRowItemHeader>
                    <IndexWinnersFakeRowItemTransaction />
                    <IndexWinnersFakeRowItemEmojiBlock>
                      <IndexWinnersFakeRowItemEmoji />
                      <IndexWinnersFakeRowItemEmoji />
                      <IndexWinnersFakeRowItemEmoji />
                    </IndexWinnersFakeRowItemEmojiBlock>
                  </IndexWinnersFakeRowItemHeader>
                  <IndexWinnersFakeRowItemText />
                </IndexWinnersFakeRowItem>
              );
            })}
          </>
        ) : (
          items.map((item, idx) => {
            return (
              <IndexWinnersRowItem key={idx}>
                <IndexWinnersRowItemHeader>
                  <IndexWinnersRowItemTransaction>{item.wallet}</IndexWinnersRowItemTransaction>
                  <IndexWinnersRowItemEmoji alt="emoji" src="/images/emoji-line.png" />
                </IndexWinnersRowItemHeader>
                <IndexWinnersRowItemContent>
                  <IndexWinnersRowItemText>
                    выиграл <IndexWinnersRowItemMoney>{item.price}</IndexWinnersRowItemMoney> купив всего <IndexWinnersRowItemTokens>{item.tokens} токена</IndexWinnersRowItemTokens>
                  </IndexWinnersRowItemText>
                </IndexWinnersRowItemContent>
              </IndexWinnersRowItem>
            );
          })
        )}
      </IndexWinnersRow>
    </IndexWinnersLineBlock>
  );
}

export default IndexWinnersLine;
