import styled, { keyframes } from "styled-components";
import pxIntoRem from "../../utils/pxIntoRem";

const createMoneyBoxAnimation = (to: number) => keyframes`
  0% {
    transform: translateY(0px);
    opacity: 0;
  }

  0.01% {
    opacity: 1;
  }

  100% {
    transform: translateY(-${to + 200}px);
  }
`;

interface IMoneyBoxBlock {
  screenHeight: number;
}

const MoneyBoxBlock = styled.img<IMoneyBoxBlock>`
  position: absolute;
  width: ${pxIntoRem(84)};
  animation: ${({ screenHeight }) => createMoneyBoxAnimation(screenHeight)} 35s linear infinite;
  bottom: 0;
  ${[...new Array(16)]
    .map((_, idx) => {
      return `
      &:nth-child(${idx}) {
        left: ${pxIntoRem(100 * (idx - 2))};
        animation-delay: -${idx % 2 === 0 ? 2.6 * idx : 2.5 * idx + idx * 2}s;
      }`;
    })
    .join("\n")}
`;

interface IMoneyBoxesBlock {
  screenHeight: number;
}

const MoneyBoxesBlock = styled.div<IMoneyBoxesBlock>`
  position: absolute;
  top: ${({ screenHeight }) => screenHeight + "px"};
  // bottom: 0;
  pointer-events: none;
  width: 100%;
  @media (max-width: 500px) {
    display: none;
  }
`;

const MoneyBoxesBody = styled.div`
  width: 100%;
  height: 100%;
`;

export { MoneyBoxBlock, MoneyBoxesBlock, MoneyBoxesBody };
