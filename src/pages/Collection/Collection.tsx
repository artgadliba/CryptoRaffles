import React, { useState } from "react";
import useTimer from "../../hooks/useTimer";
import Default from "../../layouts/Default/Default";
import {
  CollectionActive,
  CollectionBlock,
  CollectionBuyTokens,
  CollectionBuyTokensButton,
  CollectionBuyTokensButtons,
  CollectionBuyTokensControl,
  CollectionBuyTokensControlImage,
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

function Collection() {
  const { seconds, days, hours, minuts, secondsNoun, daysNoun, hoursNoun, minutsNoun } = useTimer(Date.now());

  const [isActive, setIsActive] = useState(false);

  const [tokensCounter, setTokensCounter] = useState(0);

  const [description, setDescription] = useState(
    <>
      <span>CryptoRaffles построен на базе смарт-контрактов, которые содержат в себе точные неизменяемые правила.</span> Что гарантирует полную честность в проведении розыгрышей. Ни автор розыгрыша, ни его оператор не имеют возможности как либо манипулировать результатами.
      <br /> <br /> Денежные призы загружаются на контракт до начала розыгрыша, откуда могут быть сняты только победителями при соответствующих правилам условиях.
    </>
  );

  const [info, setInfo] = useState({
    title: "Raffle # 54c1ae03",
    author: "@ Nike",
    price: "$9,445",
  });

  const [conditions, setConditions] = useState([
    {
      text: "Подключиться к веб приложению с помощью Ethereum кошелька",
    },
    {
      text: "Принять участие в активном раффле, приобретая любое количество токенов или зарегистрироваться для участия в гиве, выполнив его условия.",
    },
    {
      text: "Дождаться окончания раффла/ гива и проверить ваш результат.",
    },
    {
      text: "В случае выигрыша - произвести мгновенный вывод средств.",
    },
  ]);

  return (
    <Default isHeaderActive>
      <CollectionBlock>
        <CollectionImage alt="cover" src="/images/give-cover.png" />
        <CollectionInfo>
          <CollectionInfoItems>
            <CollectionInfoItem>
              <CollectionInfoItemTitle>Название коллекции</CollectionInfoItemTitle>
              <CollectionInfoItemValue>{info.title}</CollectionInfoItemValue>
            </CollectionInfoItem>
            <CollectionInfoItem>
              <CollectionInfoItemTitle>Автор</CollectionInfoItemTitle>
              <CollectionInfoItemValue>{info.author}</CollectionInfoItemValue>
            </CollectionInfoItem>
            <CollectionInfoItem>
              <CollectionInfoItemTitle>Статус</CollectionInfoItemTitle>
              <CollectionInfoItemValue color={isActive ? "#ffffff" : "#08E2BD"}>{isActive ? "Открыт" : "Разыгран"}</CollectionInfoItemValue>
            </CollectionInfoItem>
          </CollectionInfoItems>
          {isActive && (
            <CollectionInfoSumm>
              <CollectionInfoSummTitle>Сумма розыгрыша</CollectionInfoSummTitle>
              <CollectionInfoSummValue>
                <CollectionInfoSummValueImage alt="treasure" src="/images/treasure.png" /> {info.price}
              </CollectionInfoSummValue>
            </CollectionInfoSumm>
          )}
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
              <CollectionInfoTimerNumber>{minuts}</CollectionInfoTimerNumber>
              <CollectionInfoTimerText>{minutsNoun}</CollectionInfoTimerText>
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
        {isActive ? (
          <CollectionActive>
            <CollectionDescription>
              <CollectionDescriptionTitle>Описание коллекции</CollectionDescriptionTitle>
              <CollectionDescriptionText>{description}</CollectionDescriptionText>
            </CollectionDescription>
            <CollectionConditions>
              <CollectionConditionsTitle>Условия участия</CollectionConditionsTitle>
              <CollectionConditionsList>
                {conditions.map((condition, idx) => {
                  return (
                    <CollectionConditionsListItem>
                      <CollectionConditionsListItemDot>{idx + 1}</CollectionConditionsListItemDot>
                      <CollectionConditionsListItemText>{condition.text}</CollectionConditionsListItemText>
                    </CollectionConditionsListItem>
                  );
                })}
              </CollectionConditionsList>
            </CollectionConditions>
            <CollectionBuyTokens>
              <CollectionBuyTokensTitle>Купить токены</CollectionBuyTokensTitle>
              <CollectionBuyTokensButtons>
                <CollectionBuyTokensControls>
                  <CollectionBuyTokensControl onClick={() => setTokensCounter((prev) => prev - 1)}>
                    <CollectionBuyTokensControlImage alt="minus" src="/images/minus.png" />
                  </CollectionBuyTokensControl>
                  <CollectionBuyTokensCounter>{tokensCounter}</CollectionBuyTokensCounter>
                  <CollectionBuyTokensControl onClick={() => setTokensCounter((prev) => prev + 1)}>
                    <CollectionBuyTokensControlImage alt="plus" src="/images/plus.png" />
                  </CollectionBuyTokensControl>
                </CollectionBuyTokensControls>
                <CollectionBuyTokensButton>Купить токены</CollectionBuyTokensButton>
              </CollectionBuyTokensButtons>
            </CollectionBuyTokens>
          </CollectionActive>
        ) : (
          <CollectionDone>
            <CollectionDoneTitle>Победители</CollectionDoneTitle>
            <CollectionDoneContent>
              <CollectionWinners
                items={
                  [
                    // {
                    //   isThird: true,
                    //   winner: "010lfdx6c07...",
                    //   tokens: "105",
                    //   price: "37,075$",
                    // },
                    // {
                    //   winner: "010lfdx6c07...",
                    //   tokens: "105",
                    //   price: "37,075$",
                    // },
                    // {
                    //   winner: "010lfdx6c07...",
                    //   tokens: "105",
                    //   price: "37,075$",
                    // },
                    // {
                    //   winner: "010lfdx6c07...",
                    //   tokens: "105",
                    //   price: "37,075$",
                    // },
                  ]
                }
              />
              <CollectionDoneLogoBlock>
                <CollectionDoneLogo alt="logo" src="/images/give-c-logo.svg" />
                <CollectionDoneLogoBackground alt="logo-background" src="/images/give-c-logo-background.png" />
              </CollectionDoneLogoBlock>
            </CollectionDoneContent>
          </CollectionDone>
        )}
      </CollectionBlock>
    </Default>
  );
}

export default Collection;
