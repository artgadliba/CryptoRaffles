import { FC } from "react";
import { WinnerModalBlock, WinnerModalButton, WinnerModalClose, WinnerModalCloseImage, WinnerModalContent, WinnerModalHoliday, WinnerModalLine, WinnerModalLines, WinnerModalSumm, WinnerModalText } from "./WinnerModalStyles";

interface IWinnerModal {
  onClose(): any;
}

const WinnerModal: FC<IWinnerModal> = ({ onClose }) => {
  return (
    <WinnerModalBlock onClick={onClose}>
      <WinnerModalContent onClick={(e) => e.stopPropagation()}>
        <WinnerModalClose onClick={onClose}>
          <WinnerModalCloseImage alt="close" src="/images/modal-close.svg" />
        </WinnerModalClose>
        <WinnerModalSumm>$5,129</WinnerModalSumm>
        <WinnerModalLine />
        <WinnerModalText>
          Поздравляем вы владелец токена № с <span>ХХХХ суммой приза</span>
        </WinnerModalText>
        <WinnerModalButton>Забрать приз</WinnerModalButton>
        <WinnerModalLines alt="lines" src="/images/modal-lines.svg" />
        <WinnerModalHoliday alt="holiday" src="/images/modal-holiday.svg" />
      </WinnerModalContent>
    </WinnerModalBlock>
  );
};

export default WinnerModal;
