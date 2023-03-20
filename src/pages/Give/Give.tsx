import React, { useState } from "react";
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
} from "./GiveStyles";
import GiveWinners from "./components/GiveWinners/GiveWinners";
import useTimer from "../../hooks/useTimer";

function Give() {
  const { seconds, days, hours, minuts, secondsNoun, daysNoun, hoursNoun, minutsNoun } = useTimer(Date.now());

  const [isActive, setIsActive] = useState(false);

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
      <GiveBlock>
        <GiveImage alt="cover" src="/images/give-cover.png" />
        <GiveInfo>
          <GiveInfoItems>
            <GiveInfoItem>
              <GiveInfoItemTitle>Название коллекции</GiveInfoItemTitle>
              <GiveInfoItemValue>{info.title}</GiveInfoItemValue>
            </GiveInfoItem>
            <GiveInfoItem>
              <GiveInfoItemTitle>Автор</GiveInfoItemTitle>
              <GiveInfoItemValue>{info.author}</GiveInfoItemValue>
            </GiveInfoItem>
            <GiveInfoItem>
              <GiveInfoItemTitle>Статус</GiveInfoItemTitle>
              <GiveInfoItemValue color={isActive ? "#ffffff" : "#08E2BD"}>{isActive ? "Открыт" : "Разыгран"}</GiveInfoItemValue>
            </GiveInfoItem>
          </GiveInfoItems>
          {isActive && (
            <GiveInfoSumm>
              <GiveInfoSummTitle>Сумма розыгрыша</GiveInfoSummTitle>
              <GiveInfoSummValue>
                <GiveInfoSummValueImage alt="treasure" src="/images/treasure.png" /> {info.price}
              </GiveInfoSummValue>
            </GiveInfoSumm>
          )}
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
              <GiveInfoTimerNumber>{minuts}</GiveInfoTimerNumber>
              <GiveInfoTimerText>{minutsNoun}</GiveInfoTimerText>
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
        {isActive ? (
          <GiveActive>
            <GiveDescription>
              <GiveDescriptionTitle>Описание коллекции</GiveDescriptionTitle>
              <GiveDescriptionText>{description}</GiveDescriptionText>
            </GiveDescription>
            <GiveConditions>
              <GiveConditionsTitle>Условия участия</GiveConditionsTitle>
              <GiveConditionsList>
                {conditions.map((condition, idx) => {
                  return (
                    <GiveConditionsListItem>
                      <GiveConditionsListItemDot>{idx + 1}</GiveConditionsListItemDot>
                      <GiveConditionsListItemText>{condition.text}</GiveConditionsListItemText>
                    </GiveConditionsListItem>
                  );
                })}
              </GiveConditionsList>
            </GiveConditions>
            <GiveRegisterButton>Регистрация</GiveRegisterButton>
          </GiveActive>
        ) : (
          <GiveDone>
            <GiveDoneTitle>Победители</GiveDoneTitle>
            <GiveDoneContent>
              <GiveWinners
                items={[
                  {
                    isFirst: true,
                    winner: "010lfdx6c07...",
                    tokens: "105",
                    price: "37,075$",
                  },
                  {
                    isSecond: true,
                    winner: "010lfdx6c07...",
                    tokens: "105",
                    price: "37,075$",
                  },
                ]}
              />
              <GiveDoneLogoBlock>
                <GiveDoneLogo alt="logo" src="/images/give-c-logo.svg" />
                <GiveDoneLogoBackground alt="logo-background" src="/images/give-c-logo-background.png" />
              </GiveDoneLogoBlock>
            </GiveDoneContent>
          </GiveDone>
        )}
      </GiveBlock>
    </Default>
  );
}

export default Give;
