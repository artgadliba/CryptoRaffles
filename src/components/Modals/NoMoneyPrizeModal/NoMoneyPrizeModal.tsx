import { FC } from "react";
import {
  NoMoneyPrizeModalBlock,
  NoMoneyPrizeModalButton,
  NoMoneyPrizeModalClose,
  NoMoneyPrizeModalCloseImage,
  NoMoneyPrizeModalContent,
  NoMoneyPrizeModalHoliday,
  NoMoneyPrizeModalLines,
  NoMoneyPrizeModalSumm,
  NoMoneyPrizeModalText,
} from "./NoMoneyPrizeModalStyles";

interface INoMoneyPrizeModal {
  onClose(): any;
  modalText?: string;
  modalLink: string;
}

const NoMoneyPrizeModal: FC<INoMoneyPrizeModal> = ({ onClose, modalText, modalLink }) => {
  return (
    <NoMoneyPrizeModalBlock onClick={onClose}>
      <NoMoneyPrizeModalContent onClick={(e) => e.stopPropagation()}>
        <NoMoneyPrizeModalClose onClick={onClose}>
          <NoMoneyPrizeModalCloseImage alt="close" src="/images/modal-close.svg" />
        </NoMoneyPrizeModalClose>
        {!modalText ? (
          <NoMoneyPrizeModalText>Поздравляем вы выиграли утешительный приз</NoMoneyPrizeModalText>
        ) : (
          <NoMoneyPrizeModalText>{modalText}</NoMoneyPrizeModalText>
        )}
        <NoMoneyPrizeModalButton to={modalLink}>Забрать приз</NoMoneyPrizeModalButton>
        <NoMoneyPrizeModalLines alt="lines" src="/images/modal-lines.svg" />
        <NoMoneyPrizeModalHoliday alt="holiday" src="/images/modal-holiday.svg" />
      </NoMoneyPrizeModalContent>
    </NoMoneyPrizeModalBlock>
  );
}

export default NoMoneyPrizeModal;
