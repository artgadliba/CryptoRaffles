import styled from "styled-components";
import pxIntoRem from "../../../../utils/pxIntoRem";

const AccountPopUpBlock = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(${pxIntoRem(2)});
  background-color: rgba(0, 0, 0, 0.6);
`;

const AccountPopUpImage = styled.img`
  height: 60%;
  width: auto;
  max-width: 100%;
  object-fit: cover;
  @media (max-width: 745px) {
    max-height: 60%;
    height: auto;
    width: 90%;
  }
`;

export { AccountPopUpBlock, AccountPopUpImage };
