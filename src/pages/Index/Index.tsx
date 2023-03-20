import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Autoplay, Navigation } from "swiper";
import Container from "../../components/Container/Container";
import Landing from "../../layouts/Landing/Landing";
import IndexList from "./components/IndexList/IndexList";
import IndexSlider from "./components/IndexSlider/IndexSlider";
import IndexWinnersLine from "./components/IndexWinners/IndexWinnersLine";
import {
  IndexBlock,
  IndexBrands,
  IndexBrandsFirst,
  IndexBrandsFirstText,
  IndexBrandsSecond,
  IndexBrandsSecondLogo,
  IndexBrandsSecondText,
  IndexBrandsThird,
  IndexBrandsThirdLogo,
  IndexBrandsThirdText,
  IndexGreeting,
  IndexGreetingBackground,
  IndexGreetingBody,
  IndexGreetingBottomText,
  IndexGreetingConnect,
  IndexGreetingContent,
  IndexGreetingMoneyBox,
  IndexGreetingText,
  IndexGreetingTitle,
  IndexHow,
  IndexHowBackground,
  IndexHowBlurredCircle,
  IndexHowBody,
  IndexHowLogo,
  IndexHowNeeds,
  IndexHowNeedsItem,
  IndexHowNeedsItemContent,
  IndexHowNeedsItemHeader,
  IndexHowNeedsItemImageBlock,
  IndexHowNeedsItemImageFirst,
  IndexHowNeedsItemImageForth,
  IndexHowNeedsItemImageSecond,
  IndexHowNeedsItemImageThird,
  IndexHowNeedsItemImageThirdWatch,
  IndexHowNeedsItemLink,
  IndexHowNeedsItemNumber,
  IndexHowNeedsItemText,
  IndexHowNeedsItemTitle,
  IndexHowNeedsRow,
  IndexHowNeedsTitle,
  IndexHowText,
  IndexHowTitle,
  IndexQuestions,
  IndexQuestionsBody,
  IndexQuestionsMoneyBox,
  IndexQuestionsTitle,
  IndexWinners,
  IndexWinnersBody,
  IndexWinnersTitle,
} from "./IndexStyles";

function Index() {
  return (
    <Landing>
      <IndexBlock>
        <IndexGreeting>
          <Container>
            <IndexGreetingBody>
              <IndexGreetingMoneyBox alt="money-box" src="/images/big-money-box.png" />
              <IndexGreetingMoneyBox alt="money-box" src="/images/money-box.png" />
              <IndexGreetingMoneyBox alt="money-box" src="/images/big-money-box.png" />
              <IndexGreetingMoneyBox alt="money-box" src="/images/money-box.png" />
              <IndexGreetingBackground alt="background" src="/images/rected-background.png" />
              <IndexGreetingContent>
                <IndexGreetingTitle>
                  Самые прозрачные <br /> <span>розыгрыши</span>
                </IndexGreetingTitle>
                <IndexGreetingText>CryptoRaffles - децентрализованная платформа для организации розыгрышей призов, построенная на блокчейне сети Ethereum.</IndexGreetingText>
                <IndexGreetingBottomText>Каждый участник имеет реальную возможность выиграть, благодаря прозрачному и честному механизму работы. Каждый этап можно легко отследить и подтвердить соответствие правилам.</IndexGreetingBottomText>
                <IndexGreetingConnect>Подключиться</IndexGreetingConnect>
              </IndexGreetingContent>
              <IndexSlider
                items={[
                  {
                    id: "Raffle # 54c1ae03",
                    wallet: "@ Nike",
                    price: "$9,445",
                    timerDate: Date.now(),
                  },
                  {
                    id: "Raffle # 54c1ae03",
                    wallet: "@ Nike",
                    price: "$9,445",
                    timerDate: Date.now(),
                  },
                  {
                    id: "Raffle # 54c1ae03",
                    wallet: "@ Nike",
                    price: "$9,445",
                    timerDate: Date.now(),
                  },
                ]}
              />
            </IndexGreetingBody>
          </Container>
        </IndexGreeting>
        <IndexBrands>
          <IndexBrandsFirst>
            <IndexBrandsFirstText>BASED ON</IndexBrandsFirstText>
          </IndexBrandsFirst>
          <IndexBrandsSecond>
            <IndexBrandsSecondLogo alt="ethereum" src="/images/ethereum.png" />
            <IndexBrandsSecondText>Ethereum </IndexBrandsSecondText>
          </IndexBrandsSecond>
          <IndexBrandsThird>
            <IndexBrandsThirdLogo alt="chainlink" src="/images/chainlink.png" />
            <IndexBrandsThirdText>Chainlink</IndexBrandsThirdText>
          </IndexBrandsThird>
        </IndexBrands>
        <IndexWinners>
          <Container>
            <IndexWinnersBody>
              <IndexWinnersTitle>Счастливые победители:</IndexWinnersTitle>
            </IndexWinnersBody>
          </Container>
          <IndexWinnersLine
            items={[
              {
                tokens: "2",
                wallet: "@ Nike",
                price: "$9,445",
                timerDate: Date.now(),
              },
              {
                tokens: "2",
                wallet: "@ Nike",
                price: "$9,445",
                timerDate: Date.now(),
              },
              {
                tokens: "2",
                wallet: "@ Nike",
                price: "$9,445",
                timerDate: Date.now(),
              },
            ]}
          />
        </IndexWinners>
        <IndexHow id="how">
          <IndexHowBlurredCircle />
          <Container>
            <IndexHowBody>
              <IndexHowBackground alt="background" src="/images/rected-background.png" />
              <IndexHowTitle>Как это работает:</IndexHowTitle>
              <IndexHowText>
                <span>CryptoRaffles построен на базе смарт-контрактов, которые содержат в себе точные неизменяемые правила. </span>Что гарантирует полную честность в проведении розыгрышей. Ни автор розыгрыша, ни его оператор не имеют возможности как либо манипулировать
                результатами.
              </IndexHowText>
              <IndexHowText> Денежные призы загружаются на контракт до начала розыгрыша, откуда могут быть сняты только победителями при соответствующих правилам условиях.</IndexHowText>
              <IndexHowLogo alt="logo" src="/images/how-logo.svg" />
              <IndexHowNeeds>
                <IndexHowNeedsTitle>Для участия в розыгрыше необходимо:</IndexHowNeedsTitle>
                <IndexHowNeedsRow>
                  <IndexHowNeedsItem>
                    <IndexHowNeedsItemHeader>
                      <IndexHowNeedsItemNumber>1</IndexHowNeedsItemNumber>
                      <IndexHowNeedsItemTitle>Подключиться</IndexHowNeedsItemTitle>
                    </IndexHowNeedsItemHeader>
                    <IndexHowNeedsItemImageBlock>
                      <IndexHowNeedsItemImageFirst alt="step" src="/images/first-step.png" />
                    </IndexHowNeedsItemImageBlock>
                    <IndexHowNeedsItemContent>
                      <IndexHowNeedsItemText>
                        Подключиться к веб приложению <br /> с помощью Ethereum кошелька
                      </IndexHowNeedsItemText>
                      <IndexHowNeedsItemLink>Подключиться</IndexHowNeedsItemLink>
                    </IndexHowNeedsItemContent>
                  </IndexHowNeedsItem>
                  <IndexHowNeedsItem>
                    <IndexHowNeedsItemHeader>
                      <IndexHowNeedsItemNumber>2</IndexHowNeedsItemNumber>
                      <IndexHowNeedsItemTitle>Стать участником</IndexHowNeedsItemTitle>
                    </IndexHowNeedsItemHeader>
                    <IndexHowNeedsItemImageBlock>
                      <IndexHowNeedsItemImageSecond alt="step" src="/images/second-step.png" />
                    </IndexHowNeedsItemImageBlock>
                    <IndexHowNeedsItemContent>
                      <IndexHowNeedsItemText>Принять участие в активном раффле, приобретая любое количество токенов или зарегистрироваться для участия в гиве, выполнив его условия.</IndexHowNeedsItemText>
                    </IndexHowNeedsItemContent>
                  </IndexHowNeedsItem>
                  <IndexHowNeedsItem>
                    <IndexHowNeedsItemHeader>
                      <IndexHowNeedsItemNumber>3</IndexHowNeedsItemNumber>
                      <IndexHowNeedsItemTitle>Дождаться окончания</IndexHowNeedsItemTitle>
                    </IndexHowNeedsItemHeader>
                    <IndexHowNeedsItemImageBlock>
                      <IndexHowNeedsItemImageThird alt="step" src="/images/third-step.png" />
                      <IndexHowNeedsItemImageThirdWatch alt="watch" src="/images/sand-watch.png" />
                    </IndexHowNeedsItemImageBlock>
                    <IndexHowNeedsItemContent>
                      <IndexHowNeedsItemText>
                        Дождаться окончания раффла/ гива <br /> и проверить ваш результат.
                      </IndexHowNeedsItemText>
                    </IndexHowNeedsItemContent>
                  </IndexHowNeedsItem>
                  <IndexHowNeedsItem>
                    <IndexHowNeedsItemHeader>
                      <IndexHowNeedsItemNumber>4</IndexHowNeedsItemNumber>
                      <IndexHowNeedsItemTitle>Забрать свой выигрыш</IndexHowNeedsItemTitle>
                    </IndexHowNeedsItemHeader>
                    <IndexHowNeedsItemImageBlock>
                      <IndexHowNeedsItemImageForth alt="step" src="/images/forth-step.png" />
                    </IndexHowNeedsItemImageBlock>
                    <IndexHowNeedsItemContent>
                      <IndexHowNeedsItemText>В случае выигрыша - произвести мгновенный вывод средств.</IndexHowNeedsItemText>
                    </IndexHowNeedsItemContent>
                  </IndexHowNeedsItem>
                </IndexHowNeedsRow>
              </IndexHowNeeds>
            </IndexHowBody>
          </Container>
        </IndexHow>
        <IndexQuestions id="faq">
          <Container>
            <IndexQuestionsBody>
              <IndexQuestionsTitle>Часто задаваемые вопросы</IndexQuestionsTitle>
              <IndexQuestionsMoneyBox alt="money-box" src="/images/money-box.png" />
              <IndexList
                items={[
                  {
                    title: "Чем CryptoRaffles отличаются от других розыгрышей?",
                    text: "Проект построен на базе блокчейна Ethereum, с использованием смарт-контрактов, которые в точности описывают правила взаимодействия для каждого участника. Что позволяет утверждать о полной честности и доказуемости результатов наших розыгрышей.",
                  },
                  {
                    title: "Как выбирается победитель и насколько честно это происходит?",
                    text: "Проект построен на базе блокчейна Ethereum, с использованием смарт-контрактов, которые в точности описывают правила взаимодействия для каждого участника. Что позволяет утверждать о полной честности и доказуемости результатов наших розыгрышей.",
                  },
                  {
                    title: "Как я могу принять участие в раффлах?",
                    text: "Проект построен на базе блокчейна Ethereum, с использованием смарт-контрактов, которые в точности описывают правила взаимодействия для каждого участника. Что позволяет утверждать о полной честности и доказуемости результатов наших розыгрышей.",
                  },
                  {
                    title: "В случае выигрыша в раффлах как я могу получить свой приз?",
                    text: "Проект построен на базе блокчейна Ethereum, с использованием смарт-контрактов, которые в точности описывают правила взаимодействия для каждого участника. Что позволяет утверждать о полной честности и доказуемости результатов наших розыгрышей.",
                  },
                  {
                    title: "Что произойдет с моими деньгами, если по какой-то причине раффл не будет проведен?",
                    text: "Проект построен на базе блокчейна Ethereum, с использованием смарт-контрактов, которые в точности описывают правила взаимодействия для каждого участника. Что позволяет утверждать о полной честности и доказуемости результатов наших розыгрышей.",
                  },
                  {
                    title: "Как я могу принять участие в гивах?",
                    text: "Проект построен на базе блокчейна Ethereum, с использованием смарт-контрактов, которые в точности описывают правила взаимодействия для каждого участника. Что позволяет утверждать о полной честности и доказуемости результатов наших розыгрышей.",
                  },
                  {
                    title: "В случае выигрыша в гиве как я могу получить свои средства?",
                    text: "Проект построен на базе блокчейна Ethereum, с использованием смарт-контрактов, которые в точности описывают правила взаимодействия для каждого участника. Что позволяет утверждать о полной честности и доказуемости результатов наших розыгрышей.",
                  },
                  {
                    title: "Что такое gas costs и почему я должен платить комиссии за транзакции?",
                    text: "Проект построен на базе блокчейна Ethereum, с использованием смарт-контрактов, которые в точности описывают правила взаимодействия для каждого участника. Что позволяет утверждать о полной честности и доказуемости результатов наших розыгрышей.",
                  },
                  {
                    title: "Что делать если у меня возникли трудности и я не могу самостоятельно разобраться?",
                    text: "Проект построен на базе блокчейна Ethereum, с использованием смарт-контрактов, которые в точности описывают правила взаимодействия для каждого участника. Что позволяет утверждать о полной честности и доказуемости результатов наших розыгрышей.",
                  },
                ]}
              ></IndexList>
            </IndexQuestionsBody>
          </Container>
        </IndexQuestions>
      </IndexBlock>
    </Landing>
  );
}

export default Index;
