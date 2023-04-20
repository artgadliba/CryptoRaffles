import { FC, PropsWithChildren } from "react";
import { ContainerBlock } from "./ContainerStyles";

interface IContainer {
  maxWidth?: number;
}

const Container: FC<PropsWithChildren<IContainer>> = ({ children, maxWidth }) => {
  return <ContainerBlock maxWidth={maxWidth}>{children}</ContainerBlock>;
}

export default Container;
