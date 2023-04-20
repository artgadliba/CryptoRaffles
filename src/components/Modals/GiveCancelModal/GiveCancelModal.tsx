import { FC } from "react";
import {
  GiveCancelModalBlock,
  GiveCancelModalButton,
  GiveCancelModalClose,
  GiveCancelModalCloseImage,
  GiveCancelModalContent,
  GiveCancelModalHoliday,
  GiveCancelModalLine,
  GiveCancelModalLines,
  GiveCancelModalSumm,
  GiveCancelModalText,
} from "./GiveCancelModalStyles";

interface IGiveCancelModal {
  emergencyRaffleCancel(): any;
  onClose(): any;
}

const GiveCancelModal: FC<IGiveCancelModal> = ({ onClose, emergencyRaffleCancel }) => {
  return (
    <GiveCancelModalBlock onClick={onClose}>
      <GiveCancelModalContent onClick={(e) => e.stopPropagation()}>
        <GiveCancelModalClose onClick={onClose}>
          <GiveCancelModalCloseImage alt="close" src="/images/modal-close.svg" />
        </GiveCancelModalClose>
        <GiveCancelModalLine />
          <GiveCancelModalText>
            Вы действительно хотите экстренно отменить проведение гива? Это действие нельзя отменить.<br /><br />
            Отмена возможна в течение суток с момента запуска.
          </GiveCancelModalText>
        <GiveCancelModalButton>Отменить</GiveCancelModalButton>
        <GiveCancelModalLines alt="lines" src="/images/modal-lines.svg" />
        <GiveCancelModalHoliday alt="holiday" src="/images/modal-holiday.svg" />
      </GiveCancelModalContent>
    </GiveCancelModalBlock>
  );
}

export default GiveCancelModal;
