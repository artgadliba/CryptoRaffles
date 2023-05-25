import { FC } from "react";
import {
  GiveCancelModalBlock,
  GiveCancelModalButton,
  GiveCancelModalClose,
  GiveCancelModalCloseImage,
  GiveCancelModalContent,
  GiveCancelModalHoliday,
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
          <GiveCancelModalText>
            Вы действительно хотите экстренно отменить проведение гива? Все записи о зарегистрированных участниках будут удалены.<br /><br />
            Отмена возможна в течение 24 часов с момента запуска.
          </GiveCancelModalText>
        <GiveCancelModalButton onClick={emergencyRaffleCancel}>Отменить</GiveCancelModalButton>
        <GiveCancelModalLines alt="lines" src="/images/modal-lines.svg" />
      </GiveCancelModalContent>
    </GiveCancelModalBlock>
  );
}

export default GiveCancelModal;
