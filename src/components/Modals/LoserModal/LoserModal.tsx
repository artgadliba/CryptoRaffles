import { FC } from "react";
import { LoserModalBlock, LoserModalButton, LoserModalClose, LoserModalCloseImage, LoserModalContent, LoserModalHoliday, LoserModalLine, LoserModalLines, LoserModalSumm, LoserModalText } from "./LoserModalStyles";

interface ILoserModal {
  onClose(): any;
}

const LoserModal: FC<ILoserModal> = ({ onClose }) => {
  return (
    <LoserModalBlock onClick={onClose}>
      <LoserModalContent onClick={(e) => e.stopPropagation()}>
        <LoserModalClose onClick={onClose}>
          <LoserModalCloseImage alt="close" src="/images/modal-close.svg" />
        </LoserModalClose>
        <LoserModalSumm>$5</LoserModalSumm>
        <LoserModalLine />
        <LoserModalText>Поздравляем вы выиграли утешительный приз</LoserModalText>
        <LoserModalButton>Забрать приз</LoserModalButton>
        <LoserModalLines alt="lines" src="/images/modal-lines.svg" />
        <LoserModalHoliday alt="holiday" src="/images/modal-holiday.svg" />
      </LoserModalContent>
    </LoserModalBlock>
  );
}

export default LoserModal;
