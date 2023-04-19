import { FC } from "react";
import {
  NoMoneyPrizeModalBlock,
  NoMoneyPrizeModalButton,
  NoMoneyPrizeModalClose,
  NoMoneyPrizeModalCloseImage,
  NoMoneyPrizeModalContent,
  NoMoneyPrizeModalHoliday,
  NoMoneyPrizeModalLine,
  NoMoneyPrizeModalLines,
  NoMoneyPrizeModalSumm,
  NoMoneyPrizeModalText,
} from "./NoMoneyPrizeModalStyles";

interface INoMoneyPrizeModal {
  onClose(): any;
}

const NoMoneyPrizeModal: FC<INoMoneyPrizeModal> = ({ onClose }) => {
  return (
    <NoMoneyPrizeModalBlock onClick={onClose}>
      <NoMoneyPrizeModalContent onClick={(e) => e.stopPropagation()}>
        <NoMoneyPrizeModalClose onClick={onClose}>
          <NoMoneyPrizeModalCloseImage alt="close" src="/images/modal-close.svg" />
        </NoMoneyPrizeModalClose>
        <NoMoneyPrizeModalLine />
        <NoMoneyPrizeModalText>Поздравляем вы выиграли утешительный приз</NoMoneyPrizeModalText>
        <NoMoneyPrizeModalButton>Забрать приз</NoMoneyPrizeModalButton>
        <NoMoneyPrizeModalLines alt="lines" src="/images/modal-lines.svg" />
        <NoMoneyPrizeModalHoliday alt="holiday" src="/images/modal-holiday.svg" />
      </NoMoneyPrizeModalContent>
    </NoMoneyPrizeModalBlock>
  );
};

export default NoMoneyPrizeModal;
