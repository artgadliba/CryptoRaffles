import React, { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Default from "../../layouts/Default/Default";
import {
  GiveActive,
  GiveBlock,
  GiveConditions,
  GiveConditionsList,
  GiveConditionsListItem,
  GiveConditionsListItemDot,
  GiveConditionsListItemText,
  GiveConditionsTitle,
  GiveDescription,
  GiveDescriptionText,
  GiveDescriptionTitle,
  GiveDone,
  GiveDoneContent,
  GiveDoneLogo,
  GiveDoneLogoBackground,
  GiveDoneLogoBlock,
  GiveDoneTitle,
  GiveImage,
  GiveInfo,
  GiveInfoItem,
  GiveInfoItems,
  GiveInfoItemTitle,
  GiveInfoItemValue,
  GiveInfoSumm,
  GiveInfoSummTitle,
  GiveInfoSummValue,
  GiveInfoSummValueImage,
  GiveInfoTimer,
  GiveInfoTimerColumn,
  GiveInfoTimerNumber,
  GiveInfoTimerSplitter,
  GiveInfoTimerText,
  GiveRegisterButton,
  GiveRegisterButtonInactive
} from "./GiveStyles";
import GiveWinners from "./components/GiveWinners/GiveWinners";
import GiveFakeWinners from "./components/GiveWinners/GiveFakeWinners";
import RegisterModal from "../../components/Modals/RegisterModal/RegisterModal";
import GiveCancelModal from "../../components/Modals/GiveCancelModal/GiveCancelModal";
import { useCountdown } from "../../hooks/useCountdown";
import useModal from "../../hooks/useModal";
import axios from "axios";
import { ethers } from "ethers";
import { getAccountBalance } from "../../utils/getAccountBalance";
import { numberWithCommas } from "../../utils/numberWithCommas";
import { getETHPrice } from "../../utils/getETHPrice";
import { useAccount } from "wagmi";
import { giveAbi } from "../../utils/getAccountBalance";
import { prepareWriteContract, writeContract } from "@wagmi/core";
import { useAddRecentTransaction } from '@rainbow-me/rainbowkit';

interface ITerm {
  condition: string,
}

interface IGiveawayData {
  giveaway_id: string;
  start_time: number;
  end_timestamp: number;
  image: string;
  paytoken: string;
  grand_prize: number;
  grand_prize_token?: number;
  grand_prize_winner?: string;
  minor_prize: number;
  minor_prize_tokens?: Array<number>;
  minor_prize_winners?: Array<string>;
  owner: string;
  giveaway_name: string;
  status: number;
  description: string;
  terms: Array<ITerm>;
  lesser_prize_text: string;
  lesser_prize_link: string;
}

interface IGiveWinners {
  items: {
    isGrand: boolean;
    wallet: string;
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

const fakeWinnersList: Array<IFakeWinner> = [];
var winnersList = {} as IGiveWinners;

function Give() {
  const { id } = useParams();
  const { address, isConnecting, isDisconnected } = useAccount();

  const [item, setItem] = useState<IGiveawayData>();
  const [winners, setWinners] = useState<IGiveWinners>();
  const [owner, setOwner] = useState<string>();
  const [statusColor, setStatusColor] = useState<string>("#ffffff");
  const [statusText, setStatusText] = useState<string>("Открыт");
  const [grandPrize, setGrandPrize] = useState<number>(0);
  const [minorPrize, setMinorPrize] = useState<number>(0);
  const [terms, setTerms] = useState<Array<ITerm>>();
  const [registered, setRegistered] = useState<boolean>(false);
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

  const emergencyRaffleCancel = async () => {
    const config = await prepareWriteContract({
      address: id,
      abi: giveAbi,
      chainId: 11155111, // Sepolia network
      functionName: "emergencyRaffleCancel",
      args: [],
    });
    const { hash } = await writeContract(config);
    addRecentTransaction({
      hash: hash,
      description: "Emeregency giveaway cancel by owner",
    });
  };

  const {
    closeModal: closeRegisterModal,
    openModal: openRegisterModal,
    modal: registerModal
  } = useModal(RegisterModal, { address: address, giveaway_id: id });
  const {
    closeModal: closeGiveCancelModal,
    openModal: openGiveCancelModal,
    modal: giveCancelModal
  } = useModal(GiveCancelModal, { emergencyRaffleCancel });

  useEffect(() => {
    let data_array;
    let data;
    axios.get(`http://localhost:8000/api/giveaways/${id}`)
    .then(res => {
      data_array = res.data;
      data = data_array[0];
      setItem(data);
      setOwner(data.owner_wallet);
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
      if (item.grand_prize != undefined && item.minor_prize != undefined) {
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
    }
  }, [item]);

  useEffect(() => {
    if (item != undefined) {
      if (item.grand_prize_winner != undefined && grandPrize != undefined) {
        let gPrize = "$" + numberWithCommas(grandPrize);
        winnersList = ({
          items: [{
            isGrand: true,
            wallet: item.grand_prize_winner,
            tokenId: item.grand_prize_token,
            prize: gPrize
          }]
        })
        if (item.minor_prize_winners != undefined && grandPrize != undefined) {
          let mPrize = "$" + numberWithCommas(minorPrize);
          for (let i = 0; i < item.minor_prize_winners.length; i++) {
            winnersList.items.push({
              isGrand: false,
              wallet: item.minor_prize_winners[i],
              tokenId: item.minor_prize_tokens[i],
              prize: mPrize
            });
            if (i == item.minor_prize_winners.length - 1) {
              setWinners(winnersList);
            }
          }
        }
      }
    }
  }, [item, grandPrize, minorPrize]);


  if (item != undefined) {
    return (
      <Default isHeaderActive>
        <>
          <GiveBlock>
            <GiveImage alt="cover" src={`${item.image}`} />
            <GiveInfo>
              <GiveInfoItems>
                <GiveInfoItem>
                  <GiveInfoItemTitle>Название гива</GiveInfoItemTitle>
                  <GiveInfoItemValue>{item.giveaway_name}</GiveInfoItemValue>
                </GiveInfoItem>
                <GiveInfoItem>
                  <GiveInfoItemTitle>Автор</GiveInfoItemTitle>
                  <GiveInfoItemValue>{item.owner}</GiveInfoItemValue>
                </GiveInfoItem>
                <GiveInfoItem>
                  <GiveInfoItemTitle>Статус</GiveInfoItemTitle>
                  <GiveInfoItemValue color={statusColor}>{statusText}</GiveInfoItemValue>
                </GiveInfoItem>
              </GiveInfoItems>
                <GiveInfoSumm>
                  <GiveInfoSummTitle>Сумма розыгрыша</GiveInfoSummTitle>
                  {grandPrize > 5000 ? (
                    <GiveInfoSummValue>
                      <GiveInfoSummValueImage alt="treasure" src="/images/treasure.svg" />
                        {`$${numberWithCommas(grandPrize)}`}
                    </GiveInfoSummValue>
                  ) : (
                    <GiveInfoSummValue>
                      <GiveInfoSummValueImage alt="treasure" src="/images/treasure.svg" /> $$$$$$
                    </GiveInfoSummValue>
                  )}
                </GiveInfoSumm>
              <GiveInfoTimer>
                <GiveInfoTimerColumn>
                  <GiveInfoTimerNumber>{days}</GiveInfoTimerNumber>
                  <GiveInfoTimerText>{daysNoun}</GiveInfoTimerText>
                </GiveInfoTimerColumn>
                <GiveInfoTimerSplitter marginLeft={16} marginRight={16}>
                  :
                </GiveInfoTimerSplitter>
                <GiveInfoTimerColumn>
                  <GiveInfoTimerNumber>{hours}</GiveInfoTimerNumber>
                  <GiveInfoTimerText>{hoursNoun}</GiveInfoTimerText>
                </GiveInfoTimerColumn>
                <GiveInfoTimerSplitter marginLeft={22} marginRight={12}>
                  :
                </GiveInfoTimerSplitter>
                <GiveInfoTimerColumn>
                  <GiveInfoTimerNumber>{minutes}</GiveInfoTimerNumber>
                  <GiveInfoTimerText>{minutesNoun}</GiveInfoTimerText>
                </GiveInfoTimerColumn>
                <GiveInfoTimerSplitter marginLeft={15} marginRight={19}>
                  :
                </GiveInfoTimerSplitter>
                <GiveInfoTimerColumn>
                  <GiveInfoTimerNumber>{seconds}</GiveInfoTimerNumber>
                  <GiveInfoTimerText>{secondsNoun}</GiveInfoTimerText>
                </GiveInfoTimerColumn>
              </GiveInfoTimer>
            </GiveInfo>
            {item.status < 1 ? (
              <GiveActive>
                <GiveDescription>
                  <GiveDescriptionTitle>Описание</GiveDescriptionTitle>
                  <GiveDescriptionText>{item.description}</GiveDescriptionText>
                </GiveDescription>
                <GiveConditions>
                  <GiveConditionsTitle>Условия участия</GiveConditionsTitle>
                  <GiveConditionsList>
                    {item.terms.map((term, idx) => {
                      return (
                        <GiveConditionsListItem key={idx}>
                          <GiveConditionsListItemDot>{idx + 1}</GiveConditionsListItemDot>
                          <GiveConditionsListItemText>{term.condition}</GiveConditionsListItemText>
                        </GiveConditionsListItem>
                      );
                    })}
                  </GiveConditionsList>
                </GiveConditions>
                {owner === address && Date.now() < item.start_time + 86400000 ? (
                  <GiveRegisterButton onClick={openGiveCancelModal}>Отменить</GiveRegisterButton>
                ) : (
                  <GiveRegisterButton onClick={openRegisterModal}>Регистрация</GiveRegisterButton>
                )}
              </GiveActive>
            ) : (
              <GiveDone>
                <GiveDoneTitle>Победители</GiveDoneTitle>
                <GiveDoneContent>
                {winners != undefined ? (
                  <GiveWinners items={winnersList.items} text={item.lesser_prize_text} link={item.lesser_prize_link} />
                ) : (
                  <GiveFakeWinners items={fakeWinnersList} />
                )}
                  <GiveDoneLogoBlock>
                    <GiveDoneLogo alt="logo" src="/images/give-c-logo.svg" />
                    <GiveDoneLogoBackground alt="logo-background" src="/images/give-c-logo-background.svg" />
                  </GiveDoneLogoBlock>
                </GiveDoneContent>
              </GiveDone>
            )}
          </GiveBlock>
        </>
        {registerModal}
        {giveCancelModal}
      </Default>
    );
  }
}

export default Give;
