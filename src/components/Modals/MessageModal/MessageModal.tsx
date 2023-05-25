import { FC } from "react";
import {
  MessageModalBlock,
  MessageModalButton,
  MessageModalClose,
  MessageModalCloseImage,
  MessageModalContent,
  MessageModalHoliday,
  MessageModalLines,
  MessageModalSumm,
  MessageModalText
} from "./MessageModalStyles";
import Parser from "html-react-parser";

interface IMessageModal {
  onClose(): any;
  approveTokenMint?: () => any;
  publicMintERC?: () => any;
  tokensCounter?: number;
  modalText: string;
  mintState?: string;
  hash?: string;
  success: boolean;
}

const MessageModal: FC<IMessageModal> = ({ onClose, approveTokenMint, publicMintERC, tokensCounter, modalText, mintState, hash, success }) => {

  return (
    <MessageModalBlock onClick={onClose}>
      <MessageModalContent onClick={(e) => e.stopPropagation()}>
        <MessageModalClose onClick={onClose}>
          <MessageModalCloseImage alt="close" src="/images/modal-close.svg" />
        </MessageModalClose>
          <MessageModalText>{Parser(modalText)}</MessageModalText>
        <MessageModalLines alt="lines" src="/images/modal-lines.svg" />
          <>
          {success ? (
            <MessageModalHoliday alt="holiday" src="/images/modal-holiday.svg" />
          ) : (
            <></>
          )}
          </>
          {mintState === "approveModalState" ? (
            <MessageModalButton onClick={approveTokenMint}>Разрешить</MessageModalButton>
          ) : (
            <>
            {mintState === "approveAwaitModalState" ? (
              <MessageModalButton onClick={onClose}>Закрыть</MessageModalButton>
            ) : (
              <>
              {mintState === "mintReadyStateERC" ? (
                <MessageModalButton onClick={publicMintERC}>Купить токены</MessageModalButton>
              ) : (
                <MessageModalButton onClick={onClose}>Закрыть</MessageModalButton>
              )}
              </>
            )}
            </>
          )}
      </MessageModalContent>
    </MessageModalBlock>
  );
}

export default MessageModal;
