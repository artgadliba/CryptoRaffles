import { FC, useEffect } from "react";
import { AccountPopUpBlock, AccountPopUpImage } from "./AccountPopUpStyles";

interface IAccountPopUp {
  onClose(): any;
  image: string;
}

const AccountPopUp: FC<IAccountPopUp> = ({ image, onClose }) => {
  useEffect(() => {
    function onEscapePress(e: KeyboardEvent) {
      if (e.key == "Escape") {
        console.log(e.key);

        onClose();
      }
    }

    document.addEventListener("keyup", onEscapePress);
    return () => {
      document.removeEventListener("keyup", onEscapePress);
    };
  }, []);

  return (
    <AccountPopUpBlock onClick={onClose}>
      <AccountPopUpImage onClick={(e) => e.stopPropagation()} alt={"image"} src={image} />
    </AccountPopUpBlock>
  );
}

export default AccountPopUp;
