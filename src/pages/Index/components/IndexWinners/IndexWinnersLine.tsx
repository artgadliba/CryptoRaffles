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
  IndexWinnersRowItemGameName,
  IndexWinnersRowItemTransaction,
} from "./IndexWinnersLineStyles";

interface IIndexWinners {
  items: {
    wallet: string;
    giveaway_name?: string;
    raffle_name?: string;
    prize: string;
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
                    {item.raffle_name != undefined ? (
                      <IndexWinnersRowItemText>
                        выиграл <IndexWinnersRowItemMoney>{item.prize}</IndexWinnersRowItemMoney> участвуя в раффле <IndexWinnersRowItemGameName>{item.raffle_name}</IndexWinnersRowItemGameName>
                      </IndexWinnersRowItemText>
                    ) : (
                      <IndexWinnersRowItemText>
                        выиграл <IndexWinnersRowItemMoney>{item.prize}</IndexWinnersRowItemMoney> участвуя в гиве <IndexWinnersRowItemGameName>{item.giveaway_name}</IndexWinnersRowItemGameName>
                      </IndexWinnersRowItemText>
                    )}
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
                  {item.raffle_name != undefined ? (
                    <IndexWinnersRowItemText>
                      выиграл <IndexWinnersRowItemMoney>{item.prize}</IndexWinnersRowItemMoney> участвуя в раффле <IndexWinnersRowItemGameName>{item.raffle_name}</IndexWinnersRowItemGameName>
                    </IndexWinnersRowItemText>
                  ) : (
                    <IndexWinnersRowItemText>
                      выиграл <IndexWinnersRowItemMoney>{item.prize}</IndexWinnersRowItemMoney> участвуя в гиве <IndexWinnersRowItemGameName>{item.giveaway_name}</IndexWinnersRowItemGameName>
                    </IndexWinnersRowItemText>
                  )}
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
                    {item.raffle_name != undefined ? (
                      <IndexWinnersRowItemText>
                        выиграл <IndexWinnersRowItemMoney>{item.prize}</IndexWinnersRowItemMoney> участвуя в раффле <IndexWinnersRowItemGameName>{item.raffle_name}</IndexWinnersRowItemGameName>
                      </IndexWinnersRowItemText>
                    ) : (
                      <IndexWinnersRowItemText>
                        выиграл <IndexWinnersRowItemMoney>{item.prize}</IndexWinnersRowItemMoney> участвуя в гиве <IndexWinnersRowItemGameName>{item.giveaway_name}</IndexWinnersRowItemGameName>
                      </IndexWinnersRowItemText>
                    )}
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
                  {item.raffle_name != undefined ? (
                    <IndexWinnersRowItemText>
                      выиграл <IndexWinnersRowItemMoney>{item.prize}</IndexWinnersRowItemMoney> участвуя в раффле <IndexWinnersRowItemGameName>{item.raffle_name}</IndexWinnersRowItemGameName>
                    </IndexWinnersRowItemText>
                  ) : (
                    <IndexWinnersRowItemText>
                      выиграл <IndexWinnersRowItemMoney>{item.prize}</IndexWinnersRowItemMoney> участвуя в гиве <IndexWinnersRowItemGameName>{item.giveaway_name}</IndexWinnersRowItemGameName>
                    </IndexWinnersRowItemText>
                  )}
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
