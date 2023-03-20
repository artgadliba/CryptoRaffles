import { FC, useEffect, useState } from "react";
import Container from "../Container/Container";
import { MoneyBoxBlock, MoneyBoxesBlock, MoneyBoxesBody } from "./MoneyBoxesStyles";

interface IMoneyBox {
  big?: boolean;
}

const MoneyBox: FC<IMoneyBox> = ({ big }) => {
  const [screenHeight, setScreenHeight] = useState(document.body.clientHeight);

  useEffect(() => {
    setScreenHeight(document.body.clientHeight);
  }, []);

  return <MoneyBoxBlock alt="money-box" src={big ? "/images/big-money-box.png" : "/images/money-box.png"} screenHeight={screenHeight} />;
};

const MoneyBoxes = () => {
  const [screenHeight, setScreenHeight] = useState(document.body.clientHeight);

  useEffect(() => {
    setScreenHeight(document.body.clientHeight);
  }, []);

  return (
    <MoneyBoxesBlock screenHeight={screenHeight}>
      <Container>
        <MoneyBoxesBody>
          <MoneyBox big />
          <MoneyBox />
          <MoneyBox big />
          <MoneyBox />
          <MoneyBox big />
          <MoneyBox />
          <MoneyBox big />
          <MoneyBox />
          <MoneyBox big />
          <MoneyBox />
          <MoneyBox big />
          <MoneyBox />
          <MoneyBox big />
          <MoneyBox />
          <MoneyBox big />
          <MoneyBox />
        </MoneyBoxesBody>
      </Container>
    </MoneyBoxesBlock>
  );
};
export default MoneyBoxes;
