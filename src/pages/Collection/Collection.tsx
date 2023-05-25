import React, { FC, useState, useEffect, useMemo } from "react";
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
import { getAccountBalance } from "../../utils/getAccountBalance";
import { raffleAbi, erc20Abi } from "../../utils/abiStorage";
import { numberWithCommas } from "../../utils/numberWithCommas";
import { prepareWriteContract, writeContract, readContract, waitForTransaction } from "@wagmi/core";
import { useAccount } from "wagmi";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import MessageModal from "../../components/Modals/MessageModal/MessageModal";
import GiveOwnerModal from "../../components/Modals/GiveOwnerModal/GiveOwnerModal";
import useModal from "../../hooks/useModal";

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
  owner_charged: boolean;
  owner_withdrawed: boolean;
  raffle_name: string;
  status: number;
  treasury_type: number;
  description: string;
  lesser_prize_text: string;
  lesser_prize_link: string;
}

interface ICollectionWinners {
  isGrand: boolean;
  wallet: string;
  tokens?: string;
  tokenId: number;
  prize: string;
}

interface IFakeWinner {
  isGrand: boolean;
  wallet: string;
  tokens?: string;
  tokenId: number;
  prize: string;
}

interface BigNumber {
  _hex: string;
  _isBigNumber: boolean;
}

const fakeWinnersList: Array<IFakeWinner> = [];
const winnersList: Array<ICollectionWinners> = [];

const factoryAddress = "0x62fe3F4939c1bCDC1122F4d6586Dd67985B8E2d8"; // VALUE MUST BE CHANGED TO ACTUAL IN PROD

function Collection() {
  const { id } = useParams();
  const { address, isConnecting, isDisconnected } = useAccount();

  const [item, setItem] = useState<ICollectionData>();
  const [winners, setWinners] = useState<Array<ICollectionWinners>>([]);
  const [owner, setOwner] = useState<string>();
  const [statusColor, setStatusColor] = useState<string>("#ffffff");
  const [statusText, setStatusText] = useState<string>("Открыт");
  const [hashState, setHashState] = useState<string>("");
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

  function getNoun(number: number, one: string, two: string, plural: string) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
      return plural;
    }
    n %= 10;
    if (n === 1) {
      return one;
    }
    if (n >= 2 && n <= 4) {
      return two;
    }
    return plural;
  }

  const formattedBalance = useMemo(() => {
    const balanceNoun = getNoun(tokensCounter, "токен", "токена", "токенов");
    return balanceNoun;
  }, [tokensCounter]);

  const approveModalText = 'Для оплаты токенами ERC20 необходимо предоставить разрешение смарт контракту. <br></br>Если вы используете Metamask, в интерфейсе кошелька выберите "использовать значения по умолчанию". <br></br>Более подробно об этой транзакции можно прочитать в разделе <a href="/#faq"><span style="color: #40E0D0">FAQ</span></a>.'
  const approveAwaitModalText = `Транзакция успешно отправлена. Статус вы можете отслеживать по ссылке: <a href="https://sepolia.etherscan.io/tx/${hashState}" target="_blank"><span style="color: #40E0D0">${hashState.slice(0, 4)+'...'+hashState.slice(-4)}</span></a><br>Ожидайте подтверждения, после чего вы сможете приобрести токены для участия в раффле.`
  const mintAwaitModalText = `Транзакция успешно отправлена. Статус вы можете отслеживать по ссылке: <a href="https://sepolia.etherscan.io/tx/${hashState}" target="_blank"><span style="color: #40E0D0">${hashState.slice(0, 4)+'...'+hashState.slice(-4)}</span></a><br>Ожидайте подтверждения.`
  const mintReadyModalText = 'Смарт контракт получил разрешение на управление токенами для совершения покупки. <br>Для продолжения нажмите кнопку "Купить токены".'

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
      let owner = data.owner_wallet;
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
          winnersList.push({
            isGrand: true,
            wallet: item.grand_prize_winner,
            tokens: balance,
            tokenId: item.grand_prize_token,
            prize: "$" + numberWithCommas(grandPrize)
          });
          if (item.minor_prize_winners != undefined && grandPrize != undefined) {
            for (let i = 0; i < item.minor_prize_winners.length; i++) {
              getAccountBalance(item.raffle_id, item.minor_prize_winners[i], true)
              .then(res => {
                let balance = res.toString();
                winnersList.push({
                  isGrand: false,
                  wallet: item.minor_prize_winners[i],
                  tokens: balance,
                  tokenId: item.minor_prize_tokens[i],
                  prize: "$" + numberWithCommas(minorPrize)
                });
                if (winnersList.length === item.minor_prize_winners.length + 1) {
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

  const approveTokenMint = async () => {
    const config = await prepareWriteContract({
      address: item.paytoken,
      abi: erc20Abi,
      chainId: 11155111, // VALUE MUST BE CHANGED TO ACTUAL IN PROD
      functionName: "approve",
      args: [factoryAddress, tokensCounter * item.entry_fee],
    });
    const { hash } = await writeContract(config);
    setHashState(hash);

    let formatedValue = Math.round((tokensCounter * item.entry_fee) / 10 ** 6);
    let value = `$ ${numberWithCommas(formatedValue)}`;

    addRecentTransaction({
      hash: hash,
      description: `Approving raffle contract to spend ${value} to mint token(s) on your behalf.`,
      confirmations: 3,
    });
    if (hashState != undefined) {
      closeApproveModal();
      openApproveAwaitModal();
    }
    const data = await waitForTransaction({
      hash: hash,
    })
    if (data != undefined) {
      closeApproveAwaitModal();
      openMintReadyERCModal();
    }
  }

  const approveTokenOwner = async (e: React.MouseEvent<HTMLButtonElement>, inputData: string) => {
    const config = await prepareWriteContract({
      address: item.paytoken,
      abi: erc20Abi,
      chainId: 11155111, // VALUE MUST BE CHANGED TO ACTUAL IN PROD
      functionName: "approve",
      args: [factoryAddress, Number(inputData) * 10 ** 6],
    });
    const { hash } = await writeContract(config);
    setHashState(hash);
    let value = `$ ${numberWithCommas(Number(inputData))}`;
    addRecentTransaction({
      hash: hash,
      description: `Approving raffle contract to manage ${value} tokens on your behalf.`,
      confirmations: 3,
    });
    closeGiveOwnerERCModal();
    openMintAwaitModal();
    const data = await waitForTransaction({
      hash: hash,
    })
    if (data != undefined) {
      closeMintAwaitModal();
      openGiveOwnerERCModal();
    }
  }

  const publicMintETH = async () => {
    const config = await prepareWriteContract({
      address: id,
      abi: raffleAbi,
      chainId: 11155111, // VALUE MUST BE CHANGED TO ACTUAL IN PROD
      functionName: "publicMint",
      args: [item.paytoken, 0, tokensCounter],
      overrides: {
        value: tokensCounter * item.entry_fee,
      },
    });
    const { hash } = await writeContract(config);
    setHashState(hash);
    addRecentTransaction({
      hash: hash,
      description: `Public minting of ${tokensCounter} token(s).`,
      confirmations: 3,
    });
    if (hashState != undefined) {
      openMintAwaitModal();
    }
  }

  const publicMintERC = async () => {
    closeMintReadyERCModal();
    const config = await prepareWriteContract({
      address: id,
      abi: raffleAbi,
      chainId: 11155111, // VALUE MUST BE CHANGED TO ACTUAL IN PROD
      functionName: "publicMint",
      args: [item.paytoken, tokensCounter * item.entry_fee, tokensCounter],
    });
    const { hash } = await writeContract(config);
    setHashState(hash);
    addRecentTransaction({
      hash: hash,
      description: `Public minting of ${tokensCounter} token(s).`,
      confirmations: 3,
    });
    if (hashState != undefined) {
      openMintAwaitModal();
    }
  }

  const ownerChargeTreasuryETH = async (e: React.MouseEvent<HTMLButtonElement>, inputData: string) => {
    const config = await prepareWriteContract({
      address: id,
      abi: raffleAbi,
      chainId: 11155111, // VALUE MUST BE CHANGED TO ACTUAL IN PROD
      functionName: "ownerChargeTreasury",
      args: [item.paytoken, 0],
      overrides: {
        value: ethers.utils.parseEther(inputData),
      }
    });
    const { hash } = await writeContract(config);
    setHashState(hash);
    closeGiveOwnerETHModal();
    openMintAwaitModal();
    addRecentTransaction({
      hash: hash,
      description: `Charging raffle treasury by owner for ${String(inputData)} ETH`,
    });
  };

  const ownerChargeTreasuryERC = async (e: React.MouseEvent<HTMLButtonElement>, inputData: string) => {
    const config = await prepareWriteContract({
      address: id,
      abi: raffleAbi,
      chainId: 11155111, // VALUE MUST BE CHANGED TO ACTUAL IN PROD
      functionName: "ownerChargeTreasury",
      args: [item.paytoken, Number(inputData) * 10 ** 6],
    });
    const { hash } = await writeContract(config);
    let value = `$ ${numberWithCommas(Number(inputData))}`;
    setHashState(hash);
    closeGiveOwnerERCModal();
    openMintAwaitModal();
    addRecentTransaction({
      hash: hash,
      description: `Charging raffle treasury by owner for ${value}`,
    });
  };

  const {
    closeModal: closeApproveModal,
    openModal: openApproveModal,
    modal: approveModal
  } = useModal(MessageModal, { approveTokenMint, modalText: approveModalText, mintState: "approveModalState", success: false });
  const {
    closeModal: closeApproveAwaitModal,
    openModal: openApproveAwaitModal,
    modal: approveAwaitModal
  } = useModal(MessageModal, { modalText: approveAwaitModalText, mintState: "approveAwaitModalState", success: false });
  const {
    closeModal: closeMintAwaitModal,
    openModal: openMintAwaitModal,
    modal: mintAwaitModal
  } = useModal(MessageModal, { modalText: mintAwaitModalText, mintState: "mintAwaitState", success: false });
  const {
    closeModal: closeMintReadyERCModal,
    openModal: openMintReadyERCModal,
    modal: mintReadyERCModal
  } = useModal(MessageModal, { publicMintERC, modalText: mintReadyModalText, mintState: "mintReadyStateERC", success: false });
  const {
    closeModal: closeGiveOwnerETHModal,
    openModal: openGiveOwnerETHModal,
    modal: giveOwnerETHModal
  } = useModal(GiveOwnerModal, { raffle: true, ownerChargeTreasuryETH });
  const {
    closeModal: closeGiveOwnerERCModal,
    openModal: openGiveOwnerERCModal,
    modal: giveOwnerERCModal
  } = useModal(GiveOwnerModal, { raffle: true, approveTokenOwner, ownerChargeTreasuryERC });


  const handleOpenModal = async () => {
    const amount = await readContract({
      address: item.paytoken,
      abi: erc20Abi,
      functionName: 'allowance',
      args: [address, factoryAddress],
    });
    const convertedAmount = Number(amount.toString());
    console.log(convertedAmount)
    if (convertedAmount >= tokensCounter * item.entry_fee) {
      openMintReadyERCModal();
    } else {
      openApproveModal();
    }
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
                    <CollectionInfoSummValueImage alt="treasure" src="/images/treasure.svg" /> $$$
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
                    {owner === address ? (
                      <>
                      {item.treasury_type === 4 ? (
                        <>
                        {item.paytoken === "0x0000000000000000000000000000000000000000" ? (
                          <>
                          {item.owner_charged === true? (
                            <CollectionBuyTokensButtonInactive>
                              Раффл активирован
                            </CollectionBuyTokensButtonInactive>
                          ) : (
                            <CollectionBuyTokensButton onClick={openGiveOwnerETHModal}>
                              Внести депозит
                            </CollectionBuyTokensButton>
                          )}
                          </>
                        ) : (
                          <>
                          {item.owner_charged === true? (
                            <CollectionBuyTokensButtonInactive>
                              Раффл активирован
                            </CollectionBuyTokensButtonInactive>
                          ) : (
                            <CollectionBuyTokensButton onClick={openGiveOwnerERCModal}>
                              Внести депозит
                            </CollectionBuyTokensButton>
                          )}
                          </>
                        )}
                        </>
                      ) : (
                        <CollectionBuyTokensButtonInactive>
                          Раффл активирован
                        </CollectionBuyTokensButtonInactive>
                      )}
                      </>
                    ) : (
                      <>
                      {seconds === "00" && minutes === "00" && hours === "00" && days === "00" ? (
                        <CollectionBuyTokensButtonInactive>
                          Купить токены
                        </CollectionBuyTokensButtonInactive>
                      ) : (
                        <>
                        {item.paytoken === "0x0000000000000000000000000000000000000000" ? (
                          <CollectionBuyTokensButton onClick={publicMintETH}>
                            Купить токены
                          </CollectionBuyTokensButton>
                        ) : (
                          <CollectionBuyTokensButton onClick={handleOpenModal}>
                            Купить токены
                          </CollectionBuyTokensButton>
                        )}
                        </>
                      )}
                      </>
                    )}
                </CollectionBuyTokensButtons>
              </CollectionBuyTokens>
            </CollectionActive>
          ) : (
            <CollectionDone>
              <CollectionDoneTitle>Победители</CollectionDoneTitle>
              <CollectionDoneContent>
                {winners.length > 0 ? (
                  <CollectionWinners items={winners} collectionOwner={owner} text={item.lesser_prize_text} link={item.lesser_prize_link} />
                ) : (
                  <CollectionFakeWinners items={fakeWinnersList} status={item.status} />
                )}
                <CollectionDoneLogoBlock>
                  <CollectionDoneLogo alt="logo" src="/images/give-c-logo.svg" />
                  <CollectionDoneLogoBackground alt="logo-background" src="/images/give-c-logo-background.svg" />
                </CollectionDoneLogoBlock>
              </CollectionDoneContent>
            </CollectionDone>
          )}
        </CollectionBlock>
        {approveModal}
        {approveAwaitModal}
        {mintAwaitModal}
        {mintReadyERCModal}
        {giveOwnerERCModal}
        {giveOwnerETHModal}
      </Default>
    );
  }
}

export default Collection;
