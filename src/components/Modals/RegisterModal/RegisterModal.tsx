import { FC, useState } from "react";
import {
  RegisterModalBlock,
  RegisterModalButton,
  RegisterModalClose,
  RegisterModalCloseImage,
  RegisterModalContent,
  RegisterModalHash,
  RegisterModalHashInputBlock,
  RegisterModalHashInputEtherium,
  RegisterModalReferenceInput,
  RegisterModalTitle,
} from "./RegisterModalStyles";
import { useAccount } from "wagmi";
import MessageModal from "../MessageModal/MessageModal";
import useModal from "../../../hooks/useModal";
import truncateEthAddress from "truncate-eth-address";
import axios from "axios";

interface IRegisterModal {
  onClose(): any;
  handleRegistration(e: React.MouseEvent<HTMLButtonElement>, inputData: string): any;
  giveaway_id?: string;
}

const RegisterModal: FC<IRegisterModal> = ({ onClose, handleRegistration }) => {
  const { address, isConnecting, isDisconnected } = useAccount();
  const [inputData, setInputData] = useState<string>();

  const handleInput = (event) => {
    setInputData(event.target.value);
  }

  return (
    <RegisterModalBlock onClick={onClose}>
      <RegisterModalContent onClick={(e) => e.stopPropagation()}>
        <RegisterModalClose onClick={onClose}>
          <RegisterModalCloseImage alt="close" src="/images/modal-close.svg" />
        </RegisterModalClose>
        <RegisterModalTitle>Регистрация</RegisterModalTitle>
        <RegisterModalHashInputBlock>
          <RegisterModalHash>{truncateEthAddress(address)}</RegisterModalHash>
          <RegisterModalHashInputEtherium alt="Ethereum" src="/images/ethereum-small-logo.svg" />
        </RegisterModalHashInputBlock>
        <RegisterModalReferenceInput placeholder="Ссылка на аккаунт в соц. сети (см. условия)" onChange={handleInput} />
        <RegisterModalButton onClick={(e) => handleRegistration(e, inputData)}>Отправить</RegisterModalButton>
      </RegisterModalContent>
    </RegisterModalBlock>
  );
}

export default RegisterModal;
