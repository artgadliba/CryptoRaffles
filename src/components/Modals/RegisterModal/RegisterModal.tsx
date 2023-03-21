import { FC } from "react";
import {
  RegisterModalBlock,
  RegisterModalButton,
  RegisterModalClose,
  RegisterModalCloseImage,
  RegisterModalContent,
  RegisterModalHashInput,
  RegisterModalHashInputBlock,
  RegisterModalHashInputEtherium,
  RegisterModalReferenceInput,
  RegisterModalTitle,
} from "./RegisterModalStyles";

interface IRegisterModal {
  onClose(): any;
}

const RegisterModal: FC<IRegisterModal> = ({ onClose }) => {
  return (
    <RegisterModalBlock onClick={onClose}>
      <RegisterModalContent onClick={(e) => e.stopPropagation()}>
        <RegisterModalClose onClick={onClose}>
          <RegisterModalCloseImage alt="close" src="/images/modal-close.svg" />
        </RegisterModalClose>
        <RegisterModalTitle>Регистрация</RegisterModalTitle>
        <RegisterModalHashInputBlock>
          <RegisterModalHashInput placeholder="010lfdx6c07010lfdx6c07010lfdx6c07" />
          <RegisterModalHashInputEtherium alt="Ethereum" src="/images/ethereum-small-logo.svg" />
        </RegisterModalHashInputBlock>
        <RegisterModalReferenceInput placeholder="Ссылка на аккаунт в соц. сети (youtube, instagram..." />
        <RegisterModalButton>Отправить</RegisterModalButton>
      </RegisterModalContent>
    </RegisterModalBlock>
  );
};

export default RegisterModal;
