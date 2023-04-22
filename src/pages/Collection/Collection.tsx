import React, { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCountdown } from "../../hooks/useCountdown";
import Default from "../../layouts/Default/Default";
import {
  CollectionActive,
  CollectionBlock,
  CollectionBuyTokens,
  CollectionBuyTokensButton,
  CollectionBuyTokensButtonInactive,
  CollectionBuyTokensButtons,
  CollectionBuyTokensControl,
  CollectionBuyTokensControlImage,
  CollectionBuyTokensControllWrapper,
  CollectionBuyTokensControls,
  CollectionBuyTokensCounter,
  CollectionBuyTokensTitle,
  CollectionConditions,
  CollectionConditionsList,
  CollectionConditionsListItem,
  CollectionConditionsListItemDot,
  CollectionConditionsListItemText,
  CollectionConditionsTitle,
  CollectionDescription,
  CollectionDescriptionText,
  CollectionDescriptionTitle,
  CollectionDone,
  CollectionDoneContent,
  CollectionDoneLogo,
  CollectionDoneLogoBackground,
  CollectionDoneLogoBlock,
  CollectionDoneTitle,
  CollectionImage,
  CollectionInfo,
  CollectionInfoItem,
  CollectionInfoItems,
  CollectionInfoItemTitle,
  CollectionInfoItemValue,
  CollectionInfoSumm,
  CollectionInfoSummTitle,
  CollectionInfoSummValue,
  CollectionInfoSummValueImage,
  CollectionInfoTimer,
  CollectionInfoTimerColumn,
  CollectionInfoTimerNumber,
  CollectionInfoTimerSplitter,
  CollectionInfoTimerText,
} from "./CollectionStyles";
import CollectionWinners from "./components/CollectionWinners/CollectionWinners";
import CollectionFakeWinners from "./components/CollectionWinners/CollectionFakeWinners";
import axios from "axios";
import { ethers } from "ethers";
import { getETHPrice } from "../../utils/getETHPrice";
import { getAccountBalance, raffleAbi } from "../../utils/getAccountBalance";
import { numberWithCommas } from "../../utils/numberWithCommas";
import { prepareWriteContract, writeContract } from "@wagmi/core";
import { useAccount } from "wagmi";
import { useAddRecentTransaction } from '@rainbow-me/rainbowkit';

interface ICollectionData {
  raffle_id: string;
  end_timestamp: number;
  image: string;
  paytoken: string;
  entry_fee: number;
  grand_prize: number;
  grand_prize_token?: number;
  grand_prize_winner?: string;
  minor_prize: number;
  minor_prize_tokens?: Array<number>;
  minor_prize_winners?: Array<string>;
  owner: string;
  raffle_name: string;
  status: number;
  game_type: number;
  description: string;
  lesser_prize_text: string;
  lesser_prize_link: string;
}

interface ICollectionWinners {
  collectionOwner: string;
  items: {
    isGrand: boolean;
    wallet: string;
    tokens?: string;
    tokenId: number;
    prize: string;
  }[];
}

interface IFakeWinner {
  isGrand: boolean;
  wallet: string;
  tokens?: string;
  tokenId: number;
  prize: string;
}

const nullSignature = [
  0,
  "0x0000000000000000000000000000000000000000000000000000000000000000"
];

const fakeWinnersList: Array<IFakeWinner> = [];
var winnersList = {} as ICollectionWinners;

function Collection() {
  const { id } = useParams();
  const { address, isConnecting, isDisconnected } = useAccount();

  const [item, setItem] = useState<ICollectionData>();
  const [winners, setWinners] = useState<ICollectionWinners>();
  const [owner, setOwner] = useState<string>();
  const [statusColor, setStatusColor] = useState<string>("#ffffff");
  const [statusText, setStatusText] = useState<string>("Открыт");
  const [grandPrize, setGrandPrize] = useState<number>();
  const [minorPrize, setMinorPrize] = useState<number>();
  const [tokensCounter, setTokensCounter] = useState<number>(1);
  const [conditions, setConditions] = useState([
    {
      text: "Подключиться к веб приложению с помощью Ethereum кошелька",
    },
    {
      text: "Принять участие в активном раффле, приобретая любое количество токенов.",
    },
    {
      text: "Дождаться окончания раффла и проверить ваш результат.",
    },
  ]);
  const addRecentTransaction = useAddRecentTransaction();

  var {
    seconds,
    minutes,
    hours,
    days,
    secondsNoun,
    minutesNoun,
    hoursNoun,
    daysNoun
  } = useCountdown(item?.end_timestamp ?? Date.now());

  useEffect(() => {
    axios.get(`http://localhost:8000/api/raffles/${id}`)
    .then(res => {
      let data = res.data[0];
      let owner = data.owner;
      setOwner(owner);
      setItem(data);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  useEffect(() => {
    if (item != undefined) {
      if (item.status == 1) {
        setStatusColor("#08E2BD");
        setStatusText("Разыгран");
      } else if (item.status == 2) {
        setStatusColor("#08E2BD");
        setStatusText("Отменен");
      }
      if (item.paytoken == "0x0000000000000000000000000000000000000000") {
        getETHPrice()
        .then(ethRate => {
          let formatedGrandPrize = ethers.utils.formatEther(item.grand_prize);
          let formatedMinorPrize = ethers.utils.formatEther(item.minor_prize);
          let grandPrize = Math.round(Number(formatedGrandPrize) * ethRate);
          let minorPrize = Math.round(Number(formatedMinorPrize) * ethRate);
          setGrandPrize(grandPrize);
          setMinorPrize(minorPrize);
        })
        .catch(err => {
          console.log(err);
        })
      } else {
        let grandPrize = Math.round(item.grand_prize / 10 ** 6);
        let minorPrize = Math.round(item.minor_prize / 10 ** 6);
        setGrandPrize(grandPrize);
        setMinorPrize(minorPrize);
      }
    }
  }, [item]);

  useEffect(() => {
    if (item != undefined) {
      if (item.grand_prize_winner != undefined && grandPrize != undefined) {
        getAccountBalance(item.raffle_id, item.grand_prize_winner, true)
        .then(res => {
          let balance = res.toString();
          winnersList = ({
            collectionOwner: owner,
            items: [{
              isGrand: true,
              wallet: item.grand_prize_winner,
              tokens: balance,
              tokenId: item.grand_prize_token,
              prize: "$" + numberWithCommas(grandPrize)
            }]
          });
          if (item.minor_prize_winners != undefined && grandPrize != undefined) {
            for (let i = 0; i < item.minor_prize_winners.length; i++) {
              getAccountBalance(item.raffle_id, item.minor_prize_winners[i], true)
              .then(res => {
                let balance = res.toString();
                winnersList.items.push({
                  isGrand: false,
                  wallet: item.minor_prize_winners[i],
                  tokens: balance,
                  tokenId: item.minor_prize_tokens[i],
                  prize: "$" + numberWithCommas(minorPrize)
                });
                if (i == item.minor_prize_winners.length - 1) {
                  setWinners(winnersList);
                }
              })
              .catch(err => {
                console.log(err);
              })
            }
          }
        })
        .catch(err => {
          console.log(err);
        })
      }
    }
  }, [item, grandPrize, minorPrize]);

  const publicMint = async () => {
    const config = await prepareWriteContract({
      address: id,
      abi: raffleAbi,
      chainId: 11155111,
      functionName: "publicMint",
      args: [item.paytoken, 0, tokensCounter, nullSignature[0], nullSignature[1], nullSignature[1]],
      overrides: {
        value: tokensCounter * item.entry_fee,
      },
    });
    const { hash } = await writeContract(config);
    addRecentTransaction({
      hash: hash,
      description: `Public minting of ${tokensCounter} token(s).`,
    });
  }

  const handleNextValue = () => {
      if (tokensCounter >= 1) {
        setTokensCounter((prev) => prev + 1);
      }
  }

  const handlePrevValue = () => {
      if (tokensCounter > 1) {
        setTokensCounter((prev) => prev - 1)
      }
  }

  if (item != undefined) {
    return (
      <Default isHeaderActive>
        <CollectionBlock>
          <CollectionImage alt="cover" src={`${item.image}`} />
          <CollectionInfo>
            <CollectionInfoItems>
              <CollectionInfoItem>
                <CollectionInfoItemTitle>Название раффла</CollectionInfoItemTitle>
                <CollectionInfoItemValue>{item.raffle_name}</CollectionInfoItemValue>
              </CollectionInfoItem>
              <CollectionInfoItem>
                <CollectionInfoItemTitle>Автор</CollectionInfoItemTitle>
                <CollectionInfoItemValue>{item.owner}</CollectionInfoItemValue>
              </CollectionInfoItem>
              <CollectionInfoItem>
                <CollectionInfoItemTitle>Статус</CollectionInfoItemTitle>
                <CollectionInfoItemValue color={statusColor}>{statusText}</CollectionInfoItemValue>
              </CollectionInfoItem>
            </CollectionInfoItems>
              <CollectionInfoSumm>
                <CollectionInfoSummTitle>Сумма розыгрыша</CollectionInfoSummTitle>
                {grandPrize > 5000 ? (
                  <CollectionInfoSummValue>
                    <CollectionInfoSummValueImage alt="treasure" src="/images/treasure.svg" />
                      {`$${numberWithCommas(grandPrize)}`}
                  </CollectionInfoSummValue>
                ) : (
                  <CollectionInfoSummValue>
                    <CollectionInfoSummValueImage alt="treasure" src="/images/treasure.svg" /> $$$$$$
                  </CollectionInfoSummValue>
                )}
              </CollectionInfoSumm>
            <CollectionInfoTimer>
              <CollectionInfoTimerColumn>
                <CollectionInfoTimerNumber>{days}</CollectionInfoTimerNumber>
                <CollectionInfoTimerText>{daysNoun}</CollectionInfoTimerText>
              </CollectionInfoTimerColumn>
              <CollectionInfoTimerSplitter marginLeft={16} marginRight={16}>
                :
              </CollectionInfoTimerSplitter>
              <CollectionInfoTimerColumn>
                <CollectionInfoTimerNumber>{hours}</CollectionInfoTimerNumber>
                <CollectionInfoTimerText>{hoursNoun}</CollectionInfoTimerText>
              </CollectionInfoTimerColumn>
              <CollectionInfoTimerSplitter marginLeft={22} marginRight={12}>
                :
              </CollectionInfoTimerSplitter>
              <CollectionInfoTimerColumn>
                <CollectionInfoTimerNumber>{minutes}</CollectionInfoTimerNumber>
                <CollectionInfoTimerText>{minutesNoun}</CollectionInfoTimerText>
              </CollectionInfoTimerColumn>
              <CollectionInfoTimerSplitter marginLeft={15} marginRight={19}>
                :
              </CollectionInfoTimerSplitter>
              <CollectionInfoTimerColumn>
                <CollectionInfoTimerNumber>{seconds}</CollectionInfoTimerNumber>
                <CollectionInfoTimerText>{secondsNoun}</CollectionInfoTimerText>
              </CollectionInfoTimerColumn>
            </CollectionInfoTimer>
          </CollectionInfo>
          {item.status < 1 ? (
            <CollectionActive>
              <CollectionDescription>
                <CollectionDescriptionTitle>Описание</CollectionDescriptionTitle>
                <CollectionDescriptionText>{item.description}</CollectionDescriptionText>
              </CollectionDescription>
              <CollectionConditions>
                <CollectionConditionsTitle>Условия участия</CollectionConditionsTitle>
                <CollectionConditionsList>
                  {conditions.map((condition, idx) => {
                    return (
                      <CollectionConditionsListItem key={idx}>
                        <CollectionConditionsListItemDot>{idx + 1}</CollectionConditionsListItemDot>
                        <CollectionConditionsListItemText>{condition.text}</CollectionConditionsListItemText>
                      </CollectionConditionsListItem>
                    );
                  })}
                </CollectionConditionsList>
              </CollectionConditions>
              <CollectionBuyTokens>
                <CollectionBuyTokensTitle>
                  Купить токены
                </CollectionBuyTokensTitle>
                <CollectionBuyTokensButtons>
                  <CollectionBuyTokensControls>
                    <CollectionBuyTokensControllWrapper>
                      <CollectionBuyTokensControl onClick={handlePrevValue}>
                        <CollectionBuyTokensControlImage width="18" height="18" viewBox="0 0 18 18">
                          <path fillRule="evenodd" clipRule="evenodd" d="M3.28516 9.20346C3.28516 8.80147 3.61104 8.47559 4.01303 8.47559H14.2033C14.6053 8.47559 14.9311 8.80147 14.9311 9.20346C14.9311 9.60545 14.6053 9.93133 14.2033 9.93133H4.01303C3.61104 9.93133 3.28516 9.60545 3.28516 9.20346Z" />
                        </CollectionBuyTokensControlImage>
                      </CollectionBuyTokensControl>
                    </CollectionBuyTokensControllWrapper>
                    <CollectionBuyTokensCounter>{tokensCounter}</CollectionBuyTokensCounter>
                    <CollectionBuyTokensControllWrapper>
                      <CollectionBuyTokensControl onClick={handleNextValue}>
                        <CollectionBuyTokensControlImage width="18" height="18" viewBox="0 0 18 18">
                          <path fillRule="evenodd" clipRule="evenodd" d="M8.91635 3.37988C9.31834 3.37988 9.64422 3.70576 9.64422 4.10776V14.298C9.64422 14.7 9.31834 15.0259 8.91635 15.0259C8.51436 15.0259 8.18848 14.7 8.18848 14.298V4.10776C8.18848 3.70576 8.51436 3.37988 8.91635 3.37988Z" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M3.09277 9.20346C3.09277 8.80147 3.41865 8.47559 3.82065 8.47559H14.0109C14.4129 8.47559 14.7388 8.80147 14.7388 9.20346C14.7388 9.60545 14.4129 9.93133 14.0109 9.93133H3.82065C3.41865 9.93133 3.09277 9.60545 3.09277 9.20346Z" />
                        </CollectionBuyTokensControlImage>
                      </CollectionBuyTokensControl>
                    </CollectionBuyTokensControllWrapper>
                  </CollectionBuyTokensControls>
                    <CollectionBuyTokensButton onClick={() => {
                      publicMint();
                    }}>
                      Купить токены
                    </CollectionBuyTokensButton>
                </CollectionBuyTokensButtons>
              </CollectionBuyTokens>
            </CollectionActive>
          ) : (
            <CollectionDone>
              <CollectionDoneTitle>Победители</CollectionDoneTitle>
              <CollectionDoneContent>
                {winners != undefined ? (
                  <CollectionWinners items={winnersList.items} collectionOwner={winnersList.collectionOwner} text={item.lesser_prize_text} link={item.lesser_prize_link} />
                ) : (
                  <CollectionFakeWinners items={fakeWinnersList}/>
                )}
                <CollectionDoneLogoBlock>
                  <CollectionDoneLogo alt="logo" src="/images/give-c-logo.svg" />
                  <CollectionDoneLogoBackground alt="logo-background" src="/images/give-c-logo-background.svg" />
                </CollectionDoneLogoBlock>
              </CollectionDoneContent>
            </CollectionDone>
          )}
        </CollectionBlock>
      </Default>
    );
  }
}

export default Collection;
