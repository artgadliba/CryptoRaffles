import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  WinnerModalBlock,
  WinnerModalButton,
  WinnerModalClose,
  WinnerModalCloseImage,
  WinnerModalContent,
  WinnerModalHoliday,
  WinnerModalLine,
  WinnerModalLines,
  WinnerModalSumm,
  WinnerModalText
} from "./WinnerModalStyles";
import { numberWithCommas } from "../../../utils/numberWithCommas";

interface IWinner {
  isGrand: boolean;
  wallet: string;
  tokenId: number;
  prize: string;
}

interface IWinnerModal {
  onClose(): any;
  playerWithdraw(): any;
  winnerData: IWinner[];
}

const WinnerModal: FC<IWinnerModal> = ({ onClose, playerWithdraw, winnerData }) => {

  const [prize, setPrize] = useState<string>();
  const [phrase, setPhrase] = useState<Array<string>>();

  useEffect(() => {
    let tokens = [];
    let totalPrize = 0;
    for (let i = 0; i < winnerData.length; i ++) {
      tokens.push(winnerData[i].tokenId);
      let prize = Number(winnerData[i].prize.replace(/\D/g, ""));
      totalPrize += prize;
    }
    let totalPrizeString = '$' + numberWithCommas(totalPrize);

    let tokenPhrase;
    if (tokens.length > 1) {
      tokenPhrase = `токенов #${String(tokens.sort())}`;
    } else {
      tokenPhrase = `токенa #${String(tokens)}`;
    }
    setPhrase(tokenPhrase);
    setPrize(totalPrizeString);
  }, [winnerData]);

  return (
    <WinnerModalBlock onClick={onClose}>
      <WinnerModalContent onClick={(e) => e.stopPropagation()}>
        <WinnerModalClose onClick={onClose}>
          <WinnerModalCloseImage alt="close" src="/images/modal-close.svg" />
        </WinnerModalClose>
        <WinnerModalSumm>{prize}</WinnerModalSumm>
        <WinnerModalLine />
        <WinnerModalText>
          Поздравляем вы владелец {phrase} с <span>{prize} суммой приза</span>
        </WinnerModalText>
        <WinnerModalButton onClick={playerWithdraw}>Забрать приз</WinnerModalButton>
        <WinnerModalLines alt="lines" src="/images/modal-lines.svg" />
        <WinnerModalHoliday alt="holiday" src="/images/modal-holiday.svg" />
      </WinnerModalContent>
    </WinnerModalBlock>
  );
}

export default WinnerModal;
