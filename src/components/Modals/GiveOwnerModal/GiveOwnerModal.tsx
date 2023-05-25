import { FC, useState } from "react";
import {
  GiveOwnerModalBlock,
  GiveOwnerModalButton,
  GiveOwnerModalClose,
  GiveOwnerModalCloseImage,
  GiveOwnerModalContent,
  GiveOwnerModalHoliday,
  GiveOwnerModalLines,
  GiveOwnerModalSumm,
  GiveOwnerModalText,
  GiveOwnerModalReferenceInput,
} from "./GiveOwnerModalStyles";

interface IGiveOwnerModal {
  approveTokenOwner?: (e: React.MouseEvent<HTMLButtonElement>, inputData: string) => any;
  raffle?: boolean;
  ownerChargeTreasuryETH?: (e: React.MouseEvent<HTMLButtonElement>, inputData: string) => any;
  ownerChargeTreasuryERC?: (e: React.MouseEvent<HTMLButtonElement>, inputData: string) => any;
  onClose(): any;
}

const GiveOwnerModal: FC<IGiveOwnerModal> = ({ onClose, raffle, approveTokenOwner, ownerChargeTreasuryETH, ownerChargeTreasuryERC }) => {
  const [inputData, setInputData] = useState<string>();

  const handleInput = (event) => {
    let input = event.target.value;
    input = input.replace(/,/g, '.');
    setInputData(input);
  }

  if (ownerChargeTreasuryERC != undefined) {
    return (
      <GiveOwnerModalBlock onClick={onClose}>
        <GiveOwnerModalContent onClick={(e) => e.stopPropagation()}>
          <GiveOwnerModalClose onClick={onClose}>
            <GiveOwnerModalCloseImage alt="close" src="/images/modal-close.svg" />
          </GiveOwnerModalClose>
          <GiveOwnerModalText>
            Для отправки токенов стандарта ERC20, необходимо предоставить разрешение для контракта на управление токенами на сумму призового фонда.
          </GiveOwnerModalText>
          <GiveOwnerModalReferenceInput placeholder="1. Введите сумму призового фонда для подтверждения" onChange={handleInput} />
          <GiveOwnerModalButton onClick={(e) => approveTokenOwner(e, inputData)}>Разрешить</GiveOwnerModalButton>
          {raffle == true ? (
            <GiveOwnerModalText>
              Для запуска раффла, необходимо отправить любую сумму для формирования призового фонда. Средства будут заблокированы на контракте до момента проведения розыгрыша.
            </GiveOwnerModalText>
          ) : (
            <GiveOwnerModalText>
              Для запуска гива, необходимо отправить любую сумму для формирования призового фонда. Средства будут заблокированы на контракте до момента проведения розыгрыша.
            </GiveOwnerModalText>
          )}
          <GiveOwnerModalReferenceInput placeholder="2. Введите сумму в выбранном ERC20 токене." onChange={handleInput} />
          <GiveOwnerModalButton onClick={(e) => ownerChargeTreasuryERC(e, inputData)}>Пополнить</GiveOwnerModalButton>
        </GiveOwnerModalContent>
      </GiveOwnerModalBlock>
    );
  } else {
    return (
      <GiveOwnerModalBlock onClick={onClose}>
        <GiveOwnerModalContent onClick={(e) => e.stopPropagation()}>
          <GiveOwnerModalClose onClick={onClose}>
            <GiveOwnerModalCloseImage alt="close" src="/images/modal-close.svg" />
          </GiveOwnerModalClose>
          {raffle == true ? (
            <GiveOwnerModalText>
              Для запуска раффла, необходимо отправить любую сумму для формирования призового фонда. Средства будут заблокированы на контракте до момента проведения розыгрыша.
            </GiveOwnerModalText>
          ) : (
            <GiveOwnerModalText>
              Для запуска гива, необходимо отправить любую сумму для формирования призового фонда. Средства будут заблокированы на контракте до момента проведения розыгрыша.
            </GiveOwnerModalText>
          )}
          <GiveOwnerModalReferenceInput placeholder="2. Введите сумму в ETH." onChange={handleInput} />
          <GiveOwnerModalButton onClick={(e) => ownerChargeTreasuryETH(e, inputData)}>Пополнить</GiveOwnerModalButton>
        </GiveOwnerModalContent>
      </GiveOwnerModalBlock>
    );
  }
}

export default GiveOwnerModal;
